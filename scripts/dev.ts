import { $ } from "bun";
import { svelte, tailwindcss } from "../src/core/web/bun-plugins";
import { rmSync, watch } from "node:fs";
import { urlPrefix } from "../src/core/web/config";


function buildWeb(filename: string) {
  try {
    rmSync('./build/web/*', {
      recursive: true
    });
    console.log(`[web] recompiling ${filename}`);
    Bun.build({
      entrypoints: ['./web/index.html'],
      outdir: './build/web',
      publicPath: `${urlPrefix}/`,
      plugins: [svelte, tailwindcss]
    });
  } catch {

  }
}

buildWeb("the entire thing");

const a = watch("./web", { persistent: true }, (event, filename) => {
  buildWeb(filename ?? `event: ${event}`);
});

await Promise.all([
  // $`tailwindcss -i ./web/app.css -o ./build/web/app.css --watch`.quiet(),
  // $`bun build ./web/index.html --outdir ./build/web --watch`,
  $`bun run --watch src/index.ts`
]);
