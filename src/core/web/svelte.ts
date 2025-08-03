import { type BunPlugin } from "bun";

export const svelte: BunPlugin = {
  name: "Svelte loader",
  async setup(builder) {
    var { compile } = await import("svelte/compiler");
    var { readFileSync } = await import("fs");

    builder.onLoad({ filter: /\.svelte(\.(ts|js))?(\?[^.]+)?$/ }, ({ path }) => {
      const output = compile(
        readFileSync(path.substring(0, path.includes("?") ? path.indexOf("?") : path.length), "utf-8"),
        {
          filename: path,
          generate: "server",
          css: "injected",
          runes: true,
        },
      );

      return {
        contents: output.js.code,
        loader: "js",
      };
    });
  },
};
