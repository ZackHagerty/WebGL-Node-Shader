import './App.css'

import { useState } from 'react'

import MaterialView from './output/material-view/material-view'
import ObjectView from './output/object-view/object-view'

function App() {

  return (
    <>
      <div className="app">
        <div className="shader-view"></div>
        <div className="column">
          <div className="object-view">
            <ObjectView/>
          </div>
          <div className="material-view"> 
            <MaterialView/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
