<template>
  <div class="jddata">
  <template>
    <el-table
      :data="items"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="数据类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数据量">
      </el-table-column>
    </el-table>
  </template>
    <el-button @click="getdata">获取</el-button>
  </div>
</template>

<script>
import { getCount } from "../../api/api.js";

import axios from "axios";

export default {
  name: "JDData",
  props: {
    msg: String
  },
  data() {
    return {
      items: [
        { name: "商品种类", index: "Categories", count: 0 },
        { name: "商品", index: "Products", count: 0 },
        { name: "评论", index: "Comments", count: 0 },
        { name: "评论图片", index: "CommentImages", count: 0 },
        { name: "评论概要", index: "CommentSummaries", count: 0 },
        { name: "热门评论", index: "HotCommentTags", count: 0 },
        { name: "网店", index: "Shopes", count: 0 },               
      ]
    };
  },
  methods: {
    getdata() {
      for (let item of this.items) { 
        getCount(item.index).then(response => {
            const result = JSON.stringify(response.data);
            item.count = result;
            console.log(item.count)
        });
      }
    }
  },
  mounted() {
    console.log("init");
  },
  computed: {
    itemCount: function() {
      return 222;
    }
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
