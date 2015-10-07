export default function intent(DOM){
    return {
        addToCart$: DOM.get('div.product', 'selected')
                                .map(ev => ev.detail )
    }
}
