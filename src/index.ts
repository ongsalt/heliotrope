import { html } from '@elysiajs/html';
import { plugin } from "bun";
import { Elysia } from "elysia";
import { web } from "./core/web/serve";
import { svelte } from "./core/web/svelte";
import { render } from './core/web/renderer';

await plugin(svelte);

const app = new Elysia()
  .use(web)
  .get("/", async ({ set }) => {
    const { default: Index } = await import("../web/pages/index.svelte");
    // return Index.toString();
    set.headers['content-type'] = 'text/html;charset=utf-8'
    return render(Index);
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
