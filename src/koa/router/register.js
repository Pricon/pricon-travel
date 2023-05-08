const Router = require("koa-router")
const bodyparser = require("koa-bodyparser")
const db = require("../mysql")

const register = new Router();

register.use(bodyparser());

register.post("/", async (ctx) => {
  let body = ctx.request.body;
  let accounter = body.accounter;
  let password = body.password;
  let email = body.email;
  let telephone = body.telephone;

  // 查找数据库中是否存在该用户
  let userArray = await new Promise((resolve, reject) => {
    const sql_query = "select * from userInfo where accounter=?";
    const params_query = [accounter];
    return db.query(sql_query, params_query, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })
  if (userArray.length > 0) {
    // 已经存在用户，注册失败
    ctx.status = 401;
    ctx.body = "用户已存在";
  } else {
    // 没有用户，创建一个新用户
    // let myToken = jsonwebtoken.sign(
    //   {
    //     data: {
    //       accounter: accounter,
    //       password: password
    //     },
    //     // 设置 token 过期时间
    //     exp: Math.floor(Date.now() / 1000) + 60 * 60, // 60 seconds * 60 minutes = 1 hour
    //   },
    //   secret
    // )
    let insertResult = await new Promise((resolve, reject) => {
      const sql_insert = "insert userInfo(accounter,password,telephone,email) values(?,?,?,?)";
      const params_insert = [accounter, password, telephone, email];
      db.query(sql_insert, params_insert, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
    })
    if (insertResult) {
      ctx.status = 200;
      ctx.body = {
        data: null,
        code: 0,
        msg: "注册成功"
      };
    } else {
      ctx.status = 401;
      ctx.body = {
        data: null,
        code: 1,
        msg: "注册失败,请重新注册"
      };
    }

  }
})

module.exports = register;
