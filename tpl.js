;
(function (window) {
    var tpl = {
        cache: {},
        compile: function (tplId) {
            var source = document.getElementById(tplId).innerText;
            var code = "var $out='';$out='" + source.replace(/[\r\n]/g, '').replace(/<%\s*=\s*(.+?)%>/g, "';$out+=$1;$out+='").replace(/<%(.+?)%>/g, "';$1$out+='") + "';return $out;";
            this.cache[tplId] = {
                code: code,
                source: source,
                render: new Function('$data', code)
            };
            return this.cache[tplId].render;
        },
        render: function (tplId, data) {

            if (this.cache[tplId]) {
                return this.cache[tplId].render(data);
            }
            return this.compile(tplId)(data);
        }
    };
    window.tpl = tpl;

})(window);