import { createForminitProxy } from "forminit/next";

export const POST = createForminitProxy({
  apiKey: process.env.FORMINIT_API_KEY!,
}).POST;