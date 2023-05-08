const Router = require("koa-router");
const usercenter = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../mysql")

usercenter.use(bodyparser());

usercenter.post("/userinfo", async (ctx) => {
  let accounter = ctx.request.body.accounter;

  // 根据用户名获取用户信息
  let ret = await new Promise((resolve, reject) => {
    const sqlQuery = "select * from userInfo where accounter=?";
    const params = [accounter];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

  ctx.body = {
    data: {
      accounter: ret[0].accounter,
      telephone: ret[0].telephone,
      email: ret[0].email,
    },
    code: 0,
    msg: "success"
  }
});

usercenter.post("/orderinfo", async (ctx) => {
  let accounter = ctx.request.body.accounter;

  // 根据用户名获取用户信息
  let ret = await new Promise((resolve, reject) => {
    const sqlQuery = "select * from orderInfo where accounter=?";
    const params = [accounter];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

  ctx.body = {
    data: ret,
    code: 0,
    msg: "success"
  }
});

module.exports = usercenter;