import type { IncomingMessage, ServerResponse } from 'http'

export const data = [
    {
      "idx": 0,
      "title": "热门推荐",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "w3schools",
          "desc": "WEB初学者教程网站",
          "url": "http://www.w3schools.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/w3schools.png"
        },
        {
          "idx": 1,
          "title": "Bootstrap",
          "desc": "用于前端开发的开源工具包",
          "url": "http://getbootstrap.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/bootstrap.png"
        },
        {
          "idx": 2,
          "title": "codepen",
          "desc": "前端炫酷样式技能效果",
          "url": "http://codepen.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/codepen.png"
        },
        {
          "idx": 3,
          "title": "Fontawesome",
          "desc": "全球著名的前端图标字体库",
          "url": "http://fontawesome.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/fontawesome.png"
        },
        {
          "idx": 4,
          "title": "OOPS",
          "desc": "404优秀设计案例展示",
          "url": "http://oops.re/",
          "logo": "http://chuangzaoshi.com/assets/images/C/oops.png"
        },
        {
          "idx": 5,
          "title": "Mimo APP",
          "desc": "一款很棒的编程学习APP",
          "url": "https://getmimo.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/mimo.png"
        },
        {
          "idx": 6,
          "title": "CodeCast",
          "desc": "在线实时编程预览",
          "url": "http://codecast.me/",
          "logo": "http://chuangzaoshi.com/assets/images/C/codecast.png"
        },
        {
          "idx": 7,
          "title": "Navnav",
          "desc": "CSS/JS炫酷前端动效",
          "url": "http://navnav.co/",
          "logo": "http://chuangzaoshi.com/assets/images/C/navnav.png"
        },
        {
          "idx": 8,
          "title": "WEUI",
          "desc": "微信官方小程序UI样式库",
          "url": "https://weui.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/weui.png"
        },
        {
          "idx": 9,
          "title": "Facebook-code",
          "desc": "facebook开放资源",
          "url": "https://code.facebook.com/projects/",
          "logo": "http://chuangzaoshi.com/assets/images/C/facebookcode.png"
        },
        {
          "idx": 10,
          "title": "SnapSVG",
          "desc": "SVG动效的JS库",
          "url": "http://snapsvg.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/snapsvg.png"
        },
        {
          "idx": 11,
          "title": "JSfiddle",
          "desc": "在线实时JS测试编程",
          "url": "https://jsfiddle.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/jsfiddle.png"
        },
        {
          "idx": 12,
          "title": "codemyui",
          "desc": "采集有趣的网站UI代码片段",
          "url": "https://codemyui.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/codemyui.png"
        },
        {
          "idx": 13,
          "title": "codrops",
          "desc": "网站UI交互源码分享",
          "url": "https://tympanus.net/codrops/",
          "logo": "http://chuangzaoshi.com/assets/images/C/codrops.png"
        },
        {
          "idx": 14,
          "title": "htmlarrows",
          "desc": "提供HMTL的特殊符号",
          "url": "http://htmlarrows.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/htmlarrows.png"
        },
        {
          "idx": 15,
          "title": "copypastecharacter",
          "desc": "特殊符号大全表",
          "url": "http://www.copypastecharacter.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/copypastecharacter.png"
        },
        {
          "idx": 16,
          "title": "CSSDeck",
          "desc": "在线CSS前端代码Demo样式效果",
          "url": "http://cssdeck.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/cssdeck.png"
        },
        {
          "idx": 17,
          "title": "Animista",
          "desc": "CSS动态效果样式在线自定义",
          "url": "http://animista.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/animista.png"
        },
        {
          "idx": 18,
          "title": "html5 Platform",
          "desc": "HTML5的web浏览技术图谱",
          "url": "https://platform.html5.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/platform.png"
        },
        {
          "idx": 19,
          "title": "草莓图标",
          "desc": "为开发者设计的一套免费开源图标库",
          "url": "http://chuangzaoshi.com/icon/",
          "logo": "http://chuangzaoshi.com/assets/images/D/caomei.png"
        },
        {
          "idx": 20,
          "title": "树莓派",
          "desc": "编程教育而设计的微电脑",
          "url": "https://www.raspberrypi.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/raspberry.png"
        },
        {
          "idx": 21,
          "title": "w3techs",
          "desc": "web网站技术调查报告",
          "url": "https://w3techs.com",
          "logo": "http://chuangzaoshi.com/assets/images/C/w3techs.png\t"
        },
        {
          "idx": 22,
          "title": "CSS-Tricks",
          "desc": "优秀的CSS前端技术分享博客",
          "url": "https://css-tricks.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/css-tricks.png"
        },
        {
          "idx": 23,
          "title": "three.js",
          "desc": "JavaScript编写的WebGL第三方3D库",
          "url": "https://threejs.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/threejs.png"
        }
      ]
    },
    {
      "idx": 1,
      "title": "前端框架",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "React",
          "desc": "facebook强大的JavaScript框架",
          "url": "https://facebook.github.io/react/",
          "logo": "http://chuangzaoshi.com/assets/images/C/reactjs.png"
        },
        {
          "idx": 1,
          "title": "Angularjs",
          "desc": "Google开发的前端技术框架",
          "url": "https://angularjs.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/angularjs.png"
        },
        {
          "idx": 2,
          "title": "JQuery",
          "desc": "一个快速、简洁的JavaScript框架",
          "url": "http://jquery.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/jquery.png"
        },
        {
          "idx": 3,
          "title": "Foundation",
          "desc": "高级响应式前端框架",
          "url": "http://foundation.zurb.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/foundation.png"
        },
        {
          "idx": 4,
          "title": "Material UI",
          "desc": "一组反应元件，实现谷歌的材料设计",
          "url": "http://www.material-ui.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/material-ui.png"
        },
        {
          "idx": 5,
          "title": "Vuejs",
          "desc": "小巧精致,渐进式JavaScript 框架",
          "url": "http://cn.vuejs.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/vuejs.png"
        },
        {
          "idx": 6,
          "title": "Sass",
          "desc": "世界级强大的专业CSS扩展语言",
          "url": "http://sass-lang.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/sass.png"
        },
        {
          "idx": 7,
          "title": "MaterialDesignLite",
          "desc": "Google官方轻量级MaterialDesignLite版",
          "url": "https://getmdl.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/getmdl.png"
        },
        {
          "idx": 8,
          "title": "Material Design",
          "desc": "Google官方MaterialDesign指南",
          "url": "https://material.io/guidelines/",
          "logo": "http://chuangzaoshi.com/assets/images/C/material.png"
        },
        {
          "idx": 9,
          "title": "Flat UI",
          "desc": "扁平化多彩风格UI",
          "url": "http://designmodo.github.io/Flat-UI/",
          "logo": "http://chuangzaoshi.com/assets/images/C/flatui.png"
        },
        {
          "idx": 10,
          "title": "Pure",
          "desc": "轻型响应式CSS框架",
          "url": "https://purecss.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/purecss.png"
        },
        {
          "idx": 11,
          "title": "Semantic UI",
          "desc": "语义化设计的前端开源框架",
          "url": "https://semantic-ui.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/semanticui.png"
        },
        {
          "idx": 12,
          "title": "Element",
          "desc": "饿了么出品基于Vue2.0前端组件库",
          "url": "http://element.eleme.io/#/zh-CN",
          "logo": "http://chuangzaoshi.com/assets/images/C/element.png"
        },
        {
          "idx": 13,
          "title": "AntDesign",
          "desc": "蚂蚁金服的UI设计语言",
          "url": "https://ant.design/",
          "logo": "http://chuangzaoshi.com/assets/images/C/antdesign.png"
        },
        {
          "idx": 14,
          "title": "Bootcss",
          "desc": "Bootstrap中文爱好者网站",
          "url": "www.bootcss.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/bootstrap.png"
        },
        {
          "idx": 15,
          "title": "Less",
          "desc": "CSS一种动态样式预处理语言",
          "url": "http://lesscss.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/lesscss.png"
        },
        {
          "idx": 16,
          "title": "Emberjs",
          "desc": "Web应用程序开发的MVC框架",
          "url": "https://www.emberjs.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/emberjs.png"
        },
        {
          "idx": 17,
          "title": "Aurelia",
          "desc": "javaScript客户端框架",
          "url": "http://aurelia.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/aurelia.png"
        },
        {
          "idx": 18,
          "title": "Laravel",
          "desc": "一套简洁优雅的PHP Web开发框架",
          "url": "https://laravel.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/laravel.png"
        },
        {
          "idx": 19,
          "title": "Flutter",
          "desc": "Google跨平台(iOS和Android)原生应用UI框架",
          "url": "https://flutter.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/flutter.png"
        },
        {
          "idx": 20,
          "title": "StoryBook",
          "desc": "优雅的前端组件开发库",
          "url": "https://storybook.js.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/storybook.png\t"
        }
      ]
    },
    {
      "idx": 2,
      "title": "论坛社区",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "V2EX",
          "desc": "IT创意工作者社区",
          "url": "http://www.v2ex.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/v2ex.png"
        },
        {
          "idx": 1,
          "title": "cnode",
          "desc": "js专业中文社区",
          "url": "https://cnodejs.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/cnodejs.png"
        },
        {
          "idx": 2,
          "title": "Stackoverflow",
          "desc": "全球专业的程序员IT技术问答社区",
          "url": "http://stackoverflow.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/stackoverflow.png"
        },
        {
          "idx": 3,
          "title": "HackerNews",
          "desc": "HackerNews黑客极客社区",
          "url": "https://news.ycombinator.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/hackernews.png"
        },
        {
          "idx": 4,
          "title": "Github",
          "desc": "面向开源及私有软件项目的托管平台",
          "url": "https://github.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/github.png"
        },
        {
          "idx": 5,
          "title": "开源中国",
          "desc": "目前国内最大的开源技术社区",
          "url": "http://www.oschina.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/oschina.png"
        },
        {
          "idx": 6,
          "title": "掘金",
          "desc": "高质量的技术社区",
          "url": "https://juejin.im/",
          "logo": "http://chuangzaoshi.com/assets/images/C/xitu.png"
        },
        {
          "idx": 7,
          "title": "LaravelChina",
          "desc": "PHP和Laravel开发者社区",
          "url": "https://laravel-china.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/laravel.png"
        },
        {
          "idx": 8,
          "title": "DiyCode",
          "desc": "致力于构建开发工程师社区",
          "url": "https://www.diycode.cc/",
          "logo": "http://chuangzaoshi.com/assets/images/F/diycode2.png"
        },
        {
          "idx": 9,
          "title": "Segmentfault",
          "desc": "编程爱好者技术交流的平台",
          "url": "https://segmentfault.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/segmentfault.png"
        },
        {
          "idx": 10,
          "title": "Coding冒泡",
          "desc": "开发者交流分享社区",
          "url": "https://coding.net/pp",
          "logo": "http://chuangzaoshi.com/assets/images/C/coding.png"
        },
        {
          "idx": 11,
          "title": "awesomes",
          "desc": "web前端开发资源库",
          "url": "https://www.awesomes.cn/",
          "logo": "http://chuangzaoshi.com/assets/images/C/awesomescn.png"
        },
        {
          "idx": 12,
          "title": "RunJS",
          "desc": "在线编辑、分享JavaScript代码社区",
          "url": "http://runjs.cn/",
          "logo": "http://chuangzaoshi.com/assets/images/C/runjs.png"
        },
        {
          "idx": 13,
          "title": "光谷社区",
          "desc": "武汉光谷互联网IT社区",
          "url": "http://www.guanggoo.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/guanggoo.png"
        },
        {
          "idx": 14,
          "title": "Qiita",
          "desc": "日文的开发者技能分享，知识交流社区",
          "url": "https://qiita.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/qiita.png"
        }
      ]
    },
    {
      "idx": 3,
      "title": "学习平台",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "Mimo APP",
          "desc": "一款很棒的编程学习APP",
          "url": "https://getmimo.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/mimo.png"
        },
        {
          "idx": 1,
          "title": "w3school中文",
          "desc": "编程入门学习及技术文档查询网站",
          "url": "http://www.w3school.com.cn/",
          "logo": "http://chuangzaoshi.com/assets/images/C/w3cshool.png"
        },
        {
          "idx": 2,
          "title": "CSS Reference",
          "desc": "非常棒的免费的CSS属性指导手册",
          "url": "http://cssreference.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/cssreference.png"
        },
        {
          "idx": 3,
          "title": "CodeCademy",
          "desc": "在线趣味互动模式编程学习平台",
          "url": "https://www.codecademy.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/codecademy.png"
        },
        {
          "idx": 4,
          "title": "udacity",
          "desc": "传授硅谷的名企官方课程",
          "url": "https://cn.udacity.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/udacity.png"
        },
        {
          "idx": 5,
          "title": "mozilla开发者",
          "desc": "开发者网络(MDN)提供有关开放网络技术",
          "url": "https://developer.mozilla.org/zh-CN/",
          "logo": "http://chuangzaoshi.com/assets/images/C/mozilla.png"
        },
        {
          "idx": 6,
          "title": "webplatform",
          "desc": "发布Web标准有关的最新以及高品质信息",
          "url": "http://www.webplatform.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/webplatform.png"
        },
        {
          "idx": 7,
          "title": "可汗学院",
          "desc": "著名的非营利在线教育网站",
          "url": "https://www.khanacademy.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/khanacademy.png"
        },
        {
          "idx": 8,
          "title": "CODE",
          "desc": "适用于初级的免费游戏式编程教学",
          "url": "http://code.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/code.png"
        },
        {
          "idx": 9,
          "title": "JStips",
          "desc": "每天一条JS小知识点",
          "url": "http://www.jstips.co/",
          "logo": "http://chuangzaoshi.com/assets/images/C/jstips.png"
        },
        {
          "idx": 10,
          "title": "LiveEdu",
          "desc": "国外程序编程直播平台",
          "url": "https://www.liveedu.tv",
          "logo": "http://chuangzaoshi.com/assets/images/C/liveedu.png"
        },
        {
          "idx": 11,
          "title": "廖雪峰",
          "desc": "力荐：精品编程教程技术大牛博客",
          "url": "https://www.liaoxuefeng.com",
          "logo": "http://chuangzaoshi.com/assets/images/F/liaoxuefeng.png"
        }
      ]
    },
    {
      "idx": 4,
      "title": "个人框架",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "Mobi.css",
          "desc": "轻量灵活的移动端 CSS 框架。",
          "url": "http://getmobicss.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/getmobicss.png"
        },
        {
          "idx": 1,
          "title": "MDUI",
          "desc": "轻量级的Material Design前端框架",
          "url": "http://www.mdui.org/docs/",
          "logo": "http://chuangzaoshi.com/assets/images/C/mdui.png"
        },
        {
          "idx": 2,
          "title": "layui",
          "desc": "面向前后端程序员的模块化前端框架",
          "url": "http://www.layui.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/layui.png"
        },
        {
          "idx": 3,
          "title": "vux",
          "desc": "基于Vue和 Weui的移动端框架",
          "url": "https://vux.li/",
          "logo": "http://chuangzaoshi.com/assets/images/C/vux.png"
        },
        {
          "idx": 4,
          "title": "QMUIios",
          "desc": "腾讯旗下团队 IOS UI解决方案",
          "url": "http://qmuiteam.com/ios/page/index.html",
          "logo": "http://chuangzaoshi.com/assets/images/C/qmuiios.png"
        },
        {
          "idx": 5,
          "title": "QMUIweb",
          "desc": "腾讯旗下团队 web UI解决方案",
          "url": "http://qmuiteam.com/web/page/index.html",
          "logo": "http://chuangzaoshi.com/assets/images/C/qmuiios.png"
        },
        {
          "idx": 6,
          "title": "iView",
          "desc": "一套基于 Vue.js 的高质量 UI 组件库",
          "url": "https://www.iviewui.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/iviewui.png"
        },
        {
          "idx": 7,
          "title": "Halo",
          "desc": "Java 开发的博客系统",
          "url": "https://github.com/ruibaby/halo",
          "logo": "http://chuangzaoshi.com/assets/images/C/halo.png"
        }
      ]
    },
    {
      "idx": 5,
      "title": "在线编程",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "CodeCast",
          "desc": "在线实时编程预览",
          "url": "http://codecast.me/launch/",
          "logo": "http://chuangzaoshi.com/assets/images/C/codecast.png"
        },
        {
          "idx": 1,
          "title": "JSfiddle",
          "desc": "在线实时JS测试编程",
          "url": "https://jsfiddle.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/jsfiddle.png"
        },
        {
          "idx": 2,
          "title": "CSS triangle",
          "desc": "css三角形样式在线生成",
          "url": "http://apps.eky.hk/css-triangle-generator/",
          "logo": "http://chuangzaoshi.com/assets/images/C/eky.png"
        },
        {
          "idx": 3,
          "title": "json-generator",
          "desc": "模拟生成JSON数据",
          "url": "http://beta.json-generator.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/jsongenerator.png"
        },
        {
          "idx": 4,
          "title": "JSbin",
          "desc": "JS和CSS的代码片段在线调试",
          "url": "http://jsbin.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/jsbin.png"
        },
        {
          "idx": 5,
          "title": "CSS按钮生成",
          "desc": "CSS按钮样式在线生成",
          "url": "http://www.cssbuttongenerator.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/cssbuttongenerator.png"
        },
        {
          "idx": 6,
          "title": "CSS Gradient",
          "desc": "CSS渐变在线生成器",
          "url": "http://www.colorzilla.com/gradient-editor/",
          "logo": "http://chuangzaoshi.com/assets/images/C/gradienteditor.png"
        },
        {
          "idx": 7,
          "title": "Dabblet",
          "desc": "一款简单前端在线编辑器",
          "url": "http://dabblet.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/dabblet.png"
        },
        {
          "idx": 8,
          "title": "CSScomb",
          "desc": "一个超棒的CSS属性排序工具",
          "url": "http://csscomb.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/csscomb.png"
        },
        {
          "idx": 9,
          "title": "Animista",
          "desc": "CSS动态效果样式在线自定义",
          "url": "http://animista.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/animista.png"
        },
        {
          "idx": 10,
          "title": "EnjoyCSS",
          "desc": "先进的CSS3可视化在线编程",
          "url": "http://enjoycss.com/LnM/code/",
          "logo": "http://chuangzaoshi.com/assets/images/C/enjoycss.png"
        },
        {
          "idx": 11,
          "title": "CubicBezier",
          "desc": "CSS3贝塞尔曲线在线调试工具",
          "url": "http://cubic-bezier.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/cubicbezier.png"
        },
        {
          "idx": 12,
          "title": "Ceaser",
          "desc": "CSS贝塞尔动画在线调试工具",
          "url": "https://matthewlein.com/ceaser/",
          "logo": "http://chuangzaoshi.com/assets/images/C/ceaser.png"
        },
        {
          "idx": 13,
          "title": "FontConverter",
          "desc": "将字体转成网页webfont专用字体",
          "url": "http://www.freefontconverter.com/#",
          "logo": "http://chuangzaoshi.com/assets/images/C/freefontconverter.png"
        },
        {
          "idx": 14,
          "title": "Everythingfonts",
          "desc": "@font-face网页字体文件格式转换",
          "url": "https://everythingfonts.com/font-face",
          "logo": "http://chuangzaoshi.com/assets/images/C/everythingfonts.png"
        },
        {
          "idx": 15,
          "title": "AnimateCss",
          "desc": "一款强大的预设css3动画库",
          "url": "https://daneden.github.io/animate.css/",
          "logo": "http://chuangzaoshi.com/assets/images/C/animatecss.png"
        },
        {
          "idx": 16,
          "title": "CSSgenerator",
          "desc": "CSS各种对象样式和效果在线生成",
          "url": "https://cssgenerator.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/cssgenerator.png"
        },
        {
          "idx": 17,
          "title": "AniCollection",
          "desc": "CSS3动效预设收藏集合",
          "url": "http://anicollection.github.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/anicollection.png"
        },
        {
          "idx": 18,
          "title": "three.js",
          "desc": "JavaScript编辑3D模型",
          "url": "https://threejs.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/threejs.png"
        }
      ]
    },
    {
      "idx": 6,
      "title": "代码托管",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "Github",
          "desc": "全球知名的开源及私有项目托管平台",
          "url": "https://github.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/github.png"
        },
        {
          "idx": 1,
          "title": "gitlab",
          "desc": "免费无限制的开源及私有项目托管",
          "url": "https://gitlab.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/gitlab.png"
        },
        {
          "idx": 2,
          "title": "Bitbucket",
          "desc": "采用Mercurial和Git的分布式版本控制",
          "url": "https://bitbucket.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/bitbucket.png"
        },
        {
          "idx": 3,
          "title": "Sourceforge",
          "desc": "开放源代码软件开发平台和仓库",
          "url": "https://sourceforge.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/sourceforge.png"
        },
        {
          "idx": 4,
          "title": "Coding",
          "desc": "面向开发者的云端开发托管平台",
          "url": "https://coding.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/coding.png"
        },
        {
          "idx": 5,
          "title": "码云",
          "desc": "开源中国代码托管平台",
          "url": "https://git.oschina.net/",
          "logo": "http://chuangzaoshi.com/assets/images/C/gitoschina.png"
        },
        {
          "idx": 6,
          "title": "CODE",
          "desc": "CSDN代码托管平台",
          "url": "https://code.csdn.net/",
          "logo": "http://chuangzaoshi.com/assets/images/logo.png"
        },
        {
          "idx": 7,
          "title": "Kelude",
          "desc": "阿里云代码托管平台",
          "url": "https://code.aliyun.com/",
          "logo": "http://chuangzaoshi.com/assets/images/D/kelude.png"
        }
      ]
    },
    {
      "idx": 7,
      "title": "构建工具",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "Nodejs",
          "desc": "基于ChromeV8引擎的JS运行环境",
          "url": "https://nodejs.org/en/",
          "logo": "http://chuangzaoshi.com/assets/images/C/nodejs.png"
        },
        {
          "idx": 1,
          "title": "Grunt",
          "desc": "JavaScript世界的构建工具",
          "url": "https://gruntjs.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/gruntjs.png"
        },
        {
          "idx": 2,
          "title": "Gulp",
          "desc": "基于流的自动化构建工具",
          "url": "http://gulpjs.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/gulpjs.png"
        },
        {
          "idx": 3,
          "title": "Yeoman",
          "desc": "前端构建脚手架",
          "url": "http://yeoman.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/yeoman.png"
        },
        {
          "idx": 4,
          "title": "webpack",
          "desc": "模块加载器兼打包工具",
          "url": "http://webpack.github.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/webpack.png"
        },
        {
          "idx": 5,
          "title": "Npmjs",
          "desc": "JS管理包及强大的构建工具",
          "url": "https://www.npmjs.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/npmjs.png"
        },
        {
          "idx": 6,
          "title": "Bower",
          "desc": "客户端技术的软件包管理器",
          "url": "https://bower.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/bower.png"
        },
        {
          "idx": 7,
          "title": "Yarn",
          "desc": "facebook出品新型包管理器",
          "url": "https://yarnpkg.com/zh-Hans/",
          "logo": "http://chuangzaoshi.com/assets/images/C/yarnpkg.png"
        }
      ]
    },
    {
      "idx": 8,
      "title": "检查测试",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "Fiddler",
          "desc": "免费强大的HTTP调试抓包代理软件",
          "url": "http://www.telerik.com/fiddler",
          "logo": "http://chuangzaoshi.com/assets/images/C/fiddler.png"
        },
        {
          "idx": 1,
          "title": "HttpWatch",
          "desc": "一款强大的网页HTTP数据分析软件",
          "url": "http://www.httpwatch.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/httpwatch.png"
        },
        {
          "idx": 2,
          "title": "Gtmetrix",
          "desc": "网站在线性能测试分析、优化建议",
          "url": "https://gtmetrix.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/gtmetrix.png"
        },
        {
          "idx": 3,
          "title": "PageSpeed",
          "desc": "Google在线性能测试网站、优化建议",
          "url": "http://developers.google.com/speed/pagespeed/insights/",
          "logo": "http://chuangzaoshi.com/assets/images/D/google.png"
        },
        {
          "idx": 4,
          "title": "HTML validator",
          "desc": "W3C的HTML有效性验证",
          "url": "http://validator.w3.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/w3.png"
        },
        {
          "idx": 5,
          "title": "CSS validator",
          "desc": "W3C的CSS有效性验证",
          "url": "http://jigsaw.w3.org/css-validator/",
          "logo": "http://chuangzaoshi.com/assets/images/C/w3.png"
        },
        {
          "idx": 6,
          "title": "Responsinator",
          "desc": "各大尺寸设备响应式屏幕效果显示",
          "url": "http://www.responsinator.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/responsinator.png"
        },
        {
          "idx": 7,
          "title": "Browser Sandbox",
          "desc": "各大平台浏览器兼容性在线测试",
          "url": "https://turbo.net/browsers",
          "logo": "http://chuangzaoshi.com/assets/images/C/turbo.png"
        }
      ]
    },
    {
      "idx": 9,
      "title": "内容管理",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "Wordpress",
          "desc": "功能强大的内容管理系统",
          "url": "https://wordpress.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/wordpress.png"
        },
        {
          "idx": 1,
          "title": "Flarum",
          "desc": "优雅简洁漂亮的轻论坛系统",
          "url": "http://flarum.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/flarum.png"
        },
        {
          "idx": 2,
          "title": "Hexo",
          "desc": "比较极客的简洁轻便的博文平台",
          "url": "https://hexo.io/",
          "logo": "http://chuangzaoshi.com/assets/images/C/hexo.png"
        },
        {
          "idx": 3,
          "title": "Typecho",
          "desc": "轻量级博客程序",
          "url": "http://typecho.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/typecho.png"
        },
        {
          "idx": 4,
          "title": "Gitpage",
          "desc": "Github旗下免费的无限流量博客",
          "url": "https://pages.github.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/github.png"
        },
        {
          "idx": 5,
          "title": "Jekyll",
          "desc": "简单静态网页博客程序",
          "url": "http://jekyllrb.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/jekyll.png"
        },
        {
          "idx": 6,
          "title": "Ghost",
          "desc": "Node.js构建的开源博客平台",
          "url": "https://ghost.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/ghost.png"
        },
        {
          "idx": 7,
          "title": "Wix",
          "desc": "免费的响应式商业化建站方案",
          "url": "https://www.wix.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/wix.png"
        }
      ]
    },
    {
      "idx": 10,
      "title": "后端系统",
      "cateEn": "Develop",
      "cateCn": "前端",
      "chilren": [
        {
          "idx": 0,
          "title": "ubuntu",
          "desc": "以桌面应用为主的开源Linux操作系统",
          "url": "https://www.ubuntu.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/ubuntu.png"
        },
        {
          "idx": 1,
          "title": "Debian",
          "desc": "最遵GNU规范的开源Linux系统",
          "url": "http://www.debian.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/debian.png"
        },
        {
          "idx": 2,
          "title": "Redhat",
          "desc": "应用最广泛的商业Linux系统",
          "url": "https://www.redhat.com/",
          "logo": "http://chuangzaoshi.com/assets/images/C/redhat.png"
        },
        {
          "idx": 3,
          "title": "Centos",
          "desc": "Redhat内核开源免费的linux系统",
          "url": "https://www.centos.org/",
          "logo": "http://chuangzaoshi.com/assets/images/C/centos.png"
        }
      ]
    }
]

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}