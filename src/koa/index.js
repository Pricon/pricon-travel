const Koa = require("koa")
const router = require("./router/index")
const koaJwt = require("koa-jwt");
const secret = require("./privateConf")

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

// 路由权限控制，除了`path`里匹配的路径，都需要验证 token
app.use(koaJwt({ secret }).unless({
  path: [/^\/login/, /^\/register/]
}));

app.use(router.routes(), router.allowedMethods())
app.listen(port)
