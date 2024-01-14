<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 13:32:59
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-13 15:43:58
 * @FilePath: \my-vue3-project\src\pages\index\index.vue
 * @Description: 我的页面
-->
<template>
    <view class="content">
      <view class="text-area">
       <button
        hover-class="button-hover"
        @tap="memberStore.setProfile({
          name: '123'
        })"
       >
        存储数据
       </button>
       <button
        hover-class="button-hover"
        @tap="memberStore.clearProfile()"
       >
        清理数据
       </button>
      </view>
    </view>
  </template>
  
  <script setup >
    import { useMemberStore } from '@/stores';
    const memberStore = useMemberStore()
    import { ref } from 'vue'
    const title = ref('my')
  </script>
  
  <style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }
  
  .text-area {
    display: flex;
    justify-content: center;
  }
  
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
  </style>
  