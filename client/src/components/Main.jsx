  import React from "react";
import { GoogleMapLoader, GoogleMap, Marker, SearchBox } from "react-google-maps";

var Main = React.createClass({
  render: function(){
    return(
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: "100px",
              widht:"100px"
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => console.log(map)}
            defaultZoom={3}
            defaultCenter={{lat: -25.363882, lng: 131.044922}}>
          </GoogleMap>
        }
      />
    )
  }
});

export { Main }
