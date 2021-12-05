import React,{useState} from 'react'
import MapGL, { Marker } from 'react-map-gl';
import Pin from './Pin'
function Maps(props){
    const {lat,lng,text} = props;
    const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const [viewport, setViewport] = useState({
        latitude:lat,
        longitude:lng,
        zoom: 16,
      });
      //mapStyle="mapbox://styles/mapbox/dark-v9"
      return (
        <MapGL
         mapboxApiAccessToken={token}
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={(viewport) => setViewport(viewport)}>
            <Marker latitude={lat} longitude={lng} offsetLeft={0} offsetTop={0} >
                <Pin size={25} text={text}/>
            </Marker>
        </MapGL>
      );
    }
export default Maps;