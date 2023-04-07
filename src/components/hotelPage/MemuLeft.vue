// 左侧导航栏组件
<template>
  <div class="menu_left_layout">
    <div class="menu_icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <div class="menu_item">
      <button v-for="m in menuItemList" :key="m.id">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#icon-' + m.icon"></use>
        </svg>
        <span>{{ m.title }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemuLeft",
  data() {
    return {
      menuItemList: [
        { id: "001", icon: "jiudian", title: "酒店" },
        { id: "002", icon: "jipiao", title: "机票" },
        { id: "003", icon: "icon_huochepiao", title: "火车票" },
        { id: "004", icon: "shuji", title: "攻略·景点" },
      ],
    };
  },
};
</script>

<style scoped>
/* 左侧菜单栏整体布局样式 */
.menu_left_layout {
  width: 50px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid rgba(128, 128, 128, 0.509);
  display: flex;
  flex-direction: column;
}
.menu_left_layout:hover {
  width: 165px;
}

/* 菜单图标 */
.menu_icon {
  width: 100%;
  height: 60px;
  cursor: pointer;
}
.menu_icon .icon {
  width: 20px;
  height: 20px;
  margin: 20px 0 0 15px;
}

.menu_left_layout:hover .menu_icon .icon {
  margin: 20px 0 0 30px;
}

/* 菜单项布局样式 */
.menu_item {
  display: flex;
  flex-direction: column;
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
.menu_item .icon {
  width: 20px;
  height: 20px;
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
</style>