"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Package = /** @class */ (function () {
    function Package(name) {
        this.dependencyList = [];
        this._name = name;
    }
    Package.prototype.addDependencies = function () {
        var dependencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependencies[_i] = arguments[_i];
        }
        this.dependencyList = this.dependencyList.concat(dependencies);
    };
    Object.defineProperty(Package.prototype, "dependencies", {
        get: function () {
            return this.dependencyList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Package.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Package;
}());
exports.default = Package;
//# sourceMappingURL=package.js.map