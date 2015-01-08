/*! app 1.0.0 2015-01-08 */

// my global library
var myApp = {};

// 获取查询字符串对象
var getQueryStringArgs = function () {

    var qs = (location.search.length > 0 ? location.search.slice(1) : ""),
        args = {},  // 保存要返回的数据对象
        items = (qs.length > 0 ? qs.split("&") : []),  // &符split后的数组，数据项
        item = [],  // =号split后的数组，每个数据项的json表达
        name = "",
        value = "",  // 
        len = items.length,
        i;

    for (i = 0; i < len; i += 1) {

        item = items[i].split("=");
        
        // 查询字符串应该是被编码过的，所以解码
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);

        if (name.length) {
            args[name] = value;
        }
    }

    return args;
};


$.extend(myApp, getQueryStringArgs());
/*---------分割线---------*/
var template;