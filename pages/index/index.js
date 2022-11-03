
const app = getApp()
import {getList} from "../../api/request";

Page({
  data: {
    page:1,
    arr:[]
  },
  onLoad(){
      wx.setNavigationBarTitle({
        title: '首页',
      })
      getList(this.data.page).then(res=>{
          this.setData({
            arr:res.data.data.content
          })
      })
  },
  getaddlist(){
        getList(this.data.page).then(res=>{
          this.setData({
            arr:this.data.arr.concat(res.data.data.content)
          })
      })
  },
  onReachBottom(){
      this.setData({
          page:this.data.page+1
      })
      this.getaddlist()
  },
  tiaozhuan(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: `/pages/xiangqing/xiangqing?id=${e.currentTarget.dataset.id}`,
    })
},
})
