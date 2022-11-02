// pages/myCenter/myuc.js
import {maiche} from "../../api/request";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        date: '2016-09',
        valueone:'',
        valuetwo:'',
        valuestree:'',
        valuefour:''
    },
    butgo(){
        console.log(this.data.date);
        console.log(this.data.valueone);
        console.log(this.data.valuetwo);
        console.log(this.data.valuestree);
        console.log(this.data.valuefour);
        maiche(this.data.valueone,this.data.valuetwo,this.data.valuestree,this.data.valuefour,this.data.date).then(res=>{
            console.log(res);
            if (res.data.msg=="操作成功") {
                wx.showToast({
                    title: '提交成功',
                    icon:"success",
                    duration: 4000
                })
            }else{
                wx.showToast({
                    title: '参数错误',
                    icon:"error",
                    duration: 4000
                })
            }
        })
    },
    oneput(e){
        console.log(e.detail.value)
        this.setData({
            valueone:e.detail.value
        })
    },
    twoput(e){
        console.log(e.detail.value)
        this.setData({
            valuetwo:e.detail.value
        })
    },
    streeput(e){
        console.log(e.detail.value)
        this.setData({
            valuestree:e.detail.value
        })
    },
    fourput(e){
        console.log(e.detail.value)
        this.setData({
            valuefour:e.detail.value
        })
    },
    bindDateChange: function(e) {
        console.log( e.detail.value.substring(0,7))
        this.setData({
          date: e.detail.value.substring(0,7)
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})