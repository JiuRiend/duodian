<template>
  <div class="school-conatiner">
    <van-row>
      <van-nav-bar
        title="校园超市"
        left-arrow
        style="fontWeight:bold"
        @click-left="onClickLeft"
      />
      <div>
        <van-cell-group>
          <van-field
            autofocus="autofocus"
            v-model="value"
            placeholder="请输入商品名称 "
            style="paddingLeft:6%"
            @input="search"
            @keydown="changevue"
          />
        </van-cell-group>
        <span class="concel" @click="concel">取消</span>
        <van-list>
          <van-cell
            v-for="(item, index) in list"
            :key="index"
            :title="item.name"
          />
        </van-list>
        <div class="history">
          <h4>历史搜索</h4>
          <span @click="deleteHistory">
            <van-icon name="delete" />清空历史记录
          </span>
        </div>
        <ul class="content">
          <li v-for="(item, index) in historys" :key="index">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </van-row>
  </div>
</template>

<script>
import { Field, Icon, NavBar, Row, Cell, CellGroup, List } from "vant";
import {
  search,
  change_history,
  del_history,
  find_history
} from "api/search/index.js";
export default {
  data() {
    return {
      value: "",
      list: [],
      historys: []
    };
  },
  methods: {
    /**
     *回退主页面
     */
    onClickLeft: function() {
      this.$router.history.go(-1);
    },
    /**
     * 模糊搜索
     */
    search: function() {
      search({ value: this.value }).then(res => {
        if (this.value == "") {
          this.list = [];
        } else {
          this.list = res.data.result;
        }
      });
    },
    /**
     * 添加历史记录
     */
    changevue: function(e) {
      if (e.code == "Enter") {
        let obj = {};
        if (this.value) {
          obj.value = this.value;
        }
        change_history(obj).then(() => {
          if (this.list.length) {
            this.$router.push(`/searchlist/${this.value}`);
          }
        });
      }
    },
    /**
     * 取消输入
     */
    concel: function() {
      this.value = "";
      this.list = [];
    },
    /**
     * 删除历史记录
     */
    deleteHistory: function() {
      this.historys = [];
      del_history();
    }
  },
  created() {
    /**
     * 历史记录
     */
    find_history().then(res => {
      this.historys = res.history.history_masage;
      this.historys = this.historys.slice(0, 5);
    });
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Icon.name]: Icon,
    [List.name]: List,
    [NavBar.name]: NavBar,
    [Row.name]: Row
  }
};
</script>
<style scoped lang="scss">
%juzhong {
  display: flex;
  align-items: center;

  justify-content: center;
}
.box {
  @extend %juzhong;
}

.concel {
  position: absolute;
  right: 4%;
  top: 0.6rem;
  z-index: 2;
}
.history {
  display: flex;
  height: 0.6rem;
  width: 100%;
  line-height: 0.6rem;
  h4 {
    flex: 7.5;
    margin-left: 3%;
  }
  span {
    flex: 2.5;
    color: #ccc;
    font-size: 12px;
  }
}
.content {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 20%;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    color: #ccc;
  }
}
</style>