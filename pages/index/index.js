/**
 * 妹纸图片列表
 * author：EnchHao
 * email:  gdzios@sina.com
 * time:   2017-10-23
 * github：https://github.com/gdzios
 */
var pageNo = 1

Page({
  data: {
    girlData: [],
    loadingHidden: false
  },
  onLoad: function() {
    this.loadGankGirlData(results => {
      pageNo = 2
      this.setData({
        loadingHidden: true,
        girlData: results
      })
    })
  },
  onBindscrolltolower: function(e) {
    console.log('滚动到底部...')
    this.loadGankGirlData(results => {
      pageNo ++
      this.setData({
        girlData: this.data.girlData.concat(results)
      })
    })
  },
  // 获取 gank 的妹纸数据
  loadGankGirlData: function(callback) {
    wx.request({
      url: 'https://gank.io/api/data/福利/10/' + pageNo,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => callback(this.convertData(res.data.results))
    })
  },
  // 数据转换成大数组里面包含两条数据的小数组
  convertData: function(gankGirlData) {
    var tempGirlDataGroup = []
    var group = []
    gankGirlData.map(girlInfo => {
      girlInfo.url = girlInfo.url.replace('https://ww', 'https://ws')
      if (group.length == 2)  {
        tempGirlDataGroup.push(group)
        group = [girlInfo]
      } else {
        group.push(girlInfo)
      }
    })

    if (group.length > 0) {
      tempGirlDataGroup.push(group)
    }

    return tempGirlDataGroup
  },
  // 图片点击
  onImageClick: function(e) {
    wx.navigateTo({
      url: '../showpic/showpic?pic=' + e.target.id
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
