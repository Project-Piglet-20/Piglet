import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const api_key = 'AIzaSyAbIuPIQlI4AukyWuZOgHp4I5lammFppv8';

const Marker = (props) => {
    const { color, name } = props;
    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
            ></div>
            <div className="pulse" />
        </div>
    );
};

const getMapOptions = () => {
    return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'on' }]
            }
        ]
    };
};

class Map extends Component {
    state = {
        center: {
            lat: null,
            lng: null
        }
    };
    componentDidMount() {
        const center = this.props.center;
        this.setState({ center });
    }
    render() {
        return (
            <div style={{ height: '60vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: api_key }}
                    center={this.state.center}
                    defaultZoom={20}
                    options={getMapOptions}
                >
                    <Marker
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        name="My Location"
                        color="red"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
