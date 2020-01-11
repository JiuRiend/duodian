<template>
  <Layout title="校园超市" :isShow="false">
    <Mark />
    <div class="search">
      <van-icon name="location-o" class="location" />
      <span>{{ ads }}</span>
      <van-cell-group class="ipt">
        <van-field
          v-model="value"
          placeholder="请输入商品名称"
          style="paddingLeft:8%"
          @focus="search"
        />
      </van-cell-group>
      <van-icon name="search" class="searchmasage" />
    </div>
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swiper_data" :key="index">
          <img :src="item.img" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="icon">
      <dl
        v-for="(item, index) in this.icon_data"
        :key="index"
        @click="outin(item.id)"
      >
        <dt></dt>
        <dd>{{ item.name }}</dd>
      </dl>
    </div>
    <div class="title">
      <div class="left"></div>
      <div class="right">
        <span>大家都在买</span>
      </div>
    </div>
    <div class="pic">
      <div class="item" @click="seafood">
        <img src="@/assets/img/首页1_02.png" alt="" />
      </div>
      <div class="item" @click="beverages">
        <img src="@/assets/img/首页1_03.png" alt="" />
      </div>
      <div class="item" @click="thing">
        <img src="@/assets/img/首页1_04.png" alt="" />
      </div>
    </div>
    <div class="tab">
      <van-tabs
        v-model="active"
        sticky
        animated
        swipeable
        :title-inactive-color="'black'"
        :title-active-color="'#ee0a24'"
        :line-height="0"
        :offset-top="46"
      >
        <van-tab title="新进爆款">
          <CommodityCard
            v-for="item in newArr"
            :key="item.id"
            :dataObj="item"
          />
        </van-tab>
        <van-tab title="每日必抢">
          <CommodityCard v-for="item in hot" :key="item.id" :dataObj="item" />
        </van-tab>
        <van-tab title="水果">
          <CommodityCard v-for="item in friut" :key="item.id" :dataObj="item" />
        </van-tab>
        <van-tab title="蔬菜">
          <CommodityCard
            v-for="item in vegetables"
            :key="item.id"
            :dataObj="item"
          />
        </van-tab>
        <van-tab title="肉蛋">
          <CommodityCard v-for="item in meat" :key="item.id" :dataObj="item" />
        </van-tab>
        <van-tab title="零食">
          <CommodityCard
            v-for="item in snacks"
            :key="item.id"
            :dataObj="item"
          />
        </van-tab>
      </van-tabs>
      <div v-if="more" class="loadMore" @click="loadMore(active)">
        点击空白处加载更多
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "components/layout";
import Mark from "components/mark";
import { getShopData, loadMore } from "@/api/home";
import { mapMutations } from "vuex";
import CommodityCard from "components/CommodityCard";
import {
  Field,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Card,
  Tag,
  Toast
} from "vant";
import { getswiper, geticon } from "api/home";
import { mapState } from "vuex";
// import { getLocal } from "utils";

export default {
  data() {
    return {
      value: "",
      active: 0,
      swiper_data: [],
      icon_data: [],
      newArr: [],
      hot: [],
      friut: [],
      vegetables: [],
      meat: [],
      snacks: [],
      more: true
      // ShowMark: true
    };
  },
  computed: { ...mapState("address", ["ads"]) }, //...mapActions ...mapGetters
  created() {
    getswiper().then(res => {
      this.swiper_data = res.result.swiper_data;
    });
    geticon().then(res => {
      this.icon_data = res.result.icon_data;
    });
    getShopData().then(res => {
      this.newArr = res.data.new;
      this.hot = res.data.hot;
      this.friut = res.data.friut;
      this.vegetables = res.data.vegetables;
      this.meat = res.data.meat;
      this.snacks = res.data.snacks;
    });
    // this.isShow = getLocal("showMark");
  },
  methods: {
    ...mapMutations("classify", ["filetrTitle"]),
    /**
     * 定位地址
     */
    location: function() {
      this.$router.push("/addressPage");
      // console.log(1);
    },
    /**
     * 热卖生活用品
     */
    thing: function() {
      this.$router.push(`/list/list/3`);
    },
    /**
     * 热卖饮料
     */
    beverages: function() {
      this.$router.push(`/list/list/2`);
    },
    /**
     * 热卖海鲜
     */
    seafood: function() {
      this.$router.push(`/list/list/1`);
    },
    /**
     *跳搜索接口
     */
    search: function() {
      this.$router.push("/search");
    },
    /**
     * 跳icon列表分类
     */
    outin: function(id) {
      this.$router.push(`/list/classify/detail/${id}`);
    },
    // 点击加载更多
    loadMore(active) {
      switch (active) {
        case 0:
          loadMore(active, this.newArr.length).then(res => {
            this.newArr = this.newArr.concat(res.data);
            this.afterLoad(res.data);
          });
          break;
        case 1:
          loadMore(active, this.hot.length).then(res => {
            this.hot = this.hot.concat(res.data);
            this.afterLoad(res.data);
          });
          break;
        case 2:
          loadMore(active, this.friut.length).then(res => {
            this.friut = this.friut.concat(res.data);
            this.afterLoad(res.data);
          });
          break;
        case 3:
          loadMore(active, this.vegetables.length).then(res => {
            this.vegetables = this.vegetables.concat(res.data);
            this.afterLoad(res.data);
          });
          break;
        case 4:
          loadMore(active, this.meat.length).then(res => {
            this.meat = this.meat.concat(res.data);
            this.afterLoad(res.data);
          });
          break;
        case 5:
          loadMore(active, this.snacks.length).then(res => {
            this.snacks = this.snacks.concat(res.data);
            this.afterLoad(res.data);
          });
          break;
        default:
          break;
      }
    },
    // 切换tab页
    changeTab() {
      this.more = true;
    },
    afterLoad(data) {
      if (data.length < 3) {
        this.$toast("没有更多数据了哦");
        this.more = false;
      }
    }
  },
  components: {
    Layout,
    Mark,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Card.name]: Card,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Tag.name]: Tag,
    CommodityCard
  }
};
</script>

<style lang='scss' scoped>
.map {
  width: 100%;
  height: 300px;
}
%juzhong {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  @extend %juzhong;
}
.search {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  position: relative;
  span {
    float: left;
    height: 100%;

    font-size: 9px;
    margin-left: 7%;
    line-height: 0.44rem;
  }
  .location {
    height: 0.44rem;
    position: absolute;
    left: 3%;
    top: 0.1rem;
    z-index: 5;
  }
  .ipt {
    width: 85%;
    margin-left: 15%;
  }
  .searchmasage {
    height: 0.44rem;
    position: absolute;
    right: 4%;
    top: 0.1rem;
    z-index: 23;
  }
}
div.van-tab--active {
  font-size: 0.19rem;
}

.swiper {
  width: 100%;
  height: 1.5rem;
  .van-swipe {
    width: 100%;
    height: 100%;
    .van-swipe-item {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.icon {
  height: 1.8rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  dl {
    width: 20%;
    height: 0.9rem;
    display: flex;
    flex-direction: column;
    dt {
      flex: 7;
      text-align: center;
      background: url("../../../assets/img/icon1.png") no-repeat 50%;
      background-size: 70px;
    }
    dd {
      flex: 3;
      text-align: center;
      font-size: 12px;
      color: #858585;
    }
  }
}
.title {
  height: 0.6rem;
  width: 100%;
  line-height: 0.6rem;
  display: flex;
  .left {
    flex: 3;
    background: url("../../../assets/img/logo.png") no-repeat 0px 10px;
    background-size: 110px;
    img {
      width: 100%;
      height: 60%;
      margin-top: 10%;
    }
  }
  .right {
    flex: 7;
  }
}
.pic {
  height: 1.5rem;
  width: 100%;
  display: flex;
  .item {
    height: 1.5rem;
    width: 100%;
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.loadMore {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #858585;
  font-size: 0.12rem;
}
</style>
