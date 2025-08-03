import { plugin } from "bun";
import { Elysia } from "elysia";
import type { ElysiaWS } from 'elysia/ws';
import { dev } from './core/env';
import { watchWeb } from './core/fast-refresh';
import { svelte, tailwindcss } from "./core/web/bun-plugins";
import { web } from "./core/web/serve";

await plugin(svelte);
await plugin(tailwindcss);

const client: ElysiaWS[] = [];

function refreshWeb() {
  client.forEach(it => it.send('refresh'));
}

if (dev) {
  watchWeb(() => {
    refreshWeb();
  });
}

import { render } from './core/web/renderer';

const app = new Elysia()
  .use(web)
  .get("/", async ({ set }) => {
    const { default: Index } = await import("../web/pages/index.svelte");
    // return Index.toString();
    set.headers['content-type'] = 'text/html;charset=utf-8';
    return render(Index);
  })
  .listen(3000);

if (dev) {
  app.ws("_next/fast-refresh", {
    open(ws) {
      client.push(ws);
    }
  });
}

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
