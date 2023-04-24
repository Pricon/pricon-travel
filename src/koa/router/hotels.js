const Router = require("koa-router");
const hotels = new Router();


hotels.post("/list", async (ctx) => {
  ctx.body = "酒店列表"
})
hotels.get("/details", async (ctx) => {
  ctx.body = "房间列表"
})

module.exports = hotels;