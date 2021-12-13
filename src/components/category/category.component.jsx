import React from 'react';
import { render } from 'react-dom';
import {withRouter} from 'react-router-dom';

import './category.styles.css';

/*const Category = ({otherListStoreProps, history, match}) => {  //Se recibe los parametros del componente padre -> "Store"
    
    const {title, imageUrl} = otherListStoreProps;     //Se desestructura el otherListStoreProps
   
    return(
        <div className="menu-item">
            <div className="content">
                <div><img src={imageUrl} height="200"></img></div>
                <div className="title">{title.toUpperCase()}</div>
                
            </div>
        </div>
    );
    
}*/

const Category = ({title,imageUrl,linkUrl,history, match}) =>(  //Se recibe los parametros del componente padre -> "Store"
    
    <div className="menu-item" onClick={()=>history.push(`${match.url}/${linkUrl}`)}>
        <div className="content">
            <div><img src={imageUrl} height="200"></img></div>
            <div className="title">{title.toUpperCase()}</div>
            
        </div>
    </div>
    
); 

export default withRouter(Category);
