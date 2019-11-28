// 缓存类
class Cache {

  // 设置缓存 有效期单位是  秒
  set(key, value, expire = 3600) {
    // 因为js中获取当前时间戳单位是毫秒
    expire = new Date().getTime() + expire * 1000;
    // 缓存的数据
    let data = { expire, value };
    wx.setStorageSync(key, data);
    return true;
  }

  // 判断是否以缓存
  has(key) {
    // 当前时间
    let ctime = new Date().getTime();
    let data = wx.getStorageSync(key);
    // key不存在
    if (data == '') return false;
    // 获取缓存中的expire 过期时间和当前时间比对
    // 如果当前时间比过期时间要小则有效，如果当前时间比过期时间大，则key无效且还要删除此key
    let expire = data.expire;
    if (ctime > expire) {
      // 删除此key
      wx.removeStorageSync(key);
      return false;
    }
    return true;
  }

  // 获取
  get(key, val = '默认值') {
    // key不存在或已过期
    if (!this.has(key)) {
      return val || '';
    }
    // 获取数据
    let { value } = wx.getStorageSync(key);
    return value;
  }

  // 永久
  forever(key, value) {
    return this.set(key, value, 999999999999);
  }

  // 删除
  del(key) {
    wx.removeStorageSync(key);
    return true;
  }
}
export default new Cache;