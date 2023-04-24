const Koa = require("koa")
const router = require("./router/index")

const app = new Koa()
const port = 5050;

// 解决跨域问题
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); // 添加前端的域名
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  );
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (ctx.method === "OPTIONS") {
    ctx.body = 200;
  } else {
    await next();
  }
});

app.use(router.routes(), router.allowedMethods())
app.listen(port)
