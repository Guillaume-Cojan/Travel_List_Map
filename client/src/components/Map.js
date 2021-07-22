import { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import Location from "../assets/location.png";
import LocationMe from "../assets/location-me.png";
import Star from "../assets/ratingstar.png";
import axios from "axios";

function Map({ currentUser }) {
    const [places, setPlaces] = useState([]);
    const [currentPlaceId, setCurrentPlaceId] = useState(null);
    const [newPlace, setNewPlace] = useState(null);
    const [placeName, setPlaceName] = useState(null);
    const [review, setReview] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [rating, setRating] = useState(0);
    const [viewport, setViewport] = useState({
        width: "95vw",
        height: "70vh",
        latitude: 46,
        longitude: 17,
        zoom: 3,
    });

    const getPlaces = () => {
        fetch("/places")
            .then((res) => res.json())
            .then((data) => setPlaces(data));
    };
    useEffect(getPlaces, []);

    const handleMarkerClick = (id) => {
        setCurrentPlaceId(id);
    };

    const handleAddClick = (e) => {
        const [long, lat] = e.lngLat;
        setNewPlace({
            lat,
            long,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPin = {
            creator: currentUser,
            name: placeName,
            description: review,
            picture_url: imgUrl,
            rating: rating.toString(),
            latitude: newPlace.lat.toString(),
            longitude: newPlace.long.toString(),
        };

        try {
            const res = await axios.post("/places", newPin);
            setPlaces([...places, res.data]);
            setNewPlace(null);
        } catch (err) {}
    };

    return (
        <div className="Map">
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapStyle="mapbox://styles/guillaume-cojan/ckrdhq57i2hyn17nyip7dg9ce"
                onDblClick={handleAddClick}
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
                                src={
                                    p.creator === currentUser
                                        ? LocationMe
                                        : Location
                                }
                                alt="location-mark"
                                onClick={() =>
                                    handleMarkerClick(
                                        p.id,
                                        parseInt(p.latitude),
                                        parseInt(p.longitude)
                                    )
                                }
                            />
                        </Marker>
                        {p.id === currentPlaceId && (
                            <Popup
                                className="popup"
                                key={p.id}
                                latitude={parseInt(p.latitude)}
                                longitude={parseInt(p.longitude)}
                                closeButton={true}
                                closeOnClick={false}
                                anchor="left"
                                onClose={() => setCurrentPlaceId(null)}
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
                {newPlace && (
                    <Popup
                        className="popup"
                        latitude={newPlace.lat}
                        longitude={newPlace.long}
                        closeButton={true}
                        closeOnClick={false}
                        anchor="left"
                        onClose={() => setNewPlace(null)}
                    >
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label>Place</label>
                                <input
                                    placeholder="Enter a place name"
                                    onChange={(e) =>
                                        setPlaceName(e.target.value)
                                    }
                                />
                                <label>Review</label>
                                <textarea
                                    placeholder="What do you think about this place?"
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <label>Picture</label>
                                <input
                                    placeholder="Paste a picture url here"
                                    onChange={(e) => setImgUrl(e.target.value)}
                                />
                                <label>Rating</label>
                                <select
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <button className="submit-button" type="submit">
                                    Add new place
                                </button>
                            </form>
                        </div>
                    </Popup>
                )}
            </ReactMapGl>
        </div>
    );
}

export default Map;
