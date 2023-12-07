import { Component } from '../core';
import movieStore, { searchMovies } from '../store/movie';

export default class MovieListMore extends Component {
    constructor() {
        super({
            tagName: 'button',
        });
        movieStore.subscribe('pageMax', () => {
            const { page, pageMax } = movieStore.state;
            pageMax > page ? this.el.classList.remove('hide') : this.el.classList.add('hide');
        });
    }

    render() {
        this.el.classList.add('btn', 'view-more', 'hide');
        this.el.textContent = 'View more..';

        this.el.addEventListener('click', async () => {
            this.el.classList.add('hide');
            // 더보기 버튼 state page 1씩 증가처리
            await searchMovies(movieStore.state.page + 1);
        });
    }
}
