<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 13:32:59
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-17 22:43:31
 * @FilePath: \my-vue3-project\src\pages\index\index.vue
 * @Description: 首页
-->
<script setup>
import { nextTick, onMounted, ref } from "vue";
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
const guessMore = ref();
// 滚动到底部获取更多数据
const onScrolltolower = () => {
  guessMore.value.getMore();
};
const isTriggered = ref(false); // 是否下拉刷新
// 下拉刷新
const onRefresherrefresh = async () => {
  isTriggered.value = true;
  guessMore.value.resetData();
  await Promise.all([
    getHomeBannerData(),
    getDategoryList(),
    getHotList(),
    guessMore.value.getMore(),
  ]);
  isTriggered.value = false;
};
onLoad(() => {
  getHomeBannerData();
  getDategoryList();
  getHotList();
});
</script>
<template>
  <view class="viewport">
    <CustomNavbar class="nav-bar"></CustomNavbar>
    <scroll-view
      @scrolltolower="onScrolltolower"
      @refresherrefresh="onRefresherrefresh"
      :refresher-enabled="true"
      :refresher-triggered="isTriggered"
      class="scroll-view"
      :scroll-y="true"
    >
      <XtxSwiper :list="bannerList"></XtxSwiper>
      <CategoryPanel :list="categoryList"></CategoryPanel>
      <HotPanel :list="hotList"></HotPanel>
      <XtxGuess ref="guessMore"></XtxGuess>
    </scroll-view>
  </view>
</template>
<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
}
.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  // flex: 1;
  height: 80%;
}
</style>
