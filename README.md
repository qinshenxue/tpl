#简单js模板引擎，支持原生js语法，压缩版不到1k 
>渲染100条*10000次平均耗时60ms左右

## 语法
### 模板数据及工具方法
模板中的数据通过$data取
使用工具方法（[API](#api)中说明了如何增加工具方法）通过$tools调用

### 输出属性值
```
<div> {{= $data.propName }} </div>
<div> {{= Math.random() }} </div>
<div> {{= $tools.formatDate($data.date) }} </div>
```

### js原生语法
```
{{ if( $data.really){ }}
<div>do sth...</div>
{{ }else{ }}
<div>do sth...</div>
{{ } }}
```
```
{{ var list=$data.list; }}
{{ for(var i=0,j=list.length;i<j;i++){ }}
    <div>{{= list[i]}}</div>
{{ } }}
```

## API

###tpl(tplId,data)
- tplId  存放模板的容器id
- data   渲染模板的数据
返回渲染结果

```
document.getElementById('output').innerHTML = tpl('tpl-example',{list:[1,2,3]});
```

###tpl.compile(source[,cacheId])
- source 要编译的模板内容
- [非必须]cacheId 缓存的id
返回渲染函数

```
var render=tpl.compile('{{=$data.prop}}');
render({prop:'hello world'});
```

###tpl.render(tplId,data)
同tpl(tplId,data)

### tpl.tool(toolName,toolFunction) 添加工具方法，在模板中可以调用
- toolName 工具方法名
- toolFunction 工具方法

```
tpl.tool('formatDate', function (date) {
        var d = new Date(date);
        return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    });

```
模板内使用
```
<div> {{= $tools.formatDate($data.date) }} </div>
```