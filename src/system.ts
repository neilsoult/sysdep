import Package from './package';

export default class System {

    existingPackageNames: Array<string> = [];
    existingPackages: Array<Package> = [];
    installedPackageNames: Array<string> = [];
    installedPackages: Array<Package> = [];

    constructor () {}

    private addToExistingPackage (targetPackage: Package) {

        this.existingPackages.push(targetPackage);
        this.existingPackageNames.push(targetPackage.name);

    }

    private addToInstalledPackage (targetPackage: Package) {

        this.installedPackages.push(targetPackage);
        this.installedPackageNames.push(targetPackage.name);

    }

    private getExistingPackage(packageName: string): Package {

        return this.existingPackages[this.existingPackageNames.indexOf(packageName)];

    }

    private isDependencyOfInstalledPackage (packageName: string): boolean {

        return this.installedPackages.some((_package: Package) => {

            return _package.dependencyList.includes(packageName);

        })

    }

    private removeInstalledPackage(packageName: string): Package {

        let idx = this.installedPackageNames.indexOf(packageName);
        let removedPackage = this.installedPackages[idx];
        this.installedPackageNames.splice(idx, 1);
        this.installedPackages.splice(idx, 1);
        return removedPackage;

    }

    depend (packageName: string, ...dependencyNames: Array<string>) {

        if (this.existingPackageNames.includes(packageName)) {

            let targetPackage = this.getExistingPackage(packageName);
            targetPackage.addDependencies(dependencyNames);

        } else {

            let newPackage = new Package(packageName);
            newPackage.addDependencies(dependencyNames);
            this.addToExistingPackage(newPackage);

        }

    }

    install (packageName: string) {

        if (this.installedPackageNames.includes(packageName)) {

            return console.log(`\t${packageName} is already installed`);

        }

        if (this.existingPackageNames.includes(packageName)){

            let targetPackage = this.getExistingPackage(packageName);
            targetPackage.dependencies.forEach((packageName) => {

                this.install(packageName);

            });

            this.addToInstalledPackage(targetPackage);

            return console.log(`\tInstalling ${targetPackage.name}.`);

        }

        let newPackage = new Package(packageName);

        this.addToExistingPackage(newPackage);
        this.addToInstalledPackage(newPackage);

        return console.log(`\tInstalling ${newPackage.name}.`);

    }

    list () {

        this.installedPackageNames.forEach((name) => {

            console.log(`\t${name}`);

        });

    }

    remove (packageName: string) {

        if (!this.installedPackageNames.includes(packageName)) {

            return console.log(`\t${packageName} is not installed.`);

        }

        if (this.isDependencyOfInstalledPackage(packageName)) {

            return console.log(`\t${packageName} is still needed.`);

        }

        let removedPackage = this.removeInstalledPackage(packageName);
        removedPackage.dependencyList.forEach((name: string) => {

            this.remove(name);

        });

        return console.log(`\tRemoving ${packageName}.`);

    }

}
