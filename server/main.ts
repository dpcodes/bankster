import { Hono } from "npm:hono";
const app = new Hono();

app.get("/", (c) => c.text("Hono!"));
