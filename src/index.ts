import express from "express";
import morgan from "morgan";
import router from "./routers/index.routes";

const app = express();
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(router);

app.listen(app.get("port"));
console.log(`On port ${app.get("port")}`);
