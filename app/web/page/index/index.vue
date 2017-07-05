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

    <!-- 
    <div class="banner" xz-slot="layout" xz-src="page/index/index">
      <p>
        <img src="../../asset/images/iphone//14936942387277830.png">
      </p>
      <p>
        <img src="../../asset/images/iphone//14936942415372251.png">
      </p>
      <p>
        <img src="../../asset/images/iphone//14936942432218076.jpg">
      </p>
      <p>
        <br>
      </p>
    </div>

    -->
  
    <!--############################# Buy ################################## -->
  
    <section class="buy">
      <div class="row1">
        <strong>￥499</strong>
  
        <ol>
          <li>
            <p>原价</p>￥3880</li>
          <li>
            <p>折扣</p>1.3</li>
          <li>
            <p>节省</p>￥3381</li>
        </ol>
  
      </div>
  
      <div class="row2">
        <strong>8952人已购买</strong>
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
      <a class="btn" href="#">立即购买</a>
    </section>
  
    <!--########################### 抢购描述 #################################### -->
      <!-- 

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
        <img src="../../asset/images/iphone/TB2OhBSsXXXXXceXpXXXXXXXXXX.jpg">
      </p>
  
      <h2>产品简介</h2>
      <p>
        <img src="../../asset/images/iphone/TB2Pn5eaqe5V1Bjy1zjXXa08VXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2sjydap55V1Bjy0FjXXbikXXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2iHebaqi5V1Bjy1zkXXcL4VXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2zXiOaxvzQeBjSZFMXXcVfFXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2HD9iap95V1Bjy0FdXXc5BVXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2071faqi5V1BjSspnXXa.3XXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2aHqhap55V1Bjy0FnXXc5XFXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2.rebaqi5V1Bjy1zkXXcL4VXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB27negaqi5V1BjSspmXXXlwpXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2Sj9aap15V1Bjy1XdXXayCFXa.jpg">
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2J31gaqm5V1BjSsppXXcMCVXa.jpg">
      </p>
      <p>
        <br>
      </p>
      <p>
        <img src="../../asset/images/iphone/TB2oPygaqm5V1BjSspbXXX6sXXa.png">
      </p>
      <br>
      <br>
  
      <h2>联系我们</h2>
      <div class="btn">
        1：因售 价比较 低，考虑到成 本及利 润原因，现每天只提供8 9台少量现货低 价抢购预约。
        <br/> 2：为杜绝黄牛党,1个手机号仅 限购1台(可通过网页订购提交订单)，预约成功者24小时内会 有客服主动与您 取得联系，请保 持手机畅通。
        <br/> 3：商城 支持【货 到 付 款】【15天 退换货】【全 国联 保】【正品发 票】等购 物保障。
        <br/> 4：商城推 广期，为提高知名度，已是零 利 润特惠直 销，不再接受任何与其它商 城比价／议价,本店为唯一正 品授 权商城!
      </div>
    </article>
  
    -->
    
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

