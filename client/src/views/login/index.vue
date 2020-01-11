<template>
  <Layout title="校园超市"
          :showFooter="false">
    <div class="login-page">
      <div class="login-box">
        <div class="login-title">
          <h1>QQ登录</h1>
        </div>
        <div class="login-main">
          <div class="login-input">
            <input type="text"
                   placeholder="请输入qq账号"
                   v-model="phone" />
          </div>
          <div class="login-input">
            <button @click="handSubmit">获取验证码</button>
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show">
      <div class="diolong-main">
        <h2>请输入验证码</h2>
        <div calss="uhbne">6位验证码已发送至 {{ phone }}</div>
        <van-password-input :value="value"
                            :mask="false"
                            :focused="true"
                            gutter="2px"
                            @focus="showKeyboard = true" />
        <div class="cxfs"
             v-if="timer !== 0">
          <van-count-down ref="countDown"
                          :time="timer * 1000"
                          :auto-start="true"
                          format="ss"
                          @finish="finished" />秒后可重新发送
        </div>
        <div class="cxfs"
             v-if="timer === 0">重新发送</div>
        <div class="foot_btn">
          <button class="btn"
                  @click="onOklogin">登录</button>
        </div>
      </div>
    </van-popup>
    <van-number-keyboard :show="showKeyboard"
                         @input="onInput"
                         @delete="onDelete"
                         @blur="showKeyboard = false"
                         :z-index="4000" />
  </Layout>
</template>

<script>
import { getAuthCode, login } from "@/api";
import {
  PasswordInput,
  NumberKeyboard,
  Notify,
  Popup,
  CountDown,
  Toast
} from "vant";
import Layout from "components/layout";
import { setSession } from "@/utils";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      showKeyboard: false,
      phone: "2384507519",
      show: false,
      value: "",
      timer: 0
    };
  },
  components: {
    Layout,
    "van-password-input": PasswordInput,
    "van-number-keyboard": NumberKeyboard,
    "van-count-down": CountDown,
    "van-popup": Popup
  },
  methods: {
    ...mapMutations({
      setToken: "login/setToken"
    }),
    onOklogin() {
      login({ phone: this.phone, authCode: this.value }).then(res => {
        // window.console.log(res);
        if (res.code === 1) {
          setSession("token", res.token);
          this.setToken(res.token);
          this.$router.go(-1);
        }
      });
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    handSubmit() {
      if (/^[1-9][0-9]{5,10}$/.test(this.phone * 1) && this.phone !== "") {
        if (this.timer !== 0) {
          this.show = true;
          return;
        }
        this.timer = 30;
        getAuthCode({ phone: this.phone }).then(res => {
          if (res.code === 1) {
            this.show = true;
            Notify({ type: "success", message: "邮箱已发送" });
          }
        });
      } else {
        Toast.fail("请输入正确的qq");
      }
    },
    finished() {
      this.timer = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  font-size: 14px;
  .login-box {
    width: 100%;
    height: 100%;
    background: white;
    .login-title {
      width: 100%;
      padding-left: 0.23rem;
      margin-top: 0.25rem;
      margin-bottom: 0.4rem;
      font-weight: 100;
    }
  }
}
.login-main {
  .login-input {
    height: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      height: 80%;
      border: none;
      width: 80%;
      font-size: 0.15rem;
    }
    button {
      width: 80%;
      height: 0.38rem;
      color: #fff;
      background-color: #fd5830;
      border: 1px solid #fd5830;
      border-radius: 0.19rem;
      font-size: 14px;
    }
  }
}
.diolong-main {
  background: #eee;
  border-radius: 0.1rem;
  width: 2.8rem;
  // height: 2.3rem;
  // margin: 2rem auto;
  padding: 0.23rem 0.2rem;
  h1 {
    font-size: 0.18rem;
    font-weight: 100;
    margin-bottom: 0.1rem;
  }
  .uhbne {
    font-size: 0.09rem;
  }
  .foot_btn {
    text-align: center;
    margin-top: 0.1rem;
    .btn {
      width: 80%;
      height: 0.38rem;
      color: #fff;
      background-color: #fd5830;
      border: 1px solid #fd5830;
      border-radius: 0.19rem;
      font-size: 14px;
    }
  }
  .van-password-input {
    margin-top: 0.2rem !important;
    margin: 0;
  }
  .cxfs {
    // font-size: 0.1rem;
    margin-top: 0.1rem;
    // color: rgb(196, 196, 196);
    display: flex;
  }
}
.van-key--gray {
  font-size: 16px;
}
</style>