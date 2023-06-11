import React, { useRef } from 'react'
import { useState } from 'react';
import {MapContainer,TileLayer} from 'react-leaflet'
// import 'leaflet/dist/leaflet.css';
import osm from './osm-provider';
import './Latlog.css';


function Latlog() {

    const [Lattitude,setLattitude]=useState('');
    const [Longitude,setLongitude]=useState('');
    const [center,setcenter]=useState({lat:13.084622, lng:80.248357})
    const ZOOM_LEVEL=9;
    const mapref=useRef()
  
    function Handlelattitude(e){
      setLattitude(e.target.value)
    }
  
    function Handlelongitude(e){
      setLongitude(e.target.value)
    }

    function HandleMap(){

    }

  console.log(Lattitude,Longitude)

  return (
    <div>
       <label htmalfor="lat">Lattitude</label>
      <input id="lat" onChange={Handlelattitude}/> 
      <label htmalfor="lnt">Longitude</label>
      <input id="lnt" onChange={Handlelongitude}/>
      <button onClick={HandleMap}>Map</button>
      <div id='map'>
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapref}>
                <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
            </MapContainer>
      </div>
    </div>
  )
}

export default Latlog
