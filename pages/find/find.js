// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: ['', '', '', ''],
    showflag: [false, false, false, false],
    arrows:['icon-xiangxia','icon-xiangxia','icon-xiangxia','icon-xiangxia']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  // 遮罩
  onShadeDiv(evt) {
    let index = evt.currentTarget.dataset.index;
    let show = this.data.show;
    let showflag = this.data.showflag;
    let arrows = this.data.arrows;

    if(showflag[index]){ // 已显示，再次点击隐藏起来
      show[index] = '';
      showflag[index] = false;
      arrows[index] = 'icon-xiangxia';
    }else{
      for(let key in show){
        if(key == index){
          show[key] = 'now';
          showflag[key] = true;
          arrows[key] = 'icon-xiangshang';
        }else{
          show[key] = '';
          showflag[key] = false;
          arrows[key] = 'icon-xiangxia';
        }
      }
    }
    this.setData({
      show,
      showflag,
      arrows
    })
  }

})