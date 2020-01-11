<template>
  <Layout title="八维超市" :isShow="true" :showFooter="false">
    <AddressaAsembly />
  </Layout>
</template>

<script>
import Layout from "components/layout";
import AddressaAsembly from "components/AddressaAsembly";

export default {
  components: { Layout, AddressaAsembly },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang='scss' scoped>
</style>