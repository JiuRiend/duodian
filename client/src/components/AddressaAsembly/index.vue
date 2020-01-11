/*
 * @Author: 王银虎 
 * @Date: 2019-10-14 11:54:23 
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-10-17 15:16:02
 * @Last Modified time: 2019-10-18 08:39:13

 */

<template>
  <div class="AddressaAsembly">
    <div v-show="TipsText" class="toText">
      <span>{{ TipsText }}</span>
    </div>
    <div>
      <span>联系人</span>
      <input
        :value="Contacts"
        type="text"
        placeholder="请求输入联系人"
        @input="setContacts"
      />
    </div>
    <div>
      <span>手机号</span>
      <input
        type="text"
        placeholder="请求输入手机号"
        @input="setCellPhoneNumber"
        maxlength="11"
        :value="CellPhoneNumber"
      />
    </div>
    <div class="dz">
      <span>地址</span>
      <select @change="setaddressr" name="address" selected="ddd" @click="aa()">
        <option>{{ text ? text : "请选择" }}</option>

        <option v-for="time in dzArr" :key="time.id" :value="time.name">{{
          time.name
        }}</option>
      </select>
      <span @click="toFindAddress()">{{ dz }}</span>
    </div>
    <div>
      <span>详细地址</span>
      <input
        type="text"
        placeholder="请输入详细地址"
        @input="setDetailedAddress"
        :value="DetailedAddress"
      />
    </div>
    <div>
      <button @click="complete">完成</button>
    </div>
  </div>
</template>

<script>
import { getcity, AddRess } from "@/api/addressDetail";
import { Toast } from "vant";
export default {
  components: {
    Toast
  },
  props: {
    data: {
      type: Array
    }
  },
  data() {
    return {
      Contacts: "", //联系人
      CellPhoneNumber: "", //手机号
      address: "", //地址
      DetailedAddress: "", //详细地址
      TipsText: "",
      dz: "选择小区、街道、大厦",
      dzArr: [],
      text: ""
    };
  },
  methods: {
    aa() {
      this.text = "";
    },
    toaddress() {
      this.$router.push("/list/home");
    },
    //获取联系人
    setContacts(e) {
      this.Contacts = e.target.value;
      window.localStorage.setItem("Contacts", this.Contacts);
    },
    //获取手机号
    setCellPhoneNumber(e) {
      this.CellPhoneNumber = e.target.value;
      window.localStorage.setItem("CellPhoneNumber", this.CellPhoneNumber);
    },
    //地址
    setaddressr(e) {
      this.address = e.target.value;
      window.localStorage.setItem("address", e.target.value);

      this.dz = "选择小区、街道、大厦";
    },
    //详细地址
    setDetailedAddress(e) {
      this.DetailedAddress = e.target.value;
      window.localStorage.setItem("DetailedAddress", this.DetailedAddress);
    },
    //完成
    complete() {
      if (this.Contacts == "") {
        this.TipsText = "请输入联系人";
        this.creatText();
      } else if (this.CellPhoneNumber == "") {
        this.TipsText = "请输入手机号";
        this.creatText();
      } else if (this.DetailedAddress == "") {
        this.TipsText = "请输入详细地址";
        this.creatText();
      } else if (this.dz == "" || this.dz == "选择小区、街道、大厦") {
        this.TipsText = "选择小区、街道、大厦";
        this.creatText();
      } else {
        // 手机号验证
        let Sjh = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
        if (Sjh.test(this.CellPhoneNumber)) {
          //调用提交
          this.Submission();
          //调用清空
          this.aa();
          this.$router.push("/addressPage");
        } else {
          this.TipsText = "请输入正确手机号";
          this.creatText();
        }
      }
    },
    //定时器
    creatText() {
      let _this = this;
      setTimeout(function() {
        _this.TipsText = "";
      }, 2000);
    },
    //进入搜索地址
    toFindAddress() {
      let { address } = this;
      this.$router.push({
        name: "findAddress",
        params: {
          name: address
        }
      });
    },
    //数据的持久化
    ks() {
      this.dz = this.$route.params.name
        ? this.$route.params.name
        : "选择小区、街道、大厦";
      this.text = window.localStorage.getItem("address");
      window.localStorage.setItem("dz", this.dz);
      this.Contacts = window.localStorage.getItem("Contacts");
      this.CellPhoneNumber = window.localStorage.getItem("CellPhoneNumber");
      this.DetailedAddress = window.localStorage.getItem("DetailedAddress");
      window.addEventListener("load", function() {
        window.localStorage.removeItem("address");
        window.localStorage.removeItem("Contacts");
        window.localStorage.removeItem("CellPhoneNumber");
        window.localStorage.removeItem("DetailedAddress");
        window.localStorage.removeItem("dz");
      });
    },
    //提交
    Submission() {
      let cart = window.localStorage.getItem("address");
      let Sjh = window.localStorage.getItem("CellPhoneNumber");
      let lXr = window.localStorage.getItem("Contacts");
      let Xxdz = window.localStorage.getItem("DetailedAddress");
      let Dz = window.localStorage.getItem("dz");

      AddRess(cart, Sjh, lXr, Xxdz, Dz).then(res => {
        if (res.code) {
          Toast.success("添加成功");
        } else {
          Toast.fail("失败文案");
        }
      });
      this.rem();
    },
    //清空数据
    rem() {
      window.localStorage.removeItem("address");
      window.localStorage.removeItem("Contacts");
      window.localStorage.removeItem("CellPhoneNumber");
      window.localStorage.removeItem("DetailedAddress");
      window.localStorage.removeItem("dz");
      this.Contacts = "";
      this.CellPhoneNumber = "";
      this.address = "";
      this.DetailedAddress = "";
      this.dz = "选择小区、街道、大厦";
    },
    getlist() {
      getcity().then(res => {
        window.console.log(res, "11111");
        if (res.code) {
          this.dzArr = res.data;
        }
      });
    }
  },

  created() {
    //获取城市列表
    this.getlist();
    //处理数据
    this.ks();
  }
};
</script>
<style scoped>
.AddressaAsembly {
  width: 100%;
  height: 100%;
}
.AddressaAsembly div {
  width: 100%;
  height: 0.5rem;
  border-bottom: 0.01rem solid #ccc;
  display: flex;
}
.AddressaAsembly span {
  width: 20%;
  margin-left: 0.1rem;
  line-height: 0.5rem;
  height: 0.5rem;
}
.AddressaAsembly input {
  flex: 1;
  border: none;
}

.AddressaAsembly div button {
  width: 100%;
  height: 100%;
  margin-top: 0.2rem;
  border: none;
  background: red;
  color: #fff;
}
.AddressaAsembly div .icon {
  width: 5%;
  text-align: center;
  height: 0.5rem;
  line-height: 0.5rem;
}
.toText {
  width: 100%;
  height: 0.5rem;
  background: orange;
  color: #fff;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  left: 0;
  top: 0.5rem;
  opacity: 0.9;
}
.toText span {
  width: 100%;
  text-align: center;
  height: 100%;
}
.dz {
  width: 100%;
  height: 0.5rem;
}
.dz span {
  width: 20%;
}
.dz select {
  width: 30%;
  border: none;
  color: #000;
}
.dz span:last-child {
  width: 50%;
  color: #ccc;
  line-height: 0.5rem;
  text-align: center;
  margin-left: 0.1rem;
  border-left: 1px solid #000;
  border: none;
}
</style>