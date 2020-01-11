<template>
  <Layout title="我的" :isShow="false">
    <div class="mybox">
      <div class="nickname">
        <h2>我的昵称</h2>
        <span>开启美好的饿一天...</span>
      </div>
      <div class="portrait">
        <div class="photo" @click="clickFn"></div>
      </div>
    </div>
    <div class="orderManage">
      <div class="myOrder">
        <p>我的订单</p>
        <div class="lookAll">
          <span @click="orderFn(0)">查看全部</span>
          <van-icon name="arrow" />
        </div>
      </div>
      <div class="orderClassify">
        <div>
          <div class="daifukuan" @click="orderFn(1)"></div>
        </div>
        <div>
          <div class="daipeisong" @click="orderFn(2)"></div>
        </div>
        <div>
          <div class="yifahuo" @click="orderFn(3)"></div>
        </div>
        <div>
          <div class="tuikuanshouhou" @click="orderFn(4)"></div>
        </div>
      </div>
    </div>
    <div class="proMore">
      <ul class="uls">
        <li @click="ToCoupon()">
          <div class="lis_left"><span class="youhui"></span>我的优惠券</div>
          <div class="lis_right rSpan"><span>8</span>张未使用</div>
        </li>
        <li @click="ToQualifications()">
          <div class="lis_left"><span class="rule"></span>资质规则</div>
        </li>
        <li @click="customerService()">
          <div class="lis_left"><span class="support"></span>联系客服</div>
          <div class="lis_right rc">400-123-123</div>
        </li>
        <li @click="quarterEcharts()">
          <div class="lis_left"><span class="support"></span>可视化图表</div>
        </li>
      </ul>
    </div>
    <van-dialog
      class="myDialog"
      v-model="show"
      title="个人信息"
      show-cancel-button
    >
      <div>
        <van-uploader
          :before-read="beforeRead"
          v-model="fileList"
          :max-count="1"
          multiple
        />
      </div>
      <div>
        <van-field
          v-model="nicheng"
          clearable
          clickable
          label="昵称"
          placeholder="请输入昵称"
          @change="getNicheng"
        />
      </div>
      <div>
        <van-field
          v-model="qianming"
          clearable
          clickable
          label="签名"
          placeholder="请您的个性签名"
          @change="getQianmin"
        />
      </div>
    </van-dialog>
    <div class="my_q" @click="login" v-show="notlogin">
      <img src="@/assets/image/notlogin.jpg" alt />
    </div>
  </Layout>
</template>

<script>
import { Toast, Icon, Dialog, Uploader, Field } from "vant";
import Layout from "components/layout";
import { getSession } from "utils";

export default {
  components: {
    Layout,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Dialog.Component.name]: Dialog.Component
  },
  created() {
    const token = getSession("token");
    if (!token) {
      this.notlogin = true;
    }
  },
  data() {
    return {
      notlogin: false,
      show: false,
      fileList: [],
      nicheng: "我的昵称",
      qianming: "开启美好的饿一天..."
    };
  },

  methods: {
    clickFn() {
      this.show = true;
    },
    login() {
      this.$router.push("/login");
    },
    // 返回布尔值
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        Toast("请上传 jpg 格式图片");
        return false;
      }
      return true;
    },
    getNicheng(e) {
      this.nicheng = e.target.value;
    },
    getQianmin(e) {
      this.qianming = e.target.value;
    },
    //代付款
    orderFn(type) {
      this.$router.push({ path: `/list/orderType/${type}` });
    },
    //进入优惠卷
    ToCoupon() {
      this.$router.push("/coupon");
    },
    //进入资质规则
    ToQualifications() {
      this.$router.push("/qualifications");
    },
    //客服
    customerService() {
      this.$router.push({ path: "/list/customerService" });
    },
    //可视化图表
    quarterEcharts() {
      this.$router.push({ path: "/quarterEcharts" });
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
.mybox {
  width: 100%;
  height: 1.32rem;
  display: flex;
  box-sizing: border-box;
  padding: 0.15rem 0.2rem 0;
  background: rgba(254, 49, 19, 1);
  box-shadow: 0px 1px 1px 0px rgba(255, 64, 54, 0.2);
  .nickname {
    width: 80%;
    height: 60%;
    color: #fff;
    display: flex;
    flex-direction: column;
    h2,
    span {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
  .portrait {
    width: 19%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    .photo {
      width: 0.8rem;
      height: 100%;
      background-color: lightsalmon;
      min-width: 0.65rem;
    }
  }
}
.orderManage {
  width: 90%;
  height: 1.5rem;
  margin: 0 auto;
  margin-top: -0.3rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 33px 20px -20px rgba(0, 0, 0, 0.11),
    0px 0px 17px -3px rgba(0, 0, 0, 0.06);
  border-radius: 0.06rem;
  border: 1px solid rgba(240, 240, 240, 1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.1rem;
  .myOrder {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      width: 0.8rem;
      font-size: 0.16rem;
      font-weight: bold;
      color: rgba(17, 17, 17, 1);
    }
    .lookAll {
      font-size: 0.14rem;
      color: rgba(153, 153, 153, 1);
    }
  }
  .orderClassify {
    flex: 3;
    display: flex;
    align-items: center;
    > div {
      width: 20%;
      height: 80%;
      margin: 0 2.5%;
      display: flex;
      justify-content: center;
    }
    .daifukuan {
      width: 0.63rem;
      height: 0.61rem;
      background: url("../../../assets/image/font.png") no-repeat -29px -873px;
      background-size: 420px;
    }
    .daipeisong {
      width: 0.63rem;
      height: 0.61rem;
      background: url("../../../assets/image/font.png") no-repeat -125px -873px;
      background-size: 420px;
    }
    .yifahuo {
      width: 0.63rem;
      height: 0.61rem;
      background: url("../../../assets/image/font.png") no-repeat -216px -873px;
      background-size: 420px;
    }
    .tuikuanshouhou {
      width: 0.63rem;
      height: 0.61rem;
      background: url("../../../assets/image/font.png") no-repeat -315px -873px;
      background-size: 420px;
    }
  }
}
.proMore {
  width: 90%;
  height: 1.8rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 17px -3px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  border: 1px solid rgba(240, 240, 240, 1);
  .uls {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 0.15rem;
    font-size: 0.16rem;
    font-weight: bold;
    > li {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .lis_left {
        width: 1.2rem;
        display: flex;
        align-items: center;
        .youhui {
          width: 0.38rem;
          height: 0.3rem;
          background: url("../../../assets/image/font.png") no-repeat -64px -515px;
          background-size: 420px;
        }
        .rule {
          width: 0.38rem;
          height: 0.3rem;
          background: url("../../../assets/image/font.png") no-repeat -140px -515px;
          background-size: 420px;
        }
        .support {
          width: 0.38rem;
          height: 0.3rem;
          background: url("../../../assets/image/font.png") no-repeat -214px -515px;
          background-size: 420px;
        }
      }
      .lis_right {
        width: 0.9rem;
        font-size: 14px;
        font-weight: normal;
        text-align: right;
      }
      .rSpan {
        color: #fe3113;
      }
      .rc {
        color: #999;
      }
    }
  }
}
.myDialog {
  .van-dialog__content {
    > div {
      width: 90%;
      height: 0.4rem;
      margin: 0 auto;
      margin-top: 0.15rem;
    }
    > div:nth-child(1) {
      height: 0.8rem;
      display: flex;
      justify-content: center;
      margin-top: 0.2rem;
    }
    > div:nth-child(3) {
      margin-bottom: 0.5rem;
    }
  }
}
.my_q {
  width: 100%;
  height: 94%;
  position: absolute;
  top: 0;
  left: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>