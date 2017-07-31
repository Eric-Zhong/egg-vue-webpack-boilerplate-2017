<template>
  <!-- 
                  KB: 这里使用Template的<layout>定义加载root模板
                  而且页面可以通过 title，description 这种参数进行传递
                -->
  <Layout title="iPhone 7" description="iPhone 7 特卖" keywords="iPhone, apple">
    <!--
        KB: 被<Layout></Layout>套住的内容，将显示在模板定义中的Contant位置。
    -->
    <!--############################ Banner ################################## -->
    <div class="banner" xz-slot="layout" xz-src="page/index/index">
      <p>
        <img src="../../asset/images/iphone/iphone7_01_01.jpg">
      </p>
      <p>
        <br>
      </p>
    </div>
  
    <!--############################# Buy ################################## -->
  
    <section class="buy">
      <div class="row1">
        <strong>￥2399</strong>
  
        <ol>
          <li>
            <p>原价</p>￥4999</li>
          <li>
            <p>折扣</p>4.8</li>
          <li>
            <p>节省</p>￥2600</li>
        </ol>
  
      </div>

      <div class="row2">
        <strong>147人已购买</strong>
        <div class="djs">
          <div class="time-count">
            <div id="remainTime_1" class="jltimer">
              <span>01</span>天
              <span>12</span>小时
              <span>24</span>分
              <span>13</span>秒</div>
          </div>
        </div>
      </div>
  
      <article class="des"></article>
      <a class="btn" href="#mark_order_form">立即购买</a>
    </section>
  
    <!--########################### 抢购描述 #################################### -->

    <article class="showcontent">
  
      <h2>抢购描述</h2>
      <div class="btn">
        1：因售 价比较 低，考虑到成 本及利 润原因，现每天只提供8 9台少量现货低 价抢购预约。
        <br/> 2：为杜绝黄牛党,1个手机号仅 限购1台(可通过网页订购提交订单)，预约成功者24小时内会 有客服主动与您 取得联系，请保 持手机畅通。
        <br/> 3：商城 支持【货 到 付 款】【15天 退换货】【全 国联 保】【正品发 票】等购 物保障。
        <br/> 4：商城推 广期，为提高知名度，已是零 利 润特惠直 销，不再接受任何与其它商 城比价／议价,本店为唯一正 品授 权商城!
      </div>
  
      <h2>购买流程</h2>
      <p>
        <img src="../../asset/images/iphone/purchase_workflow.jpg">
      </p>
  
      <h2>产品简介</h2>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_02.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_03.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_04.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_05.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_06.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_07.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_08.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_09.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_10.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_11.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_12.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_14.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_15.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_17.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/iphone7_01_18.jpg">
      </p>
      <p>
        <br>
      </p>
      <p>
        <img src="../../asset/images/iphone/purchase_comment.png">
      </p>
      <br>
      <br>
  
      <h2>联系我们</h2>
      <div class="btn">
        1：#在这里要描述一下联系方式。
        <br/> 1：#在这里要描述一下联系方式。
        <br/> 1：#在这里要描述一下联系方式。
        <br/> 1：#在这里要描述一下联系方式。
        <br/> 1：#在这里要描述一下联系方式。
        <br/> 1：#在这里要描述一下联系方式。
      </div>
    </article>
  
    
    <!--############################################################### -->
  
    <!-- 引用 Vue 的组件来显示 Form 表单 -->
    <order-form :csrf="csrf"></order-form>

  </Layout>
</template>

<style>
@import "index.css";
</style>

<script type="text/babel">
import OrderForm from '../../component/order/form.vue'
export default {
  components: {
    OrderForm
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
}
</script>

