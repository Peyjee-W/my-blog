var posts=["2024/09/18/铭记“九一八”：历史的警钟与和平的呼唤/","2024/09/14/在Vercel搭建hexo/","2024/08/10/老婆最大/","2024/08/08/NovelDownloader/","2023/05/12/自我介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };