import type { IncomingMessage, ServerResponse } from 'http'

export const data = [
  {
    "idx": 0,
    "title": "移动终端",
    "cateEn": "Model",
    "cateCn": "模型",
    "chilren": [
      {
        "idx": 0,
        "title": "ApkMirror",
        "desc": "著名的Android apk程序源下载",
        "url": "https://www.apkmirror.com/",
        "logo": "http://chuangzaoshi.com/assets/images/G/apkmirror.png"
      }
    ]
  },
  {
    "idx": 1,
    "title": "开发硬件",
    "cateEn": "Model",
    "cateCn": "模型",
    "chilren": [
      {
        "idx": 0,
        "title": "树莓派",
        "desc": "全球热捧基于ARM的微型电脑主板",
        "url": "https://www.raspberrypi.org",
        "logo": "http://chuangzaoshi.com/assets/images/G/raspberry.png"
      },
      {
        "idx": 1,
        "title": "MicroPython",
        "desc": "基于Python的物联网单片机",
        "url": "https://micropython.org/",
        "logo": "http://chuangzaoshi.com/assets/images/G/micropython.png"
      },
      {
        "idx": 2,
        "title": "UDOO",
        "desc": "支持Android和Linux双系统开发主板",
        "url": "https://www.udoo.org/udoo-neo/",
        "logo": "http://chuangzaoshi.com/assets/images/G/udoo.png"
      },
      {
        "idx": 3,
        "title": "Arduino",
        "desc": "便捷灵活的开发版",
        "url": "https://www.arduino.cc",
        "logo": "http://chuangzaoshi.com/assets/images/G/arduino.png"
      },
      {
        "idx": 4,
        "title": "香蕉派",
        "desc": "国产卡片式微型计算机",
        "url": "http://www.banana-pi.com/",
        "logo": "http://chuangzaoshi.com/assets/images/G/banana-pi.png"
      },
      {
        "idx": 5,
        "title": "vocore",
        "desc": "超迷你单片机",
        "url": "http://vocore.io/",
        "logo": "http://chuangzaoshi.com/assets/images/G/vocore.png"
      },
      {
        "idx": 6,
        "title": "NanoPi",
        "desc": "国内开源无线创客板",
        "url": "http://nanopi.org",
        "logo": "http://chuangzaoshi.com/assets/images/G/nanopi.png"
      },
      {
        "idx": 7,
        "title": "USBArmory",
        "desc": "U盘大小的微型计算机",
        "url": "https://inversepath.com/usbarmory",
        "logo": "http://chuangzaoshi.com/assets/images/G/usbarmory.png"
      },
      {
        "idx": 8,
        "title": "pi-top",
        "desc": "树莓派笔记本模块化电脑",
        "url": "https://pi-top.com",
        "logo": "http://chuangzaoshi.com/assets/images/G/pi-top.png"
      },
      {
        "idx": 9,
        "title": "PINE64",
        "desc": "64位单片机微电脑(支持linux和安卓)",
        "url": "https://www.pine64.org",
        "logo": "http://chuangzaoshi.com/assets/images/G/pine64.png"
      },
      {
        "idx": 10,
        "title": "香橙派",
        "desc": "国内开源的商业单板电脑",
        "url": "http://www.orangepi.cn/",
        "logo": "http://chuangzaoshi.com/assets/images/G/orangepi.png"
      },
      {
        "idx": 11,
        "title": "英特尔®NUC",
        "desc": "英特尔X86迷你主机电脑",
        "url": "https://www.intel.cn/content/www/cn/zh/products/boards-kits/nuc.html",
        "logo": "http://chuangzaoshi.com/assets/images/G/intel.png"
      }
    ]
  },
  {
    "idx": 2,
    "title": "硬件系统",
    "cateEn": "Model",
    "cateCn": "模型",
    "chilren": [
      {
        "idx": 0,
        "title": "Raspbian",
        "desc": "树莓派官方推荐的Linux系统",
        "url": "https://www.raspberrypi.org/downloads/",
        "logo": "http://chuangzaoshi.com/assets/images/G/raspbian.png"
      },
      {
        "idx": 1,
        "title": "Windows10 IoT",
        "desc": "微软windows10物联网系统",
        "url": "https://developer.microsoft.com/en-us/windows/iot/getstarted",
        "logo": "http://chuangzaoshi.com/assets/images/G/windows10lot.png"
      },
      {
        "idx": 2,
        "title": "CentOS-ARM",
        "desc": "面向ARM硬件架构的CentOS7系统",
        "url": "http://mirror.centos.org/altarch/7/isos/armhfp/",
        "logo": "http://chuangzaoshi.com/assets/images/C/centos.png"
      },
      {
        "idx": 3,
        "title": "Ubuntu Core",
        "desc": "Ubuntu 针对物联网的一个发行版本",
        "url": "https://developer.ubuntu.com/core/get-started/raspberry-pi-2-3",
        "logo": "http://chuangzaoshi.com/assets/images/C/ubuntu.png"
      },
      {
        "idx": 4,
        "title": "ArchLinux",
        "desc": "轻量简洁为设计理念的Linux发行版",
        "url": "https://archlinuxarm.org/platforms",
        "logo": "http://chuangzaoshi.com/assets/images/G/archlinux.png"
      },
      {
        "idx": 5,
        "title": "Kali-ARM",
        "desc": "基于ARM版本的linux黑客安防渗透系统",
        "url": "https://www.offensive-security.com/kali-linux-arm-images/",
        "logo": "http://chuangzaoshi.com/assets/images/G/Kali.png"
      },
      {
        "idx": 6,
        "title": "FreeBSD-ARM",
        "desc": "基于ARM的UNIX操作系统",
        "url": "https://www.freebsd.org/platforms/arm.html",
        "logo": "http://chuangzaoshi.com/assets/images/G/freebsd.png"
      },
      {
        "idx": 7,
        "title": "OpenWrt",
        "desc": "嵌入式的Linux发行版路由器系统",
        "url": "https://openwrt.org/downloads",
        "logo": "http://chuangzaoshi.com/assets/images/G/openwrt.png"
      },
      {
        "idx": 8,
        "title": "OpenMediaVault",
        "desc": "基于Debian的存储(NAS)系统",
        "url": "http://www.openmediavault.org",
        "logo": "http://chuangzaoshi.com/assets/images/G/openmediavault.png"
      },
      {
        "idx": 9,
        "title": "Kodi",
        "desc": "开源家庭多媒体影音中心播放器",
        "url": "https://kodi.tv",
        "logo": "http://chuangzaoshi.com/assets/images/G/kodi.png"
      },
      {
        "idx": 10,
        "title": "LibreELEC",
        "desc": "专注于迷你linux板精简化Kodi系统",
        "url": "https://libreelec.tv/",
        "logo": "http://chuangzaoshi.com/assets/images/G/libreelec.png"
      },
      {
        "idx": 11,
        "title": "OSMC",
        "desc": "linux免费开源多媒体播放器",
        "url": "https://osmc.tv",
        "logo": "http://chuangzaoshi.com/assets/images/G/osmc.png"
      },
      {
        "idx": 12,
        "title": "Home Assistant",
        "desc": "基于Python3的开源智能家居平台",
        "url": "https://www.home-assistant.io",
        "logo": "http://chuangzaoshi.com/assets/images/G/homeassistant.png"
      },
      {
        "idx": 13,
        "title": "Transmissionbt",
        "desc": "开源多平台轻量快速BT下载客户端",
        "url": "https://transmissionbt.com/",
        "logo": "http://chuangzaoshi.com/assets/images/G/transmissionbt.png"
      },
      {
        "idx": 14,
        "title": "Armbian",
        "desc": "为ARM开发板专门发行轻量级Debian",
        "url": "https://www.armbian.com/",
        "logo": "http://chuangzaoshi.com/assets/images/G/armbian.png"
      },
      {
        "idx": 15,
        "title": "Android Things",
        "desc": "Android的物联网嵌入式操作系统",
        "url": "https://developer.android.com/things/get-started/",
        "logo": "http://chuangzaoshi.com/assets/images/D/android.png"
      },
      {
        "idx": 16,
        "title": "OctoPrint",
        "desc": "3D打印服务器",
        "url": "https://octoprint.org/",
        "logo": "http://chuangzaoshi.com/assets/images/G/octoprint.png"
      }
    ]
  },
  {
    "idx": 3,
    "title": "游戏系统",
    "cateEn": "Model",
    "cateCn": "模型",
    "chilren": [
      {
        "idx": 0,
        "title": "Retropie",
        "desc": "基于Linux树莓派的经典游戏模拟器系统",
        "url": "https://retropie.org.uk/",
        "logo": "http://chuangzaoshi.com/assets/images/G/retropie.png"
      },
      {
        "idx": 1,
        "title": "Lakka",
        "desc": "针对树莓派基于RetroArch的经典游戏模拟器系统",
        "url": "http://www.lakka.tv/",
        "logo": "http://chuangzaoshi.com/assets/images/G/lakka.png"
      },
      {
        "idx": 2,
        "title": "Recalbox",
        "desc": "怀旧游戏模拟器的系统",
        "url": "https://www.recalbox.com",
        "logo": "http://chuangzaoshi.com/assets/images/G/recalbox.png"
      },
      {
        "idx": 3,
        "title": "EmulationStation",
        "desc": "多平台前端复古游戏模拟器",
        "url": "https://emulationstation.org/",
        "logo": "http://chuangzaoshi.com/assets/images/G/emulationstation.png"
      },
      {
        "idx": 4,
        "title": "RetrOrangepi",
        "desc": "适用于OrangePi的RetroPie分支系统",
        "url": "http://www.retrorangepi.org/",
        "logo": "http://chuangzaoshi.com/assets/images/G/retrorangepi.png"
      },
      {
        "idx": 5,
        "title": "RetroArch",
        "desc": "跨平台游戏引擎丨模拟器以及多媒体播放",
        "url": "http://www.retroarch.com/",
        "logo": "http://chuangzaoshi.com/assets/images/G/retroarch.png"
      }
    ]
  },
  {
    "idx": 4,
    "title": "其他工具",
    "cateEn": "Model",
    "cateCn": "模型",
    "chilren": [
      {
        "idx": 0,
        "title": "微PE",
        "desc": "国产口碑比较好的WinPE装机维护工具",
        "url": "http://www.wepe.com.cn/",
        "logo": "http://chuangzaoshi.com/assets/images/G/wepe.png"
      },
      {
        "idx": 1,
        "title": "Etcher",
        "desc": "烧录系统镜像到U盘或SD卡工具",
        "url": "https://etcher.io",
        "logo": "http://chuangzaoshi.com/assets/images/G/etcher.png"
      },
      {
        "idx": 2,
        "title": "SDFormatter",
        "desc": "专业SD卡格式化修复工具",
        "url": "https://www.sdcard.org/chs/downloads/formatter_4/",
        "logo": "http://chuangzaoshi.com/assets/images/G/sdformatter.png"
      },
      {
        "idx": 3,
        "title": "Rufus",
        "desc": "创建可引导U盘的系统制作工具",
        "url": "http://rufus.akeo.ie/?locale=zh_CN",
        "logo": "http://chuangzaoshi.com/assets/images/G/rufus.png"
      },
      {
        "idx": 4,
        "title": "Win32 Disk Imager",
        "desc": "烧录系统镜像到SD卡工具",
        "url": "https://www.sourceforge.net/projects/win32diskimager/",
        "logo": "http://chuangzaoshi.com/assets/images/G/win32diskimager.png"
      },
      {
        "idx": 5,
        "title": "USB/DVD Download",
        "desc": "微软官方-创建可引导U盘的系统制作工具",
        "url": "https://www.microsoft.com/en-us/download/windows-usb-dvd-download-tool",
        "logo": "http://chuangzaoshi.com/assets/images/D/modern.png"
      },
      {
        "idx": 6,
        "title": "UNetbootin",
        "desc": "创建可引导U盘的Linux系统制作工具",
        "url": "https://unetbootin.github.io/",
        "logo": "http://chuangzaoshi.com/assets/images/G/unetbootin.png"
      },
      {
        "idx": 7,
        "title": "ImageUSB",
        "desc": "免费支持多个USB驱动盘烧录镜像软件",
        "url": "https://www.osforensics.com/tools/write-usb-images.html",
        "logo": "http://chuangzaoshi.com/assets/"
      }
    ]
  },
  {
    "idx": 5,
    "title": "系统镜像",
    "cateEn": "Model",
    "cateCn": "模型",
    "chilren": [
      {
        "idx": 0,
        "title": "itellyou",
        "desc": "windows系统镜像下载站点",
        "url": "https://msdn.itellyou.cn/",
        "logo": "http://chuangzaoshi.com/assets/images/G/itellyou.png"
      }
    ]
  },
  {
    "idx": 6,
    "title": "信息查询",
    "cateEn": "Model",
    "cateCn": "模型",
    "chilren": [
      {
        "idx": 0,
        "title": "cnVintage",
        "desc": "小众怀旧中文复古电子产品交流社区",
        "url": "https://www.cnvintage.org/",
        "logo": "http://chuangzaoshi.com/assets/images/G/cnvintage.png"
      },
      {
        "idx": 1,
        "title": "wikiDevi",
        "desc": "设备信息维基百科",
        "url": "https://wikidevi.com/wiki/Main_Page",
        "logo": "http://chuangzaoshi.com/assets/images/G/wikidevi.png"
      }
    ]
  }
]

export default async (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.end(JSON.stringify(data));
  }