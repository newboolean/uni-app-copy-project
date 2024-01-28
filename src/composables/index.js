/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-28 16:54:55
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-28 16:55:24
 * @FilePath: \my-vue3-project\src\composables\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 */
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref()

  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回 ref 和事件处理函数
  return {
    guessRef,
    onScrolltolower,
  }
}
