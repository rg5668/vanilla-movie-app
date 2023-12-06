import { Component } from '../core';
import aboutStore from '../store/about';

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer',
        });
    }

    render() {
        const { github, repository } = aboutStore.state;
        this.el.innerHTML = /* html */ `
            <div>
                <a href="${github}">Github Repository</a>
            </div>
            <div>
                <a href="${repository}">
                    ${new Date().getFullYear()}
                    Kunhee
                </a>
            </div>
        `;
    }
}
