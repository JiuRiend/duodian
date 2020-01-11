<template>
  <van-overlay :show="isShowMark">
    <div class="box">
      <span>定位到您在 <van-icon name="location-o" />{{ ads }}</span>
      <div class="address">
        <p>是否切换到该城市进行探索?</p>
        <br />
        <i @click="showCont">取消</i>
        <b @click="addressPage">切换</b>
      </div>
    </div>
  </van-overlay>
</template>
<script>
import BMap from "BMap";
import { Overlay } from "vant";
import { Icon } from "vant";
import { mapMutations, mapState } from "vuex";
import { getLocal, setLocal } from "utils";

export default {
  components: { "van-overlay": Overlay, "van-icon": Icon },
  data() {
    return {
      center: { lng: 118.40387397, lat: 31.91488908 },
      zoom: 15,
      isShowMark: true
    };
  },
  computed: { ...mapState("address", ["showMark", "ads"]) }, //...mapActions ...mapGetters
  methods: {
    ...mapMutations("address", ["changeAddress", "changeads"]),
    addressPage() {
      this.$router.push("/addressPage");
      setLocal("showMark", false);
      this.isShowMark = false;
      this.changeAddress(false);
    },
    showCont() {
      window.console.log(1);
      setLocal("showMark", false);
      this.isShowMark = false;
      this.changeAddress(false);
    },
    locationbtn() {
      // let map = new BMap.Map("allmap");
      // let point = new BMap.Point(this.center.lng, this.center.lat);
      // map.centerAndZoom(point, 15);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(r => {
        // console.log(r);
        if (r.point) {
          this.center.lng = r.longitude;
          this.center.lat = r.latitude;
          // alert("您当前经纬度：" + this.center.lng + "," + this.center.lat);
          var point = new BMap.Point(this.center.lng, this.center.lat); //用当前定位的经纬度查找省市区街道等信息
          var gc = new BMap.Geocoder();
          // console.log(gc);
          gc.getLocation(point, rs => {
            // console.log(point, "......");
            // console.log(rs);
            var addComp = rs.addressComponents;
            // console.log(rs.address); //地址信息
            // console.log(rs.address.city); //弹出当前所在地址
            // console.log(addComp.city);
            // this.$emit("getlocation",addComp.city)
            // this.ads = addComp.city;
            this.changeads(addComp.city);
            // console.log(this.ads, "-----");
          });
          // let markers = new BMap.Marker(r.point);
          // map.addOverlay(markers);
          // map.panTo(r.point);
          // map.centerAndZoom(r.point, 16);
        }
      });
    }
  },
  created() {
    this.locationbtn();
    // window.console.log(Boolean.parseBoolean(getLocal("showMark")));
    if (getLocal("showMark") === "false") {
      this.isShowMark = false;
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.box {
  width: 80%;
  height: 1.4rem;
  background: white;
  border-radius: 0.05rem;
  position: relative;
  top: 50%;
  margin-top: -0.7rem;
  left: 10%;
  padding-top: 0.2rem;
  padding-left: 0.3rem;
  span {
    font-size: 0.18rem;
  }
  .address {
    width: 100%;
    height: 0.7rem;
    font-size: 0.16rem;
    color: #999;
    margin-top: 0.15rem;
    i {
      font-style: normal;
      margin-left: 1.5rem;
      margin-top: 1.9rem;
    }
    b {
      margin-left: 0.2rem;
    }
  }
}
</style>

