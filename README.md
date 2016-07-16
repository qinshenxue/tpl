#tpl

## 语法

### 输出属性值
`<%= $data.propName %>`

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
. data   编译模板的数据
返回编译后的html字符串
###tpl.compile(source[,cacheId])
. source 要编译的模板内容
. cacheId 缓存的id
返回function (data){}
###tpl.html(tplId,data)
同tpl(tplId,data)