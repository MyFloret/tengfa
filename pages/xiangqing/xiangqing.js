// pages/xiangqing/xiangqing.js
const {
    getXiangqing
} = require("../../api/request")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        deild: [],
        banner: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // console.log(options.id);
        getXiangqing(options.id).then(res => {
            console.log(res.data.data);
            let a = res.data.data.photoVo.detail.split(",")
            let b = []
            a.forEach(el => {
                b.push(el)
            })
            this.setData({
                deild: res.data.data,
                banner: b
            })
        })

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