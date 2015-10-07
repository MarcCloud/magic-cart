export default function intent(DOM, props){
    return {
        selected$: DOM.get('.product', 'click')
                            .combineLatest(props.getAll().first(),(_,item)=> {
                                let { id, name, price } = item
                                return { id , name, price };
                            })
    }
}
