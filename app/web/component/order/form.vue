<template>
  <article>
    <h2>订单信息</h2>
    <!--订单-->
    <!--
    <div class="cpshuoming">
      <p>
        <span style="color: rgb(192, 0, 0); font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 20px; line-height: 24px; text-align: center; background-color: rgb(249, 249, 249);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span style="font-family: 微软雅黑, 'Microsoft YaHei'; font-size: 20px; line-height: 24px; text-align: center; color: rgb(0, 0, 0); background-color: rgb(249, 249, 249);"> 我们将用最快的速度将产品送到你的面前</span>
        </span>
        <img src="../../asset/images/iphone/14936918838084776.jpg">
      </p>
    </div>
    -->
    <div id="order">
      <div id="buy" class="warp">
        <form id="form" name="form" action="http://csxiangfa.com/notorder.asp" method="post" onsubmit="return postcheck()">
          <input type="hidden" name="orderid" id="orderid" value="no.2017629202526418">
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>产品
            </label>
            <div class="dxbox red chanpin not3chanpin0">
              <label class="now">
                <input type="radio" name="product" id="a0" value="正品行货4.7寸128G499元" alt="499" checked="" onclick="pricea();yincang();">&nbsp;正品行货4.7寸128G&nbsp;&nbsp;499元
              </label>  
            </div>
          </div>
          <!--附加属性b-->
          <div class="bdbox">
              <label class="bdxx"><em>*</em>产品颜色</label>
              <div class="dxbox red chanpin not3chanpin1">
                  <label 
                    v-for="c in optionColor" 
                    v-bind:key="c.text"
                    @click="colorClick(c)"
                    v-bind:class="[c.checked?'now':'']"
                    >
                    <input type="radio" name="chanpin1" v-model="order.color">&nbsp;{{c.text}}
                  </label>
              </div>
          </div>

          <!--附加属性e-->
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>数量</label>
            <!-- KB: 可以用 v-on:click，或者是 @click -->
            <a class="jian" href="javascript:;" @click="minnumber()">-</a>
            <input type="text" class="shuliang" size="4"
              name="mun" id="mun" readonly=""
              v-model="order.amount">
            <a class="jia" href="javascript:;" @click="addnumber()">+</a>
            <div v-show="order.amount>=10">&nbsp;特价商品，最多一次可购买10台</div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>姓名</label>
            <div class="textbox">
              <input type="text" name="name" v-model="order.name">
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>手机</label>
            <div class="textbox">
              <input type="text" name="mob" v-model="order.telephone">
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>地区</label>
              <!-- 在这里写个Vue.component，用于显示3级区域选择 -->
             <area-selector  :result.sync="order.area"></area-selector>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>地址</label>
            <div class="textbox">
              <input type="text" name="address" v-model="order.address">
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>金额</label>
            <div class="text3box">
              <input name="price" readonly="" style="width:80px;" v-model="order.price"> 元
              <span id="zfbyh"></span>
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">
              <em>*</em>付款</label>
            <div class="dxbox">
              <label for="b1">
                <img src="../../asset/images/iphone/hdfk.gif">
              </label>
            </div>
          </div>
          <div class="bdbox">
            <label class="bdxx">留言</label>
            <div class="text2box">
              <textarea name="guest" v-model="order.comment"></textarea>
            </div>
          </div>
          <div class="subbox">
            <input type="button" name="submit" value="立即提交订单" @click="submit()">
          </div>
          <input type="hidden" name="_csrf" v-bind:value="csrf">
        </form>
        <div style="clear:both;"></div>
      </div>
    </div>
    <!--订单-->
  </article>
</template>


<!-- 这里引用CSS -->
<style>
@import "./form.css";
</style>



<!-- 这里写Javascript -->
<script type="text/babel">

import AreaSelector from '../area/index.vue';

export default {
  props: ["csrf"],
  components: {AreaSelector},
  // 页面中绑定的数据
  data() {
    return {
      optionColor:[
          { text: "玫瑰金", checked: true },
          { text: "土豪金", checked: false },
          { text: "科技银", checked: false }
      ],
      order: {
        product: "",
        color: "",
        amount: 0,
        name: "",
        telephone: "",
        area: {},
        city: "",
        depart: "",
        address: "",
        price: 0.00,
        comment: ""
      }
    };
  },
  // View层计算属性字段
  computed: {},
  // 定义当前页面需要用到的方法
  methods: {
    minnumber() {
      let vm = this;
      if (this.order.amount > 0) this.order.amount--;
      console.log(this.order);
    },
    addnumber() {
      let vm = this;
      if (this.order.amount < 10) this.order.amount++;
    },
    colorClick(color){
      let vm = this;
      vm.resetColor();  // 清理原始值为false
      color.checked = true; // 设置当前值为true
      vm.order.color = color.text; // 设置订单中的color为当前选中值
    },
    resetColor(){
      let vm = this;
      vm.optionColor.forEach(function(element) {
        element.checked = false;
      }, this);
    },
    onSelected(){
      console.log("selected");
    },
    submit() {
      let vm = this;
      // 为了方便在post中增加csrf，这里定义一个option
      vm.order._csrf = vm.csrf;
      let option = {
        // params: {"_csrf": vm.csrf}
      };

      // KB: 发送CSRF的方式
      // 1.在url后面加 ?_csrf=xxxxxx
      // 2.在body中加 _csrf=xxxxx

      // 发送ajax请求，写入订单数据
      // KB: Vue-resource的http模块学习地址http://www.jianshu.com/p/3ce2bd36596e
      // 这里使用 this.$http.post(url, option, ...)
      // 这个讲解也很不错：http://www.it165.net/pro/html/201607/72598.html
      this.$http.post(
          '/api/v1/order',
          // '/api/v1/order?_csrf=' + vm.csrf,
          vm.order,
          option,
          { 
            emulateJSON: true 
          }
        ).then(function (response) {
          console.log(response.data);
        }, function (response) {
          console.log('请求失败处理');
        });
    }
  },
  // KB: mounted, 该钩子在服务器端渲染期间不被调用
  // https://cn.vuejs.org/v2/api/#mounted
  mounted() { }
}


</script>