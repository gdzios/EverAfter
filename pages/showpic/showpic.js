/*
 * 图片预览
 * author：EnchHao
 * email:  gdzios@sina.com
 * time:   2017-10-23
 * github：https://github.com/gdzios
 */
Page({
  data:{
    pic: ''
  },
  onLoad:function(options){
    this.setData({
      pic: options.pic
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
      path: '/pages/showpic/showpic?id=1001',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})