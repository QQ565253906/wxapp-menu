//app.js
App({
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  },
  gobalData: {
    hasLogin: false
  },
  //聚合数据---菜谱的AppKey
  AppKey: '6664c4ef85eff3f7ea5ad27330ec5571'
})