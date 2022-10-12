# kit-client

# Quickstart

TODO Add quickstart

# Capabilities/variations on theme

| Case                       | adapter | Status | Description                                                  | Vite config?                 |
| -------------------------- | ------- | ------ | ------------------------------------------------------------ | ---------------------------- |
| import with `{:await ...}` | node    | 🔴      | Odd build error about empty character                        | ...                          |
|                            | auto\*  | 🟢      | Similar story to onMount (await `pkg.__tla` as well in prod) | No.                          |
|                            | static  | ❔      | [todo]                                                       | ...                          |
| onMount                    | node    | 🟢      | Key is to await the `pkg.__tla` (like init?) in prod         | No! No `optimizeDeps` needed |
|                            | auto\*  | ❔      | [todo]                                                       | ...                          |
|                            | static  | ❔      | [todo]                                                       | ...                          |
| SSR: pass as prop          | node    | ❔      | [todo]                                                       | ...                          |
|                            | auto    | ❔      | [todo]                                                       | ...                          |
|                            | static  | N/A    | [todo]                                                       | ...                          |
| Web worker                 | node    | ❔      | [todo]                                                       | ...                          |
|                            | auto    | ❔      | [todo]                                                       | ...                          |
|                            | static  | ❔      | [todo]                                                       | ...                          |

\* adapter-auto appears to work but no platform configured atm.

## Other items/factors

### Page options? (e.g. `prerender`) Not right now.

- as of right now:
- No need for special [page options](https://kit.svelte.dev/docs/page-options) like `prerender`, `ssr`, etc.
- Static may be another story.



## Issues

### await w/ adapter-node

Appears to be tripping on non-JS? Does it look ahead to the vite config or is it prior to that??

```bash
❯ npm run build

> kit-client@0.0.1 build
> vite build

vite v3.1.7 building for production...
✓ 46 modules transformed.
vite v3.1.7 building SSR bundle for production...
✓ 47 modules transformed.
Generated an empty chunk: "hooks"
.svelte-kit/output/server/vite-manifest.json                      1.42 KiB
.svelte-kit/output/server/index.js                                92.01 KiB
.svelte-kit/output/server/entries/pages/_layout.svelte.js         0.79 KiB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js       1.71 KiB
.svelte-kit/output/server/entries/pages/_page.svelte.js           0.37 KiB
.svelte-kit/output/server/entries/pages/await/_page.svelte.js     1.10 KiB
.svelte-kit/output/server/entries/pages/onmount/_page.svelte.js   0.47 KiB
.svelte-kit/output/server/chunks/index.js                         4.23 KiB
.svelte-kit/output/server/chunks/hooks.js                         0.00 KiB

Run npm run preview to preview your production build locally.
.svelte-kit/output/client/_app/immutable/assets/my_crate_bg-80674e34.wasm                    16.86 KiB
.svelte-kit/output/client/vite-manifest.json                                                 3.96 KiB
.svelte-kit/output/client/_app/immutable/components/pages/_layout.svelte-0f1940e0.js         6.91 KiB / gzip: 1.81 KiB
.svelte-kit/output/client/_app/immutable/components/error.svelte-4ad74c63.js                 5.79 KiB / gzip: 1.58 KiB
.svelte-kit/output/client/_app/immutable/components/pages/_page.svelte-c6526ed5.js           1.95 KiB / gzip: 0.73 KiB
.svelte-kit/output/client/_app/immutable/components/pages/await/_page.svelte-d9f47356.js     8.44 KiB / gzip: 1.93 KiB
.svelte-kit/output/client/_app/immutable/components/pages/onmount/_page.svelte-56147d95.js   4.54 KiB / gzip: 1.45 KiB
.svelte-kit/output/client/_app/immutable/chunks/singletons-30b5fc3b.js                       5.00 KiB / gzip: 1.81 KiB
.svelte-kit/output/client/_app/immutable/chunks/preload-helper-aa6bc0ce.js                   1.67 KiB / gzip: 0.66 KiB
.svelte-kit/output/client/_app/immutable/chunks/0-0d41a818.js                                0.08 KiB / gzip: 0.10 KiB
.svelte-kit/output/client/_app/immutable/chunks/1-e78e48dc.js                                0.08 KiB / gzip: 0.09 KiB
.svelte-kit/output/client/_app/immutable/chunks/2-abb0cee7.js                                0.08 KiB / gzip: 0.09 KiB
.svelte-kit/output/client/_app/immutable/chunks/3-1f1949d7.js                                0.09 KiB / gzip: 0.10 KiB
.svelte-kit/output/client/_app/immutable/chunks/4-34038e80.js                                0.09 KiB / gzip: 0.10 KiB
.svelte-kit/output/client/_app/immutable/chunks/my_crate-fb21db29.js                         4.09 KiB / gzip: 1.38 KiB
.svelte-kit/output/client/_app/immutable/chunks/index-be8425b5.js                            25.12 KiB / gzip: 6.77 KiB
.svelte-kit/output/client/_app/immutable/start-e621799f.js                                   67.81 KiB / gzip: 18.79 KiB

> Using @sveltejs/adapter-node
error during build:
Error: Unexpected character '' (Note that you need plugins to import files that are not JavaScript)
    at error (file:///[path]/vite-plugin-wasm/ex/kit-client/node_modules/rollup/dist/es/shared/rollup.js:1858:30)
    at Module.error (file:///[path]/vite-plugin-wasm/ex/kit-client/node_modules/rollup/dist/es/shared/rollup.js:12429:16)
    at Module.tryParse (file:///[path]/vite-plugin-wasm/ex/kit-client/node_modules/rollup/dist/es/shared/rollup.js:12806:25)
    at Module.setSource (file:///[path]/vite-plugin-wasm/ex/kit-client/node_modules/rollup/dist/es/shared/rollup.js:12711:24)
    at ModuleLoader.addModuleSource (file:///[path]/vite-plugin-wasm/ex/kit-client/node_modules/rollup/dist/es/shared/rollup.js:22153:20)
```

---

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).
