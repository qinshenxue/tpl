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
. data   渲染模板的数据