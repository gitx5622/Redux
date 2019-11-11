import React, { Component } from 'react'
import CakeContainer from './component/CakeContainer'
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCake from './component/HooksCake';
import IceCreamContainer from './component/IceCreamContainer';


class App extends Component {
  render() {
    return (
      
        <Provider store={store}>
          <div>
        <CakeContainer/>
        <HooksCake/>
        <IceCreamContainer/>
      </div>
      </Provider>
    )
  }
}

export default App
