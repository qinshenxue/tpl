;
(function (window) {

    function tpl(tplId, data) {
        return tpl.render(tplId, data);
    }


    tpl.cache = {};
    tpl.tools = {};
    tpl.tool = function (name, fun) {
        this.tools[name] = fun;
    };
    tpl.compile = function (source, cacheId) {
        var code = "var $tools=this.tools; var $out='" + source.replace(/[\r\n]/g, '').replace(/<%\s*=\s*(.+?)%>/g, "';$out+=$1;$out+='").replace(/<%(.+?)%>/g, "';$1$out+='") + "';return $out;";
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