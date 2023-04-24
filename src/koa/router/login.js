const Router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const jsonwebtoken = require("jsonwebtoken")
const db = require("../mysql")
const { secret } = require("../privateConf");

const login = new Router();

login.use(bodyparser());

login.post("/", async (ctx) => {
  let body = ctx.request.body;
  let accounter = body.accounter;
  let password = body.password;

  let userArray = await new Promise((resolve, reject) => {
    const sql_query = "select * from userInfo where accounter=?";
    const params_query = [accounter];
    return db.query(sql_query, params_query, (err, result) => {
      if (err) throw err;
      resolve(result);
    })
  })
  if (userArray.length > 0) {
    // 验证密码
    let passArray = await new Promise((resolve, reject) => {
      const sql_query = "select * from userInfo where password=?";
      const params_query = [password];
      return db.query(sql_query, params_query, (err, result) => {
        if (err) throw err;
        resolve(result);
      })
    })
    if (passArray.length > 0) {
      ctx.status = 200;
      ctx.body = {
        message: "登录成功",
        // 生成 token 返回给客户端
        token: jsonwebtoken.sign(
          {
            data: {
              accounter: accounter,
              password: password
            },
            // 设置 token 过期时间
            exp: Math.floor(Date.now() / 1000) + 60 * 60, // 60 seconds * 60 minutes = 1 hour
          },
          secret
        ),
      };
    } else {
      ctx.status = 401;
      ctx.body = "密码错误";

    }

  } else {
    ctx.status = 401;
    ctx.body = "没有这个账号";

  }

})

module.exports = login;
