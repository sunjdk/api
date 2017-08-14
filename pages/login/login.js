var lgs=require("../../utils/sys");
var app=getApp();

Page({
  data: {
    lg:{
      uname:'',
      upass:''
    },
    err:{
      uname:'',
      upass:''
    }
  },
  onLoad:function(){

  },
  getVal:function(e){
    if(e.currentTarget.id=='uname'){
      //用户名
      this.setData({
        'lg.uname':e.detail.value
      })
    } else if (e.currentTarget.id == 'upass'){
      this.setData({
        'lg.upass': e.detail.value
      })
    }
  },
  subMit:function(){
    var n=this.data.lg.uname;
    var p=this.data.lg.upass;
    if(lgs.check.empty(n)){
      this.setData({
        'err.uname':'用户名不能为空'
      })
    }else{
      this.setData({
        'err.uname':''
      })
    }

    if(lgs.check.empty(p)){
      this.setData({
        'err.upass':'密码不能为空'
      })
    }else{
      this.setData({
        'err.upass':''
      })
    wx.request({
        url: 'https://demo5.thinkcmf.com/api/user/public/login',
        method:'POST',
        data:{
          'username':n,
          'password':p,
          'device_type':'mobile'
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          }),
          wx.redirectTo({
            url: '../cmf/cmf',
            success:function(){},
            fail:function(){},
            complete:function(){}
          })
          //console.log(res.data.msg);
        },
        fail:function(res){
          console.log('用户名或密码错误');
        }
      })
    }

  },
  regURL:function(){
    wx.navigateTo({
      url: '../regist/regist',
      success: function(res) {
         console.log('成功');
      },
      fail: function(res) {
        console.log('失败'); 
      },
      complete: function(res) {},
    })
  }
})