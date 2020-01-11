<template>
  <Layout title="商品详情" :isShow="true" :showFooter="false">
    <div class="container">
      <van-swipe indicator-color="white" :height="275">
        <van-swipe-item>
          <img :src="this.productDetail.img" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=828383629,4196982908&fm=26&gp=0.jpg"
            alt
          />
        </van-swipe-item>
        <van-swipe-item>
          <img
            src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1620241180,3694954653&fm=26&gp=0.jpg"
            alt
          />
        </van-swipe-item>
      </van-swipe>
      <div class="price-wrap">
        <div class="price">
          <p class="price-num">
            <span>￥</span>
            <span class="price-number">
              {{ this.productDetail.presentPrice }}
            </span>
            <span class="price-history"
              >￥{{ this.productDetail.originalPrice }}</span
            >
          </p>
          <p class="price-sell">累计销售2223份</p>
        </div>
      </div>
      <div class="title">
        <div class="title-con">
          <h3>{{ this.productDetail.name }}</h3>
          <p>剩余3458份</p>
        </div>
        <div class="title-share" @click="shareClick">
          <div class="icon-border">
            <van-icon name="share" size=".2rem" color="#FE3212" />
          </div>
          <span>分享好友</span>
        </div>
      </div>
      <div class="tuijian">
        <h3>小编推荐</h3>
        <div class="tuijian-box">
          与那动力煤萨勒曼到拉萨目睹了生命的拉萨麦当劳马路对面啥莫德凯撒没打开
        </div>
      </div>
      <div class="buy-history">
        <div class="buy-history-tit">
          <div>购买记录</div>
          <div>
            共
            <span>4</span> 人购买
          </div>
        </div>
        <div class="buy-history-list">
          <img src="../../../assets/image/touxiang1.jpg" alt class="touxiang" />
          <div class="buy-history-name">
            <p>小妮***子</p>
            <p>2018.11.11</p>
          </div>
          <div class="buy-history-num">
            购买
            <span>1</span> 件
          </div>
        </div>
        <div class="buy-history-list">
          <img src="../../../assets/image/touxiang2.jpg" alt class="touxiang" />
          <div class="buy-history-name">
            <p>lu***</p>
            <p>2018.11.11</p>
          </div>
          <div class="buy-history-num">
            购买
            <span>2</span> 件
          </div>
        </div>
        <div class="buy-history-list" v-show="buyhistoryshow">
          <img src="../../../assets/image/touxiang3.jpg" alt class="touxiang" />
          <div class="buy-history-name">
            <p>张*娴</p>
            <p>2018.11.11</p>
          </div>
          <div class="buy-history-num">
            购买
            <span>2</span> 件
          </div>
        </div>
        <div class="buy-history-list" v-show="buyhistoryshow">
          <img src="../../../assets/image/touxiang4.jpg" alt class="touxiang" />
          <div class="buy-history-name">
            <p>阿*</p>
            <p>2018.12.11</p>
          </div>
          <div class="buy-history-num">
            购买
            <span>3</span> 件
          </div>
        </div>
        <div class="more" @click="buyhistory">
          {{ this.buyhistoryshow ? "没有数据了，亲~" : "点击查看更多" }}
        </div>
      </div>
      <div class="evaluate">
        <div class="evaluate-tit">
          <div>商品评价（{{ this.productEvaluate.length }}）</div>
          <div>
            好评度
            <span>{{ this.reputation }}%</span>
          </div>
        </div>
        <div class="evaluate-list" v-if="this.productEvaluate.length">
          <div
            class="evaluate-list-item"
            v-for="(item, index) in this.productEvaluate"
            :key="index"
          >
            <div class="item-top">
              <img :src="item.img" alt="" class="item-touxiang" />
              <div class="item-name">
                <p>{{ item.buy_user }}</p>
                <p>2019-06-08</p>
              </div>
              <div class="item-eva">
                <div></div>
                <p>
                  {{
                    item.grade == 1
                      ? "很满意"
                      : item.grade == 2
                      ? "满意"
                      : "不满意"
                  }}
                </p>
              </div>
            </div>
            <p>{{ item.text }}</p>
          </div>
        </div>
        <div class="more2" v-if="!this.productEvaluate.length">暂无数据</div>
      </div>
      <div class="mask" @click="showPopup" v-show="show">
        <div>
          <van-icon name="success" color="#FC6642" size=".5rem" />
        </div>
        <p>添加成功，在购物车等待亲~</p>
      </div>
      <div class="mask" v-show="showShareUrl">
        <div>
          <van-icon name="success" color="#FC6642" size=".5rem" />
        </div>
        <p>链接复制成功</p>
      </div>
    </div>
    <div class="footbar">
      <div class="home-page">
        <van-icon name="shop-o" size=".20rem" @click="toHome" />首页
      </div>
      <div class="shop-car">
        <van-icon
          name="shopping-cart-o"
          size=".20rem"
          :info="allIsbuy"
          @click="toShopCar"
        />购物车
      </div>
      <div class="add-shopCar" @click="showPopup()">加入购物车</div>
      <div class="go-buy" @click="pay">直接购买</div>
    </div>
    <van-popup
      v-model="show2"
      round
      position="bottom"
      :style="{ height: '25%' }"
    >
      <div class="share-box">
        <div class="box-tit">
          <span>分享至</span>
        </div>
        <div class="box-con">
          <div class="box-con-item" @click="share1">
            <img src="../../../assets/image/pengyou.png" alt />
            <div>复制链接</div>
          </div>
          <div class="box-con-item" @click="share2">
            <img src="../../../assets/image/weibo.png" alt />
            <div>微博</div>
          </div>
          <div class="box-con-item" @click="share3">
            <img src="../../../assets/image/qq.png" alt />
            <div>QQ</div>
          </div>
          <div class="box-con-item" @click="share4">
            <img src="../../../assets/image/QQ-zone.png" alt />
            <div>QQ空间</div>
          </div>
        </div>
        <div class="box-foot" @click="closeShare" id="foot">取消</div>
        <input type="text" id="url" :value="url" class="dis" />
      </div>
    </van-popup>
  </Layout>
</template>
<script>
import { Icon } from "vant";
import { getDetail, addIsBuy, cartList, getProductEvaluate } from "api/cart";
import { Swipe, SwipeItem, Popup } from "vant";
import "vant/lib/icon/local.css";
import Layout from "components/layout";
import { getSession } from "utils";
export default {
  computed: {
    morechange: function() {
      return Date.now();
    }
  },
  props: {},
  components: {
    Layout,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    [Popup.name]: Popup
  },
  data() {
    return {
      show: false,
      show2: false,
      showShareUrl: false,
      timer: null,
      productDetail: {},
      allIsbuy: 0,
      url: "",
      buyhistoryshow: false,
      productEvaluate: []
    };
  },
  computed: {
    reputation: function() {
      if (this.productEvaluate.length) {
        let num = 0;
        this.productEvaluate.forEach(item => {
          if (item.grade < 3) {
            ++num;
          } else {
          }
        });
        return parseInt((num / this.productEvaluate.length) * 100);
      } else {
        return 0;
      }
    }
  },
  methods: {
    buyhistory() {
      this.buyhistoryshow = true;
    },
    share4() {
      let id = this.$route.params.id;
      let img = this.productDetail.img;
      var shareqqzonestring = `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://169.254.4.69:8080/list/detail/${id}?sharesource=qzone&title=一键分享到QQ空间&pics=${img}&summary=将此商品分享到空间中`;
      window.console.log(img, "img");
      window.open(
        shareqqzonestring,
        "newwindow",
        "height=400,width=400,top=100,left=100"
      );
      this.show2 = false;
    },
    share3() {
      let id = this.$route.params.id;
      var param = {
        url: url || window.location.href,
        desc: "" /*分享理由*/,
        title: `http://localhost:8080/list/detail/${id}` /*分享标题(可选)*/,
        summary: "" /*分享描述(可选)*/,
        pics: "" /*分享图片(可选)*/,
        flash: "" /*视频地址(可选)*/,
        site: "" /*分享来源 (可选) */
      };
      var s = [];
      for (var i in param) {
        s.push(i + "=" + encodeURIComponent(param[i] || ""));
      }
      var targetUrl =
        "http://connect.qq.com/widget/shareqq/iframe_index.html?" + s.join("&");
      window.open(targetUrl, "qq", "height=520, width=720");
      this.show2 = false;
    },
    share2() {
      var param = {
        url: url || window.location.href,
        type: "3",
        count: "1" /** 是否显示分享数，1显示(可选)*/,
        appkey: "" /** 您申请的应用appkey,显示分享来源(可选)*/,
        title: "" /** 分享的文字内容(可选，默认为所在页面的title)*/,
        pic: "" /**分享图片的路径(可选)*/,
        ralateUid: "" /**关联用户的UID，分享微博会@该用户(可选)*/,
        rnd: new Date().valueOf()
      };
      var temp = [];
      for (var p in param) {
        temp.push(p + "=" + encodeURIComponent(param[p] || ""));
      }
      var targetUrl =
        "http://service.weibo.com/share/share.php?url=www.baidu.com&title=分享这个商品&searchPic=true";
      window.open(targetUrl, "sinaweibo", "height=430, width=400");
      this.show2 = false;
    },
    share1() {
      var ele = document.getElementById("url");
      ele.select();
      document.execCommand("Copy");
      this.show2 = false;
      this.showShareUrl = true;
      setTimeout(() => {
        this.showShareUrl = false;
      }, 1500);
    },
    closeShare() {
      this.show2 = false;
    },
    shareClick() {
      this.show2 = true;
    },
    showPopup() {
      const token = getSession("token");
      if (token) {
        if (this.show) {
          this.timer = null;
        } else {
          this.show = true;
          this.timer = setTimeout(() => {
            this.show = false;
          }, 1500);
        }
        addIsBuy(this.productDetail.id);
        let flag = true;
        this.list.forEach(item => {
          if (item.id == this.productDetail.id) {
            flag = false;
          }
        });
        if (flag) {
          this.allIsbuy = this.allIsbuy + 1;
        }
      } else {
        this.$router.push("/login");
      }
    },
    toShopCar() {
      this.$router.push("/list/shop");
    },
    toHome() {
      this.$router.push("/list/home");
    },
    pay() {
      this.$router.push({
        path: "/orderDetail",
        params: {
          name: "橘子味窝窝头",
          num: 1,
          price: 56.91
        }
      });
    }
  },

  created() {
    let id = this.$route.params.id;
    getDetail(id).then(res => {
      this.productDetail = res.data;
    });
    cartList().then(res => {
      this.list = res.result.filter(item => item.isbuy == "true");
      this.allIsbuy = this.list.length;
    });
    this.url = `http://localhost:8080/list/detail/${id}`;
    getProductEvaluate(id).then(res => {
      if (res.code) {
        this.productEvaluate = res.data;
      } else {
        this.productEvaluate = [];
      }
    });
  },
  mounted() {},
  update() {}
};
</script>
<style scoped lang="scss">
%juzhong {
  display: flex;
  justify-content: center;
  align-items: center;
}
.dis {
  opacity: 0;
  position: absolute;
  left: 0;
}
.share-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  font-size: 0.14rem;
  .box-tit {
    height: 20%;
    border-bottom: 1px solid #ccc;
    @extend %juzhong;
    width: 100%;
    font-size: 0.14rem;
  }
  .box-con {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    flex: 1;
    .box-con-item {
      width: 25%;
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 0.14rem;
      img {
        width: 0.45rem;
        height: 0.45rem;
        margin-bottom: 0.05rem;
      }
    }
  }
  .box-foot {
    width: 100%;
    height: 22%;
    font-size: 0.14rem;
    @extend %juzhong;
    border-top: 1px solid #ccc;
  }
}
.mask {
  width: 2rem;
  height: 1rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  div {
    width: 100%;
    text-align: center;
  }
  p {
    width: 100%;
    color: #fff;
    font-size: 0.12rem;
    text-align: center;
  }
}
img {
  width: 100%;
}
%box-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row nowrap;
  margin-bottom: 0.2rem;
  div:nth-of-type(1) {
    font-weight: 600;
    font-size: 0.14rem;
  }
  div:nth-of-type(2) {
    font-size: 0.16rem;
    span {
      color: #fe7a67;
    }
  }
}
.evaluate {
  padding: 0.2rem 0 0.2rem 0.2rem;
  background: #fff;
  margin-bottom: 0.1rem;
  .more2 {
    height: 0.5rem;
    line-height: 0.5rem;
    color: #a2a2a2;
    text-align: center;
    font-size: 0.12rem;
    padding-right: 0.2rem;
  }
  .evaluate-tit {
    @extend %box-between;
    padding-right: 0.2rem;
  }
  .evaluate-list {
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;

    .evaluate-list-item {
      display: inline-block;
      width: 3rem;
      margin-right: 0.2rem;
      background: #fbfbfb;
      padding: 0.1rem;
      .item-top {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        .item-touxiang {
          width: 0.5rem;
          height: 0.5rem;
          margin: 0.1rem;
          border-radius: 50%;
          background: #a2a2a2;
        }
        .item-name {
          flex: 1;
          p:nth-of-type(1) {
            font-size: 0.14rem;
            font-weight: 600;
          }
          p:nth-of-type(2) {
            margin-top: 0.08rem;
            font-size: 0.14rem;
            color: #878787;
          }
        }
        .item-eva {
          width: 1rem;
          font-size: 0.14rem;
          text-align: right;
          color: #878787;
        }
      }
      > p {
        padding-left: 0.2rem;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.14rem;
        color: #878787;
      }
    }
  }
}
.buy-history {
  padding: 0.2rem 0.2rem 0;
  background: #fff;
  margin-bottom: 0.1rem;
  .more {
    height: 0.5rem;
    line-height: 0.5rem;
    color: #a2a2a2;
    text-align: center;
    font-size: 0.12rem;
  }
  .buy-history-tit {
    @extend %box-between;
  }
  .buy-history-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    height: 0.8rem;
    font-size: 0.16rem;
    .touxiang {
      margin: 0.05rem 0.2rem 0.05rem 0.05rem;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 50%;
    }
    .buy-history-name {
      flex: 1;
      font-size: 0.14rem;
      p:nth-of-type(2) {
        color: #a2a2a2;
        font-size: 0.12rem;
        margin-top: 0.05rem;
      }
    }
    .buy-history-num {
      font-size: 0.14rem;
      width: 1rem;
      span {
        color: #fe7a67;
      }
    }
  }
}
.tuijian {
  @extend %bj;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  h3 {
    color: #fc6642;
    font-size: 0.16rem;
    margin-bottom: 0.1rem;
  }
  .tuijian-box {
    padding: 0.2rem;
    background: #fbfbfb;
    color: #b4b4b4;
    font-size: 0.14rem;
  }
}
.title {
  @extend %bj;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  .title-con {
    flex: 8;
    h3 {
      font-size: 0.14rem;
      margin-bottom: 0.1rem;
    }
    p {
      color: #666;
    }
  }
  .title-share {
    flex: 2;
    @extend %column;
    .icon-border {
      width: 0.35rem;
      height: 0.35rem;
      @extend %column;
      border: 3px solid #fe3212;
      border-radius: 50%;
      margin-bottom: 0.05rem;
    }
    span {
      color: #fe3212;
      font-size: 0.12rem;
    }
  }
}
.price-wrap {
  height: 0.6rem;
  background: #fff;
}
.price {
  height: 100%;
  background: #fe3212;
  color: #fff;
  font-size: 0.13rem;
  border-radius: 0.2rem 0.2rem 0 0;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-top: 0.1rem;
  .price-num {
    .price-number {
      font-size: 0.2rem;
    }
    .price-history {
      text-decoration: line-through;
    }
  }
}
%bj {
  width: 100%;
  background: #fff;
  padding: 0.1rem;
}
%column {
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
.main-content {
  display: flex;
  flex-flow: column wrap;
}
.container {
  height: 92%;
  overflow: auto;
  background: #f8f8f8;
  position: relative;
}
.footbar {
  height: 8%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  .home-page {
    @extend %column;
    width: 15%;
    font-size: 0.12rem;
  }
  .shop-car {
    @extend %column;
    width: 15%;
    font-size: 0.12rem;
  }
  .add-shopCar {
    width: 30%;
    @extend %column;
    background: #ffba2f;
    color: #fff;
    height: 100%;
    font-size: 0.14rem;
  }
  .go-buy {
    width: 40%;
    @extend %column;
    background: #fe3212;
    color: #fff;
    height: 100%;
    font-size: 0.14rem;
  }
}
</style>