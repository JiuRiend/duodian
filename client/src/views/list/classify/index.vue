<template>
  <Layout title="分类" :isShow="false">
    <Wrap :isShow="isWrap" @handleRank="handleRank" @handlewrap="handlewrap" />
    <div class="container">
      <van-search
        placeholder="请输入搜索关键词"
        shape="round"
        @click="goToSearch"
      />
      <div class="bx">
        <div class="left">
          <span
            :class="['tab', { active: item.activeIndex == activeIndex }]"
            v-for="(item, index) in items"
            :key="index"
            @click="clicks(item.activeIndex)"
            >{{ item.text }}</span
          >
        </div>
        <div class="right">
          <div class="sort-filter">
            <van-tabs @change="handletitle">
              <van-tab title="全部" key="9999" />
              <van-tab
                v-for="title in titleList"
                :title="title.name"
                :key="title.id"
              >
              </van-tab>
            </van-tabs>
            <span class="filter" @click="handleFilter"
              ><van-icon name="filter-o"
            /></span>
          </div>
          <div class="right-content">
            <div
              v-for="(item, index) in inner"
              :key="index"
              class="list"
              @click="goToDetail(item.id)"
            >
              <div><img :src="item.img" alt v-lazy="item.img" /></div>
              <div class="in">
                <b>{{ item.name }}</b>
                <p class="share">
                  累计{{ item.salesVolume }}万份/已拼{{ item.share }}份
                </p>
                <p class="shopType">{{ item.shopType }}</p>
                <p class="many">
                  ￥<span class="presentPrice">{{ item.presentPrice }}</span
                  ><s class="originalPrice">￥{{ item.originalPrice }}</s>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import {
  Icon,
  Tab,
  Tabs,
  DropdownMenu,
  DropdownItem,
  Notify,
  Search
} from "vant";
import Wrap from "components/classify/wrap";
import { search, allshop, getClassifyTitleList } from "api/cart.js";
import Layout from "components/layout";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      activeIndex: 0,
      items: [],
      inner: [],
      innerList: [],
      titleList: [],
      typeList: [],
      isWrap: false
    };
  },
  computed: {
    ...mapState("classify", ["getShopTypeList", "innerTypeList"])
  },
  props: {},
  components: {
    Layout,
    Wrap,
    [Search.name]: Search,
    [Icon.name]: Icon,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
  },
  methods: {
    ...mapActions("classify", ["_getShopTypeList"]),
    clicks(id) {
      this.activeIndex = id;
      this.eve(id);
      this.getProductTitleList(id);
    },
    eve(id) {
      allshop().then(res => {
        this.inner = res.data.filter(item => item.activeIndex == id);
        this.innerList = this.inner;
      });
    },
    goToDetail(id) {
      this.$router.push({
        name: "商品详情",
        params: {
          id: id
        }
      });
    },
    goToSearch() {
      this.$router.push("/search");
    },
    handleFilter() {
      this.isWrap = true;
    },
    handlewrap(isShow) {
      this.isWrap = isShow;
    },
    handleRank(id) {
      let productList = this.inner;
      switch (id) {
        case 0:
          return productList;
        case 1:
          this.inner = productList.sort((a, b) => {
            return b.salesVolume - a.salesVolume;
          });
          break;
        case 2:
          this.inner = productList.sort((a, b) => {
            return b.presentPrice - a.presentPrice;
          });
          break;
        case 3:
          this.inner = productList.sort((a, b) => {
            return a.presentPrice - b.presentPrice;
          });
          break;
        default:
          Notify("数据找不到了，请刷新重试吆！");
          break;
      }
      this.isWrap = false;
    },
    handletitle(name) {
      if (name === 0) {
        this.inner = this.innerList;
      } else {
        this.inner = this.innerList.filter(
          item => item.allShopType === name - 1
        );
      }
    },
    getProductTitleList(id) {
      getClassifyTitleList(id).then(res => {
        this.titleList = res.result;
      });
    }
  },
  created() {
    search().then(res => {
      this.items = res.data;
    });
    this.eve(this.activeIndex);
    this._getShopTypeList();
    this.getProductTitleList(this.activeIndex);
  }
};
</script>

<style lang='scss' scoped>
.container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.bx {
  width: 100%;
  display: flex;
  height: 100%;
  .left {
    width: 0.88rem;
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    line-height: 0.5rem;
    text-align: center;
    color: #999;
    z-index: 3;
    .tab {
      height: 0.5rem;
      text-align: center;
    }
  }
  .right {
    flex: 8;
    padding-top: 0.4rem;
    position: relative;
  }
}
.sort-filter {
  width: 100%;
  padding-left: 0.1rem;
  position: absolute;
  top: 0;
  right: 0.1rem;
  line-height: 0.4rem;
  display: flex;
  background: #fff;
  z-index: 2;
  .van-tabs {
    width: 2.4rem;
  }
  .filter {
    position: absolute;
    top: 0;
    right: 0;
    width: 0.4rem;
    padding-left: 0.05rem;
    line-height: 0.44rem;
    font-size: 18px;
    color: orangered;
    z-index: 1;
  }
}
.right-content {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.active {
  background: #eee;
  color: #000;
}

.list {
  display: flex;
  margin: 0.08rem;
  img {
    width: 1rem;
    height: 1rem;
  }
  .in {
    margin-left: 0.1rem;
    b {
      font-size: 0.12rem;
    }
    .share {
      margin-top: 0.05rem;
      font-size: 0.12rem;
      color: #ccc;
    }
    .shopType {
      text-align: center;
      width: 0.4rem;
      font-size: 0.12rem;
      border-radius: 10px;
      left: 0.2rem;
      background: orangered;
      color: #fff;
      margin: 0.05rem 0;
    }

    .many {
      color: orangered;
    }

    .presentPrice {
      font-size: 18px;
    }

    .originalPrice {
      color: #ccc;
      margin-left: 5px;
    }

    .van-icon {
      color: orangered;
      font-size: 0.3rem;
      position: relative;
      left: 1.2rem;
      top: -0.3rem;
    }
  }
}
</style>