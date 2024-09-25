---
title: "在Vercel上搭建Hexo博客的详细教程"
date: "2024-09-14 10:00:00"
updated: "2024-09-14 12:30:00"
tags: ["Hexo", "Vercel", "博客搭建", "教程", "静态网站"]
categories: ["技术教程", "Web开发"]
keywords: 
description: "详细的Vercel搭建Hexo博客教程，从环境配置、项目初始化到最终部署，让你快速创建个人博客。"
top_img: 
comments: true
cover: "https://kk.clock8863.com/d/one/%E5%9B%BE%E5%BA%8A/blog/vercel-hexo.webp"
toc: true
toc_number: false
toc_style_simple: false
copyright: true
copyright_author: "Peyjee"
copyright_author_href: 
copyright_url: 
copyright_info: 
mathjax: false
katex: false
aplayer: false
highlight_shrink: true
aside: true
swiper_index: 1
top_group_index: 1
background: "#6C737C"
main_color: "#6C737C"
excerpt: "详细的Vercel搭建Hexo博客教程，从环境配置、项目初始化到最终部署，让你快速创建个人博客。"

---


在Vercel上搭建Hexo博客的流程相对简单，主要分为以下几步：环境配置、Hexo项目初始化、Hexo主题配置、GitHub仓库关联、部署到Vercel。以下是详细的教程。

### 一、准备工作
1. **安装Node.js**
   - Hexo基于Node.js开发，所以首先你需要安装Node.js。去[Node.js官网](https://nodejs.org/)下载并安装稳定版。
   - 安装完成后，可以用以下命令确认是否安装成功：
     ```bash
     node -v
     npm -v
     ```
2. **安装Git**
   - 安装Git，用于管理Hexo博客代码并推送到GitHub。去[Git官网](https://git-scm.com/)下载安装。

3. **注册Vercel账户**
   - 访问[Vercel官网](https://vercel.com/)，使用GitHub账户注册登录。Vercel与GitHub无缝集成，方便后续部署。

4. **注册GitHub账户并创建一个仓库**
   - 在[GitHub](https://github.com/)上创建一个用于存放Hexo博客源码的仓库，如`my-hexo-blog`。

### 二、安装与初始化Hexo
1. **全局安装Hexo**
   - 使用npm全局安装Hexo：
     ```bash
     npm install -g hexo-cli
     ```
   - 安装成功后，可以通过以下命令确认：
     ```bash
     hexo -v
     ```

2. **初始化Hexo项目**
   - 在本地选择一个文件夹作为你Hexo博客的根目录（比如`my-blog`），然后初始化Hexo：
     ```bash
     mkdir my-blog
     cd my-blog
     hexo init
     npm install
     ```
   - 初始化完成后，目录结构如下：
     ```
     .
     ├── _config.yml  // 配置文件
     ├── package.json // 项目依赖文件
     ├── scaffolds    // 模板文件夹
     ├── source       // 文章、静态资源文件夹
     └── themes       // 主题文件夹
     ```

3. **启动本地服务器**
   - 你可以启动本地服务器预览博客效果：
     ```bash
     hexo serve
     ```
   - 浏览器中访问`http://localhost:4000`可以看到默认的Hexo博客页面。

### 三、配置Hexo主题
Hexo的默认主题是`landscape`，如果你想更换其他主题，可以在Hexo官网或主题市场上找到自己喜欢的主题。

1. **下载主题**
   - 假设你选择[NexT主题](https://github.com/hexo-theme-next/hexo-theme-next)，可以使用以下命令下载：
     ```bash
     cd themes
     git clone https://github.com/hexo-theme-next/hexo-theme-next next
     ```

2. **修改配置文件**
   - 打开根目录的`_config.yml`文件，将`theme`字段改为`next`：
     ```yml
     theme: next
     ```

3. **配置主题**
   - 根据主题的README文档配置更多选项。主题的详细配置一般都在`themes/next/_config.yml`中。

### 四、将Hexo博客推送到GitHub
1. **初始化Git仓库**
   - 在你的Hexo项目根目录下初始化Git仓库：
     ```bash
     git init
     git remote add origin https://github.com/your_username/my-hexo-blog.git
     git add .
     git commit -m "Initial commit"
     git push -u origin master
     ```

2. **配置Hexo的`_config.yml`**
   - 在Hexo的`_config.yml`文件中，添加部署配置：
     ```yml
     deploy:
       type: git
       repo: https://github.com/your_username/my-hexo-blog.git
       branch: master
     ```
   - 安装Hexo部署工具：
     ```bash
     npm install hexo-deployer-git --save
     ```

### 五、Vercel部署Hexo
1. **导入项目**
   - 登录[Vercel](https://vercel.com/)后台，点击`New Project`。
   - 选择`my-hexo-blog`（你之前推送的GitHub仓库），然后点击`Import`。
   
2. **设置Build命令和Output目录**
   - 在Vercel项目设置中，修改如下配置：
     - **Framework Preset**: `Other`
     - **Build Command**: `npm run build`
     - **Output Directory**: `public`

   **注**：Hexo生成的静态文件默认存放在`public`目录下。

3. **修改`package.json`添加build脚本**
   - 在`package.json`中添加一个`build`脚本，以便Vercel在部署时执行Hexo的生成命令：
     ```json
     "scripts": {
       "build": "hexo generate"
     }
     ```

4. **部署**
   - 完成配置后，点击`Deploy`，Vercel会自动执行构建和部署流程。
   - 部署成功后，你会看到分配给你博客的Vercel域名，点击即可访问。

### 六、更新博客内容
1. **编写文章**
   - 使用Hexo的命令创建新文章：
     ```bash
     hexo new post "My First Blog"
     ```
   - 文章文件会生成在`source/_posts`目录下，使用Markdown语法编辑。

2. **本地生成与预览**
   - 在本地生成静态文件并预览：
     ```bash
     hexo generate
     hexo serve
     ```

3. **推送到GitHub并部署**
   - 推送新的文章或修改到GitHub：
     ```bash
     git add .
     git commit -m "Add new blog post"
     git push origin master
     ```
   - Vercel会自动检测到GitHub仓库的变更，并重新部署更新内容。

### 七、常见问题
1. **Vercel部署失败或构建卡住**
   - 检查`package.json`中的build脚本是否正确。
   - 检查Hexo配置文件是否有误。

2. **Vercel输出目录不对**
   - 确保Vercel项目设置中的Output Directory配置为`public`，这是Hexo生成静态文件的目录。

### 八、总结
通过上述步骤，你应该能够成功在Vercel上部署Hexo博客，并实现持续集成。每次你向GitHub仓库推送新的博客内容时，Vercel会自动触发重新构建和部署，使博客内容更新。