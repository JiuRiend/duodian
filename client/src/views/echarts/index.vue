<template>
  <div class="main">
    <div ref="preChart" style="height:3rem;width:100%" />
    <div ref="barChart" style="height:3rem;width:100%" />
  </div>
</template>

<script>
import echarts from "echarts";
import option from "./options";

export default {
  data() {
    return {
      preChart: null,
      barChart: null
    };
  },
  mounted() {
    window.console.log(option.pieChart);
    // 基于准备好的dom，初始化echarts实例
    this.preChart = echarts.init(this.$refs.preChart);
    this.barChart = echarts.init(this.$refs.barChart);
    // 绘制图表
    setTimeout(() => {
      this.preChart.setOption(option.pieChart);
      this.barChart.setOption(option.barGraph);
    }, 0);

    window.addEventListener("resize", () => {
      this.preChart.resize();
      this.barChart.resize();
    });
    setTimeout(() => {
      this.preChart.resize();
      this.barChart.resize();
    }, 0);
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>