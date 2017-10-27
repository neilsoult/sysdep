"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_1 = require("./package");
var System = /** @class */ (function () {
    function System() {
        this.existingPackageNames = [];
        this.existingPackages = [];
        this.installedPackageNames = [];
        this.installedPackages = [];
    }
    System.prototype.addToExistingPackage = function (targetPackage) {
        this.existingPackages.push(targetPackage);
        this.existingPackageNames.push(targetPackage.name);
    };
    System.prototype.addToInstalledPackage = function (targetPackage) {
        this.installedPackages.push(targetPackage);
        this.installedPackageNames.push(targetPackage.name);
    };
    System.prototype.getExistingPackage = function (packageName) {
        return this.existingPackages[this.existingPackageNames.indexOf(packageName)];
    };
    System.prototype.isDependencyOfInstalledPackage = function (packageName) {
        return this.installedPackages.some(function (_package) {
            return _package.dependencyList.includes(packageName);
        });
    };
    System.prototype.removeInstalledPackage = function (packageName) {
        var idx = this.installedPackageNames.indexOf(packageName);
        var removedPackage = this.installedPackages[idx];
        this.installedPackageNames.splice(idx, 1);
        this.installedPackages.splice(idx, 1);
        return removedPackage;
    };
    System.prototype.depend = function (packageName) {
        var dependencyNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dependencyNames[_i - 1] = arguments[_i];
        }
        if (this.existingPackageNames.includes(packageName)) {
            var targetPackage = this.getExistingPackage(packageName);
            targetPackage.addDependencies(dependencyNames);
        }
        else {
            var newPackage = new package_1.default(packageName);
            newPackage.addDependencies(dependencyNames);
            this.addToExistingPackage(newPackage);
        }
    };
    System.prototype.install = function (packageName) {
        var _this = this;
        if (this.installedPackageNames.includes(packageName)) {
            return console.log("\t" + packageName + " is already installed");
        }
        if (this.existingPackageNames.includes(packageName)) {
            var targetPackage = this.getExistingPackage(packageName);
            targetPackage.dependencies.forEach(function (packageName) {
                _this.install(packageName);
            });
            this.addToInstalledPackage(targetPackage);
            return console.log("\tInstalling " + targetPackage.name + ".");
        }
        var newPackage = new package_1.default(packageName);
        this.addToExistingPackage(newPackage);
        this.addToInstalledPackage(newPackage);
        return console.log("\tInstalling " + newPackage.name + ".");
    };
    System.prototype.list = function () {
        this.installedPackageNames.forEach(function (name) {
            console.log("\t" + name);
        });
        console.log('END');
    };
    System.prototype.remove = function (packageName) {
        var _this = this;
        if (!this.installedPackageNames.includes(packageName)) {
            return console.log("\t" + packageName + " is not installed.");
        }
        if (this.isDependencyOfInstalledPackage(packageName)) {
            return console.log("\t" + packageName + " is still needed.");
        }
        var removedPackage = this.removeInstalledPackage(packageName);
        removedPackage.dependencyList.forEach(function (name) {
            _this.remove(name);
        });
        return console.log("\tRemoving " + packageName + ".");
    };
    return System;
}());
exports.default = System;
//# sourceMappingURL=system.js.map