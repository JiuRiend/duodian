/*
 * @Author: zgh 
 * @Date: 2019-10-13 19:43:53 
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-10-17 10:53:08
 */

<template>
  <div class="box">
    <ul>
      <li v-for="item in list" :key="item.id" class="cart" ref="conten">
        <div class="Left">
          <div class="cartLeft" ref="left">
            <input
              type="checkbox"
              v-model="item.ischecked"
              @click="() => changeitem(item.id)"
            />
          </div>
          <div class="cartCenter">
            <img src alt />
            <div class="imgBox">
              <p>{{ item.name }}</p>
              <p>1.2kg/盒</p>
              <p>
                ￥
                <span>{{ item.price }}</span>
              </p>
            </div>
          </div>
          <div class="cartRight">
            <van-stepper v-model="item.num" />
          </div>
        </div>
        <div class="Right">
          删除
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Stepper } from "vant";
import { cartList } from "@/api/cart";
export default {
  data() {
    return {
      znum: 0,
      zprice: 0,
      allchecked: false,
      list: [],
      clickList: [],
      show: false
    };
  },
  components: {
    vanStepper: Stepper
    // vanPopup: Popup
  },
  mounted() {
    window.console.log(this.list);
    cartList().then(res => {
      window.console.log(res.result);
      this.list = res.result;
    });
  },

  computed: {},
  methods: {
    changeitem(id) {
      window.console.log(this.list);
      this.list.map(item => {
        if (item.id == id) {
          item.ischecked = !item.ischecked;
          if (item.ischecked == true) {
            this.znum += item.num;
            this.zprice += item.price * item.num;
          } else {
            this.znum -= item.num;
            this.zprice -= item.price * item.num;
          }
        }
      });
      let flag = this.list.every(item => item.ischecked == true);
      this.allchecked = flag;
    }
  }
};
</script>

<style lang='scss' scoped>
.box {
  width: 100%;
  height: 100%;
  background: #eee;
  position: relative;
}
.cart {
  width: 4.5rem;
  background: #fff;
}
.Left {
  display: flex;
  width: 3.75rem;
  height: 1.2rem;
  justify-content: center;
  align-items: center;
  float: left;
}
.Right {
  width: 0.75rem;
  height: 100%;
  background: red;
  float: right;
}
.cartLeft {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 80px;
  height: 80px;
  background: skyblue;
  margin-right: 0.1rem;
}
.cartCenter {
  flex: 5;
  display: flex;
  justify-content: center;
  align-content: center;
  .imgBox {
    p {
      &:nth-child(2) {
        color: #ccc;
        font-size: 0.12rem;
        margin-top: 0.1rem;
      }
      &:nth-child(3) {
        color: red;
        font-size: 0.18rem;
        margin-top: 0.2rem;
      }
    }
  }
}
.cartRight {
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 0.05rem;
  }
}
</style>