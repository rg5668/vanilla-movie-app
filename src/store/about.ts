import { Store } from '../core';

interface State {
    photo: string;
    name: string;
    email: string;
    blog: string;
    github: string;
    repository: string;
}

export default new Store<State>({
    photo: 'https://kunheelim.com/_next/image?url=%2Fassets%2Fsummer_dog.png&w=256&q=75',
    name: 'Kunhee',
    email: 'rg4093@naver.com',
    blog: 'https://kunheelim.com/',
    github: 'https://github.com/rg5668',
    repository: 'https://github.com/rg5668/vanilla-movie-app',
});
