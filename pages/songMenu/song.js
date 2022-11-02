// pages/songMenu/song.js
import {
    getBrand,
    getall,
    getList,
    gengxinindex,
} from "../../api/request";
Page({

    /**
     * 页面的初始数据
     */

    data: {
        car: [],
        flag: false,
        heig: '0px',
        left: '750rpx',
        endtit: [],
        page: 1,
        arr: [],
        flagtwo:false,
        hig:'-450rpx',
        iddd:'',
        chexing:'',
        titarr:["两厢","三厢","SUV","跑车","MVP","面包车","皮卡"]
    },
    twoguan(e){
        console.log(e.currentTarget.dataset.index);
        gengxinindex(this.data.page,this.data.iddd,e.currentTarget.dataset.index).then(res=>{
            console.log(res);
            this.setData({
                arr:res.data.data.content,
                hig:'-450rpx',
                chexing:e.currentTarget.dataset.index
            })
        })
    },
    twohid(){
        this.setData({
            flagtwo:!this.data.flagtwo
        })
        if (this.data.flagtwo) {
            console.log("aaa");
            this.setData({
                hig:'100rpx' 
            })
        }else{
            this.setData({
                hig:'-450rpx' 
            })
        }
    },
    genghuan(e){
        console.log(e.currentTarget.dataset.id);
        this.setData({
            iddd:e.currentTarget.dataset.id
        })
        gengxinindex(this.data.page,e.currentTarget.dataset.id,this.data.chexing).then(res=>{
            console.log(res.data.data.content);
            this.setData({
                arr:res.data.data.content,
                left:'750rpx',
                flag:false,
                heig:'0rpx'
            })
        })
    },
    chu() {
        this.setData({
            flag: !this.data.flag
        })
        if (this.data.flag) {
            this.setData({
                heig: '100%'
            })
        } else {
            this.setData({
                heig: '0px'
            })
        }
    },
    erji(e) {
        this.setData({
            left: '0rpx'
        })
        console.log(e.currentTarget.dataset.id);
        getall(e.currentTarget.dataset.id).then(res => {
            console.log(res.data.data.content);
            this.setData({
                endtit: res.data.data.content
            })
        })
    },
    hide() {
        this.setData({
            left: '750rpx'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

        wx.setNavigationBarTitle({
            title: '二手车',
        })
        getBrand().then(res => {
            var awd = "";
            var che = []
            res.data.data.content.forEach((item, index) => {
                if (awd != item.brand.split("-")[0]) {
                    awd = item.brand.split("-")[0]
                    che.push({
                        mica: item.brand.split("-")[0],
                        qwe: [],
                        id: [],
                    })
                }
                che.forEach((aaa) => {
                    if (aaa.mica == item.brand.split("-")[0]) {
                        aaa.qwe.push(item.brand.split("-")[1])
                        aaa.id.push(item.id)
                    }
                })
            })

            this.setData({
                car: che
            })
        })
        getList(this.data.page).then(res => {
            this.setData({
                arr: res.data.data.content
            })
            console.log(this.data.arr);
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
    getaddlist() {
        getList(this.data.page).then(res => {
            this.setData({
                arr: this.data.arr.concat(res.data.data.content)
            })
        })
    },
    onReachBottom() {
        this.setData({
            page: this.data.page + 1
        })
        this.getaddlist()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})