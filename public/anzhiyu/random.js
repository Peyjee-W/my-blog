var posts=["2024/09/15/hello-world/","2024/08/08/NovelDownloader/","2024/08/15/StarNote：在笔记的星空中释放你的创造力/","2024/09/14/中秋月·思情远/","2024/09/14/在Vercel搭建hexo/","2023/05/25/小米碰碰连/","2024/08/17/性玩具与LGBTQ+群体：在性自由与社会挑战中的辩证探讨/","2024/09/12/捞男/","2024/08/10/老婆最大/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };