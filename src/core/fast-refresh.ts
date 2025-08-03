import { watch } from "node:fs";
import { join } from "node:path";
import { svelte, tailwindcss } from "../core/web/bun-plugins";
import { urlPrefix } from "../core/web/config";

const root = join(import.meta.dir, "../../");
const webBuildPath = join(root, './build/web');

function buildWeb(filename: string) {
  try {
    // rmSync(join(`${webBuildPath}`, "*"), {
    //   recursive: true
    // });
    console.log(`[web] recompiling ${filename}`);
    Bun.build({
      entrypoints: [join(root, './web/index.html')],
      outdir: webBuildPath,
      publicPath: `${urlPrefix}/`,
      plugins: [svelte, tailwindcss]
    });
  } catch (e) {
    console.error(e);
  }
}

export function watchWeb(onChange: () => unknown = () => { }) {
  buildWeb("the entire thing");
  const p = join(root, "web");
  // console.log({ p });
  watch(p, { recursive: true }, (event, filename) => {
    // trigger page reload somehow
    buildWeb(filename ?? `event: ${event}`);
    onChange();
  });
}