<template>
  <Layout title="支付" :isShow="true" :showFooter="false">
    <div class="timer">
      请在倒计时结束之前完成支付
      <van-count-down :time="time" format="mm 分 ss 秒" />
    </div>
    <div class="money">
      需支付:
      <span class="red">￥{{ (this.$route.query.pay_money / 100).toFixed(2) }}</span>
    </div>
    <div class="payMethods">
      <h3 class="payA">支付方式</h3>
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell title="支付宝支付" clickable @click="radio = '1'">
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell title="微信支付" clickable @click="radio = '2'">
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="commit">
      <van-button type="primary" size="large" @click="passwordShow">确认支付</van-button>
    </div>
    <van-popup v-model="show" position="bottom">
      <div class="shurumima">
        <van-password-input
          :value="value"
          :focused="showKeyboard"
          info="请输入密码"
          @focus="showKeyboard = true"
        />
        <van-number-keyboard
          :show="showPassword"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard = false"
        />
      </div>
    </van-popup>
  </Layout>
</template>
<script>
import request from "@/utils/request";
import Layout from "components/layout";
import {
  RadioGroup,
  Radio,
  Cell,
  CellGroup,
  CountDown,
  Button,
  PasswordInput,
  NumberKeyboard,
  Popup
} from "vant";
export default {
  components: {
    Layout,
    "van-radio-group": RadioGroup,
    "van-cell-group": CellGroup,
    "van-radio": Radio,
    "van-cell": Cell,
    "van-count-down": CountDown,
    "van-button": Button,
    "van-password-input": PasswordInput,
    "van-number-keyboard": NumberKeyboard,
    "van-popup": Popup
  },
  data() {
    return {
      radio: "1",
      value: "",
      showKeyboard: true,
      show: false,
      // showKeyboard: true,
      showPassword: true,
      time: 1 * 15 * 60 * 1000
    };
  },
  created() {
    // console.log(this.$route.query.pay_money)
  },
  methods: {
    // 显示输入密码页面
    passwordShow() {
      this.show = !this.show;
    },
    async onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length === 6) {
        if (this.value === "666666") {
          let list = this.$store.state.product.product;
          let order_count = 0;
          let order_name = "";
          let order_detail = "";
          list.forEach(item => {
            order_name += item.name + " ";
            order_count += item.count;
            order_detail += item.name + "(" + item.count + ")";
          });
          // 跳转支付结果页面
          await request.post("/add/order", {
            order_name,
            order_detail,
            order_type: 1,
            order_price: this.$store.state.product.sum,
            order_shop: "校园小卖部",
            order_size: "组合",
            order_count,
            order_list: JSON.stringify(list)
          });

          this.passwordShow();
          await this.$router.push({
            path: "/payend"
          });
        } else {
          this.passwordShow();
          this.value = "";
          this.$toast("密码错误,请重新输入");
        }
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>

<style lang='scss' scoped>
%juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  @extend %juzhong;
}
.timer {
  height: 0.5rem;
  background: #ffd7d6;
  color: #f55;
  padding-top: 0.05rem;
  text-align: center;
}
.payMethods {
  background: #fff;
  margin-top: 0.1rem;
  padding: 0 0.2rem;
}
.payA {
  height: 0.3rem;
  padding-left: 0.16rem;
  line-height: 0.3rem;
}
.money {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.2rem;
  background: #f9f9f9;
}
.red {
  font-size: 0.3rem;
  color: #f55;
}
.commit {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.shurumima {
  height: 3rem;
  width: 100%;
  background: #fff;
  .van-password-input {
    top: 0;
  }
}
</style>