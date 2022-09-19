"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarWarsNameClass = void 0;
const react_1 = __importDefault(require("react"));
const StarWarsNameClass_css_1 = __importDefault(require("./StarWarsNameClass.css"));
const unique_names_generator_1 = require("unique-names-generator");
class StarWarsNameClass extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.state = { name: this.randomName() };
    }
    render() {
        return (<section className={StarWarsNameClass_css_1.default.container}>
        <span className={StarWarsNameClass_css_1.default.name}>{this.state.name}</span>
        <div className={StarWarsNameClass_css_1.default.gap}/>
        <button className={StarWarsNameClass_css_1.default.button}>Мне нужно имя!</button>
    </section>);
    }
    randomName() {
        this.state.name = '123';
        return (0, unique_names_generator_1.uniqueNamesGenerator)({ dictionaries: [unique_names_generator_1.starWars], length: 1 });
    }
}
exports.StarWarsNameClass = StarWarsNameClass;
exports.default = StarWarsNameClass;
//# sourceMappingURL=StarWarsNameClass.jsx.map