# AutoPaper_Bootstrap
## 一个自动组卷系统
系统整体基于Electron开发，整体布局采用Bootstrap4，各部分功能实现依赖于jQuery。
## 运行方式
1.安装并配置Electron，启动Electron，将项目整体文件夹拖入Electron中即可。\
2.将项目整体文件夹重命名为app，并放入Electron的resources文件中，返回上级菜单，双击electron.exe即可启动。
## 项目结构说明
>Autopaper_Bootstrap
* app
    * data
        * data.json
    * resource
        * bootstrap
            * css
                * bootstrap.min.css
            * fonts
                * glyphicons-halflings-regular.eot
                * glyphicons-halflings-regular.svg
                * glyphicons-halflings-regular.ttf
                * glyphicons-halflings-regular.woff
                * glyphicons-halflings-regular.woff2
            * js
                * bootstrap.min.js
        * bootstrap_treeview
            * bootstrap-treeview.min.js 
        * jQuery
            * jquery.min.js
        * summernote
            * font
                * summernote.eot
                * summernote.ttf
                * summernote.woff
            * summernote.css
            * summernote.min.js
        * wordexport
            * FileSaver.min.js
            * wordexport.js
    * index.html
* main.js
* package.json

## 试题说明
试题资源来自互联网，主要为计算机组成原理相关的选择题，可按自己的需要，自行替换data.json文件中的数据。注意，页面展示题目的时候用的是\<pre\>标签，所以需要在data.json按格式化好的格式录入试题。


