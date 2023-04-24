// 引入mysql模块
const mysql = require("mysql")

// 创建连接池对象
const db = mysql.createPool({
  host: "43.137.35.59",
  user: "root",
  password: "Aa111111",
  database: "my_db"
})

// 封装sql语句
const query = (sql, params, callback) => {
  // 获取连接
  db.getConnection((err, conn) => {
    if (err) {
      console.log("连接数据库失败")
      console.log(err.message)
      db.releaseConnection();
    } else {
      // 连接数据库成功,开始查询
      conn.query(sql, params, (err, result) => {
        if (err) {
          console.log("查询失败", sql, params)
          callback(err, result)
          conn.release()
        }
        else {
          callback(err, result)
          conn.release()
        }
      })
    }
  })
}

module.exports = { query }






