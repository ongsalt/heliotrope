import type { Handle } from "@sveltejs/kit";
import { createRootIoc } from "surfer/ioc";
import { REQUEST_EVENT_SYMBOL } from "./facades";

export const iocHook: Handle = async ({ event, resolve }) => {
  const { provideIoc, container } = createRootIoc();
  container.bind(REQUEST_EVENT_SYMBOL, () => event);
  const response = await provideIoc(() => resolve(event));
  return response;
};
