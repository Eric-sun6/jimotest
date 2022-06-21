import { Config } from '@stencil/core';
import clear from "rollup-plugin-clear"
import {sass} from "@stencil/sass";
import {postcss} from "@stencil/postcss";
import { reactOutputTarget as react } from '@stencil/react-output-target';
export const config: Config = {
  namespace: 'jimotest',
  globalStyle: 'src/global/style/reset.scss',// reset
  outputTargets: [

    react({
      componentCorePackage: 'jimotest',
      proxiesFile: '../hello/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    clear({ targets: ['dist']}),
    sass({
      // 全局注入样式变量文件？？，慎用，会打包到每个css模块中
      injectGlobalPaths: [
        'src/global/style/common_var.scss',
        'src/global/style/iconfont.css'
      ],
    }),
    // postcss({
    //   plugins: [
    //     autoprefixer({
    //       // TODO 确认好prefixer的浏览器版本
    //       "overrideBrowserslist": [
    //         'ios 7',
    //         "Firefox >= 3.5", // 兼容火狐版本号大于3.5浏览器
    //         "chrome  >= 35", // 兼容谷歌版本号大于35浏览器,
    //         "opera >= 11.5", // 兼容欧朋版本号大于11.5浏览器,
    //         "chrome  >= 36", // 如果需要适配的浏览器完全兼容则不会添加前缀
    //       ],
    //       cascade: false
    //     })
    //   ]
    // }),
  ]
};
