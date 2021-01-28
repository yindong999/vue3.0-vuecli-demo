<template>
  <div class="home">
    <a-layout id="components-layout-demo-responsive">
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint"
      >
        <div class="logo" />
        <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <router-link to="/add">
              待办事项
            </router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <router-link to="/done">
              已完成事项
            </router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <router-link to="/delete">
              已删除事项
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="{ background: '#001529', padding: 0 ,color: '#fff'}"
          >Vue3.0学习</a-layout-header
        >
        <a-layout-content :style="{ margin: '24px 16px 0' }">
          <div
            :style="{ padding: '24px', background: '#fff', height: '100%' }"
          >
            <router-view></router-view>
          </div>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          Ant Design ©2018 Created by Ant UED
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss">
.home{
  height:100vh;
}
#components-layout-demo-responsive {
  height:100%;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
