"use strict";
// // Old constructor example
// function OldConstructor(fieldValue) {
//     this.field = fieldValue || 123;
// }
// OldConstructor.prototype.meyhod = function() {
//     return this.field;
// };
// const instance = new OldConstructor();
// instance.method(); // -> 123
class Constructor {
    constructor(arg) {
        this.field = 123;
        this.privateField = 123;
        this.field = arg;
    }
    publicMethod() {
        return this.field;
    }
    protectedMethod() {
        return this.field + 10;
    }
    privateMethod() {
        return this.field + 30;
    }
}
const instance = new Constructor(123);
class Child extends Constructor {
    childMethod() {
    }
    protectedMethod() {
        return super.protectedMethod();
    }
    publicMethod() {
        return super.publicMethod();
    }
}
class AbstractClass {
    protectedMethod() {
        return this.abstractField;
    }
}
class NewChild extends AbstractClass {
    constructor() {
        super(...arguments);
        this.abstractField = 123;
    }
    abstractMethod() {
        return this.protectedMethod();
    }
}
class NewClass {
    constructor() {
        this.field = '123';
    }
    method() {
        return '';
    }
}
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state1: '123'
        };
    }
    render() {
        return (<div>{this.props.prop1}</div>);
    }
}
//# sourceMappingURL=classExample.jsx.map