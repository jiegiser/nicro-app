import React, { useEffect } from 'react'
import smart3d from 'smart3d'
// import './App.css'
const cesium: any = require('cesium/Cesium');
// eslint-disable-next-line @typescript-eslint/no-use-before-define
(window as any).Cesium = cesium

function MapContainer () {

  const initViewer = () => {
    const viewer = new smart3d.Viewer('map', {
      sceneMode: (smart3d as any).SceneMode.SCENE3D,
      baseMapMode: smart3d.BaseMapMode.ESRI,
      baseLayerPicker: false,
      scene3DOnly: false,
      copyrightLogo: false,
      navigation: {
        controls: {
          zoomIn: true,
          flyToHome: true,
          setNorth: true,
          fullScreen: true,
          saveAsIMG: true,
          modeSwitch: false,
          zoomOut: true
        }
      },
    })
    // 设置地球高宽
    viewer.cesiumWidget.canvas.style.height = '100%'
    viewer.cesiumWidget.canvas.style.width = '100%'
    viewer.scene.fog.enabled = false
    viewer.scene.skyAtmosphere.brightnessShift = 0.5
    viewer.scene.globe.maximumScreenSpaceError = 1.33
    viewer.scene.logarithmicDepthBuffer = false
    viewer.scene.globe.depthTestAgainstTerrain = true
    viewer.scene.globe.tileCacheSize = 10000
    viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)
  }

  useEffect(() => {
    initViewer()
  }, [])

  return (
    <div className="App" id="map">
    </div>
  )
}

export default MapContainer
