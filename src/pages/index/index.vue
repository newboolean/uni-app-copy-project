<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 13:32:59
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-14 14:05:29
 * @FilePath: \my-vue3-project\src\pages\index\index.vue
 * @Description: 首页
-->
<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import {
  getHomeBannerAPI,
  getHomeCategoryAPI,
  getHotListAPI,
} from "@/services/index.js";
import CustomNavbar from "./components/CustomNavbar.vue";
import CategoryPanel from "./components/CategoryPanel.vue";
import HotPanel from "./components/HotPanel.vue";
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
};
// 获取热门推荐
const hotList = ref([]);
const getHotList = async () => {
  const res = await getHotListAPI();
  hotList.value = res.result;
};
onLoad(() => {
  getHomeBannerData();
  getDategoryList();
  getHotList();
});
</script>
<template>
  <CustomNavbar></CustomNavbar>
  <scroll-view class="scroll-view" scroll-y>
    <XtxSwiper :list="bannerList"></XtxSwiper>
    <CategoryPanel :list="categoryList"></CategoryPanel>
    <HotPanel :list="hotList"></HotPanel>
    <XtxGuess></XtxGuess>
  </scroll-view>
</template>
<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 10vh;
  display: flex;
  flex-direction: column;
}

// .viewport {
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   overflow: hidden;
// }

.scroll-view {
  flex: 1;
}
</style>
