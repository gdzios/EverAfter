/**
 * 页面详情 todo：目前只是临时版本，微信那边还有很多组件没有提供
 * author：EnchHao
 * email:  gdzios@sina.com
 * time:   2017-10-23
 * github：https://github.com/gdzios
 */
var collections;

Page({
  data: {
    title: '',
    url: ''
  },
  onLoad: function(options) {
    collections = wx.getStorageSync('collections') || []
    this.setData({
      title: options.title,
      url: options.url
    })
  },
  collection: function(e) {
    collections.unshift({url: this.data.url, title: this.data.title, ctime: new Date()})
    wx.setStorage({
      key: "collections",
      data: collections
    })
  },
  
  //转发
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '分享一大波福利妹子图，赶快关注吧！',
      path: '/pages/recommend/recommend?id=1001',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
  
})