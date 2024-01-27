/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 23:13:12
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-27 18:02:26
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
    method: "GET",
    url: "/home/category/mutli",
  });
};
// 获取热门推荐接口
export const getHotListAPI = () => {
  return http({
    method: "GET",
    url: "/home/hot/mutli",
  });
};
/**
 * 猜你喜欢-小程序
 */
export const getHomeGoodsGuessLikeAPI = (data) => {
  return http({
    method: "GET",
    url: "/home/goods/guessLike",
    data,
  });
};
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url, data) => {
  return http({
    method: "GET",
    url,
    data,
  });
};

/**
 * 分类列表-小程序
 */
 export const getCategoryTopAPI = () => {
  return http({
    method: 'GET',
    url: '/category/top',
  })
}
/**
 * 商品详情
 * @param id 商品id
 */
 export const getGoodsByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
/**
 * 小程序登录
 * @param data 请求参数
 */
 export const postLoginWxMinAPI = (data) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber) => {
  return http({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}

/**
 * 传统登录-用户名+密码
 * @param data 请求参数
 */
export const postLoginAPI = (data) => {
  return http({
    method: 'POST',
    url: '/login',
    data,
  })
}

