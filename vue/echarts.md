[引入echarts]:(http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

```
<template>
  <div id="sales-char" ></div>
</template>

<script>
  let echarts = require('echarts/lib/echarts')
  require('echarts/lib/chart/bar')
  //按需引入模块

  export default {
    name: "sss",
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine: function() {
        let myChart = echarts.init(document.getElementById('sales-chart'))

      }
    }
  }
</script>
```
