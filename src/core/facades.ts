import type { RequestEvent as KitRequestEvent } from "@sveltejs/kit";
import { createFacade, ioc } from "surfer/ioc";

export const REQUEST_EVENT_SYMBOL = Symbol("svelte.kit.request-event");

export const RequestEvent = createFacade(() => ioc(REQUEST_EVENT_SYMBOL));

declare module "surfer/ioc" {
  interface IocRegistry {
    [REQUEST_EVENT_SYMBOL]: KitRequestEvent;
  }
}