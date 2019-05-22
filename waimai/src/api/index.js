// 包含多个接口请求函数的模块
// 函数的返回值:promise 对象

import ajax from './ajax'
// const BASE_URL = 'http://localhost:8081'
const BASE_URL = '/api'
// 到config文件夹中的index.js修改proxyTable进行跨域

// [1、根据经纬度获取位置详情]
export const reqAddress =  (geohash) => ajax(`${BASE_URL}/position/${geohash}`);

// [2、获取食品分类列表]
export const reqFoodCategorys =  () => ajax(BASE_URL+`/index_category`)

// [3、根据经纬度获取商铺列表]
export const reqShops =  (longitude,latitude) => ajax(BASE_URL+`/shops`,{latitude,longitude})


// [5、获取一次性验证码]  img 直接发src请求,不要发送ajax请求
// export const reqPosition =  () => ajax()

// [6、用户名密码登陆]
export const reqPwdLogin =  ({name,pwd,captcha}) => ajax(BASE_URL+`/login_pwd`,{name,pwd,captcha},'POST')

// [7、发送短信验证码]
export const reqSendCode =  (phone) => ajax(BASE_URL+`/sendcode`,{phone})

// [8、手机号验证码登陆]
export const reqSmsLogin =  (phone,code) => ajax(BASE_URL+`/login_sms`,{phone,code},'POST')

// [9、根据会话获取用户信息]
export const reqUserInfo =  () => ajax(BASE_URL+`/userinfo`)

// [10、用户登出]
export const reqLogout =  () => ajax(BASE_URL+`/logout`)



// 使用Mock发送ajax请求时不需要代理解决跨域
// 获 取 商 家 信 息
export const reqShopInfo = () => ajax('/info')

// 获 取 商 家 评 价 数 组
export const reqShopRatings = () => ajax('/ratings')

// 获 取 商 家 商 品 数 组
export const reqShopGoods = () => ajax('/goods')

//[4、根据经纬度和关键字搜索商铺列表]
export const reqSearchShops =  () => ajax(`/search_shops`)






