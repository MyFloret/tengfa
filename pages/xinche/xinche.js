import {
    getBrand,
    getall,
    getList,
    gengxinindex,
    xinche
} from "../../api/request";
Page({
    /**
     * 页面的初始数据
     */
    data: {
        arr: [],
        srot: "1",
        type: "",
        car: [],
        heig: "0px",
        hig: "-450px",
        titarr: ["两厢", "三厢", "SUV", "跑车", "MVP", "面包车", "皮卡"]
    },
    twoguan(e) {
        console.log(e.currentTarget.dataset.index);
        this.setData({
            srot: e.currentTarget.dataset.index,
            hig: "-450px"
        }, () => {
            this.aa()
        })
    },
    aa() {
        xinche(this.data.srot, this.data.type).then(res => {
            // console.log(res);
            // console.log("aa");
            this.setData({
                arr: res.data.data.content[0]
            }, () => {
                console.log(this.data.arr);
            })
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: '新车',
        })
        this.aa()
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
                // console.log(che);
                this.setData({
                    car: che
                })
            })
        })
    },
    twohid() {
        this.setData({
            flagtwo: !this.data.flagtwo
        })
        if (this.data.flagtwo) {
            console.log("aaa");
            this.setData({
                hig: '100rpx'
            })
        } else {
            this.setData({
                hig: '-450rpx'
            })
        }
    },
    chu() {
        this.setData({
            flag: !this.data.flag,
           
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
        console.log(e);
        this.setData({
            heig: '0rpx',
            type: e.currentTarget.dataset.id
        }, () => {
            this.aa()
        }) 
        console.log(e.currentTarget.dataset.id);
        this.aa()

    },
})