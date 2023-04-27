const Router = require("koa-router");
const hotels = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../mysql")

hotels.use(bodyparser());

hotels.use(async (ctx, next) => {
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
hotels.post("/list", async (ctx) => {
  let city = ctx.request.body.city;
  // 根据城市获取酒店列表
  let ret = await new Promise((resolve, reject) => {
    const sqlQuery = "select * from hotelInfo where city=?";
    const params = [city];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })

  // 根据城市获取热门区域、商圈、机场车站、行政区
  let retHotArea = await new Promise((resolve, reject) => {
    const sqlQuery = "select hotArea from hotArea where city=?";
    const params = [city];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      let hotAreaArr = [];
      result.forEach(item => {
        hotAreaArr.push(item.hotArea)
      });
      resolve(hotAreaArr);
    })
  })
  let retBusArea = await new Promise((resolve, reject) => {
    const sqlQuery = "select businessArea,popularity from businessArea where city=?";
    const params = [city];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      let busAreaArr = [];
      result.forEach(item => {
        busAreaArr.push(item)
      });
      resolve(busAreaArr);
    })
  })
  let retAirStation = await new Promise((resolve, reject) => {
    const sqlQuery = "select airportOrStation from airportOrStation where city=?";
    const params = [city];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      let airStationArr = [];
      result.forEach(item => {
        airStationArr.push(item.airportOrStation)
      });
      resolve(airStationArr);
    })
  })
  let retAdminArea = await new Promise((resolve, reject) => {
    const sqlQuery = "select administrativeArea from administrativeArea where city=?";
    const params = [city];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      let adminAreaArr = [];
      result.forEach(item => {
        adminAreaArr.push(item.administrativeArea)
      });
      resolve(adminAreaArr);
    })
  })

  ctx.body = {
    data: {
      hotels: ret,
      hotArea: retHotArea,
      businessArea: retBusArea,
      airportOrStation: retAirStation,
      administrativeArea: retAdminArea
    },
    code: 0,
    msg: "success"
  }
})
hotels.get("/details", async (ctx) => {
  ctx.body = "房间列表"
})

module.exports = hotels;