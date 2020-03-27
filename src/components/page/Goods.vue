<template>
  <div class="goods">
    <div id="top"></div>
    <div id="bottom"></div>
  </div>
</template>
<script>

export default {
  name: 'Goods',
  methods: {
    pie(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("top"));
      // 指定图表的配置项和数据
      var option = {
          title: {
              text: 'KFC-信息统计',
              subtext: '肯德基',
              left: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
              orient: 'vertical',
              left: 'left',
              data: ['汉堡', '小食', '饮料', '套餐', '优惠商品']
          },
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '60%'],
                  data: [
                      {value: 335, name: '汉堡'},
                      {value: 310, name: '小食'},
                      {value: 234, name: '饮料'},
                      {value: 135, name: '套餐'},
                      {value: 1548, name: '优惠商品'}
                  ],
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    map(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("bottom"));    
      var option1 = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['汉堡', '小食', '饮料', '套餐', '优惠商品', 'KEC定制', '冰淇淋', '卤味', '茶饮']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '汉堡',
                type: 'bar',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: '小食',
                type: 'bar',
                stack: '广告',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '饮料',
                type: 'bar',
                stack: '广告',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '套餐',
                type: 'bar',
                stack: '广告',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '优惠商品',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                    data: [
                        [{type: 'min'}, {type: 'max'}]
                    ]
                }
            },
            {
                name: 'KEC定制',
                type: 'bar',
                barWidth: 5,
                stack: 'KEC定制',
                data: [620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name: '冰淇淋',
                type: 'bar',
                stack: '冰淇淋',
                data: [120, 132, 101, 134, 290, 230, 220]
            },
            {
                name: '卤味',
                type: 'bar',
                stack: '卤味',
                data: [60, 72, 71, 74, 190, 130, 110]
            },
            {
                name: '茶饮',
                type: 'bar',
                stack: '茶饮',
                data: [62, 82, 91, 84, 109, 110, 120]
            }
        ]
      };
      // 使用刚指定的配置项和数据显示图中。
      myChart.setOption(option1);        
    }
  },
  mounted() {
    this.pie();
    this.map()
  },
}
</script>
<style scoped>
  #top{
    width: 100%;
    height:400px;
    float: right;
    padding-top: 20px;
    border-bottom: 1px solid #e2dfdf;
  }
  #bottom{
    width: 100%;
    height:400px;
    clear: both;
    padding-top: 20px;
  }
</style>