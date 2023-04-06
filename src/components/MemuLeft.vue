<template>
  <div class="menu-left">
    <div class="menu-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <div class="menu-item">
      <button v-for="m in menuItemList" :key="m.id">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="'#icon-' + m.icon"></use>
        </svg>
        {{ m.title }}
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
      title: "",
    };
  },
};
</script>

<style scoped>
/* 左侧菜单栏整体布局样式 */
.menu-left {
  width: 12%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid rgba(128, 128, 128, 0.509);
  display: flex;
  flex-direction: column;
}
/* .menu-left:hover {
  width: 15%;
} */

/* 菜单图标 */
.menu-icon {
  width: 100%;
  height: 60px;
}
.menu-icon .icon {
  width: 20px;
  height: 20px;
  margin: 15px 0 0 30px;
}
.menu-icon .icon:hover {
  cursor: pointer;
}

/* 菜单项布局样式 */
.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item button {
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
}
.menu-item .icon {
  width: 20px;
  height: 20px;
}

.menu-item button:hover {
  background-color: #f3f8fd;
  cursor: pointer;
}

.menu-item button:focus {
  background-image: linear-gradient(to right, #48a0f2, #3377ed);
  color: white;
}
</style>