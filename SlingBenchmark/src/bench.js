import { markup, textNode } from '../node_modules/slingjs/sling.min';
import { addRoute, route } from '../node_modules/slingjs/sling-router.min';
import { setDetectionStrategy } from '../node_modules/slingjs/sling-change.min';

setDetectionStrategy(s.CHANGE_STRATEGY_AUTOMATIC);

class NavbarComponent {

    constructor() {
    }

    view() {
        return markup('nav', {
            attrs: {
                class: 'navbar navbar-light bg-light',
                id: 'divNavbar'
            },
            children: [
                markup('span', {
                    attrs: {
                    },
                    children: [
                        markup('img', {
                            attrs: {
                                src: 'images/sling.png',
                                width: '30px',
                                height: '30px',
                                class: 'd-inline-block align-top',
                                style: 'margin-right:0.5rem;margin-top:0.3125rem;margin-bottom:0.3125rem;'
                            },
                            children: [

                            ]
                        }),
                        markup('span', {
                            attrs: {
                                class: 'navbar-brand'
                            },
                            children: [
                                textNode('Sling')
                            ]
                        }),
                        markup('div', {
                            attrs: {
                                style: 'display:inline-flex;'
                            },
                            children: [
                                markup('ul', {
                                    attrs: {
                                        class: 'navbar-nav'
                                    },
                                    children: [
                                        markup('li', {
                                            attrs: {
                                                class: 'nav-item'
                                            },
                                            children: [
                                                textNode('v' + s.VERSION)
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    }
}

addRoute('component', { component: new NavbarComponent(), root: 'divNavbar' });

console.time('mount');
route('component');
console.timeEnd('mount');

for (let i = 0; i < 10; ++i) {
    console.time('mount');
    route('component');
    console.timeEnd('mount');
}
