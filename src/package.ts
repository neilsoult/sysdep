export default class Package {

    _name: string;
    dependencyList: Array<string> = [];

    constructor (name: string) {

        this._name = name;

    }

    addDependencies (dependencies: Array<string>): void {

        this.dependencyList = this.dependencyList.concat(dependencies);

    }

    get dependencies (): Array<string> {

        return this.dependencyList;

    }

    get name (): string {

        return this._name;

    }

}
