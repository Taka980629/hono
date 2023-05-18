import { Hono, HonoRequest } from "hono";
import { url } from "inspector";

const app = new Hono();

app.get("/", async (c) => {
  return c.text("Hello Hono");
});

export default app;
