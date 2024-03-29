import type { IncomingMessage, ServerResponse } from 'http'

export const data = [
  {
    idx: 0,
    title: '域名注册',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: '阿里万网',
        desc: '中国域名主流服务提供商',
        url: 'https://wanwang.aliyun.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/aliyun.png',
      },
      {
        idx: 1,
        title: 'Godaddy',
        desc: '美国老牌全球最大的域名服务商',
        url: 'https://godaddy.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/godaddy.png',
      },
      {
        idx: 2,
        title: 'Namecheap',
        desc: '优惠比较多的域名品牌商',
        url: 'https://www.namecheap.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/namecheap.png',
      },
      {
        idx: 3,
        title: 'Namesilo',
        desc: '提供永久的免费域名隐私保护',
        url: 'https://www.namesilo.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/namesilo.png',
      },
      {
        idx: 4,
        title: 'Domainr',
        desc: '强大简洁的域名多后缀搜索',
        url: 'https://domainr.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/domainr.png',
      },
      {
        idx: 5,
        title: 'Gandi',
        desc: '国外国别后缀最多的域名提供商',
        url: 'http://www.gandi.net/',
        logo: 'http://chuangzaoshi.com/assets/images/O/gandi.png',
      },
      {
        idx: 6,
        title: '易名中国',
        desc: '中国最大的域名交易平台',
        url: 'http://www.ename.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/ename.png',
      },
      {
        idx: 7,
        title: 'Domcomp',
        desc: '提供各大服务商域名价格对比',
        url: 'https://www.domcomp.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/domcomp.png',
      },
      {
        idx: 8,
        title: 'Emoji域名',
        desc: '全球首家表情域名注册',
        url: 'https://xn--qeiaa.ws/',
        logo: 'http://chuangzaoshi.com/assets/images/O/emoji.png',
      },
      {
        idx: 9,
        title: 'ZEIT',
        desc: '简约强大的极客域名查询购买',
        url: 'https://zeit.co/',
        logo: 'http://chuangzaoshi.com/assets/images/O/zeit.png',
      },
    ],
  },
  {
    idx: 1,
    title: '数据分析',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: 'Google趋势',
        desc: 'google数据和图表了解全球热度',
        url: 'https://www.google.com/trends/',
        logo: 'http://chuangzaoshi.com/assets/images/O/trends.png',
      },
      {
        idx: 1,
        title: '百度指数',
        desc: '百度互联网数据分享平台',
        url: 'http://index.baidu.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/baidu.png',
      },
      {
        idx: 2,
        title: '阿里指数',
        desc: '电商行业价格、供应、采购趋势分析',
        url: 'https://alizs.taobao.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/alizs.png',
      },
      {
        idx: 3,
        title: '天眼查',
        desc: '查找企业信息资质',
        url: 'http://www.tianyancha.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/tianyancha.png',
      },
      {
        idx: 4,
        title: '站长工具',
        desc: '站长工具数据查询网站',
        url: 'http://tool.chinaz.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/chinaz.png',
      },
      {
        idx: 5,
        title: 'Archive',
        desc: '能查找到网页历史缓存界面',
        url: 'https://archive.org/web/',
        logo: 'http://chuangzaoshi.com/assets/images/O/archive.png',
      },
      {
        idx: 6,
        title: 'Alexa排名',
        desc: '互联网网站的世界排名',
        url: 'http://www.alexa.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/alexa.png',
      },
      {
        idx: 7,
        title: 'APPannie',
        desc: '移动端APP应用分析和市场数据',
        url: 'https://www.appannie.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/appannie.png',
      },
      {
        idx: 8,
        title: 'Similarweb',
        desc: '好用的网站排名丨流量数据分析',
        url: 'https://www.similarweb.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/similarweb.png',
      },
    ],
  },
  {
    idx: 2,
    title: '数据工具',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: 'Antv',
        desc: '蚂蚁金服专业数据可视化规范',
        url: 'https://antv.alipay.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/antv.png',
      },
      {
        idx: 1,
        title: 'Echarts',
        desc: '百度数据可视化',
        url: 'http://echarts.baidu.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/echarts.png',
      },
      {
        idx: 2,
        title: 'Plotly',
        desc: '现代炫酷的商业数据可视化科学',
        url: 'https://plot.ly/',
        logo: 'http://chuangzaoshi.com/assets/images/O/plotly.png',
      },
      {
        idx: 3,
        title: 'Datamatic',
        desc: '可编辑web数据可视化',
        url: 'http://datamatic.io/',
        logo: 'http://chuangzaoshi.com/assets/images/P/datamatic.png',
      },
    ],
  },
  {
    idx: 3,
    title: '数据收集',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: 'SurveyMonkey',
        desc: '全球著名的在线问卷调查服务',
        url: 'https://www.surveymonkey.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/surveymonkey.png',
      },
      {
        idx: 1,
        title: 'Google表单',
        desc: 'Google创建调查问卷和分析结果',
        url: 'https://www.google.com/intl/zh-CN/forms/about/',
        logo: 'http://chuangzaoshi.com/assets/images/O/googleforms.png',
      },
      {
        idx: 2,
        title: '腾讯问卷',
        desc: '腾讯问卷调查',
        url: 'https://wj.qq.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/wj.qq.png',
      },
      {
        idx: 3,
        title: '麦客',
        desc: '简洁易用的表单制作与联系人管理工具',
        url: 'http://www.mikecrm.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/mikecrm.png',
      },
      {
        idx: 4,
        title: '问卷星',
        desc: '国内使用较多的问卷调查表',
        url: 'http://www.sojump.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/sojump.png',
      },
    ],
  },
  {
    idx: 4,
    title: '新媒平台',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: '微信公众号',
        desc: '腾讯订阅、服务号的平台',
        url: 'https://mp.weixin.qq.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/weixin.png',
      },
      {
        idx: 1,
        title: '知乎专栏',
        desc: '知乎随心写作，自由表达平台',
        url: 'https://zhuanlan.zhihu.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/zhihu.png',
      },
      {
        idx: 2,
        title: '简书',
        desc: '写作与阅读整合一起的博客平台',
        url: 'http://www.jianshu.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/jianshu.png',
      },
      {
        idx: 3,
        title: 'UC云观',
        desc: 'UC旗下自媒体平台',
        url: 'http://mp.uc.cn/',
        logo: 'http://chuangzaoshi.com/assets/images/O/yunguan.png',
      },
      {
        idx: 4,
        title: '熊掌号',
        desc: '百度旗下自媒体',
        url: 'https://xiongzhang.baidu.com/',
        logo: 'http://chuangzaoshi.com/assets/images/logo.png',
      },
      {
        idx: 5,
        title: '头条号',
        desc: '今日头条旗下新兴创作平台',
        url: 'https://mp.toutiao.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/toutiaohao.png',
      },
    ],
  },
  {
    idx: 5,
    title: '新媒工具',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: '壹伴',
        desc: '微信公众号编辑器Chrome插件',
        url: 'https://yiban.io/',
        logo: 'http://chuangzaoshi.com/assets/images/O/yiban.png',
      },
      {
        idx: 1,
        title: '秀米',
        desc: 'H5制作及图文排版在线工具',
        url: 'http://xiumi.us/',
        logo: 'http://chuangzaoshi.com/assets/images/O/xiumi.png ',
      },
      {
        idx: 2,
        title: '易企秀',
        desc: '免费H5页面微场景制作工具',
        url: 'http://www.eqxiu.com/ ',
        logo: 'http://chuangzaoshi.com/assets/images/O/eqxiu.png ',
      },
      {
        idx: 3,
        title: 'canvas',
        desc: '腾讯多模板在线图片设计工具',
        url: 'http://canvas.qq.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/canvas.png',
      },
      {
        idx: 4,
        title: 'dychart',
        desc: '强推！海量新媒体模版上手即用',
        url: 'https://dydata.io/appv2/#/pages/home/createproject?hmsr=czs&hmpl=czsdh20200108&hmcu=&hmkw=&hmci=',
        logo: 'http://chuangzaoshi.com/assets/images/D/dydata.png',
      },
      {
        idx: 5,
        title: 'Event',
        desc: '特赞旗下的营销热点日历',
        url: 'http://event.tezign.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/event.png',
      },
      {
        idx: 6,
        title: '鹿班',
        desc: '阿里人工智能电商Banner广告图制作',
        url: 'https://luban.aliyun.com/',
        logo: 'http://chuangzaoshi.com/assets/images/D/luban.png',
      },
    ],
  },
  {
    idx: 6,
    title: '网站收录',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: 'Google收录',
        desc: 'Google搜索网站提交收录入口[需登录]',
        url: 'https://www.google.com/webmasters/tools/submit-url',
        logo: 'http://chuangzaoshi.com/assets/images/O/google.png',
      },
      {
        idx: 1,
        title: '百度收录',
        desc: '百度搜索网站提交收录入口',
        url: 'http://zhanzhang.baidu.com/linksubmit/url',
        logo: 'http://chuangzaoshi.com/assets/images/O/baidu.png',
      },
      {
        idx: 2,
        title: 'Bing收录',
        desc: 'Bing搜索网站提交收录入口',
        url: 'http://www.bing.com/toolbox/submit-site-url',
        logo: 'http://chuangzaoshi.com/assets/images/O/bing.png',
      },
      {
        idx: 3,
        title: '360收录',
        desc: '360搜索网站提交收录入口',
        url: 'http://info.so.360.cn/site_submit.html',
        logo: 'http://chuangzaoshi.com/assets/images/O/360.png',
      },
      {
        idx: 4,
        title: '搜狗收录',
        desc: '搜狗搜索网站提交收录入口',
        url: 'http://fankui.help.sogou.com/index.php/',
        logo: 'http://chuangzaoshi.com/assets/images/O/sougou.png',
      },
      {
        idx: 5,
        title: '神马搜索收录',
        desc: 'UC浏览器移动平台搜索提交入口',
        url: 'http://zhanzhang.sm.cn/',
        logo: 'http://chuangzaoshi.com/assets/images/O/sm.png',
      },
    ],
  },
  {
    idx: 7,
    title: 'ASO优化',
    cateEn: 'Operate',
    cateCn: '运营',
    chilren: [
      {
        idx: 0,
        title: 'Appannie',
        desc: '移动端APP应用分析和市场数据',
        url: 'https://www.appannie.com/cn/',
        logo: 'http://chuangzaoshi.com/assets/images/O/appannie.png',
      },
      {
        idx: 1,
        title: 'KeywordTool',
        desc: '免费的APP Store关键词优化',
        url: 'http://keywordtool.io/app-store',
        logo: 'http://chuangzaoshi.com/assets/images/O/keywordtool.png',
      },
      {
        idx: 2,
        title: 'SearchMan',
        desc: 'App Store关键词优化工具',
        url: 'https://searchman.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/searchman.png',
      },
      {
        idx: 3,
        title: 'MobileAction',
        desc: '移动数据分析和优化工具',
        url: 'https://www.mobileaction.co/',
        logo: 'http://chuangzaoshi.com/assets/images/O/mobileaction.png',
      },
      {
        idx: 4,
        title: 'Apptweak',
        desc: 'App Store数据优化工具',
        url: 'https://www.apptweak.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/apptweak.png',
      },
      {
        idx: 5,
        title: 'AsoDesk',
        desc: '提升IOS和Andriod排名可见度',
        url: 'https://asodesk.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/asodesk.png',
      },
      {
        idx: 6,
        title: 'aso100',
        desc: '[国内]移动APP推广数据分析平台',
        url: 'https://aso100.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/aso100.png',
      },
      {
        idx: 7,
        title: 'appbk',
        desc: '[国内]App Store搜索优化平台',
        url: 'http://appbk.com/',
        logo: 'http://chuangzaoshi.com/assets/images/O/appbk.png',
      },
    ],
  },
]

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200
  res.end(JSON.stringify(data))
}
