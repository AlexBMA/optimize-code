import React from 'react';
import Page1 from './components/Page1';
import './App.css';
import AsyncComponent from'./components/AsyncComponent';

class App extends React.Component{
  constructor(){
      super();
      this.state={
          route:'page1',
          component:null
      }
  }
  onRouteChange = (route) => {
      //No code splitting:
      this.setState({route:route});
      //With code splitting:
      /*
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


      }*/
  }

  render(){

      switch (this.state.route ) {
          case 'page1':
            return <Page1 onRouteChange={this.onRouteChange}/>
          case 'page2': {
              const AsyncPage2= AsyncComponent(()=>import('./components/Page2'));
              return <AsyncPage2 onRouteChange ={this.onRouteChange}/>
          }
          case 'page3':{
              const AsyncPage3=AsyncComponent(()=>import('./components/Page3'));
              return <AsyncPage3 onRouteChange ={this.onRouteChange}/>
          }
      }

      /*
      if(this.state.route ==='page1'){
          return <Page1 onRouteChange={this.onRouteChange}/>
      }else {
          return <this.state.component onRouteChange={this.onRouteChange}/>
      }
       */
  }
}

export default App;
