### 在 vue 中实现 echarts 微博签到

[引入echarts]:(http://echarts.baidu.com/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)

[微博签到数据下载地址]:(http://www.echartsjs.com/gallery/data/asset/data/weibo.json)

上代码

```js
<template>
  <div class="density-map"  @dblclick='openDensityMap'>
    <div id="mapChart" ></div>
  </div>
</template>

<script>

let echarts = require('echarts/lib/echarts')
var option = null;
require('echarts/lib/chart/bar')
require('echarts/lib/chart/scatter')
require('echarts/lib/chart/map')
require('echarts/map/js/china')
require('echarts/map/js/province/hebei')
//按需引入地理模块

import weiboDatas from '../assets/weibo.json'
//weibo.json中的数据即下载的数据（数据直接放入weibo.json中就好）

export default {
  name: 'densitymap',
  data () {
    return {
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    openDensityMap: function() {
      this.$router.push({name: 'densityMap'})
    },
    drawLine: function(){
      let mapChart = echarts.init(document.getElementById('mapChart'))
      mapChart.showLoading();

      mapChart.hideLoading();
      // $.getJSON('../json/weibo.json', function (weiboData) {
      var weiboData = weiboDatas.map(function (serieData, idx) {
          var px = serieData[0] / 1000;
          var py = serieData[1] / 1000;
          var res = [[px, py]];

          for (var i = 2; i < serieData.length; i += 2) {
              var dx = serieData[i] / 1000;
              var dy = serieData[i + 1] / 1000;
              var x = px + dx;
              var y = py + dy;
              res.push([x.toFixed(2), y.toFixed(2), 1]);

              px = x;
              py = y;
          }
          return res;
      // });
      })
      mapChart.setOption(option = {
          backgroundColor: '#000',
          title : {
            text: '小米之家点亮中国',
            subtext: '客流密度图',
            // sublink: 'http://www.thinkgis.cn/public/sina',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff'
            }
          },
          legend: {
              top: '60px',
              left: '110px',
              data: ['强', '中', '弱'],
              textStyle: {
                  color: '#ccc'
              }
          },
          geo: {
              map: '河北',
              //显示全国时此处改为 china
              roam: true,
              label: {
                  emphasis: {
                      show: false
                  }
              },
              itemStyle: {
                  normal: {
                      areaColor: '#323c48',
                      borderColor: '#111'
                  },
                  emphasis: {
                      areaColor: '#2a333d'
                  }
              }
          },
          series: [{
              name: '弱',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: 1,
              large: true,
              itemStyle: {
                  normal: {
                      shadowBlur: 2,
                      shadowColor: 'rgba(37, 140, 249, 0.8)',
                      color: 'rgba(37, 140, 249, 0.8)'
                  }
              },
              data: weiboData[0]
          }, {
              name: '中',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: 1,
              large: true,
              itemStyle: {
                  normal: {
                      shadowBlur: 2,
                      shadowColor: 'rgba(14, 241, 242, 0.8)',
                      color: 'rgba(14, 241, 242, 0.8)'
                  }
              },
              data: weiboData[1]
          }, {
              name: '强',
              type: 'scatter',
              coordinateSystem: 'geo',
              symbolSize: 1,
              large: true,
              itemStyle: {
                  normal: {
                      shadowBlur: 2,
                      shadowColor: 'rgba(255, 255, 255, 0.8)',
                      color: 'rgba(255, 255, 255, 0.8)'
                  }
              },
              data: weiboData[2]
          }]
      })
    }
  }
}
</script>
<style>
.density-map{
  padding-top: 0px;
  display: flex;
  justify-content: center;
  width: 353px;
  flex-grow: 0.3;
  margin-right: 18px;
}
#mapChart{
  width: 100%;
  height: 400px;
  background-color: #000;
}
</style>
```
