import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";

// The world map data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const visitedCountries = new Set([
  "France",
  "Italy",
  "Spain",
  "United Kingdom",
  "Switzerland",
  "Canada",
  "United States of America",
  "Mexico",
  "Costa Rica",
  "Morocco",
  "Vietnam",
]);

const TravelMap = () => {
  const [position, setPosition] = useState({ coordinates: [10, 20], zoom: 1 });
  const minZoom = 1;
  const maxZoom = 8;

  function handleMoveEnd(position) {
    setPosition(position);
  }

  // TODO: flawed so i must fix continuous.
  const translateExtent = [
    [175, -50], // left, top
    [800, 550], // right, bottom
  ];

  function handleZoomIn() {
    setPosition((pos) => ({
      ...pos,
      zoom: Math.min(pos.zoom * 1.5, maxZoom),
    }));
  }

  function handleZoomOut() {
    setPosition((pos) => ({
      ...pos,
      zoom: Math.max(pos.zoom / 1.5, minZoom),
    }));
  }

  function handleSliderChange(event) {
    setPosition((pos) => ({ ...pos, zoom: Number(event.target.value) }));
  }

  // Prevents zoom from wheel and touch gestures, allowing only panning
  function filterZoomEvents(event) {
    if (event.type === "wheel") {
      return false;
    }
    if (event.type === "touchstart" && event.touches.length > 1) {
      return false;
    }
    return true;
  }

  return (
    <>
      <div className="relative flex justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 120,
          }}
          style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
          data-tooltip-id="country-tooltip"
        >
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            onMoveEnd={handleMoveEnd}
            filterZoomEvent={filterZoomEvents}
            minZoom={minZoom}
            maxZoom={maxZoom}
            translateExtent={translateExtent}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isVisited = visitedCountries.has(geo.properties.name);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      data-tooltip-content={`${geo.properties.name} - ${
                        isVisited ? "Visited" : "Not Visited"
                      }`}
                      style={{
                        default: {
                          fill: isVisited ? "#60A5FA" : "#D1D5DB",
                          stroke: isVisited ? "#1E40AF" : "#F3F4F6",
                          strokeWidth: isVisited ? 0.6 : 0.3,
                          outline: "none",
                        },
                        hover: {
                          fill: isVisited ? "#3B82F6" : "#9CA3AF",
                          outline: "none",
                        },
                        pressed: {
                          fill: "#2563EB",
                          outline: "none",
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        <div className="absolute bottom-4 right-4 flex items-center space-x-2 bg-white bg-opacity-75 p-2 rounded-lg shadow-md">
          <button
            onClick={handleZoomOut}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded font-bold text-lg"
          >
            -
          </button>
          <input
            type="range"
            min={minZoom}
            max={maxZoom}
            step="0.1"
            value={position.zoom}
            onChange={handleSliderChange}
            className="w-32 cursor-pointer"
          />
          <button
            onClick={handleZoomIn}
            className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded font-bold text-lg"
          >
            +
          </button>
        </div>
      </div>
      <Tooltip id="country-tooltip" />
    </>
  );
};

export default TravelMap;
