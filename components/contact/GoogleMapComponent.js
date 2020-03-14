import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const CustomComponent = ({ text }) => <div><img src={require('../../static/images/marker-icon.png')} /></div>;
 
export default class GoogleMapComponent extends Component {
    static defaultProps = {
        center: {
            lat: 43.784550,
            lng: -79.234810
        },
        zoom: 11
    };
 
    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="map-content">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCgf_gvbDZZS7sysDvgaBt51Uuc_1ECZM4' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <CustomComponent
                        lat={43.784550}
                        lng={-79.234810}
                        text="Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}