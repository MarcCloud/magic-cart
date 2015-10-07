import { h } from '@cycle/dom';

export default function view(state$){
    return state$.map(product => {
        return h('div.product',[
                    h('img', { src: `/images/${product.image}-icon.png` }),
                    h('span', [product.name || 'NoName']),
                    h('span', [`$${product.price || 0}`])
                ]);
    });
}
