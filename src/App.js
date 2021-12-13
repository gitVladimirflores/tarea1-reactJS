import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Header from './pages/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
//import Contact from './pages/contact/contact.component';
import Contact from './components/contact/contact.component';
import Footer from './pages/footer/footer.component';

class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;