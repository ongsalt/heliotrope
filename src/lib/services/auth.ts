import { error } from "@sveltejs/kit";
import { RequestEvent } from "../../core/facades";

export class Auth {
  token: string | undefined;

  constructor() {
    const { cookies } = RequestEvent;
    this.token = cookies.get('token');
  }

  gaurd(message?: string) {
    if (!this.token) {
      error(403, message);
    }
  }
}