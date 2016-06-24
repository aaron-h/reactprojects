var cldrModules = require("require-dir-all")(
    'node_modules/cldr-misc-full/main',
    {
        recursive: true,                          // recursively go through subdirectories; default value shown
        indexAsParent: false,                          // add content of index.js/index.json files to parent object, not to parent.index
        includeFiles: /^delimiters.json$/,       // RegExp to select files; default value shown
        map: function (reqModule) {
            return reqModule;
        }
    }
);


var DELIMETERS = [];

var DelimeterService = (function () {
    function hasProperty(obj, prop) {
        if (typeof obj === 'object' && obj !== null) {
            if (obj.hasOwnProperty(prop)) {
                return true;
            }
            for (var p in obj) {
                if (obj.hasOwnProperty(p) &&
                    hasProperty(obj[p], prop)) {
                    return true;
                }
            }
            return false;
        }
        return false;
    };

    function getPropertyValue(obj, prop) {

        var value = null;
        if (obj instanceof Array) {
            for (var i = 0; i < obj.length; i++) {
                if (obj.hasOwnProperty(prop)) {
                    value = obj[prop];
                    break;
                } else {
                    value = getPropertyValue(obj[i], prop);
                }
            }
        }
        else {
            if (typeof obj === 'object' && obj !== null) {
                if (obj.hasOwnProperty(prop)) {
                    value = obj[prop];

                } else {

                    for (var p in obj) {
                        if (!obj[p].hasOwnProperty(prop)) {
                            value = getPropertyValue(obj[p], prop);
                        } else {
                            value = obj[p][prop];
                            break;
                        }
                    }
                }

            }
        }
        return value;
    };


    function filterProperty(propertyName) {
        var delimeters = [];
        if (!propertyName) {
            return
        }
        Object.keys(cldrModules)
            .map(function (key, index) {
                if (hasProperty(cldrModules[key], propertyName)) {
                    var delimeter = {locale: key};
                    delimeter[propertyName] = getPropertyValue(cldrModules[key].delimiters, propertyName);
                    delimeters.push(delimeter);
                }
            });

        DELIMETERS = delimeters;
        return delimeters;
    };

    function addProperty(propertyName) {
        if (DELIMETERS.length > 0) {
            DELIMETERS.map(function (delimeter) {
                if (hasProperty(cldrModules[delimeter.locale].delimiters, propertyName)) {
                    delimeter[propertyName] = getPropertyValue(cldrModules[delimeter.locale].delimiters, propertyName);
                }
                return delimeter;
            })
        }
        return DELIMETERS;
    };
    function removeProperty(propertyName) {
        if (DELIMETERS.length > 0) {
            DELIMETERS.map(function (delimeter) {
                delete delimeter[propertyName];

                return delimeter;

            })
        }
        if (Object.keys(DELIMETERS[0]).length == 1) {
            DELIMETERS = {}
        }

        return DELIMETERS;
    };

    return {
        filterProperty: filterProperty,
        addProperty: addProperty,
        removeProperty: removeProperty
    }
})();


module.exports = DelimeterService;
