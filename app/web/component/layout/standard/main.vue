<template>
  <div xz-layout="layout" xz-src="layout/standard/main.vue">
    <LayoutHeader></LayoutHeader>
    <LayoutContent>
      <div slot="content" xz-slot="content">
        <slot name="main" xz-slot="main"></slot>
      </div>
    </LayoutContent>
  </div>
</template>
<style lang="css">
/*
  KB: 我这个项目中，不会用到这么多CSS，所以comments掉
  // 写在这个是方便加载所有页面都会需要的css
  @import "../../../asset/css/global.css";
  */

body {
  background: #856D35;
}

.page {
  max-width: 640px;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 50px;
  width: 100%;
  height: auto;
  min-height: 100%;
  background: #f9f9f9;
}
</style>
<script type="text/babel">
import LayoutHeader from './header/header';
import LayoutContent from './content/content';
export default {
  components: {
    LayoutHeader,
    LayoutContent
  }
}
</script>
