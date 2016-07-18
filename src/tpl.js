(function (window) {

    /**
     *
     * @param    {string} tplId  存放模板的容器id
     * @param    {object} data  渲染模板的数据
     * @returns  string  渲染结果
     *
     */
    function tpl(tplId, data) {
        return tpl.render(tplId, data);
    }

    /**
     * 缓存编译过的渲染函数
     */
    tpl.cache = {};

    /**
     * 存放工具方法
     */
    tpl.tools = {};

    /**
     * 添加工具方法，在模板中可以调用
     *
     * @param    {string}   name   工具方法名
     * @param    {function} fun  工具方法
     * @returns  string
     *
     */
    tpl.tool = function (name, fun) {
        this.tools[name] = fun;
    };

    /**
     *
     * @param    {string} source   要编译的模板内容
     * @param    {string} cacheId  缓存的id
     * @returns  function  渲染函数
     *
     */
    tpl.compile = function (source, cacheId) {
        var code = "var $tools=this.tools; var $out='" + source.replace(/[\r\n]/g, '').replace(/\{\{\s*=\s*(.+?)\}\}/g, "';$out+=$1;$out+='").replace(/\{\{(.+?)\}\}/g, "';$1$out+='") + "';return $out;";
        var render = new Function('$data', code).bind(this);
        if (cacheId) {
            this.cache[cacheId] = {
                code: code,
                source: source,
                render: render
            };
        }
        return render;
    };
    /**
     *
     * @param    {string} tplId  存放模板的容器id
     * @param    {object} data  渲染模板的数据
     * @returns  string  渲染结果
     *
     */
    tpl.render = function (tplId, data) {
        if (this.cache[tplId]) {
            return this.cache[tplId].render(data);
        }
        var tplNode = document.getElementById(tplId);
        if (tplNode) {
            var source = tplNode.innerText;
            return this.compile(source, tplId)(data);
        }
        return '';
    };

    window.tpl = tpl;

})(window);