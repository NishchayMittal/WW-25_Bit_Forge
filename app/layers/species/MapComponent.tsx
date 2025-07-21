import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./leafleticon";

type Species = {
  name: string;
  scientificName: string;
  lat: number;
  lng: number;
  region: string;
  image?: string;
};

type MapComponentProps = {
  searchTerm: string;
};

function getRegion(lat: number, lng: number): string {
  if (lat > -60 && lat < 30 && lng > 30 && lng < 120) {
    return "Indian Ocean";
  } else if (lng >= 120 || lng <= -100) {
    return "Pacific Ocean";
  } else if (lng > -100 && lng < 30) {
    return "Atlantic Ocean";
  } else {
    return "Ocean";
  }
}

const MapComponent: React.FC<MapComponentProps> = ({ searchTerm }) => {
  const [speciesData, setSpeciesData] = useState<Species[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

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

  useEffect(() => {
    if (searchTerm) {
      fetchSpecies(searchTerm);
    }
  }, [searchTerm]);

  const filteredSpecies = speciesData.filter(
    (sp) => selectedRegion === "All" || sp.region === selectedRegion
  );

  const center: [number, number] = [0, 0];

  return (
    <div className="max-w-5xl mx-auto p-4">
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

      <MapContainer
        center={center}
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
