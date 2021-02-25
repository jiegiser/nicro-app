<template>
  <div class="layout">
    <div class="app-header flex-lr isHome3d">
      <div class="app-name isOther">
      </div>
      <div class="today">
        <span class="weather">
          晴，19~23℃
        </span>
        <span class="time">
          2020年04月20日，星期一
        </span>
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/react">三维</router-link>
      </div>
    </div>
    <div class="container">
      <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
      <router-view v-show="$route.name" />
      <!-- 子应用渲染区，用于挂载子应用节点 -->
      <div v-show="!$route.name" id="frame"></div>
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  .container{
    height: 100%;
    font-size: 18px;
    // overflow: hidden;
  }
}
.app-header {
  position: fixed;
  color:#fff;
  background:rgba(6,120,119,1);
  height: 56px;
  line-height: 56px;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  .app-name {
    font-size: 20px;
    font-weight: 700;
    margin-left: 2%;
    width: 445px;
    height: 56px;
    cursor: pointer;
  }
   .nav {

   }
  .today {
    position: relative;
    .weather {
      position: absolute;
      top: 0;
      left: -420px;
      width: 120px;
    }
    .time {
      position: absolute;
      top: 0px;
      width: 200px;
      left: -300px;
    }
  }
  .isOther {
    background: url('./assets/logo.png') no-repeat 100% 100%;
  }
}
.isHome3d{
  height: 107px;
  background:linear-gradient(0deg,rgba(6,120,119,0) 0%,rgba(6,120,119,1) 100%);
}
</style>
