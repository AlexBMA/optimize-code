import React from 'react';
import Page1 from './components/Page1'
import './App.css';


class App extends React.Component{
  constructor(){
      super();
      this.state={
          route:'page1',
          component:''
      }
  }
  onRouteChange = (route) => {
      //No code splitting:
      //this.setState({route:route});
      //With code splitting:
      switch (route) {
          case 'page1':
              this.setState({route:route}); break;
          case 'page2': {
              import('./components/Page2')
                  .then((page2) => {
                      console.log(page2);
                    this.setState({route: route, component: page2.default})
              });
              break;
          }
          case 'page3':{
              import('./components/Page3')
                  .then((page3)=>{
                      console.log(page3);
                    this.setState({route:route,component: page3.default})
              });
              break;
          }
          default:
              this.setState({route:route});break;


      }
  }

  render(){
      if(this.state.route ==='page1'){
          return <Page1 onRouteChange={this.onRouteChange}/>
      }else {
          return <this.state.component onRouteChange={this.onRouteChange}/>
      }

  }
}

export default App;
