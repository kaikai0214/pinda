import config from './config';

// 网络请求类
export default class Http {
  /**
   * 发起一个 GET POST PUT DELETE 请求
   * @param url 请求地址
   * @param data json对象，发起过来的数据
   * @param method http请求类型 
   */
  httpReq({ url, data = {}, method = "GET" }) {
    // 加载提示框的显示
    wx.showLoading({
      title: '正在加载中...',
      mask: true
    });
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.domain + url,
        data,
        header: {
          'username': config.username,
          'password': config.password
        },
        method,
        success: ret => resolve(ret.data),
        fail: err => reject(err),
        complete: () => {
          // 加载提示隐藏
          wx.hideLoading();
        }
      });
    });
  }

  // 上传请求
  upLoadFile({ url, filePath, name = "file" }) {
    // 返回也是一个promise
    return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: config.domain + url,
        filePath,
        name,
        success: res => resolve(res.data)
      })
    })
  }

}