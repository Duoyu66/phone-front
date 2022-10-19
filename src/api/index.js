import requests from "@/api/request"
export const reqCategoryList=()=>requests({url:'/commodity/getall.mvc',method:'get'})


//获取图片
export const reqPhoto =()=>requests(({url:'/commodity/showphoto.mvc',method:'get'}))

//获取单个商品
export const reqGood= (skuId)=>requests({url:`/commodity/getbyid.mvc?commodityid=${skuId}`,method:'get'})