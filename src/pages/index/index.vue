<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 13:32:59
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-28 17:30:10
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
import PageSkeleton from "./components/PageSkeleton.vue";
import { useGuessList } from "@/composables";
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

const { guessRef, onScrolltolower } = useGuessList();
const isTriggered = ref(false); // 是否下拉刷新
// 下拉刷新
const onRefresherrefresh = async () => {
  isTriggered.value = true;
  guessRef.value.resetData();
  await Promise.all([
    getHomeBannerData(),
    getDategoryList(),
    getHotList(),
    guessRef.value.getMore(),
  ]);
  isTriggered.value = false;
};
// 数据是否加载中
const isLoading = ref(false); // 数据是否加载中
onLoad(async () => {
  isLoading.value = true;
  await Promise.all([getHomeBannerData(), getDategoryList(), getHotList()]);
  isLoading.value = false;
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
      <PageSkeleton v-if="isLoading" />
      <template v-else>
        <XtxSwiper :list="bannerList"></XtxSwiper>
        <CategoryPanel :list="categoryList"></CategoryPanel>
        <HotPanel :list="hotList"></HotPanel>
        <XtxGuess ref="guessRef"></XtxGuess>
      </template>
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
