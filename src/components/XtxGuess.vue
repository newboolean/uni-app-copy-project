<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-14 12:34:14
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-28 17:08:28
 * @FilePath: \my-vue3-project\src\components\XtxGuess.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessList"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">
    {{ finish ? "没有更多数据~" : "正在加载..." }}
  </view>
</template>
<script setup>
import { getHomeGoodsGuessLikeAPI } from "@/services/index.js";
import { onMounted, ref } from "vue";
const pageParams = {
  pageNum: 1,
  pageSize: 10,
};
const guessList = ref([]);
// 数据是否结束
const finish = ref(false);
const getHomeGoodsGuessLikeData = async () => {
  // 退出分页判断
  if (finish.value === true) {
    return uni.showToast({ icon: "none", title: "没有更多数据~" });
  }
  const res = await getHomeGoodsGuessLikeAPI(pageParams);
  guessList.value.push(...res.result.items);
  if (pageParams.pageNum < res.result.pages) {
    pageParams.pageNum++;
  } else {
    finish.value = true;
  }
};
// 重置数据
const resetData = () => {
  pageParams.pageNum = 1
  guessList.value = []
  finish.value = false
}
defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData,
});
onMounted(() => {
  getHomeGoodsGuessLikeData();
});
</script>
<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: "";
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 350rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
</style>
