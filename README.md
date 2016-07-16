#tpl 渲染100条*10000次平均耗时60ms左右

## 语法
### 数据源
模板中的数据通过$data取
要想使用工具方法（API中说明了如何增加工具方法）通过$tools调用

### 输出属性值
```
<%= $data.propName %>
```

### js原生语法
```
<% if( $data.really){ %>
<div>do sth...</div>
<% }else{ %>
<div>do sth...</div>
<% } %>
```
```
<% for(var i=0,j=$data.list.length;i<j;i++){ %>
    <div><%= $data.list[i]%></div>
<% } %>
```

## API

###tpl(tplId,data)
. tplId  存放模板的容器id
. data   渲染模板的数据
返回渲染结果
###tpl.compile(source[,cacheId])
. source 要编译的模板内容
. [非必须]cacheId 缓存的id
返回渲染函数
###tpl.render(tplId,data)
同tpl(tplId,data)
### tpl.tool(toolName,toolFunction) 添加工具方法，在模板中可以调用
. toolName 工具方法名
. toolFunction 工具方法
