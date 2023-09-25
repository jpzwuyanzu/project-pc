/*
 * @Author: 风行
 * @Date: 2023-09-24
 * @LastEditors: 风行
 * @LastEditTime: 2023-09-25
 * @Description: file content
 * @FilePath: /project-pc/postcss.config.cjs
 */
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8',
        'last 10 versions',
      ],
      grid: true,
    },
    'postcss-pxtorem': {
      rootValue: 192,
      propList: ['*', '!border'],
      selectorBlackList: ['.ant-'],
    },
  },
};
