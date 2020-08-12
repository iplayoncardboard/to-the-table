
import React from 'react';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import {shallow, mount, render} from 'enzyme';
import Event from './event.comonent.jsx';



const mockStore = configureMockStore();
const store = mockStore({});


console.log(shallow(<Provider store={store}><Event /></Provider>));
it('should render a component', ()=>{
    expect(shallow(<Provider store={store}><Event /></Provider>).length).toEqual(1);
});

