<template>
  <div class="qwer">
    <ul class="uls" v-for="item in UnpaidOrderList" :key="item.id">
      <li>
        <div class="orderType_top">
          <div>{{ item.order_shop }}</div>
          <div></div>
          <div v-if="item.order_type === 1">已付款</div>
          <div v-if="item.order_type === 2">正在等待商家发货</div>
          <div v-if="item.order_type === 3">正在配送</div>
          <div v-if="item.order_type === 4">已收货</div>
        </div>
        <div class="orderType_mid">
          <div class="comDetail">
            <p>{{ item.order_name }}</p>
            <p>
              <span>￥{{ item.order_price }}</span>
              <span>X{{ item.order_count }}</span>
            </p>
            <p>{{ item.order_size }}</p>
            <p class="addition">7天无理由退换</p>
          </div>
        </div>
        <div class="orderType_count">
          <span>共{{ item.order_count }}件商品</span>
          <span>合计:￥{{ item.order_count }}.00</span>
        </div>
        <div class="orderType_bom">
          <div></div>
          <div class="orderType_bom_btn">
            <p @click="Toast()">提醒发货</p>
            <p @click="dialogFn(item.order_type)">查看物流</p>
          </div>
        </div>
      </li>
    </ul>
    <van-dialog v-model="dialog" title="物流信息">
      <van-steps direction="vertical" :active="0" v-if="showType === 1">
        <van-step>
          <h3>买家已付款</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </van-dialog>
  </div>
</template>

<script>
import { getUnpaidOrder } from "api/orderType";
import { Toast, Dialog, Step, Steps } from "vant";
export default {
  components: {
    Toast,
    [Dialog.Component.name]: Dialog.Component,
    vanStep: Step,
    vanSteps: Steps
  },
  data() {
    return {
      UnpaidOrderList: [],
      dialog: false,
      showType: null
    };
  },
  created() {
    getUnpaidOrder().then(res => {
      this.UnpaidOrderList = res.result;
    });
  },
  methods: {
    Toast() {
      this.$toast("已提醒商家");
    },
    dialogFn(type) {
      this.dialog = true;
      this.showType = type;
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
.qwer {
  width: 100%;
  .uls {
    width: 100%;
    > li {
      width: 100%;
      height: 2.2rem;
      background-color: #fff;
      margin-top: 0.15rem;
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .orderType_top {
        flex: 1.3;
        display: flex;
        align-items: center;
        > div {
          flex: 1;
          display: flex;
          justify-content: center;
          font-weight: bold;
        }
        div:nth-child(3) {
          color: #f00;
          font-size: 12px;
          font-weight: normal;
        }
      }
      .orderType_mid {
        flex: 4;
        box-sizing: border-box;
        padding: 0 0.15rem;
        .comDetail {
          > p {
            margin-top: 0.08rem;
            > span {
              display: inline-block;
              margin-right: 0.2rem;
              color: rgb(153, 153, 153);
            }
            > span:nth-child(2) {
              font-size: 12px;
            }
          }
          > p:nth-child(3) {
            font-size: 12px;
            color: rgb(153, 153, 153);
          }
          .addition {
            width: 0.9rem;
            font-size: 12px;
            color: #ff8750;
            background-color: #fff1eb;
            text-align: center;
            border-radius: 3px;
          }
        }
      }
      .orderType_count {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        box-sizing: border-box;
        padding: 0 0.15rem;
        border-bottom: 1px solid rgb(235, 235, 235);
        font-size: 12px;
        > span {
          margin-left: 0.1rem;
        }
        > span:nth-child(1) {
          color: #999;
        }
      }
      .orderType_bom {
        flex: 1.5;
        border: 0;
        display: flex;
        > div {
          flex: 1;
        }
        .orderType_bom_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          > p {
            width: 46%;
            height: 60%;
            max-width: 1.3rem;
            min-width: 0.6rem;
            margin-left: 2%;
            margin-right: 2%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.2rem;
            border: 1px solid #a1a1a1;
            color: #666666;
            cursor: pointer;
          }
        }
      }
    }
  }
  .wuliu {
    box-sizing: border-box;
    padding: 0.15rem;
  }
}
</style>