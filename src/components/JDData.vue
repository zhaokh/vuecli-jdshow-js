<template>
  <div class="jddata">
    <el-table
      :data="items"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="数据类型"
        height="60"
        width="180">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数据量"
        height="60"
        width="180">
      </el-table-column>
    </el-table>
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


