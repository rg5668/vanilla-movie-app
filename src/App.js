import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';
import { Component } from './core';

export default class App extends Component {
    render() {
        const theHeader = new TheHeader().el;
        const routerView = document.createElement('router-view');
        const theFooter = new TheFooter().el;
        this.el.append(theHeader, routerView, theFooter);
    }
}
