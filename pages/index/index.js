// pages/index/index.js
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

    // 登录请求
    swan.login({
      timeout:2000,
      success:({code})=>{
        // code有效期是5分钟
        console.log(code);
        // 发起request请求到自己的服务器
        swan.request({
          url: 'http://www.zfw.com/api/v1/wxlogin',
          data: {code},
          header:{
            'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM0MjY2NDBmNWRlNjdkNWJkZjY5Yzc3ZjAxNzM0Y2YyYTEzNWE2NWNmNjc3NDFjOTMyY2JkOTAwZmUzZWQ2MWE4OTNlYWNkNzhmMDY0ZTAwIn0.eyJhdWQiOiIxIiwianRpIjoiYzQyNjY0MGY1ZGU2N2Q1YmRmNjljNzdmMDE3MzRjZjJhMTM1YTY1Y2Y2Nzc0MWM5MzJjYmQ5MDBmZTNlZDYxYTg5M2VhY2Q3OGYwNjRlMDAiLCJpYXQiOjE1Njc0OTI0NzIsIm5iZiI6MTU2NzQ5MjQ3MiwiZXhwIjoxNTk5MTE0ODcyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.sHMe7GH7922Q-wyyoCcgl3o7bW3lbIj85x4y0Q-5CwkpOcxt8QXubM7oCBPytvAEpr6Ua_AYFyRRz3z4OYl3j4n0LoR1AcBY6nJy2H59U68lbkqM3WiiPx7U2X5y9XPZx1igKLmqE4xyTr_IrXtXieDAM84-5m7Ja5PIf1KWw37833t7G4p_ke_lORCPiKMzLCjRHXJ9OjnTkqujq7ngJQgToFGEIQH59zk-CPhZbf2Xuhvghtbk4FmHO5hq_EENNzAPE16qVYNXPWIrih56M46JRmWTL6nPCBGCSfcA0uFVBnWQBsmmr6oxgmKmYGBcR_tIlSTLhAUFqIsGjXK9V78Vq8gOl5ZYH3pv42q2-Z1gl2WfvG_1n36mAvp2ZJcf3wU-jWb136OiPdm_nmOKt1CSxVRXBjJe1UOfPpYwtMzPoV6tqZEQkZHuMZ3tg4mJU0D1Yqw6a82v1KLl3oDw5OihtVAMXgycpGSbzIvexBbX7K-3G-ax0w66XG4DIP0xUpP83sLRHNP4UxyEL32n7x1DJH_kEU0gB6uh86dfrpG4HMjyQFeJdforHaNvi99jXkjFVpAY8yaNFXIvfDZhJgjDEXDKfjuqvOeS3Xs2102hbm6H_SXub6Bl4WAdkOVJrj5_RyUqFOCXdjdmn2Vzr-tF_HtoOa5fqE38BEZc1Eg'
          },
          method: 'POST',
          success:ret=>{
            console.log(ret);
          }
        })
      }
    })

  },
  // 遮罩
  onShadeDiv(evt) {
    let index = evt.currentTarget.dataset.index;
    let show = this.data.show;
    let showflag = this.data.showflag;
    let arrows = this.data.arrows;

    if (showflag[index]) { // 已显示，再次点击隐藏起来
      show[index] = '';
      showflag[index] = false;
      arrows[index] = 'icon-xiangxia';
    } else {
      for (let key in show) {
        if (key == index) {
          show[key] = 'now';
          showflag[key] = true;
          arrows[key] = 'icon-xiangshang';
        } else {
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