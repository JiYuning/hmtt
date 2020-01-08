module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 如果你的设计稿是375宽那么这里就写37.5
      // 如果你的设计稿是750宽那么这里就写75
      // vant的基本像素是375，所以测量我们的设计稿餐位，写的时候倒要/2
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
