export const steps = [
  {
    title: "进入一个历史场景",
    description: "从真实处境出发，先看到人们当时面对的问题。",
  },
  {
    title: "做出你的选择",
    description: "在有限信息与资源下，作出一项看似简单的决定。",
  },
  {
    title: "查看结果与背后的原因",
    description: "理解行为、环境与历史结果为何会连在一起。",
  },
] as const;

export const scenes = [
  {
    title: "明朝水果摊贩",
    description: "从卖什么水果，理解植物传播与贸易。",
    href: "/ming-fruit",
  },
  {
    title: "唐朝医生",
    description: "在没有现代医学的时代，你会如何处理发热的病人？",
    href: "/tang-doctor",
  },
  {
    title: "明朝小孩的糖果",
    description: "如果你生活在明朝街头，你会选哪种甜食？",
    href: "/ming-sweets",
  },
] as const;

export const homeBranches = [
  {
    title: "不合时宜",
    subtitle: "进化，个体，历史大事件！",
    note: "由她的朋友路哥一起撰写",
    href: "/buheshiyi",
    palette: {
      base: "from-[#e6ece2] via-[#edf1e8] to-[#dde6d7]",
      ring: "ring-[rgba(78,102,83,0.14)]",
      shadow: "shadow-[0_24px_60px_rgba(96,113,95,0.14)]",
      text: "text-[#314438]",
      mute: "text-[#617264]",
      accent: "bg-[#f2f5ee]",
      doodle: "stroke-[rgba(102,126,103,0.28)]",
    },
  },
  {
    title: "混沌无边",
    subtitle: "宇宙，粒子，还是混沌？",
    note: "一些认真又不太安分的宇宙猜想",
    href: "/hundunwubian",
    palette: {
      base: "from-[#3a465f] via-[#46546d] to-[#556178]",
      ring: "ring-[rgba(130,149,183,0.18)]",
      shadow: "shadow-[0_26px_66px_rgba(40,50,70,0.28)]",
      text: "text-[#f3f6fb]",
      mute: "text-[#d2d8e4]",
      accent: "bg-[rgba(255,255,255,0.1)]",
      doodle: "stroke-[rgba(210,220,240,0.24)]",
    },
  },
  {
    title: "没事瞎看",
    subtitle: "日常，方的圆的还是看不见的。",
    note: "写给那些突然冒出来的怪问题",
    href: "/meishixiakan",
    palette: {
      base: "from-[#f3cec1] via-[#f5d8cb] to-[#f0c8ba]",
      ring: "ring-[rgba(169,88,71,0.16)]",
      shadow: "shadow-[0_24px_60px_rgba(191,109,88,0.18)]",
      text: "text-[#6c3027]",
      mute: "text-[#865149]",
      accent: "bg-[#f8e5de]",
      doodle: "stroke-[rgba(172,85,66,0.26)]",
    },
  },
] as const;
