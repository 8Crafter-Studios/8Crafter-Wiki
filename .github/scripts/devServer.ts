import { exec } from "node:child_process";
import http from "node:http";
import { request } from "node:http";
import { networkInterfaces, type NetworkInterfaceInfoIPv4 } from "node:os";

const devPort = 5250;

const routeMap = {
    "/main": 5251,
    "/andexdb": 5252,
    "/ouic": 5253,
    "/bwe": 5254,
    "/": 5251, // Default to main.
} as const;

function sleep(ms: number): Promise<void> {
    return new Promise((resolve): void => void setTimeout(resolve, ms));
}

// Add delays in between each process to stop the vitepress startup messages from getting mixed together.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const childProcesses = {
    main: exec(`npx vitepress dev docs/main --host --port ${routeMap["/main"]}`),
    andexdb:
        (await sleep(25),
        exec(`npx vitepress dev docs/andexdb --host --port ${routeMap["/andexdb"]}`)),
    ouic: (await sleep(25), exec(`npx vitepress dev docs/ouic --host --port ${routeMap["/ouic"]}`)),
    bwe: (await sleep(25), exec(`npx vitepress dev docs/bwe --host --port ${routeMap["/bwe"]}`)),
};

const childProcessColors = {
    main: "\x1b[38;2;0;0;255m",
    andexdb: "\x1b[38;2;0;255;255m",
    ouic: "\x1b[38;2;0;255;136m",
    bwe: "\x1b[38;2;0;255;0m",
};

const innerLabelBracketPadding: number = Object.keys(childProcesses).reduce(
    (a: number, b: string): number => Math.max(a, b.length),
    0
);

(["main", "andexdb", "ouic", "bwe"] as (keyof typeof childProcesses)[]).forEach(
    (key: keyof typeof childProcesses): void => {
        childProcesses[key].stdout?.on("data", (data: Uint8Array | string): void => {
            if (typeof data === "string") {
                process.stdout.write(
                    data
                        .split("\n")
                        .map((line: string, i: number, a: string[]): string =>
                            (
                                (line.length === 0 && i < a.length - 1) ||
                                line.toWellFormed().replaceAll("\uFFFD", "").length > 0
                            ) ?
                                `\x1b[0m|${childProcessColors[key]}${key.padStart(innerLabelBracketPadding)}\x1b[0m| ${line}`
                            :   line
                        )
                        .join("\n")
                );
            }
        });
        childProcesses[key].stderr?.on("data", (data: Uint8Array | string): void => {
            if (typeof data === "string") {
                process.stderr.write(
                    data
                        .split("\n")
                        .map((line: string, i: number, a: string[]): string =>
                            (
                                (line.length === 0 && i < a.length - 1) ||
                                line.toWellFormed().replaceAll("\uFFFD", "").length > 0
                            ) ?
                                `\x1b[0m|${childProcessColors[key]}${key.padStart(innerLabelBracketPadding)}\x1b[0m|\x1b[38;2;255;0;0mERR\x1b[0m| ${line}`
                            :   line
                        )
                        .join("\n")
                );
            }
        });
    }
);
// childProcesses.main.stdout?.pipe(process.stdout);
// childProcesses.andexdb.stdout?.pipe(process.stdout);
// childProcesses.ouic.stdout?.pipe(process.stdout);
// childProcesses.bwe.stdout?.pipe(process.stdout);

function forwardRequest(
    clientReq: http.IncomingMessage,
    clientRes: http.ServerResponse<http.IncomingMessage> & { req: http.IncomingMessage },
    targetPort: number
): void {
    const options = {
        hostname: clientReq.headers.host?.split(":")[0],
        port: targetPort,
        path: clientReq.url,
        method: clientReq.method,
        headers: clientReq.headers,
    };

    const proxyReq = request(options, (proxyRes): void => {
        // Forward status and headers
        clientRes.writeHead(proxyRes.statusCode!, proxyRes.headers);
        // Pipe response data
        proxyRes.pipe(clientRes, { end: true });
    });

    proxyReq.on("error", (err: Error): void => {
        console.error(`Error forwarding to port ${targetPort}:`, err.message);
        console.log(err, err.cause);
        clientRes.statusCode = 502;
        clientRes.end("Bad Gateway");
    });

    // Pipe request body
    clientReq.pipe(proxyReq, { end: true });
}

// Main proxy server
const server = http.createServer((req, res) => {
    // Find matching route
    const matchedRoute: keyof typeof routeMap | undefined = Object.keys(routeMap).find(
        (route: string): route is keyof typeof routeMap => req.url!.startsWith(route)
    );

    if (matchedRoute) {
        forwardRequest(req, res, routeMap[matchedRoute]!);
    } else {
        res.statusCode = 404;
        res.end("No route found for this path");
    }
});

server.listen(devPort, (): void => {
    const networks = networkInterfaces();
    const networkURIs: string[] = Object.values(networks)
        .flat()
        .filter(
            (v): v is NetworkInterfaceInfoIPv4 => v?.family === "IPv4" && v.address !== "127.0.0.1"
        )
        .map((v) => `http://${v.address}:${devPort}/`);
    console.info(
        `\x1b[0m\x1b[92mLocal:   \x1b[96mhttp://localhost:${devPort}/\n${networkURIs.map((v) => `\x1b[92mNetwork: \x1b[96m${v}`).join("\n")}\x1b[0m`
    );
});
