import type { IncomingMessage, ServerResponse } from 'http'

export const data = [
  {
    "idx": 0,
    "title": "视觉创意",
    "cateEn": "Design",
    "cateCn": "设计",
    "chilren": [
      {
        "idx": 0,
        "title": "Photoshop",
        "desc": "adobe出品强大的图片处理软件",
        "url": "http://www.adobe.com/cn/products/photoshop.html",
        "theme": "#131631",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_photoshop.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 1,
        "title": "Adobe Illustrator",
        "desc": "adobe出品强大的矢量图制作软件",
        "url": "http://www.adobe.com/cn/products/illustrator.html",
        "theme": "#1A0C00",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_adobeillustrator.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 2,
        "title": "InDesign",
        "desc": "adobe出品强大的板式设计软件",
        "url": "http://www.adobe.com/cn/products/indesign.html",
        "theme": "#26000D",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_indesign.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 3,
        "title": "Painter",
        "desc": "Corel专业电脑美术绘画软件",
        "url": "http://www.painterartist.com/en/",
        "theme": "#000000",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_painter.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 4,
        "title": "Affinity Designer",
        "desc": "新型的创意图形设计图软件",
        "url": "https://affinity.serif.com/en-gb/designer/",
        "theme": "#0085d8",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_affinity.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 5,
        "title": "Gimp",
        "desc": "跨平台的开源图像处理程序，号称Linux下的PhotoShop",
        "url": "https://www.gimp.org/",
        "theme": "#0e2426",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_gimp.png",
        "platform": "apple,microsoft,linux"
      }
    ]
  },
  {
    "idx": 1,
    "title": "界面设计",
    "cateEn": "Design",
    "cateCn": "设计",
    "chilren": [
      {
        "idx": 0,
        "title": "Sketch",
        "desc": "强大的UI界面和原型图设计软件",
        "url": "https://www.sketchapp.com/",
        "theme": "#120A33",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_sketch.png",
        "platform": "apple"
      },
      {
        "idx": 1,
        "title": "Adobe XD",
        "desc": "adobe出品UI和原型图设计软件",
        "url": "http://www.adobe.com/products/experience-design.html",
        "theme": "#000000",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_experiencedesign.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 2,
        "title": "invision",
        "desc": "世界级高效原型、写作、工作流软件",
        "url": "https://www.invisionapp.com/",
        "theme": "#ff3366",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_invisionapp.png",
        "platform": "microsoft,linux"
      },
      {
        "idx": 3,
        "title": "Marvel",
        "desc": "免费的桌面和移动端原型图设计工具",
        "url": "https://marvelapp.com/",
        "theme": "#ffffff",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_marvelapp.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 4,
        "title": "Figma",
        "desc": "强大的在线协作云端设计师工具",
        "url": "https://www.figma.com/",
        "theme": "#191919",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_figma.png",
        "platform": "apple,microsoft,linux"
      }
    ]
  },
  {
    "idx": 2,
    "title": "交互原型",
    "cateEn": "Design",
    "cateCn": "设计",
    "chilren": [
      {
        "idx": 0,
        "title": "After Effects",
        "desc": "adobe出品MG动画和视频特效软件",
        "url": "http://www.adobe.com/cn/products/aftereffects.html",
        "theme": "#1B0B2F",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_aftereffects.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 1,
        "title": "Animate",
        "desc": "adobe出品web动画和交互软件",
        "url": "https://www.adobe.com/products/animate.html",
        "theme": "#210f09",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_animate.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 2,
        "title": "ProtoPie",
        "desc": "韩国原型交互动效设计软件",
        "url": "http://www.protopie.cn/",
        "theme": "#ff6157",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_protopie.png",
        "platform": "apple,android"
      },
      {
        "idx": 3,
        "title": "Principle",
        "desc": "快速交互动画的原型软件",
        "url": "http://principleformac.com/",
        "theme": "#22a7f0",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_principle.png",
        "platform": "apple"
      },
      {
        "idx": 4,
        "title": "Framer",
        "desc": "移动交互原型框架软件",
        "url": "https://framer.com/",
        "theme": "#000000",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_framer.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 5,
        "title": "Flinto",
        "desc": "在线移动应用原型制作软件",
        "url": "https://www.flinto.com/",
        "theme": "#FF6858",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_flinto.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 6,
        "title": "Atomic",
        "desc": "快捷的在线原型制作工具，有Sketch版插件",
        "url": "https://atomic.io/v2/",
        "theme": "#262c38",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_atomic.png",
        "platform": "apple,microsoft,linux,android,block"
      },
      {
        "idx": 7,
        "title": "Origami",
        "desc": "APP逻辑交互原型制作工具",
        "url": "http://origami.design/",
        "theme": "#1b2127",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_origami.png",
        "platform": "apple,android"
      },
      {
        "idx": 8,
        "title": "Kite",
        "desc": "新款强大的交互动画原型工具",
        "url": "https://kiteapp.co/",
        "theme": "#12cc6d",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_kiteapp.png",
        "platform": "apple"
      }
    ]
  },
  {
    "idx": 3,
    "title": "模型设计",
    "cateEn": "Design",
    "cateCn": "设计",
    "chilren": [
      {
        "idx": 0,
        "title": "Cinema4D",
        "desc": "简单强大的德国3D动画制作软件",
        "url": "https://www.maxon.net/en/products/cinema-4d/overview/",
        "theme": "#2b2b2b",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_cinema4d.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 1,
        "title": "3Dmax",
        "desc": "三维动画渲染和制作软件",
        "url": "http://www.autodesk.com/products/3ds-max/overview",
        "theme": "#156a6a",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_3dmax.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 2,
        "title": "Maya",
        "desc": "世界顶级的三维动画软件",
        "url": "http://www.autodesk.com.cn/products/maya/overview",
        "theme": "#006a6a",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_maya.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 3,
        "title": "Rhino",
        "desc": "专业3D造型软件",
        "url": "http://www.rhino3d.com/",
        "theme": "#ffffff",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_rhino.png",
        "platform": "apple,microsoft"
      },
      {
        "idx": 4,
        "title": "Blender",
        "desc": "开源的跨平台全能三维动画制作软件",
        "url": "https://www.blender.org/",
        "theme": "#48b4f4",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_blender.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 5,
        "title": "MagicaVoxel",
        "desc": "简单快速上手的像素3D模型软件",
        "url": "http://ephtracy.github.io",
        "theme": "#484848",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_magicavoxel.png",
        "platform": "apple,microsoft"
      }
    ]
  },
  {
    "idx": 4,
    "title": "设计插件",
    "cateEn": "Design",
    "cateCn": "设计",
    "chilren": [
      {
        "idx": 0,
        "title": "Zoommyapp",
        "desc": "免版权高清图库聚合管理软件",
        "url": "http://zoommyapp.com/",
        "theme": "#121213",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_zoommyapp.png",
        "platform": "apple,microsoft,linux"
      },
      {
        "idx": 1,
        "title": "Zeplin",
        "desc": "强大的切图标注插件",
        "url": "https://www.zeplin.io/",
        "theme": "#fdbd39",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_zeplin.png",
        "platform": "apple,microsoft,block"
      },
      {
        "idx": 2,
        "title": "Sip",
        "desc": "苹果平台优秀的取色软件",
        "url": "http://sipapp.io/",
        "theme": "#000000",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_sipapp.png",
        "platform": "apple"
      },
      {
        "idx": 3,
        "title": "Craft",
        "desc": "Sketch必备自动填充插件",
        "url": "https://www.invisionapp.com/craft",
        "theme": "#007BEF",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_craft.png",
        "platform": "apple,microsoft,block"
      },
      {
        "idx": 4,
        "title": "SketchMeasure",
        "desc": "Sketch设计标注输出插件神器。",
        "url": "http://utom.design/measure/",
        "theme": "#222222",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_measure.png",
        "platform": "apple,block"
      },
      {
        "idx": 5,
        "title": "IconKit",
        "desc": "为IOSApp快速的生成不同分辨率图标",
        "url": "https://itunes.apple.com/app/id507135296",
        "theme": "#ffffff",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_iconkit.png",
        "platform": "apple"
      },
      {
        "idx": 6,
        "title": "colorcop",
        "desc": "windows平台优秀简单的取色软件",
        "url": "http://colorcop.net/screenshots/",
        "theme": "#000000",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_colorcop.png",
        "platform": "microsoft"
      },
      {
        "idx": 7,
        "title": "Sketch2AE",
        "desc": "Google出品Sketch画板文件直接导入AE",
        "url": "https://google.github.io/sketch2ae/",
        "theme": "#6a00b9",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_sketch2ae.png",
        "platform": "apple,block"
      },
      {
        "idx": 8,
        "title": "Eagle图片管理工具",
        "desc": "高效整理电脑上各种图片素材",
        "url": "https://eagle.cool/",
        "theme": "#006EFF",
        "logo": "http://chuangzaoshi.com/assets/images/DT/t_eagle.png",
        "platform": "apple,microsoft,block"
      }
    ]
  }
]

export default async (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  }