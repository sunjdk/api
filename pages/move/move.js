Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:'',
    top:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  
  viewTouchMove:function(e){
    this.setData({
      left: e.touches[0].clientX - 60,
      top: e.touches[0].clientY - 60
    })
  }
})