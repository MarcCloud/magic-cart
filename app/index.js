import { run } from '@cycle/core';
import { h, makeDOMDriver } from '@cycle/dom';
import magicProduct from './component/magic-product';
import model from './model';
import view from './view';
import intent from './intent';

function main({DOM}){
    return {
        DOM : view(model(intent(DOM)))
    }
}
run(main, {
    DOM : makeDOMDriver('#app', {
        'magic-product':  magicProduct
    })
});
