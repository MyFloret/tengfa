import requset from "./netwrok";
// 引入requset请求
export function getList(page) {
    // 配置当前请求的地址和传入的参数
    return requset({
        url: "/api/tfcar/car/list?",
        data: {
            page
        },
        method: 'GET'
    })
}
//品牌
export function getBrand() {
    // 配置当前请求的地址和传入的参数
    return requset({
        url: "/api/tfcar/car/brand300"
    })
}
// 品牌详情
export function getall(a) {
    // 配置当前请求的地址和传入的参数
    return requset({
        url: `/api/tfcar/car/series300?brandId=${a}`
    })
}
// 更新页面
export function gengxinindex(a, b, c) {
    // 配置当前请求的地址和传入的参数
    return requset({
        url: `/api/tfcar/car/list?page=${a}&carSeries=${b}&carModel=${c}`
    })
}
//卖车
export function maiche(a, b, c, d, e) {
    // 配置当前请求的地址和传入的参数
    return requset({
        url: `/api/tfcar/car/estimate?name=${a}&phone=${b}&model=${c}&mileage=${d}&dateOfRegistration=${e}&type=0`,
        method: "POST"
    })
}
//   新车
export function xinche(a, b, c) {
    // 配置当前请求的地址和传入的参数
    return requset({
        url: `/api/tfcar/newCar/list?page=${a}&sort=${b}`
    })
}
//   详情页
// 
export function getXiangqing(a, b, c) {
    // 配置当前请求的地址和传入的参数
    return requset({
        url: `/api/tfcar/car/basicInfo/${a}`
    })
}