# WeblogicBatchMemShellKit
# 一、安装启动

`JDK8`、`node18.0.0`、`vue5.0.8`

```shell
git clone https://github.com/W01fh4cker/weblogic-batch-memshell-kit.git
cd weblogic-batch-memshell-kit
npm install
npm run electron:serve
```

`idea`打开`java-backend`，同步完依赖：

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313212458951.png)

然后导入`lib`目录下的`wlfullclient.jar`：

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313212911073.png)

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313213003221.png)

启动后利用截图如下：

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313213049432.png)

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313213037896.png)

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313213114332.png)

# 二、其他说明

2024.3.13 [0.0.1-beta]：目前只支持`weblogic 10.3.6`+`jdk 8`环境下的打入，有能力的可以自行编写内存马打入代码，可以提`pr`。可以看到我是采取了动态编译`class`文件的形式，方便自定义内存马的类名、`uri`、密码：

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313213329018.png)

暂时未研究目标环境为`jdk7`时的代码。

# 三、注意！

本项目发出来只是供大家学习交流使用，本项目会随机更新（大概率是不会继续更新的，因为太忙），只是我在学习全栈开发路上的一个练手的好玩的项目，以及为我后面写`C2/3`做铺垫。

# 四、关于我

Github：https://github.com/W01fh4cker

Twitter：https://twitter.com/W01fh4cker

这是我的微信公众号【追梦信安】，分享原创文章，追踪最新漏洞，历史主要发表文章有：

《【三万字原创长文】完全零基础从0到1掌握Java内存马（2）》

《【三万字原创长文】完全零基础从0到1掌握Java内存马（1）》

《【两万字】零基础学Fastjson提高篇（一）》

《【两万字原创长文】完全零基础入门Fastjson系列漏洞（基础篇）》

《【万字原创笔记】从0到1学JavaScript》

《【吐血原创】php入门学习笔记（17000字！）》

![](https://cdn.jsdelivr.net/gh/W01fh4cker/blog_image@main/image-20240313213904852.png)
