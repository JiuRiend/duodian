/*
 * @Author: zgh 
 * @Date: 2019-10-13 19:43:40 
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-10-24 10:11:06
 */

<template>
  <div class="box">
    <ul class="cart">
      <li v-for="item in list" :key="item.id" class="conten" ref="conten">
        <van-swipe-cell>
          <div class="Left">
            <div class="cartLeft" ref="left">
              <van-checkbox
                v-model="item.ischecked"
                shape="square"
                @click="changeitem(item.id)"
                icon-size="14px"
              />
            </div>
            <div class="cartCenter" @click="goDetail(item.id)">
              <img :src="item.img" alt />
              <div class="imgBox">
                <p>{{ item.name }}</p>
                <p>1.2kg/盒</p>
                <p>
                  ￥
                  <span>{{ item.presentPrice }}</span>
                </p>
              </div>
            </div>
            <div class="cartRight">
              <van-stepper v-model="item.count" />
            </div>
          </div>
          <template slot="right">
            <van-button
              square
              type="danger"
              text="删除"
              class="removeB"
              @click="removeCart(item.id)"
            />
          </template>
        </van-swipe-cell>
      </li>
    </ul>
    <div class="cartFooter">
      <p>
        <van-checkbox
          v-model="allchecked"
          shape="square"
          @click="changeall"
          icon-size="14px"
          >全选</van-checkbox
        >
      </p>
      <p>
        合计:
        <span>{{ zprice.toFixed(2) }}</span>
      </p>
      <p @click="priceAll">
        去结算 (
        <span>{{ znum }}</span>)
      </p>
    </div>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '20%' }"
      class="mack"
    >请购买商品!</van-popup>
  </div>
</template>

<script>
import { Stepper, Popup, SwipeCell, Button, Dialog, Checkbox } from "vant";
import { cartList, removeCart } from "@/api/cart";
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
    vanStepper: Stepper,
    vanPopup: Popup,
    vanSwipeCell: SwipeCell,
    vanButton: Button,
    vanCheckbox: Checkbox
  },
  created() {
    cartList().then(res => {
      this.list = res.result.filter(item => item.isbuy == "true");
      let flag = this.list.every(item => item.ischecked == true);
      this.allchecked = flag;
    });
  },
  updated() {
    let newlist = this.list.filter(item => item.ischecked == true);
    this.znum = newlist.reduce((prev, next) => {
      prev += next.count;
      return prev;
    }, 0);
    this.zprice = newlist.reduce((prev, next) => {
      prev += next.presentPrice * next.count;
      return prev;
    }, 0);
  },
  computed: {},
  methods: {
    goDetail(id) {
      this.$router.push("/list/detail/" + id);
    },
    priceAll() {
      this.cartList = this.list.filter(item => item.ischecked);
      var parList = this.cartList;
      if (this.znum) {
        this.$store.commit("product/setProduct", {
          sum: this.zprice,
          list: parList
        });
        this.$router.push({
          path: "/orderDetail",
          params: { parList, sum: this.zprice }
        });
      } else {
        this.show = !this.show;
      }
    },

    changeitem(id) {
      this.list.map(item => {
        if (item.id == id) {
          item.ischecked = !item.ischecked;
        }
      });
      let flag = this.list.every(item => item.ischecked == true);
      this.allchecked = flag;
    },
    changeall() {
      this.allchecked = !this.allchecked;
      this.list.map(item => (item.ischecked = this.allchecked));
    },
    removeCart(id) {
      Dialog.confirm({
        message: "确定删除吗？"
      }).then(() => {
        const ind = this.list.findIndex(item => item.id == id);
        this.list.splice(ind, 1);
        removeCart(id);
      });
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
  display: flex;
  flex-direction: column;
}
.cart {
  width: 100%;
  height: 100%;
  background: #eee;
  flex: 1;
  overflow: auto;
}

.Left {
  display: flex;
  width: 95%;
  margin: 0 auto;
  height: 1.2rem;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
}
.cartLeft {
  width: .4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.removeB {
  height: 100%;
}

.cartCenter {
  width: calc(100% - 0.4rem - 1.1rem);
  display: flex;
  align-content: center;
  display: flex;
  flex-flow: row nowrap;
  img {
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.1rem;
    border-radius: 0.1rem;
  }
  .imgBox {
    width: calc(100% - 0.8rem);
    
    p {
      &:nth-child(1) {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
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
  width: 1.1rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.05rem;
}
.van-stepper{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  .van-stepper__minus,.van-stepper__input,.van-stepper__plus{
    flex: 1;
  }
}
.cartFooter {
  width: 100%;
  height: 0.44rem;
  background: #fff;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(3) {
      background: red;
      width: 100%;
      height: 100%;
      border-radius: 0 0 5px 0;
      color: #fff;
    }
  }
}
.mack {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

