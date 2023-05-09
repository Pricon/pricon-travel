const Koa = require("koa")
const router = require("./router/index")
const koaJwt = require("koa-jwt");
const { secret } = require("./privateConf")
const bodyparser = require("koa-bodyparser");

const app = new Koa()
const port = 5050;

app.use(bodyparser())
// 解决跨域问题
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://43.137.35.59:80"); // 添加前端的域名
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

app.use((ctx, next) => {
  return next().catch((err) => {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.body = {
        data: null,
        code: 1,
        msg: "认证失败"
      };
    } else {
      throw err;
    }
  })
})
// 路由权限控制，除了`path`里匹配的路径，都需要验证 token
app.use(koaJwt({ secret }).unless({
  path: [/^\/login/, /^\/register/, /^\/home/]
}));

app.use(router.routes(), router.allowedMethods())
app.listen(port)
