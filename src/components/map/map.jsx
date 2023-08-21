import styles from "./map.module.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  Polyline,
  useMap,
} from "react-leaflet";
import { getWaypointsFetch } from "../../services/routes";
import { useDispatch, useSelector } from "react-redux";
import { latLngBounds } from "leaflet";
import { useCallback, useEffect } from "react";

const Map = () => {
  const polyline = require("polyline");
  const defaultPosition = [55.755864, 37.617698];
  const dispatch = useDispatch();
  const route = useSelector((store) => store.routes.route);
  const polyline_geometry = useSelector(
    (store) => store.routes.polyline_geometry
  );

  const handleRoute = useCallback(() => {
      const arrKey = Object.keys(route).filter((key) => key.includes("point"));
      return arrKey.map((item) => route[item]);
  }, [route]);

  /** масштабирование карты */
  const MyComponent = () => {
    const bounds = route && latLngBounds(handleRoute());
    const map = useMap();
    bounds && map.fitBounds(bounds);
    return null;
  };

  useEffect(() => {
    const str =
      route &&
      handleRoute()
        .map((item) => Object.values(item).reverse().join(","))
        .join(";");

    route && dispatch(getWaypointsFetch(str));
  }, [route, dispatch, handleRoute]);

  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        zoomControl={true}
      >
        <MyComponent />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {polyline_geometry && route ? (
          <Polyline positions={polyline.decode(polyline_geometry)}>
            {handleRoute().map((item, index) => (
              <Marker key={index} position={item}>
                <Tooltip className={styles.tooltip}>
                  <p className={styles.subtitle}>{route.route}</p>
                  <p className={styles.subtitle}>{`Точка ${index + 1}`}</p>
                </Tooltip>
              </Marker>
            ))}
          </Polyline>
        ) : (
          <Marker position={defaultPosition}></Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
