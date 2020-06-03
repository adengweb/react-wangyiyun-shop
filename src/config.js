// export const BASE_URL = 'http://sales.chexiu.com'
export const BASE_URL = process.env.NODE_ENV === 'production'? 'https://music.163.com':'http://localhost:3200';

//配置title
export const CONFIG_TITLE = {
  home : '云音乐商城 - 音乐购有趣',
  login: '登录 - 云音乐商城',
  acctountMy: '个人中心',
  acctountAddress: '收货地址',
  acctountCoupon: '优惠券',
  acctountLive: '想看的演出',
  acctountOrder: '订单中心',
  search: '搜索',
  sort: '分类',
  cart: '购物车',
  acctountMy11: '个人中心'
};