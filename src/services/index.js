/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 23:13:12
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-14 12:08:10
 * @FilePath: \my-vue3-project\src\services\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from "../utils/http";

// 获取轮播图
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http({
    method: "GET",
    url: "/home/banner",
    data: {
      distributionSite,
    },
  });
};
// 获取分类分区接口
export const getHomeCategoryAPI = () => {
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
};
