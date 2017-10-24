/**
 * 我的
 * author：EnchHao
 * email:  gdzios@sina.com
 * time:   2017-10-23
 * github：https://github.com/gdzios
 */
Page({
  data: {
    userInfo: {}
  },
  onLoad: function () {
    wx.login({
      success: res => {
        wx.getUserInfo({
          success: res => {
            this.setData({
              userInfo: res.userInfo
            })
          }
        })
      }
    })
  },
  onPullDownRefresh: function() {
    console.log('下拉刷新...')
  },
  //转发
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '分享一大波福利妹子图，赶快关注吧！',
      path: '/pages/girl/girl?id=1001',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})