import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
  urls: {
    signIn: "/auth/signIn",
    signUp: "/auth/signUp",
    accountSettings: "/auth/account",
    //security: "/auth/account/security",
    afterSignIn: "/expense-tracker",
    afterSignUp: "/",
  }

});