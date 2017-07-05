
import MainLayout from './main';

// KB: 没理解为什么Vue在解释后，会用的是这里的Slot。
const content = `
<div id="app" 
  xz-src="layout/standard/index.js"
  class="page"
  >
  <MainLayout>
    <div slot="main" xz-layout="main">
      <slot></slot>
    </div>
  </MainLayout>
</div>`;
// const content = '<div id="app" class="xz-standard-a"><MainLayout><div slot="main"><slot></slot></div></MainLayout></div>';

console.log("----------------------------------------");
console.log(typeof window === 'object');
console.log("----------------------------------------");

const template = `<!DOCTYPE html>
<html class="hb-loaded">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=GBK">
    <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" name="viewport">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <meta content="yes" name="apple-touch-fullscreen">
    <meta content="black" name="apple-mobile-web-app-status-bar-style">
    <meta content="320" name="MobileOptimized">
    <meta content="telephone=no" name="format-detection">
    <link href="http://www.csxiangfa.com/favicon.ico" type="image/x-icon" rel="icon">
    <title>正品官网 {{vTitle}}</title>
    <meta name="keywords" content="正品官网">
    <meta name="description" content="正品官网">
    <meta name="author" content="黑眼圈单品管理系统，作者QQ：860180810，www.not3.com">
</head>
<body :class="baseClass">
  <!-- 经过实际使用后发现，这个id="app"的定义，还不能替地方，或者更不能被删掉 -->
  <div
    id="app"
    xz-src="layout/standard/index.js"
    class="page">
    <MainLayout>
      <div slot="main" xz-layout="main">
        <slot></slot>
      </div>
    </MainLayout>
  </div>
</body>
</html>`;

export default {
  // KB: 这里用了name定义了Layout，所以，后面在使用时可以使用<Layout>来直接调用
  // 可以发现，它是在/app/web/page/index/index.vue中进行了引用
  name: 'Layout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
    MainLayout
  },
  computed: {
    vTitle() {
      return this.$root.title || this.title || 'iPhone';
    },
    vKeywords() {
      return this.$root.keywords || this.keywords || 'egg, vue, webpack, server side render';
    },
    vDescription() {
      return this.$root.description || this.description || 'egg-vue-webpack server side render';
    },
    baseClass() {
      return this.$root.baseClass;
    },
    version() {
      return new Date();
    }
  },
  // KB: 可不可以理解成，如果发现运行时是windows，就不用全部构造所有html吧？
  template: typeof window === 'object' ? content : template
};
