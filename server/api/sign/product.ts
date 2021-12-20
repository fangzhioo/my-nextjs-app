import type { IncomingMessage, ServerResponse } from 'http'

export const data = [
  {
    "idx": 0,
    "title": "新品推荐",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "Producthunt",
        "desc": "全球最新潮的科技类新品站",
        "url": "https://www.producthunt.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/producthunt.png"
      },
      {
        "idx": 1,
        "title": "V2EX创意",
        "desc": "V2EX创意新品和项目分享节点",
        "url": "https://www.v2ex.com/?tab=creative",
        "logo": "http://chuangzaoshi.com/assets/images/P/v2ex.png"
      },
      {
        "idx": 2,
        "title": "NEXT",
        "desc": "36kr新产品推荐社区",
        "url": "http://next.36kr.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/next.png"
      },
      {
        "idx": 3,
        "title": "Today",
        "desc": "IT 桔子旗下的Today",
        "url": "http://today.itjuzi.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/today.png"
      },
      {
        "idx": 4,
        "title": "Kickstarter",
        "desc": "全球著名的新品众筹平台",
        "url": "https://www.kickstarter.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/kickstarter.png"
      },
      {
        "idx": 5,
        "title": "众筹网",
        "desc": "国内的一个创业产品众筹平台",
        "url": "http://www.zhongchou.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/zhongchou.png"
      },
      {
        "idx": 6,
        "title": "Steam",
        "desc": "全球最大的综合性数字发行平台",
        "url": "http://store.steampowered.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/steam.png"
      },
      {
        "idx": 7,
        "title": "知晓程序",
        "desc": "微信小程序应用商店和大全",
        "url": "https://minapp.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/minapp.png"
      },
      {
        "idx": 8,
        "title": "三顿PPT导航",
        "desc": "一站式搞定PPT设计导航站点",
        "url": "http://sandunppt.com/",
        "logo": "http://chuangzaoshi.com/assets/images/F/sandunppt.png"
      }
    ]
  },
  {
    "idx": 1,
    "title": "产品资讯",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "TechCrunch",
        "desc": "国外的互联网新产品资讯新闻",
        "url": "http://techcrunch.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/techcrunch.png"
      },
      {
        "idx": 1,
        "title": "The Verge",
        "desc": "美国最酷科技媒体",
        "url": "http://www.theverge.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/theverge.png"
      },
      {
        "idx": 2,
        "title": "人人都是产品经理",
        "desc": "产品经理、产品爱好者学习交流平台",
        "url": "http://www.woshipm.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/woshipm.png"
      },
      {
        "idx": 3,
        "title": "36氪",
        "desc": "为创业者提供最好的产品和服务",
        "url": "http://36kr.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/36kr.png"
      },
      {
        "idx": 4,
        "title": "极客公园",
        "desc": "热点产品的深度分析,发掘产品和趋势的价值",
        "url": "http://www.geekpark.net/",
        "logo": "http://chuangzaoshi.com/assets/images/P/geekpark.png"
      },
      {
        "idx": 5,
        "title": "少数派",
        "desc": "专注于移动APP编辑精选",
        "url": "http://sspai.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/sspai.png"
      },
      {
        "idx": 6,
        "title": "iFixit",
        "desc": "智能硬件产品拆卸和维修",
        "url": "https://www.ifixit.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/ifixit.png"
      },
      {
        "idx": 7,
        "title": "zealer",
        "desc": "科技达人王自如数码产品测评平台",
        "url": "http://www.zealer.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/zealer.png"
      },
      {
        "idx": 8,
        "title": "PMCAFF",
        "desc": "产品经理的社区和资讯站点",
        "url": "http://www.pmcaff.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/pmcaff.png"
      },
      {
        "idx": 9,
        "title": "小众软件",
        "desc": "分享免费、小巧、有趣、实用软件的网站",
        "url": "http://www.appinn.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/appinn.png"
      },
      {
        "idx": 10,
        "title": "LiveSino",
        "desc": "专注于微软产品和技术的资讯博客",
        "url": "http://livesino.net/",
        "logo": "http://chuangzaoshi.com/assets/images/P/livesino.png"
      },
      {
        "idx": 11,
        "title": "Solidot",
        "desc": "关注科技和开源的奇客资讯",
        "url": "http://solidot.net/",
        "logo": "http://chuangzaoshi.com/assets/images/P/solidot.png"
      }
    ]
  },
  {
    "idx": 2,
    "title": "原型工具",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "Axure",
        "desc": "专业的快速原型设计工具",
        "url": "http://www.axure.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/axure.png"
      },
      {
        "idx": 1,
        "title": "墨刀",
        "desc": "专业制作移动APP应用原型工具",
        "url": "https://modao.cc/",
        "logo": "http://chuangzaoshi.com/assets/images/P/modao.png"
      },
      {
        "idx": 2,
        "title": "Sketch",
        "desc": "专注于UI设计+原型图工具",
        "url": "https://www.sketchapp.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/sketch.png"
      },
      {
        "idx": 3,
        "title": "Mockplus",
        "desc": "简洁快速的原型图设计工具",
        "url": "https://www.mockplus.cn/",
        "logo": "http://chuangzaoshi.com/assets/images/P/mockplus.png"
      }
    ]
  },
  {
    "idx": 3,
    "title": "思维导图",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "Xmind",
        "desc": "一款非常实用的商业思维导图软件",
        "url": "http://www.xmind.net/",
        "logo": "http://chuangzaoshi.com/assets/images/P/xmind.png"
      },
      {
        "idx": 1,
        "title": "Mindnode",
        "desc": "非常优秀思维导图APP",
        "url": "http://mindnode.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/mindnode.png"
      },
      {
        "idx": 2,
        "title": "百度脑图",
        "desc": "百度便捷的流程图思维工具",
        "url": "http://naotu.baidu.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/baidunaotu.png"
      },
      {
        "idx": 3,
        "title": "MindManager",
        "desc": "简单强大的心智图",
        "url": "https://www.mindjet.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/mindjet.png"
      },
      {
        "idx": 4,
        "title": "Novamind",
        "desc": "思维导图和PPT融合在一起",
        "url": "https://www.novamind.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/novamind.png"
      },
      {
        "idx": 5,
        "title": "iMindmap",
        "desc": "独特强大可创建3D视角的思维导图",
        "url": "https://imindmap.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/imindmap.png"
      },
      {
        "idx": 6,
        "title": "iThoughtsX",
        "desc": "非常优秀的Mac平台思维导图",
        "url": "https://www.toketaware.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/ithonghtsx.png"
      },
      {
        "idx": 7,
        "title": "Lighten",
        "desc": "XMind团队推出的iOS脑图App",
        "url": "http://lighten.xmind.net/",
        "logo": "http://chuangzaoshi.com/assets/images/P/lighten.png"
      }
    ]
  },
  {
    "idx": 4,
    "title": "协同工作",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "Worktile",
        "desc": "在线团队协同办公、项目管理工具",
        "url": "https://worktile.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/worktile.png"
      },
      {
        "idx": 1,
        "title": "Teambition",
        "desc": "国内领先的团队协作工具",
        "url": "https://www.teambition.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/teambition.png"
      },
      {
        "idx": 2,
        "title": "Onenote",
        "desc": "微软强大的云笔记，支持多用户协作",
        "url": "http://www.onenote.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/onenote.png"
      },
      {
        "idx": 3,
        "title": "印象笔记",
        "desc": "简洁好用的云笔记",
        "url": "https://www.yinxiang.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/yinxiang.png"
      },
      {
        "idx": 4,
        "title": "Trello",
        "desc": "项目进度管理和发布、协同工作平台",
        "url": "https://trello.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/trello.png"
      },
      {
        "idx": 5,
        "title": "蓝湖",
        "desc": "设计师的产品协作平台",
        "url": "https://lanhuapp.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/lanhuapp.png"
      }
    ]
  },
  {
    "idx": 5,
    "title": "文档编辑",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "Notion",
        "desc": "集文档丨wiki丨任务的协同创作平台",
        "url": "https://www.notion.so/",
        "logo": "http://chuangzaoshi.com/assets/images/P/notion.png"
      },
      {
        "idx": 1,
        "title": "Google文档",
        "desc": "Google免费在线创建和编辑文档",
        "url": "https://www.google.com/intl/zh-CN/docs/about/",
        "logo": "http://chuangzaoshi.com/assets/images/P/googledocs.png"
      },
      {
        "idx": 2,
        "title": "石墨文档",
        "desc": "支持多人协作的在线文档",
        "url": "https://shimo.im/",
        "logo": "http://chuangzaoshi.com/assets/images/P/shimo.png"
      },
      {
        "idx": 3,
        "title": "微软Office",
        "desc": "微软Word丨PPT丨Excel等文档办公套装",
        "url": "https://products.office.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/office.png"
      },
      {
        "idx": 4,
        "title": "Quip",
        "desc": "让您的小组和您的工作充满活力",
        "url": "https://quip.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/quip.png"
      },
      {
        "idx": 5,
        "title": "腾讯文档",
        "desc": "支持多人在线编辑Word、Excel和PPT文档",
        "url": "https://docs.qq.com/index.html",
        "logo": "http://chuangzaoshi.com/assets/images/P/tengxunwendang.png"
      }
    ]
  },
  {
    "idx": 6,
    "title": "云盘储存",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "OneDrive",
        "desc": "微软云存储，支持在线Offiec编辑",
        "url": "http://onedrive.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/onedrive.png"
      },
      {
        "idx": 1,
        "title": "DropBox",
        "desc": "全球最优秀的在线云存储",
        "url": "https://www.dropbox.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/dropbox.png"
      },
      {
        "idx": 2,
        "title": "GoogleDrive",
        "desc": "Google在线云存储服务",
        "url": "https://www.google.com/intl/zh-CN/drive/",
        "logo": "http://chuangzaoshi.com/assets/images/P/googledrive.png"
      },
      {
        "idx": 3,
        "title": "iCloud",
        "desc": "苹果在线存储和云服务",
        "url": "https://www.icloud.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/icloud.png"
      },
      {
        "idx": 4,
        "title": "百度网盘",
        "desc": "国内最大百度旗下网盘服务",
        "url": "https://pan.baidu.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/baiduyun.png"
      },
      {
        "idx": 5,
        "title": "微云",
        "desc": "腾讯QQ网盘服务",
        "url": "https://www.weiyun.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/weiyun.png"
      },
      {
        "idx": 6,
        "title": "坚果云",
        "desc": "小众服务稳定的网盘",
        "url": "https://www.jianguoyun.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/jianguoyun.png"
      }
    ]
  },
  {
    "idx": 7,
    "title": "趣味产品",
    "cateEn": "Product",
    "cateCn": "产品",
    "chilren": [
      {
        "idx": 0,
        "title": "小猪动图",
        "desc": "GIF动图中文搜索和制作",
        "url": "http://www.piggif.com/",
        "logo": "http://chuangzaoshi.com/assets/images/O/piggif.png"
      },
      {
        "idx": 1,
        "title": "IFTTT",
        "desc": "触发你的智能生活,让生活更极客更简单",
        "url": "https://ifttt.com/discover",
        "logo": "http://chuangzaoshi.com/assets/images/P/ifttt.png"
      },
      {
        "idx": 2,
        "title": "Giphy",
        "desc": "全球在线动态GIF图片搜索引擎",
        "url": "http://giphy.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/giphy.png"
      },
      {
        "idx": 3,
        "title": "imgur",
        "desc": "全球免费的图片分享和图床网站",
        "url": "http://imgur.com/",
        "logo": "http://chuangzaoshi.com/assets/images/P/imgur.png"
      }
    ]
  }
]

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.end(JSON.stringify(data));
}