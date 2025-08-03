import { $ } from "bun";

await Promise.all([
  $`tailwindcss -i ./web/app.css -o ./build/web/app.css --watch`,
  $`bun run --watch src/index.ts`
]);
