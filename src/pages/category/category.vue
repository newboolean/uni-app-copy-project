<!--
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 13:32:59
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-13 15:05:07
 * @FilePath: \my-vue3-project\src\pages\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <view class="content">
      <view class="text-area">
        <text class="title">{{ title }}</text>
      </view>
    </view>
  </template>
  
  <script setup >
    import { ref } from 'vue'
    const title = ref('category')
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
  