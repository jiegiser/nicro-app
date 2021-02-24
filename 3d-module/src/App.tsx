import React, { useEffect } from 'react'
import smart3d from 'smart3d'
import './App.css'

function App() {

  useEffect(() => {
    new smart3d.Viewer('map')
  }, [])

  return (
    <div className="App" id="map">
    </div>
  )
}

export default App
