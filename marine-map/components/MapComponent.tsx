'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});


type Species = {
  name: string;
  scientificName: string;
  lat: number;
  lng: number;
  region: string;
  image?: string;
};

const MapComponent: React.FC = () => {
  const [speciesData, setSpeciesData] = useState<Species[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const res = await fetch(
          'https://api.inaturalist.org/v1/observations?taxon_name=shark&geo=true&per_page=30'
        );
        const data = await res.json();

        const transformed: Species[] = data.results.map((item: any) => ({
          name: item.taxon?.preferred_common_name || 'Unknown',
          scientificName: item.taxon?.name || 'Unknown',
          lat: item.geojson?.coordinates[1],
          lng: item.geojson?.coordinates[0],
          region: item.place_guess || 'Ocean',
          image: item.photos?.[0]?.url?.replace('square', 'medium'),
        }));

        setSpeciesData(transformed);
      } catch (err) {
        console.error('Failed to fetch species:', err);
      }
    };

    fetchSpecies();
  }, []);

  
  const filteredSpecies = speciesData.filter(
    (sp) => selectedRegion === 'All' || sp.region.includes(selectedRegion)
  );

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

      
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {filteredSpecies.map((sp, index) => (
          <Marker key={index} position={[sp.lat, sp.lng]}>
            <Popup>
              <h3>{sp.name}</h3>
              <p><i>{sp.scientificName}</i></p>
              <p>{sp.region}</p>
              {sp.image && (
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{ width: '100%', borderRadius: '10px' }}
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