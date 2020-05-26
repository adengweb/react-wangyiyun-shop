// export const BASE_URL = 'http://sales.chexiu.com'
export const BASE_URL = process.env.NODE_ENV === 'production'? 'https://music.163.com':'http://localhost:3200';

//配置title
export const CONFIG_TITLE = {
  home : '云音乐商城 - 音乐购有趣'
};