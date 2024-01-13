/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 15:29:04
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-13 15:33:51
 * @FilePath: \my-vue3-project\src\stores\modules\member.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { ref } from "vue";

// 定义 Store
export const useMemberStore = defineStore(
  "member",
  () => {
    // 会员信息
    const profile = ref();

    // 保存会员信息，登录时使用
    const setProfile = (val) => {
      profile.value = val;
    };

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined;
    };

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    };
  },
  {
    // 网页端配置
    // persist: true,
    // 小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key);
        },
        setItem(key, value) {
          uni.setStorageSync(key, value);
        },
      },
    },
  }
);
