<template>
  <div>
    <el-container>
      <el-aside width="400px">
        <JDData msg="种类"></JDData>
      </el-aside>
      <el-container>
        <el-header>
          京东数据分析
        </el-header>
        <el-main>
          <JDSearch></JDSearch>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import JDData from '@/components/JDData.vue'
import JDSearch from '@/components/JDSearch.vue'

export default {
  name: 'JDshow',
  components: {
    JDData,
    JDSearch
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>