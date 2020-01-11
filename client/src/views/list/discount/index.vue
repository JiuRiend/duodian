<template>
  <Layout title="我的优惠券" :isShow="true">
    <ul class="discount-uls">
      <li v-for="item in discountList" :key="item.id">
        <h2 class="subtract">
          - {{item.subtract}}
          <span>元</span>
        </h2>

        <p>满{{item.satisfy}}元可用</p>
        <div>
          <span>—{{item.start_time}}</span>
          -
          <span>{{item.end_time}}—</span>
        </div>
      </li>
    </ul>
  </Layout>
</template>

<script>
import Layout from "components/layout";
import { getDiscount } from "api/orderType";
export default {
  components: { Layout },
  data() {
    return {
      discountList: []
    };
  },
  created() {
    getDiscount().then(res => {
      this.discountList = res.result;
    });
  }
};
</script>

<style lang="scss" scope>
.discount-uls {
  width: 100%;
  > li {
    width: 94%;
    height: 1rem;
    margin: 0.15rem auto;
    box-sizing: border-box;
    padding: 0.1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 33px 20px -20px rgba(0, 0, 0, 0.11),
      0px 0px 17px -3px rgba(0, 0, 0, 0.06);
    border-radius: 0.06rem;
    border: 1px solid rgba(240, 240, 240, 1);
    > h2,
    > p,
    > div {
      flex: 1;
      display: flex;
      align-items: flex-end;
    }
    > p,
    > div {
      font-size: 12px;
    }
    > h2 > span {
      padding-left: 0.05rem;
      font-size: 14px;
    }
  }
}
</style>