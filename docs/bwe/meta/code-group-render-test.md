---
title: Code Group Render Test
description: A test for the rendering of code groups.
hidden: true
---

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
    // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
    // ...
};

export default config;
```

:::

```ts
import type { UserConfig } from "vitepress";

const config: UserConfig = {
    // ...
};

export default config;
```

`console.log(5);`{lang=js}
