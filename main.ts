import { httpServer } from "./deps.ts";
httpServer.serve((req) => new Response("Hello World\n"));
