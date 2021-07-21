import { useState } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Location from "../assets/location.png";
import Star from "../assets/ratingstar.png";

function Map() {
    const [viewport, setViewport] = useState({
        width: "95vw",
        height: "70vh",
        latitude: 48,
        longitude: 20,
        zoom: 3,
    });

    return (
        <div className="Map">
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapStyle="mapbox://styles/guillaume-cojan/ckrdhq57i2hyn17nyip7dg9ce"
            >
                <Marker
                    latitude={48.0}
                    longitude={20.0}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <img
                        className="location-mark"
                        src={Location}
                        alt="location-mark"
                    />
                </Marker>
                <Popup
                    latitude={48.0}
                    longitude={20.0}
                    closeButton={true}
                    closeOnClick={true}
                    anchor="left"
                >
                    <div className="place-card">
                        <label>Place</label>
                        <h4 className="place-name">This is a place</h4>
                        <label>Review</label>
                        <p>This is a very very cool place!</p>
                        <label>Picture</label>
                        <img className="place-picture" alt="card-visual"></img>
                        <label>Rating</label>
                        <div className="rating-stars">
                            <img
                                className="rating-star"
                                src={Star}
                                alt="rating-star"
                            />
                            <img
                                className="rating-star"
                                src={Star}
                                alt="rating-star"
                            />
                            <img
                                className="rating-star"
                                src={Star}
                                alt="rating-star"
                            />
                            <img
                                className="rating-star"
                                src={Star}
                                alt="rating-star"
                            />
                            <img
                                className="rating-star"
                                src={Star}
                                alt="rating-star"
                            />
                        </div>
                        <span className="username">
                            Created by <b>Me</b>
                        </span>
                        <span className="date">1 hour ago</span>
                    </div>
                </Popup>
            </ReactMapGl>
        </div>
    );
}

export default Map;
