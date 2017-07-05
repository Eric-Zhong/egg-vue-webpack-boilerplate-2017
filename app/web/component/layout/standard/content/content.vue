<template>
  <!--
      KB: 定义Vue里的Slot，也就是插槽
      这里定义了名称为content的Slot，它是Vue中默认的内容填充区
      因为VS提示，这里最好套上一层DIV以进行区分
    -->
  <div id="content" xz-slot="content" xz-src="layout/standard/content/content.vue">
    <slot name="content"></slot>
  </div>
</template>





<style>
@import "content.css";
</style>




<script type="text/babel">
export default {
  name: 'v-content',
  data() {
    return {
    }
  },
  components: {},
  mounted() {
  }
}
</script>
