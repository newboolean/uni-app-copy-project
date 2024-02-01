/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2024-01-13 23:13:12
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2024-01-29 20:44:44
 * @FilePath: \my-vue3-project\src\services\index.js
 * @Description: 接口
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
    method: "GET",
    url: "/category/top",
  });
};
/**
 * 商品详情
 * @param id 商品id
 */
export const getGoodsByIdAPI = (id) => {
  return http({
    method: "GET",
    url: "/goods",
    data: { id },
  });
};

/**
 * 小程序登录
 * @param data 请求参数
 */
export const postLoginWxMinAPI = (data) => {
  return http({
    method: "POST",
    url: "/login/wxMin",
    data,
  });
};

/**
 * 小程序登录_内测版
 * @param phoneNumber 模拟手机号码
 */
export const postLoginWxMinSimpleAPI = (phoneNumber) => {
  return http({
    method: "POST",
    url: "/login/wxMin/simple",
    data: {
      phoneNumber,
    },
  });
};

/**
 * 传统登录-用户名+密码
 * @param data 请求参数
 */
export const postLoginAPI = (data) => {
  return http({
    method: "POST",
    url: "/login",
    data,
  });
};

/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
  return http({
    method: "GET",
    url: "/member/profile",
  });
};

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const putMemberProfileAPI = (data) => {
  return http({
    method: "PUT",
    url: "/member/profile",
    data,
  });
};

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data) => {
  return http({
    method: "POST",
    url: "/member/address",
    data,
  });
};

/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
  return http({
    method: "GET",
    url: "/member/address",
  });
};

/**
 * 获取收货地址详情
 * @param id 地址id(路径参数)
 */
export const getMemberAddressByIdAPI = (id) => {
  return http({
    method: "GET",
    url: `/member/address/${id}`,
  });
};

/**
 * 修改收货地址
 * @param id 地址id(路径参数)
 * @param data 表单数据(请求体参数)
 */
export const putMemberAddressByIdAPI = (id, data) => {
  return http({
    method: "PUT",
    url: `/member/address/${id}`,
    data,
  });
};

/**
 * 删除收货地址
 * @param id 地址id(路径参数)
 */
export const deleteMemberAddressByIdAPI = (id) => {
  return http({
    method: "DELETE",
    url: `/member/address/${id}`,
  });
};

/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data) => {
  return http({
    method: "POST",
    url: "/member/cart",
    data,
  });
};

/**
 * 获取购物车列表
 */
export const getMemberCartAPI = () => {
  return http({
    method: "GET",
    url: "/member/cart",
  });
};

/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids SKUID 集合
 */
export const deleteMemberCartAPI = (data) => {
  return http({
    method: "DELETE",
    url: "/member/cart",
    data,
  });
};

/**
 * 修改购物车单品
 * @param skuId SKUID
 * @param data selected 选中状态 count 商品数量
 */
export const putMemberCartBySkuIdAPI = (skuId, data) => {
  return http({
    method: "PUT",
    url: `/member/cart/${skuId}`,
    data,
  });
};

/**
 * 购物车全选/取消全选
 * @param data selected 是否选中
 */
export const putMemberCartSelectedAPI = (data) => {
  return http({
    method: "PUT",
    url: "/member/cart/selected",
    data,
  });
};

/**
 * 填写订单-获取预付订单
 */
 export const getMemberOrderPreAPI = () => {
  return http({
    method: 'GET',
    url: '/member/order/pre',
  })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowAPI = (data) => {
  return http({
    method: 'GET',
    url: '/member/order/pre/now',
    data,
  })
}

/**
 * 填写订单-再次购买
 * @param id 订单id
 */
export const getMemberOrderRepurchaseByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: `/member/order/repurchase/${id}`,
  })
}

/**
 * 提交订单
 * @param data 请求参数
 */
export const postMemberOrderAPI = (data) => {
  return http({
    method: 'POST',
    url: '/member/order',
    data,
  })
}

/**
 * 获取订单详情
 * @param id 订单id
 */
export const getMemberOrderByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: `/member/order/${id}`,
  })
}

/**
 * 模拟发货-内测版
 * @description 在DEV环境下使用，仅在订单状态为待发货时，可模拟发货，调用后订单状态修改为待收货，包含模拟物流。
 * @param id 订单id
 */
export const getMemberOrderConsignmentByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: `/member/order/consignment/${id}`,
  })
}

/**
 * 确认收货
 * @description 仅在订单状态为待收货时，可确认收货。
 * @param id 订单id
 */
export const putMemberOrderReceiptByIdAPI = (id) => {
  return http({
    method: 'PUT',
    url: `/member/order/${id}/receipt`,
  })
}

/**
 * 获取订单物流
 * @description 仅在订单状态为待收货，待评价，已完成时，可获取物流信息。
 * @param id 订单id
 */
export const getMemberOrderLogisticsByIdAPI = (id) => {
  return http({
    method: 'GET',
    url: `/member/order/${id}/logistics`,
  })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (data) => {
  return http({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}

/**
 * 取消订单
 * @description 仅在订单状态为待付款时，可取消订单。
 * @param id 订单id
 * @param data cancelReason 取消理由
 */
export const getMemberOrderCancelByIdAPI = (id, data) => {
  return http({
    method: 'PUT',
    url: `/member/order/${id}/cancel`,
    data,
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderAPI = (data) => {
  return http({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}

/**
 * 获取微信支付参数
 * @param data orderId 订单id
 */
 export const getPayWxPayMiniPayAPI = (data) => {
  return http({
    method: 'GET',
    url: '/pay/wxPay/miniPay',
    data,
  })
}

/**
 * 模拟支付-内测版
 * @param data orderId 订单id
 */
export const getPayMockAPI = (data) => {
  return http({
    method: 'GET',
    url: '/pay/mock',
    data,
  })
}