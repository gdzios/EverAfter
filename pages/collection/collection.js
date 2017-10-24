/**
 * 我的收藏
 * author：EnchHao
 * email:  gdzios@sina.com
 * time:   2017-10-23
 * github：https://github.com/gdzios
 */
var util = require('../../utils/util')

Page({
  data:{
    collections: []
  },
  onLoad:function(options){
    var tempCollections = wx.getStorageSync('collections') || []
    tempCollections.map(c => {
      c.ctime = util.formatSimpleTimeFull(c.ctime)
    })
    this.setData({
      collections: tempCollections
    })
  },
})