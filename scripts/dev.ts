import { $ } from "bun";

await Promise.all([
  // $`tailwindcss -i ./web/app.css -o ./build/web/app.css --watch`.quiet(),
  // $`bun build ./web/index.html --outdir ./build/web --watch`,
  $`bun run --watch src/index.ts`
]);
