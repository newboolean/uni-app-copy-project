<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 13:32:59
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-13 23:26:46
 * @FilePath: \my-vue3-project\src\pages\index\index.vue
 * @Description: 首页
-->
<template>
  <view class="content">
    <CustomNavbar></CustomNavbar>
    <XtxSwiper :list="bannerList"></XtxSwiper>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from '@dcloudio/uni-app'
import { getHomeBannerAPI } from "@/services/index.js";
import CustomNavbar from "./components/CustomNavbar.vue";
// 获取轮播图数据
const bannerList = ref([]);
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI();
  bannerList.value = res.result;
  console.log('====================================');
  console.log(bannerList.value);
  console.log('====================================');
};
onLoad(() => {
  getHomeBannerData()
})
</script>

<style lang="scss"></style>
