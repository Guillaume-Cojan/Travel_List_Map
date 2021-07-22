import { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Location from "../assets/location.png";
import Star from "../assets/ratingstar.png";

function Map() {
    const [places, setPlaces] = useState([]);
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [viewport, setViewport] = useState({
        width: "95vw",
        height: "70vh",
        latitude: 48,
        longitude: 20,
        zoom: 3,
    });

    const getPlaces = () => {
        fetch("/places")
            .then((res) => res.json())
            .then((data) => setPlaces(data));
    };
    useEffect(getPlaces, []);

    console.log(places);

    const handleMarkerClick = (id) => {
        setCurrentPlaceId(id);
    };

    return (
        <div className="Map">
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapStyle="mapbox://styles/guillaume-cojan/ckrdhq57i2hyn17nyip7dg9ce"
            >
                {places.map((p) => (
                    <>
                        <Marker
                            key={p.id}
                            latitude={parseInt(p.latitude)}
                            longitude={parseInt(p.longitude)}
                            offsetLeft={-20}
                            offsetTop={-10}
                        >
                            <img
                                className="location-mark"
                                src={Location}
                                alt="location-mark"
                                onClick={() => handleMarkerClick(p.id)}
                            />
                        </Marker>
                        {p.id === currentPlaceId && (
                            <Popup
                                key={p.id}
                                latitude={parseInt(p.latitude)}
                                longitude={parseInt(p.longitude)}
                                closeButton={true}
                                closeOnClick={true}
                                anchor="left"
                            >
                                <div className="place-card">
                                    <label>Place</label>
                                    <h4 className="place-name">{p.name}</h4>
                                    <label>Review</label>
                                    <p>{p.description}</p>
                                    <label>Picture</label>
                                    <img
                                        className="place-picture"
                                        alt="card-visual"
                                    ></img>
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
                                        Created by <b>{p.username}</b>
                                    </span>
                                    <span className="date">1 hour ago</span>
                                </div>
                            </Popup>
                        )}
                    </>
                ))}
            </ReactMapGl>
        </div>
    );
}

export default Map;
