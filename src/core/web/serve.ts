import { staticPlugin } from '@elysiajs/static';
import Elysia from "elysia";
import { urlPrefix } from "./config";

export const web = () => new Elysia()
  .use(staticPlugin({
    assets: "build/web",
    prefix: urlPrefix
  }));