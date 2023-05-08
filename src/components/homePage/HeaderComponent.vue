<template>
  <div class="content_header">
    <!-- logo以及搜索框 -->
    <div class="logo_search_layout">
      <div class="logo">
        <span>普利旅行</span>
      </div>
      <!-- 使用element-ui中的input搜索框 -->
      <div>
        <el-autocomplete
          v-model="hotelName"
          :fetch-suggestions="querySearchAsync"
          placeholder="搜索酒店"
          :trigger-on-focus="false"
          v-show="isHome"
        >
          <el-button
            slot="append"
            class="search-button"
            @click="searchHotels(hotelName)"
          >
            <i class="iconfont">&#xe632;</i>
          </el-button></el-autocomplete
        >
        <!-- <el-input
          placeholder="搜索酒店"
          class="input-with-select"
          v-model="hotelName"
        >
          <el-button
            slot="append"
            class="search-button"
            @click="searchHotels(hotelName)"
          >
            <i class="iconfont">&#xe632;</i>
          </el-button>
        </el-input> -->
      </div>
    </div>

    <!-- 登陆、注册按钮 -->
    <div class="login_register_layout" v-show="!isLogin">
      <button class="login" @click="toNextPage('/login')">
        <i class="iconfont">&#xe611;</i>
        <span>请登录</span>
      </button>
      <span class="iconfont">&#xe680;</span>
      <button class="register" @click="toNextPage('/register')">注册</button>
    </div>

    <div class="user_center_layout" v-show="isLogin">
      <!-- 首页 -->
      <div class="home_page" v-show="!isHome">
        <button @click="toNextPage('/')">首页</button>
      </div>
      <!-- 用户中心 -->
      <button class="user" @click="toNextPage('/usercenter/userinfo')">
        <!-- <i class="iconfont">&#xe668;</i> -->
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test1"></use>
        </svg>
        <span>{{ accounter }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["isLogin", "isHome"],
  data() {
    return {
      hotelName: "",
      searchList: [],
      timeout: null,
    };
  },
  methods: {
    toNextPage(path) {
      this.$router.push(path);
    },
    searchHotels(hotelName) {
      this.$router.push({
        path: "/hotels/details",
        query: {
          type: "search",
          hotelName: hotelName,
        },
      });
    },
    async querySearchAsync(queryString, cb) {
      let res = await this.$post("/hotels/search", {
        queryString: queryString,
      });
      this.searchList = res.data;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(this.searchList);
      }, 500 * Math.random());
    },
  },
  computed: {
    accounter() {
      if (this.isLogin) {
        return localStorage.getItem("accounter");
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
/* header栏整体布局 */
.content_header {
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
}
/* logo、搜索栏相关布局 */
.logo_search_layout {
  height: 100%;
  display: flex;
  line-height: 72px;
}

.logo_search_layout .logo {
  font-family: "站酷高端黑 Regular";
  font-size: 40px;
  color: #3a84ee;
  margin-right: 50px;
}
.logo_search_layout .logo::before {
  font-family: "iconfont";
  content: "\e605";
}
.logo_search_layout .el-autocomplete {
  width: 300px;
}
.logo_search_layout .search-button {
  background-color: #3a84ee;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: white;
}

/* 登陆、注册按钮相关布局 */
.login_register_layout,
.user_center_layout {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 4vw;
}

/* 首页 */
.user_center_layout .home_page button {
  font-size: 15px;
  color: black;
  background: none;
  border: none;
  margin-left: 100px;
  cursor: pointer;
  margin-right: 10px;
}
.user_center_layout .home_page button::before {
  font-family: "iconfont";
  content: "\e8b9";
  color: #5d77a4;
  font-size: 18px;
  margin-right: 5px;
}
.user_center_layout .home_page button:hover,
.user_center_layout .home_page button:hover::before {
  color: #3a84ee;
}

/* 个人中心 */
.login_register_layout .login,
.user_center_layout .user {
  width: 90px;
  height: 30px;
  background-color: #f3f8fd;
  border-style: none;
  border-radius: 15px;
  display: flex;
  font-size: 15px;
  line-height: 30px;
  cursor: pointer;
  margin-right: 5px;
}

.login .iconfont {
  font-size: 20px;
  margin-right: 5px;
  color: #5d77a4;
}

.login:hover .iconfont,
.login:hover span,
.user:hover span {
  color: #3a84ee;
}

.login_register_layout .register {
  border-style: none;
  background: none;
  cursor: pointer;
  font-size: 15px;
  line-height: 30px;
  /* margin-left: 20px; */
}
.login_register_layout .register:hover {
  color: #3a84ee;
}

.user_center_layout .user {
  width: 100px;
}
.user .icon {
  font-size: 20px;
  margin-right: 5px;
  margin-top: 5px;
}
.user span {
  max-width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>