import type { Component, ComponentProps, ComponentType, SvelteComponent } from "svelte";
import { render as _render } from "svelte/server";
import { join } from "node:path";
// import shell from "$build/web/index.html" with { type: "text" };

const root = join(import.meta.dir, "../../../");
const shell = await Bun.file(join(root, "build/web/index.html")).text();

export function withShell(sections: Record<string, string>) {
  let template = shell as any as string;
  for (const [key, value] of Object.entries(sections)) {
    template = template.replace(`<!-- %${key}% -->`, value);
  }

  return template;
}

export function render<
  Comp extends SvelteComponent<any> | Component<any>,
  Props extends ComponentProps<Comp> = ComponentProps<Comp>
>(
  ...args: {} extends Props
    ? [
      component: Comp extends SvelteComponent<any> ? ComponentType<Comp> : Comp,
      options?: {
        props?: Omit<Props, '$$slots' | '$$events'>;
        context?: Map<any, any>;
        idPrefix?: string;
      }
    ]
    : [
      component: Comp extends SvelteComponent<any> ? ComponentType<Comp> : Comp,
      options: {
        props: Omit<Props, '$$slots' | '$$events'>;
        context?: Map<any, any>;
        idPrefix?: string;
      }
    ]
) {
  const output = _render(...(args as [any, any]));

  return withShell({
    head: output.head,
    body: output.body
  });
}
