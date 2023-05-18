// 左侧导航栏组件
<template>
  <div class="menu_left_layout">
    <div class="menu_left_inner">
      <div class="menu_icon">
        <span class="iconfont">&#xe67c;</span>
      </div>
      <div class="menu_item">
        <button
          v-for="m in menuItemList"
          :key="m.id"
          @click="toNextPage(m.path)"
        >
          <i class="iconfont">{{ m.icon }}</i>
          <span>{{ m.title }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemuLeft",
  data() {
    return {
      menuItemList: [
        { id: "001", icon: "\ue73f", title: "酒店", path: "/jiudian" },
        { id: "002", icon: "\ue73e", title: "机票", path: "/" },
        { id: "003", icon: "\ue64e", title: "火车票", path: "/" },
        { id: "004", icon: "\ue607", title: "攻略·景点", path: "/" },
      ],
    };
  },
  methods: {
    toNextPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
/* 左侧菜单栏整体布局样式 */
.menu_left_layout {
  width: 50px;
  position: relative;
  z-index: 10000;
  cursor: pointer;
  transition: 0.1s linear;
}

.menu_left_inner {
  width: 50px;
  height: 100%;
  min-height: 1075px;
  border-right: 1px solid rgba(128, 128, 128, 0.4);
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: white;
}
.menu_left_layout:hover .menu_left_inner {
  width: 150px;
}

/* 菜单图标 */
.menu_icon {
  width: 100%;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
}
.menu_icon .iconfont {
  margin-left: 15px;
  font-size: 20px;
}

.menu_left_layout:hover .menu_icon .iconfont {
  margin-left: 30px;
}

/* 菜单项布局样式 */
.menu_item {
  width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.menu_left_layout:hover .menu_item {
  width: 150px;
}

.menu_item button {
  height: 40px;
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  border-style: none;
  margin-bottom: 5px;
  font-size: 16px;
  text-align: left;
  padding-left: 12px;
  line-height: 40px;
  background: none;
  cursor: pointer;
}
.menu_item .iconfont {
  color: #3377ed;
  font-size: 20px;
}
.menu_item button span {
  display: none;
}

.menu_item button:hover {
  background-color: #f3f8fd;
}
.menu_left_layout:hover button span {
  display: inline;
  margin-left: 5px;
}

.menu_item button:focus {
  background-image: linear-gradient(to right, #48a0f2, #3377ed);
  color: white;
}
.menu_item button:focus .iconfont {
  color: white;
}
</style>