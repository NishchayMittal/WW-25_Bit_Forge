"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./style.css";

// Define the type for a single species
interface Species {
  id: string;
  name: string;
  scientificName: string;
  status: string;
  habitat: string[];
  description: string;
}

// Data for marine species (simulated JSON data)
const marineSpeciesData: Species[] = [
  {
    id: "1",
    name: "Vaquita",
    scientificName: "Phocoena sinus",
    status: "CR",
    habitat: ["Gulf of California"],
    description:
      "The vaquita is the world's smallest and most critically endangered marine mammal, facing extinction primarily due to illegal gillnet fishing.",
  },
  {
    id: "2",
    name: "North Atlantic Right Whale",
    scientificName: "Eubalaena glacialis",
    status: "CR",
    habitat: ["North Atlantic Ocean"],
    description:
      "One of the most endangered large whale species, highly vulnerable to ship strikes and entanglement in fishing gear.",
  },
  {
    id: "3",
    name: "Hawksbill Sea Turtle",
    scientificName: "Eretmochelys imbricata",
    status: "CR",
    habitat: ["Tropical Reefs", "Coastal Waters"],
    description:
      "Critically endangered due to the illegal trade of their shells and degradation of nesting and foraging habitats.",
  },
  {
    id: "4",
    name: "Bluefin Tuna",
    scientificName: "Thunnus thynnus",
    status: "EN",
    habitat: ["Atlantic Ocean", "Mediterranean Sea"],
    description:
      "A highly migratory and commercially valuable species, severely impacted by overfishing across its range.",
  },
  {
    id: "5",
    name: "Irrawaddy Dolphin",
    scientificName: "Orcaella brevirostris",
    status: "EN",
    habitat: ["Coastal Waters", "Rivers", "Estuaries"],
    description:
      "Found in fragmented populations, threatened by habitat loss, pollution, and accidental entanglement in fishing nets.",
  },
  {
    id: "6",
    name: "Whale Shark",
    scientificName: "Rhincodon typus",
    status: "EN",
    habitat: ["Tropical and Warm-Temperate Oceans"],
    description:
      "The world's largest fish, endangered due to targeted fishing, bycatch, and increasing marine pollution.",
  },
  {
    id: "7",
    name: "Great White Shark",
    scientificName: "Carcharodon carcharias",
    status: "VU",
    habitat: ["Coastal Waters", "Open Ocean"],
    description:
      "An apex predator vulnerable to overfishing for its fins and jaws, and incidental bycatch in commercial fisheries.",
  },
  {
    id: "8",
    name: "Emperor Penguin",
    scientificName: "Aptenodytes forsteri",
    status: "NT",
    habitat: ["Antarctica"],
    description:
      "Heavily reliant on sea ice for breeding and foraging, directly threatened by climate change and its impact on their habitat.",
  },
  {
    id: "9",
    name: "Oceanic Whitetip Shark",
    scientificName: "Carcharhinus longimanus",
    status: "CR",
    habitat: ["Open Ocean"],
    description:
      "Once widespread, its populations have plummeted dramatically due to intense fishing pressure for its fins.",
  },
  {
    id: "10",
    name: "Loggerhead Sea Turtle",
    scientificName: "Caretta caretta",
    status: "EN",
    habitat: ["Temperate and Tropical Oceans"],
    description:
      "Endangered by incidental capture in fishing gear, habitat degradation, and the impacts of climate change on nesting beaches.",
  },
];

// High-quality placeholder image URLs
const imageMap: { [key: string]: string } = {
  Vaquita:
    "https://images.unsplash.com/photo-1627471946399-6e3e1570d8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8dmFxdWl0YXxlbnwwfHx8fDE3MjIyNzE1NTZ8MA&ixlib=rb-4.0.3&q=80&w=400",
  "North Atlantic Right Whale":
    "https://images.unsplash.com/photo-1548172900-b6f709774677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cmlnaHQlMjB3aGFsZXxlbnwwfHx8fDE3MjIyNzEzNDZ8MA&ixlib=rb-4.0.3&q=80&w=400",
  "Hawksbill Sea Turtle":
    "https://images.unsplash.com/photo-1550978921-2a9f1c7d03a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGhhd2tzYmlsbCUyMHNlYSUyMHR1cnRsZXxlbnwwfHx8fDE3MjIyNzE2MTZ8MA&ixlib=rb-403&q=80&w=400",
  "Bluefin Tuna":
    "https://images.unsplash.com/photo-1616230554286-630e66c0850c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Ymx1ZWZpbiUyMHN0dW5hfGVufDB8fHx8MTcyMjI3MTc3N3ww&ixlib=rb-4.0.3&q=80&w=400",
  "Irrawaddy Dolphin":
    "https://images.unsplash.com/photo-1615551989410-b99b506509f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aXJyYXdhZGR5JTIwZG9scGhpbnxlbnwwfHx8fDE3MjIyNzE4MTN8MA&ixlib=rb-4.0.3&q=80&w=400",
  "Whale Shark":
    "https://images.unsplash.com/photo-1627471946399-6e3e1570d8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8d2hhbGUlMjBzaGFya3xlbnwwfHx8fDE3MjIyNzIwMzF8MA&ixlib=rb-4.0.3&q=80&w=400",
  "Great White Shark":
    "https://images.unsplash.com/photo-1628178658079-514d42013149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Z3JlYXQlMjB3aGl0ZSUyMHNoYXJrfGVufDB8fHx8MTcyMjI3MjEyOHww&ixlib=rb-4.0.3&q=80&w=400",
  "Emperor Penguin":
    "https://images.unsplash.com/photo-1601051515286-c956ec94c77c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8ZW1wZXJvciUyMHBlbmd1aW58ZW5mDB8fHx8MTcyMjI3MjE5OXww&ixlib=rb-4.0.3&q=80&w=400",
  "Oceanic Whitetip Shark":
    "https://images.unsplash.com/photo-1611361956793-2713e25b1285?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8b2NlYW5pYyUyMHdoaXRldGlwJTIwc2hhcmt8ZW58MHx8fHwxNzIyMjcyMjcwfDA&ixlib=rb-4.0.3&q=80&w=400",
  "Loggerhead Sea Turtle":
    "https://images.unsplash.com/photo-1547842247-495dc85ec28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bG9nZ2VyY2VlcmhlYWQlMjBzZWElMjB0dXJ0bGV8ZW58MHx8fHwxNzIyMjcyMzE5fDA&ixlib=rb-4.0.03&q=80&w=400",
};

// Helper function to map status codes to full text
function mapStatusToFullText(statusCode: string): string {
  const statusMap: { [key: string]: string } = {
    CR: "Critically Endangered",
    EN: "Endangered",
    VU: "Vulnerable",
    NT: "Near Threatened",
    DD: "Data Deficient",
    LC: "Least Concern",
    EW: "Extinct in the Wild",
    EX: "Extinct",
  };
  return statusMap[statusCode] || statusCode;
}

export default function Home() {
  const [allSpeciesData, setAllSpeciesData] = useState<Species[]>([]);
  const [filteredSpecies, setFilteredSpecies] = useState<Species[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [availableHabitats, setAvailableHabitats] = useState<string[]>([]);
  const [selectedHabitat, setSelectedHabitat] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Function to scroll to a section (for CTA button)
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Simulate data fetching
  useEffect(() => {
    const fetchSpecies = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay
      setAllSpeciesData(marineSpeciesData);
      setFilteredSpecies(marineSpeciesData); // Initially display all data
      setIsLoading(false);
    };
    fetchSpecies();
  }, []);

  // Populate habitat filter dynamically when allSpeciesData is loaded
  useEffect(() => {
    if (allSpeciesData.length > 0) {
      const habitats = new Set<string>();
      allSpeciesData.forEach((s) => {
        if (s.habitat && s.habitat.length > 0) {
          s.habitat.forEach((h) => habitats.add(h));
        }
      });
      setAvailableHabitats(Array.from(habitats).sort());
    }
  }, [allSpeciesData]);

  // Filter and search species whenever dependencies change
  useEffect(() => {
    if (!isLoading) {
      // Only apply filters if data has finished loading
      const applyFilters = () => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();

        const newFilteredSpecies = allSpeciesData.filter((species) => {
          const matchesSearch =
            species.name.toLowerCase().includes(lowercasedSearchTerm) ||
            species.scientificName
              .toLowerCase()
              .includes(lowercasedSearchTerm) ||
            (species.description &&
              species.description.toLowerCase().includes(lowercasedSearchTerm));

          const matchesStatus =
            selectedStatus === "all" || species.status === selectedStatus;

          const matchesHabitat =
            selectedHabitat === "all" ||
            (species.habitat && species.habitat.includes(selectedHabitat));

          return matchesSearch && matchesStatus && matchesHabitat;
        });
        setFilteredSpecies(newFilteredSpecies);
      };

      applyFilters();
    }
  }, [searchTerm, selectedStatus, selectedHabitat, allSpeciesData, isLoading]);

  return (
    <>
      {" "}
      {/* Use a React Fragment or a single div as the root element */}
      <main>
        <section id="hero" className="hero-section">
          <div className="hero-content">
            <h2>Protecting Ocean's Most Vulnerable</h2>
            <p>
              Explore the critical status of marine species and join the urgent
              call for conservation.
            </p>
            <button
              className="cta-button"
              onClick={() => scrollToSection("species-list")}
            >
              Discover Species
            </button>
          </div>
        </section>

        <section id="species-list" className="species-list-section">
          <div className="container">
            <h2>Endangered Species</h2>
            <div className="filter-controls">
              <input
                type="text"
                id="searchInput"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                id="statusFilter"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="CR">Critically Endangered</option>
                <option value="EN">Endangered</option>
                <option value="VU">Vulnerable</option>
                <option value="NT">Near Threatened</option>
                <option value="DD">Data Deficient</option>
              </select>
              <select
                id="habitatFilter"
                value={selectedHabitat}
                onChange={(e) => setSelectedHabitat(e.target.value)}
              >
                <option value="all">All Habitats</option>
                {availableHabitats.map((habitat) => (
                  <option key={habitat} value={habitat}>
                    {habitat}
                  </option>
                ))}
              </select>
            </div>
            <div id="speciesContainer" className="species-grid">
              {isLoading ? (
                <p className="loading-message">
                  Loading marine species data...
                </p>
              ) : filteredSpecies.length === 0 ? (
                <p
                  className="no-results"
                  style={{
                    textAlign: "center",
                    color: "var(--color-white-subtle)",
                    fontSize: "1.1rem",
                    padding: "20px",
                  }}
                >
                  No species found matching your criteria. Try adjusting your
                  filters.
                </p>
              ) : (
                filteredSpecies.map((species) => (
                  <div key={species.id} className="species-card">
                    {imageMap[species.name] && (
                      <div className="species-image-container">
                        {/* <Image
                          src={imageMap[species.name]}
                          alt={species.name}
                          width={400}
                          height={250}
                          objectFit="cover"
                          className="species-image"
                        /> */}
                      </div>
                    )}
                    <div className="species-info">
                      <h3>{species.name}</h3>
                      <p>
                        <em>{species.scientificName}</em>
                      </p>
                      <p>{species.description}</p>
                      <p className={`status ${species.status}`}>
                        Status: {mapStatusToFullText(species.status)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="container">
            <h2>About This Initiative</h2>
            <p>
              Dedicated to raising awareness for marine species facing
              extinction. We provide essential, up-to-date information to
              inspire conservation action globally. Data is sourced from the
              IUCN Red List and other scientific organizations.
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Get Involved</h2>
            <p>
              Support marine conservation. Reduce your footprint, advocate for
              sustainable practices, and connect with us.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
