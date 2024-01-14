<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 13:32:59
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-14 12:11:39
 * @FilePath: \my-vue3-project\src\pages\index\index.vue
 * @Description: 首页
-->
<template>
  <view class="content">
    <CustomNavbar></CustomNavbar>
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <CategoryPanel :list="categoryList"></CategoryPanel>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { getHomeBannerAPI, getHomeCategoryAPI } from "@/services/index.js";
import CustomNavbar from "./components/CustomNavbar.vue";
import CategoryPanel from "./components/CategoryPanel.vue";
// 获取轮播图数据
const bannerList = ref([]);
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI();
  bannerList.value = res.result;
};
// 获取分类分区组件
const categoryList = ref([]);
const getDategoryList = async () => {
  const res = await getHomeCategoryAPI();
  categoryList.value = res.result;
  console.log(categoryList.value, "categoryList.value");
};
onLoad(() => {
  Promise.all([getHomeBannerData(), getDategoryList()]);
});
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
