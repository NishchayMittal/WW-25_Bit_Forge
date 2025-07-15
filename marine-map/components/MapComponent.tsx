"use client";

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

type Species = {
  name: string;
  scientificName: string;
  lat: number;
  lng: number;
  region: string;
  image?: string;
};

// 🔄 Ocean region classification based on lat/lng
const getRegion = (lat: number, lng: number): string => {
  if (lng > 20 && lng < 120 && lat < 30 && lat > -40) return "Indian Ocean";
  if ((lng >= -80 && lng <= 20) || (lng >= -80 && lng <= -20))
    return "Atlantic Ocean";
  if (lng > 120 || lng < -120) return "Pacific Ocean";
  return "Ocean";
};

const MapComponent: React.FC = () => {
  const [speciesData, setSpeciesData] = useState<Species[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [query, setQuery] = useState<string>("shark");
  const [searchTerm, setSearchTerm] = useState<string>("shark");

  const fetchSpecies = async (term: string) => {
    try {
      const res = await fetch(
        `https://api.inaturalist.org/v1/observations?taxon_name=${term}&geo=true&per_page=30`
      );
      const data = await res.json();

      const transformed: Species[] = data.results.map((item: any) => {
        const lat = item.geojson?.coordinates[1];
        const lng = item.geojson?.coordinates[0];
        return {
          name: item.taxon?.preferred_common_name || "Unknown",
          scientificName: item.taxon?.name || "Unknown",
          lat,
          lng,
          region: getRegion(lat, lng),
          image: item.photos?.[0]?.url?.replace("square", "medium"),
        };
      });

      setSpeciesData(transformed);
    } catch (err) {
      console.error("Failed to fetch species:", err);
    }
  };

  // 🔍 Trigger search when `searchTerm` changes
  useEffect(() => {
    fetchSpecies(searchTerm);
  }, [searchTerm]);

  const filteredSpecies = speciesData.filter(
    (sp) => selectedRegion === "All" || sp.region === selectedRegion
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <label htmlFor="query" className="block font-semibold mb-1">
          Search Marine Species:
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 p-2 border rounded-md"
            placeholder="e.g. dolphin, whale, turtle"
          />
          <button
            onClick={() => setSearchTerm(query)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter by Region */}
      <div className="mb-4">
        <label htmlFor="regionFilter" className="block font-semibold mb-1">
          Filter by Region:
        </label>
        <select
          id="regionFilter"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="Indian Ocean">Indian Ocean</option>
          <option value="Pacific Ocean">Pacific Ocean</option>
          <option value="Atlantic Ocean">Atlantic Ocean</option>
          <option value="Ocean">Unknown/Others</option>
        </select>
      </div>

      {/* Leaflet Map */}
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri — Source: GEBCO, NOAA, National Geographic, DeLorme, and Esri"
        />

        {filteredSpecies.map((sp, index) => (
          <Marker key={index} position={[sp.lat, sp.lng]}>
            <Popup>
              <h3>{sp.name}</h3>
              <p>
                <i>{sp.scientificName}</i>
              </p>
              <p>{sp.region}</p>
              {sp.image && (
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
