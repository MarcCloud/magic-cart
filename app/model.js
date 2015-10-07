import { Rx } from '@cycle/core';
import mockData from '../mocks/mock-data';
export default function model(actions){
    return Rx.Observable.just(mockData)
                    .combineLatest(actions.addToCart$.startWith(null),(state, newItem)=>{
                        state.cart = newItem ? state.cart.concat([newItem]) : state.cart;
                        return state
                    });
}
