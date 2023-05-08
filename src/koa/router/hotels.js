const Router = require("koa-router");
const hotels = new Router();
const bodyparser = require("koa-bodyparser");
const db = require("../mysql")

hotels.use(bodyparser());

//获取酒店列表
hotels.post("/list", async (ctx) => {
  let city = ctx.request.body.city;
  let area = "";
  let level = [];
  // 根据城市获取酒店列表
  let ret = await new Promise((resolve, reject) => {
    let sqlQuery = "";
    let params = []
    let conditions = "";
    if (ctx.request.body.area) {
      area = ctx.request.body.area[0] + ctx.request.body.area[1];
      conditions += " and keywords like ?";
      params.push("%" + area + "%");

    } else if (ctx.request.body.level) {
      level = ctx.request.body.level;
      level.forEach(e => {
        conditions += " and level like ?";
        params.push("%" + e[0] + "%");
      });
    } else if (ctx.request.body.advanced) {
      let rate = ctx.request.body.advanced.rate;
      let hotelType = ctx.request.body.advanced.hotelType;
      if (rate) {
        rate.forEach(e => {
          let arr = e.split("分");
          let score = arr[0];
          conditions += " and rate>=?";
          params.push(score);
        });
      }
      if (hotelType) {
        hotelType.forEach(e => {
          conditions += " and hotelType=?";
          params.push(e);
        });
      }
    }
    sqlQuery = "select * from hotelInfo where city=?" + conditions;
    params.unshift(city);

    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  })

  ctx.body = {
    data: ret,
    code: 0,
    msg: "success"
  }
});

// 获取区域关键字
hotels.post("/keywords", async (ctx) => {
  let city = ctx.request.body.city;

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
      hotArea: retHotArea,
      businessArea: retBusArea,
      airportOrStation: retAirStation,
      administrativeArea: retAdminArea
    },
    code: 0,
    msg: "success"
  }
});

// 获取房间信息
hotels.post("/details", async (ctx) => {
  let hotelName = ctx.request.body.hotelName;

  let ret = await new Promise((resolve, reject) => {
    const sqlQuery = "select * from roomInfo where hotelName=?";
    const params = [hotelName];

    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      resolve(result);
    })
  });

  ctx.body = {
    data: ret,
    code: 0,
    msg: "succuess"
  }
})

// 预订
hotels.post("/reserve", async (ctx) => {
  let form = ctx.request.body.form;
  let orderDate = form.orderDate;
  let hotelName = form.hotelName;
  let startTime = form.start_end_date[0];
  let endTime = form.start_end_date[1];
  let days = form.days;
  let roomNumber = form.roomNumber;
  let roomName = form.roomName;
  let price = form.price;
  let status = form.status;
  let accounter = ctx.request.body.accounter;

  let arr = orderDate.split("-");
  let ran = Math.floor(Math.random() * 90 + 10)
  let orderNo = "22" + arr[0] + arr[1] + ran;
  await new Promise((resolve, reject) => {
    const sqlQuery = "insert into orderInfo(accounter,orderNo, orderDate,hotelName,startTime,endTime,days,roomNumber,roomName,price,status) values(?,?,?,?,?,?,?,?,?,?,?)";
    const params = [accounter, orderNo, orderDate, hotelName, startTime, endTime, days, roomNumber, roomName, price, status];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });

  ctx.body = {
    data: null,
    code: 0,
    msg: "success"
  }

})

// 返回匹配搜索框字符串的酒店
hotels.post("/search", async (ctx) => {
  let queryString = ctx.request.body.queryString;

  let ret = await new Promise((resolve, reject) => {
    const sqlQuery = "select name,city from hotelInfo where name like ?";
    const params = ["%" + queryString + "%"];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
  let retArray = [];
  for (let i = 0; i < ret.length; i++) {
    retArray[i] = { value: ret[i].name, address: ret[i].city };

  }
  ctx.body = {
    data: retArray,
    code: 0,
    msg: "success"
  }

})

// 根据酒店名返回酒店信息
hotels.post("/hotel", async (ctx) => {
  let name = ctx.request.body.hotelName;

  let ret = await new Promise((resolve, reject) => {
    const sqlQuery = "select * from hotelInfo where name=?";
    const params = [name];
    return db.query(sqlQuery, params, (err, result) => {
      if (err) throw err;
      resolve(result);
    });
  });
  ctx.body = {
    data: ret[0],
    code: 0,
    msg: "success"
  }

})
module.exports = hotels;