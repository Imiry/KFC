<template>
  <div class="pos">
    <div>
        <el-row >
            <el-col :span='7' class="pos-order" id="order-list">
              <el-tabs>
                <el-tab-pane label="点餐">
                  <el-table :data="tableData" border  style="width: 100%" >
                    <el-table-column prop="goodsName" label="商品"   ></el-table-column>
                    <el-table-column prop="count" label="量" width="50"></el-table-column>
                    <el-table-column prop="price" label="金额" width="70"></el-table-column>
                    <el-table-column  label="操作" width="200" fixed="right">
                        <template slot-scope="scope">
                            <el-button type="warning" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                            <el-button type="success" size="small" @click="addOrderList(scope.row)">增加</el-button>
                        </template>
                    </el-table-column>
                  </el-table> 
                  
                  <div class="totalDiv">
                    <small>数量：</small>
                      <strong>{{totalCount}}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                      <small>总计：</small>
                      <strong>{{totalMoney}}</strong> 元
                  </div>

                  <div class="div-btn">
                    <el-button type="warning" >挂单</el-button>
                    <el-button type="danger" @click="delAllGoods()">删除</el-button>
                    <el-button type="success" @click="checkout()">结账</el-button>  
                  </div>
                </el-tab-pane>
                <el-tab-pane label="挂单">
                  挂单
                </el-tab-pane>
                <el-tab-pane label="外卖">
                  外卖
                </el-tab-pane>
              </el-tabs>
            </el-col>

            <!--商品展示-->
            <el-col :span="17">
              <div class="often-goods">
                <div class="title">常用商品</div> 
                <div class="often-goods-list">
                    <ul>
                        <li v-for="(goods,id) in oftenGoods" :key="id" @click="addOrderList(goods)">
                            <span>{{goods.goodsName}}</span>
                            <span class="o-price">￥{{goods.price}}元</span>
                        </li>
                    </ul>
                </div>
                <div class="goods-type">
                  <el-tabs>
                      <el-tab-pane label="汉堡">
                        <ul class='cookList'>
                            <li v-for="(goods,id) in type0Goods" :key="id" @click="addOrderList(goods)" >
                                <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                <span class="foodName">{{goods.goodsName}}</span>
                                <span class="foodPrice">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
                      <el-tab-pane label="小食">
                        <ul class='cookList'>
                            <li v-for="(goods,id) in type1Goods" :key="id"  @click="addOrderList(goods)">
                                <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                <span class="foodName">{{goods.goodsName}}</span>
                                <span class="foodPrice">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
                      <el-tab-pane label="饮料">
                        <ul class='cookList'>
                            <li v-for="(goods,id) in type2Goods" :key="id"  @click="addOrderList(goods)">
                                <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                <span class="foodName">{{goods.goodsName}}</span>
                                <span class="foodPrice">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
                      <el-tab-pane label="套餐">
                        <ul class='cookList'>
                            <li v-for="(goods,id) in type3Goods" :key="id"  @click="addOrderList(goods)">
                                <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                                <span class="foodName">{{goods.goodsName}}</span>
                                <span class="foodPrice">￥{{goods.price}}元</span>
                            </li>
                        </ul>
                      </el-tab-pane>
                  </el-tabs>
                </div>
              </div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pos',
  data () {
    return {
      tableData: [],
      oftenGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:10,
              goodsName:'香脆鸡柳',
              price:17
          },{
              goodsId:11,
              goodsName:'菌菇鸡腿堡',
              price:15
          },{
              goodsId:12,
              goodsName:'六味小吃桶',
              price:80
          }

      ],
      type0Goods:[
          {
              goodsId:1,
              goodsImg:"https://img.4008823823.com.cn/kfcios/Version/621_626971.jpg",
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"https://img.4008823823.com.cn/kfcios/Version/604_581392.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"https://img.4008823823.com.cn/kfcios/Version/604_585900.jpg",
              goodsName:'和风汉堡',
              price:15
          },{
              goodsId:4,
              goodsImg:"https://img.4008823823.com.cn/kfcios/Version/762_995359.jpg",
              goodsName:'菌菇鸡腿堡',
              price:15
          }
      ],
      type1Goods:[
        {
              goodsId:1,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/604_585904.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:2,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/744_935603.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:3,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/604_583173.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:4,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/628_652386.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }

      ],
      type2Goods:[
         {
              goodsId:1,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/604_583035.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:2,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/751_954740.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }

      ],
      type3Goods:[
          {
              goodsId:1,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/735_911166.jpg",
              goodsName:'快乐全家桶',
              price:80
          },          {
              goodsId:2,
               goodsImg:"https://img.4008823823.com.cn/kfcios/Version/735_911133.jpg",
              goodsName:'六味小吃桶',
              price:80
          }
      ],
      totalMoney: 0, //订单总价格
      totalCount: 0  //订单商品总数量
    }
    
  },

  methods: {
    //添加订单列表的方法
    addOrderList(goods){
      //判断是否这个商品已经存在于订单裂变中
      let isHave = false;
      for(let i = 0;i < this.tableData.length;i++){
        if(this.tableData[i].goodsName == goods.goodsName){
          isHave = true; //说明存在
        }
      }

      //根据isHave的值判断订单列表中是否有此商品
      if(isHave){
        //如果存在就进行商品数量的增加
        let arr = this.tableData.filter(o => o.goodsName ==goods.goodsName)
        arr[0].count ++;
      }else{
        //不存在就push到数组中
        let newGoods = {
          goodsId:goods.goodsId,
          goodsName:goods.goodsName,
          price:goods.price,
          count:1
        };
        this.tableData.push(newGoods)
      }

      this.getAllMoney();
    },
      //汇总数量和金额
    getAllMoney() {
      this.totalCount = 0;
      this.totalMoney = 0;
        if (this.tableData) {
          this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney + (element.price * element.count);
          });
        }
    },
        //删除单个商品
        delSingleGoods(goods) {
            console.log(goods);
            this.tableData = this.tableData.filter(o => o.goodsId != goods.goodsId);
            this.getAllMoney();
        },
        //删除所有商品
        delAllGoods() {
            this.tableData = [];
            this.totalCount = 0;
            this.totalMoney = 0;
        },  
        //结账方法模拟
        checkout() {
            if (this.totalCount!=0) {
                this.tableData = [];
                this.totalCount = 0;
                this.totalMoney = 0;
                this.$message({
                    message: '结账成功，欢迎下次光临!',
                    type: 'success'
                });

            }else{
                this.$message.error('不能空结。老板了解你急切的心情！');

            }

        }  
  },
  
  mounted:function(){
      var orderHeight=document.body.clientHeight;
      document.getElementById("order-list").style.height=orderHeight+'px';
  },
}
</script>
<style scoped>
.pos-order{
  background-color: #F9FAFC;
  border-right: 1px solid #C0CCDA;
  height: 100%;
}
.div-btn{
  margin-top: 15px;
  margin-left: 150px;
}
 .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
      cursor: pointer;
   }
  .o-price{
      color:#58B7FF; 
   }
  .goods-type{
    clear: both;
  }
  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
       cursor: pointer;
   }
  .cookList li span{
    display: block;
    float:left;
  }
  .foodImg{
    width: 40%;
  }
  .foodName{
    font-size: 18px;
    padding-left: 10px;
    padding-top: 60px;
    color:brown;
  }
  .foodPrice{
    font-size: 16px;
    padding-left: 10px;
    padding-top:60px;
   }
   
.totalDiv {
    height: auot;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
    border-bottom: 1px solid #E5E9F2;
    padding: 10px;
}
</style>