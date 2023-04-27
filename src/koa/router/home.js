const Router = require("koa-router");
const home = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../mysql")

home.use(bodyparser());

home.post("/", async (ctx) => {
  const city = ctx.request.body.city;
  let hotelArray = [];
  for (let i = 0; i < city.length; i++) {
    // 修改酒店的最低价
    await new Promise((resolve, reject) => {
      const sqlQuery = "update hotelInfo set price=(select min(price) from roomInfo where hotelName=hotelInfo.name)";
      const params = [city[i]];
      db.query(sqlQuery, params, (err, result) => {
        if (err) reject(err);
        resolve(result)
      })
    })
    // 获取酒店信息
    let ret = await new Promise((resolve, reject) => {
      const sqlQuery = "select * from hotelInfo where city=?";
      const params = [city[i]];
      return db.query(sqlQuery, params, (err, result) => {
        if (err) reject(err);
        resolve(result)
      })
    })

    hotelArray = hotelArray.concat({ "city": city[i], "hotelInfo": ret })
  }


  ctx.body = {
    data: hotelArray,
    code: 0,
    msg: "success"
  };
})


module.exports = home;