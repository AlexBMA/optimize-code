import React from 'react'
import logo from '../logo.svg';


const Page2 = (props)=>{
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
            <button onClick={()=>props.onRouteChange('page1')}>Page1</button>
            <button onClick={()=>props.onRouteChange('page3')}>Page3</button>
        </div>
    )
}

export default Page2;