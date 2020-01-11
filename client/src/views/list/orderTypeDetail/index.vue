<template>
  <div>this is orderTypeDetail page</div>
</template>

<script>
import { orderTypeDetail } from "api/orderType";
export default {
  data() {
    return {
      orderTypeDetailList: []
    };
  },
  created() {
    let id = this.$route.params.id;
    // console.log(this.$route.params.id, "route");
    orderTypeDetail(id).then(res => {
      // console.log(res.result[0].order_list  , "ressssss");
      this.orderTypeDetailList = res.result;
    });
  }
};
</script>

<style>
</style>