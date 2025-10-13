# Figma Demo - Partnership Page

这是一个基于Next.js和Tailwind CSS构建的A-Premium合作伙伴页面，使用Figma设计数据生成。

## 项目结构

```
figma-demo/
├── app/
│   ├── page.tsx          # 主页面
│   ├── layout.tsx        # 根布局
│   └── globals.css       # 全局样式
├── components/
│   ├── Header.tsx        # 顶部导航栏
│   ├── Hero.tsx          # Hero区域
│   ├── ContactSection.tsx # 联系区域
│   ├── PartnershipVision.tsx # 合作愿景
│   ├── InfluencerCollaborations.tsx # 影响者合作
│   ├── PartnershipCollaborations.tsx # 合作伙伴合作
│   ├── Newsletter.tsx    # Newsletter订阅
│   └── Footer.tsx        # 页脚
└── README.md
```

## 功能特性

- ✅ 完全响应式设计
- ✅ 基于Figma设计数据生成
- ✅ 使用Tailwind CSS实现样式
- ✅ TypeScript支持
- ✅ 组件化架构

## 页面组成

1. **Header** - 包含顶部横幅、Logo、搜索栏、用户信息和购物车
2. **Hero** - 大标题区域展示"Join the A-Premium Partnership Program"
3. **Contact Section** - 联系信息和CTA按钮
4. **Partnership Vision** - 展示公司合作愿景
5. **Influencer Collaborations** - 针对内容创作者的合作机会
6. **Partnership Collaborations** - 详细的合作伙伴类型说明
7. **Newsletter** - 邮件订阅表单
8. **Footer** - 包含联系方式、链接和社交媒体

## 开发

首次运行前，安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看页面。

## 构建

创建生产环境构建：

```bash
npm run build
```

启动生产服务器：

```bash
npm start
```

## 技术栈

- **Next.js 15** - React框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 实用优先的CSS框架
- **React 19** - UI库

## 从Figma获取的设计数据

项目使用Figma MCP工具从以下设计文件生成：

- Figma文件: Partnership
- 节点ID: 3-12022
- 文件链接: https://www.figma.com/design/j4VaHkpalK0hD8Ch8I9VLY/Partnership?node-id=3-12022

## 许可证

MIT
