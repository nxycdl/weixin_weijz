//app.js
var Promise = require('lib/es6-promise.min')
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  httpGet:function(url){
    var p= new Promise(function (resolve, reject) {
      fetch(url)
          .then(function(response){
            if(response.status==200){
              resolve(response.json() );
            }else{
              //TODO:
              console.log("内部错误！");
              reject("内部错误！");
            }
          })
          .catch(function(err){
              console.log("Fetch错误:"+err);
              reject(err);
          });
    });
    return p ;
  }
})