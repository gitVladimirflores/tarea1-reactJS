import React from 'react';

import STORE_DATA from './../../js/store.data';
import Category from '../category/category.component';

import './store.styles.css';

class Store extends React.Component{
    constructor(){
        super();

        this.state = {
            list_store: STORE_DATA,
        }
    }

    render(){
        const {list_store} = this.state;    //otherListStoreProps: Engloba todos items del STORE_DATA
        return(                             //como: id,title,imageUrl,linkUrl
            <div className="store_menu">
                {
                    list_store.map(({id, ...otherListStoreProps })=>(
                        <Category key={id} {...otherListStoreProps} ></Category>
                    ))
                }
            </div>
        );
    }

}

export default Store;