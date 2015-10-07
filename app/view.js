import { h } from '@cycle/dom';
export default function view(state$) {
    return state$.map(({name, products, cart}) => {
        const lastItem = cart.slice(cart.length-1)[0] || {name:''};
        return h('div', [
                   h('header.row',[
                        h('h1', [`Hi ${name}`]),
                        h('nav', [
                            h('span', [
                                h('a', { href: '/' }, ['Catalog'])
                            ]),
                            h('span', [
                                h('a', { href: '/checkout'}, ['Checkout'])
                            ])
                        ])
                   ]),
                   h('div.catalog.col-md-9',[
                        h('ul.list-inline.list-unstyled',
                            products.map(product => {
                                let { id, name, price, image } = product
                                return h('li', [
                                         h(`magic-product`, { id, name, price, image } )
                             ])
                         }))
                  ]),
                  h('div.cart.col-md-3', [
                      h('div.header', [
                          h('span.title', 'In Cart:')
                      ]),
                      h('div.sumary', [
                          h('div#last', [
                              h('span', `${lastItem.name}`)
                          ]),
                          h('div#total.price',[
                              h('span', 'Total: '),
                              h('span', '$'+cart.map(it => it.price ).reduce((x,y)=> x+y, 0))
                          ])
                      ])
                 ])
               ])
    })
}
