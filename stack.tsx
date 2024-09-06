// import "server-only";

// import { StackServerApp } from "@stackframe/stack";

// export const stackServerApp = new StackServerApp({
//   tokenStore: "nextjs-cookie",

//   urls:{
//     signIn : '/auth/signIn',
//     signUp : '/auth/signUp',
//   },
//   callback: '/api/v1/auth/oauth/callback/:provider'
// });

import "server-only";

import { StackServerApp } from "@stackframe/stack";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
});
