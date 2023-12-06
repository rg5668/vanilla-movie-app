import { Component } from '../core';

export default class TheHeader extends Component {
    constructor() {
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name: 'Search',
                        href: '#/',
                    },
                    {
                        name: 'Movie',
                        href: '#/movie?id=tt4520988',
                    },
                    {
                        name: 'About',
                        href: '#/about',
                    },
                ],
            },
        });

        window.addEventListener('popstate', () => {
            this.render();
        });
    }

    render() {
        this.el.innerHTML = /* html */ `
            <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
            <nav>
                <ul>
                    ${this.state.menus
                        .map((menu) => {
                            const href = menu.href.split('?')[0];
                            const hash = location.hash.split('?')[0];
                            const isActive = href === hash;
                            return /* html */ `
                                <li>
                                    <a class="${isActive ? 'active' : ''}" href="${menu.href}">
                                        ${menu.name}
                                    </a>
                                </li>
                        `;
                        })
                        .join(' ')}
                </ul>
                <a href="#/about" class="user">
                    <img src="https://kunheelim.com/_next/image?url=%2Fassets%2Fsummer_dog.png&w=256&q=75" alt="User" />
                </a>
            </nav>
        `;
    }
}
