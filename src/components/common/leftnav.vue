<template>
  <div class="left-nav">
    <ul>
        <li>
            <router-link to="/money">
                <i class="icon iconfont icon-wodezichan"></i>
                <div>KEC</div>
            </router-link>
        </li>
        <li>
            <router-link to="/pos">
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </router-link>
        </li>
        <li>
            <router-link to="/goods">
                <i class="icon iconfont icon-hanbao"></i>
                <div>统计</div>
            </router-link>
        </li>

        <li>
            <router-link to="/vip">
                <i class="icon iconfont icon-huiyuanqia"></i>
                <div>会员</div>
            </router-link>
        </li>
        <li>
            <router-link to="/setting">
                <i class="icon iconfont icon-settings"></i>
                <div>设置</div>
            </router-link>
        </li>
    </ul>    
  </div>
</template>
<script>
export default {
  name: 'leftnav',
}
</script>
<style>
    .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: rgb(253, 235, 235);
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:25px;
    }
    .left-nav ul{
        height:100%;
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        height: 10%;
        list-style: none;
        text-align: center;
        border-bottom:1px solid #ced1d3;
        padding:10px;
        cursor: pointer;
    }
</style>