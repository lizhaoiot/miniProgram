const app = getApp()

Page({
  onLoad: function () {
    const myPluginInterface = requirePlugin('myPlugin');
    myPluginInterface._$configAppKey('8820b61cffd4a43b8407702659733154');
    myPluginInterface.__configAppId('wb6XQ10tN4W');

    let product = {
      title: '任天堂（Nintendo）Switch游戏机',
      desc: '任天堂（Nintendo） Switch NS NX掌上游戏机便携 塞尔达马里奥新款游戏机 主机不锁 日版黑机彩色手柄+中文赛/塞尔达传说(指南+地图)',
      note: '$2330',
      picture: 'https://img10.360buyimg.com/n5/s75x75_jfs/t4030/290/29851193/293745/d5e2b731/58ac3506Nbb57b5f6.jpg',
      url: 'https://www.taobao.com/',
      isShow: 1,
      sendByUser: 1
    };

    myPluginInterface._$configProduct(product);


    wx.redirectTo({
      url: 'plugin://myPlugin/chat'
    })
     
  }
})
