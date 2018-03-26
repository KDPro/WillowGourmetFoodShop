//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageList: [
      {"src":"../../img/1.jpg"},
      { "src":"../../img/2.jpg"},
      { "src":"../../img/3.jpg"},
      { "src":"../../img/4.jpg"},
      { "src": "../../img/5.jpg"},
      { "src": "../../img/6.jpg" },
      { "src": "../../img/7.jpg"},
      { "src":"../../img/8.jpg"},
      { "src":"../../img/9.jpg"}
      ],
    swiperImage:[],  
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 300,
    current:0,
    pageIndex:null,
    isShow:false,
    hasLocation: false,
    location: {
      longitude: null,
      latitude: null
    }
  },
  onLoad: function () {
    this.setData({
      pageIndex: this.data.current+1
    });
  },
  currentChange:function(e){
    this.setData({
      pageIndex: parseInt(e.detail.current)+1
    });
  },
  open:function(e) {
    console.log(e);
    this.setData({
      isShow:true,
      current:e.target.dataset.num,
      pageIndex: e.target.dataset.num + 1
    })
  },
  close:function(e) {
    this.setData({
      isShow: false,
      current: 0
    })
  },
  //获取经纬度
  getLocation: function (e) {
    console.log(e)
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          hasLocation: true,
          location: {
            longitude: res.longitude,
            latitude: res.latitude
          }
        });
        wx.openLocation({
          latitude: 30.553267,
          longitude: 104.038709, 
          name:"柳婆婆美食店",
          address:"四川省成都市高新区盛治街831号"
        });
      }
    })
  },
  callPhone:function(e) {
    console.log(e);
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.phone,
    })
  }
})
