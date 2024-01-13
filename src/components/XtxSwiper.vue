<template>
  <view class="carousel" v-if="list.length > 0">
    <swiper
      :circular="true"
      :autoplay="false"
      :interval="3000"
      @change="onChange"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>
<script setup>
import { ref } from "vue";

const activeIndex = ref(0);

// 当 swiper 下标发生变化时触发
const onChange = (ev) => {
  activeIndex.value = ev.detail.current;
};
// 定义 props 接收
defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang="scss">
@import "./styles/XtxSwiper.scss";
</style>
