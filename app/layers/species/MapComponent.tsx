import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom icon generator
const createCustomIcon = (type: string) => {
  const iconColors: Record<string, string> = {
    mammal: "#00a8e8",
    fish: "#ff7f50",
    invertebrate: "#9370db",
    reptile: "#4dbd74",
    bird: "#ffd700",
    default: "#003366",
  };

  const color = iconColors[type.toLowerCase()] || iconColors.default;

  return new L.DivIcon({
    html: `
      <div style="
        background: ${color};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 16px;
        border: 2px solid white;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
      ">
        ${
          type === "bird"
            ? "🦅"
            : type === "fish"
            ? "🐠"
            : type === "mammal"
            ? "🐬"
            : type === "reptile"
            ? "🐢"
            : type === "invertebrate"
            ? "🦑"
            : "🌊"
        }
      </div>
    `,
    className: "",
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });
};

type Species = {
  id: number;
  name: string;
  scientificName: string;
  lat: number;
  lng: number;
  region: string;
  type: string;
  image?: string;
};

type MapComponentProps = {
  searchTerm: string;
  observationType?: string;
};

function isValidCoordinate(lat: number, lng: number): boolean {
  return (
    typeof lat === "number" &&
    typeof lng === "number" &&
    !isNaN(lat) &&
    !isNaN(lng) &&
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180
  );
}

function getRegion(lat: number, lng: number): string {
  if (lat < -60 || lat > 60) return "Polar Regions";
  if (lng > 30 && lng < 120 && lat > -60 && lat < 30) return "Indian Ocean";
  if ((lng >= 120 && lng <= 180) || (lng <= -100 && lng >= -180))
    return "Pacific Ocean";
  if (lng > -100 && lng < 30) return "Atlantic Ocean";
  return "Unknown";
}

function getSpeciesType(taxon: any): string {
  const ancestry = taxon?.ancestry?.split("/") || [];
  if (ancestry.includes("40151")) return "mammal"; // Mammalia
  if (ancestry.includes("47178")) return "fish"; // Actinopterygii
  if (ancestry.includes("47115")) return "reptile"; // Reptilia
  if (ancestry.includes("3")) return "bird"; // Aves
  if (ancestry.includes("1")) return "invertebrate"; // Animalia
  return "unknown";
}

const MapComponent: React.FC<MapComponentProps> = ({
  searchTerm,
  observationType,
}) => {
  const [speciesData, setSpeciesData] = useState<Species[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchSpecies = async (term: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.inaturalist.org/v1/observations?taxon_name=${term}&geo=true&per_page=50`
      );
      const data = await res.json();

      const transformed: Species[] = data.results
        .filter((item: any) => {
          const lat = item.geojson?.coordinates?.[1];
          const lng = item.geojson?.coordinates?.[0];
          return (
            item.taxon && item.photos?.[0]?.url && isValidCoordinate(lat, lng)
          );
        })
        .map((item: any) => {
          const lat = item.geojson.coordinates[1];
          const lng = item.geojson.coordinates[0];
          return {
            id: item.id,
            name:
              item.taxon?.preferred_common_name ||
              item.taxon?.name ||
              "Unknown",
            scientificName: item.taxon?.name || "Unknown",
            lat,
            lng,
            region: getRegion(lat, lng),
            type: getSpeciesType(item.taxon),
            image: item.photos?.[0]?.url?.replace("square", "medium"),
          };
        });

      setSpeciesData(transformed);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Unable to fetch species data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSpecies(searchTerm);
    }
  }, [searchTerm]);

  const filteredSpecies = speciesData.filter(
    (sp) =>
      (selectedRegion === "All" || sp.region === selectedRegion) &&
      (!observationType || sp.type === observationType.toLowerCase())
  );

  const center: [number, number] =
    filteredSpecies.length > 0
      ? [
          filteredSpecies.reduce((sum, s) => sum + s.lat, 0) /
            filteredSpecies.length,
          filteredSpecies.reduce((sum, s) => sum + s.lng, 0) /
            filteredSpecies.length,
        ]
      : [0, 0];

  return (
    <div className="map-container">
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#00a8e8" }}>
            🐬
          </div>
          <span>Marine Mammals</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#ff7f50" }}>
            🐠
          </div>
          <span>Fish</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#4dbd74" }}>
            🐢
          </div>
          <span>Reptiles</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#ffd700" }}>
            🦅
          </div>
          <span>Birds</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#9370db" }}>
            🦑
          </div>
          <span>Invertebrates</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: "#003366" }}>
            🌊
          </div>
          <span>Other</span>
        </div>
      </div>

      <div className="region-filter">
        <label htmlFor="regionFilter" className="filter-label">
          Filter by Region:
        </label>
        <select
          id="regionFilter"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Regions</option>
          <option value="Indian Ocean">Indian Ocean</option>
          <option value="Pacific Ocean">Pacific Ocean</option>
          <option value="Atlantic Ocean">Atlantic Ocean</option>
          <option value="Polar Regions">Polar Regions</option>
        </select>
      </div>

      {loading && (
        <div className="loading-indicator">Loading species data...</div>
      )}
      {error && <div className="error-message">{error}</div>}
      {!loading && !error && filteredSpecies.length === 0 && (
        <div className="no-results">No species found for this search.</div>
      )}

      <MapContainer
        center={center}
        zoom={filteredSpecies.length > 0 ? 3 : 2}
        style={{ height: "600px", width: "100%", borderRadius: "20px" }}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri — Source: GEBCO, NOAA, National Geographic, DeLorme, and Esri"
        />

        {filteredSpecies.map((sp) => (
          <Marker
            key={sp.id}
            position={[sp.lat, sp.lng]}
            icon={createCustomIcon(sp.type)}
          >
            <Popup className="species-popup">
              <h3 className="species-name">{sp.name}</h3>
              <p className="scientific-name">
                <i>{sp.scientificName}</i>
              </p>
              <div className="species-details">
                <p>
                  <strong>Region:</strong> {sp.region}
                </p>
                <p>
                  <strong>Type:</strong> {sp.type}
                </p>
              </div>
              {sp.image && (
                <img src={sp.image} alt={sp.name} className="species-image" />
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
