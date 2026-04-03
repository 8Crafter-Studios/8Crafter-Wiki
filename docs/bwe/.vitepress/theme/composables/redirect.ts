import { onBeforeMount } from "vue";
import { useRouter } from "vitepress";
import useData from "./data";

export default function useRedirect(): void {
    const { theme } = useData();

    const router = useRouter();

    function redirect(from?: string | undefined): void | false {
        from ??= router.route.path;
        from = from.replace(/\.(html|md)$/i, "");

        const to: string = theme.value.redirects[from];
        if (to === undefined) {
            return;
        }

        history.replaceState({}, "", to);
        router.go(to);
        return false;
    }

    onBeforeMount(redirect);
    router.onBeforeRouteChange = redirect;
}
