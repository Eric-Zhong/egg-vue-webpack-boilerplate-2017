<!--
KB: 本项目中，这个Header算是最根的模板了。
它如果被上级模板套用时，会把template中的内容，替换上级内容中的 <HeaderLayout>部分
-->
<template>
  <header  xz-src="layout/standard/header/header.vue"></header>
</template>
<style>
  @import "./header.css";
</style>
<script type="text/babel">
  export default{
    data(){
      return {};
    },
    computed:{
    },
    mounted(){
    }
  }
</script>
