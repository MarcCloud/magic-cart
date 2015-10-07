import test from 'tape';
import view from './view';
import {Rx} from '@cycle/core'

test('view should be a function', expect=>{
    expect.equal(typeof view, 'function', 'view is not a function.');
    expect.end();
});

test('view should return aproduct vdom tree when passed a model stream', expect =>{
    const model = Rx.Observable.just({name:'Something', image: '/some/image.png', price: 10.99})
    view(model).subscribe(vdom => {
        console.log(vdom)
        expect.equal(typeof vdom, 'object');
        expect.equal(vdom.properties.className, 'product');
        expect.equal(vdom.children[0].tagName,'IMG');
        expect.end();
    })

});
