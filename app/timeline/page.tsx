"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown, X, Waves } from "lucide-react";
import "./style.css";



// Define the type for a timeline event for better type safety
interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  details?: string[];
  fullDescription: string;
}

// Data for your timeline events
const timelineData: TimelineEvent[] = [
  {
    year: 2000,
    title: "Establishment of the Papahānaumokuākea Marine National Monument",
    description:
      "One of the largest marine protected areas in the world, designated to protect deep-sea coral reefs, ancient marine ecosystems, and cultural sites.",
    details: [
      "Protected 140,000 square miles of ocean.",
      "Home to over 7,000 species, a quarter of which are endemic.",
      "Designated as a UNESCO World Heritage site in 2010.",
      "Crucial for indigenous Hawaiian culture and biodiversity.",
    ],
    fullDescription:
      "In 2006, President George W. Bush established the Papahānaumokuākea Marine National Monument, making it the largest marine protected area at the time. This vast expanse of ocean and islands in the Northwestern Hawaiian Islands is critical for protecting a diverse range of deep-sea ecosystems, including ancient coral reefs, and serves as a vital sanctuary for numerous endangered species like the Hawaiian monk seal and green sea turtle. Its designation also recognizes its profound cultural significance to the native Hawaiian people.",
  },
  {
    year: 2001,
    title: "Discovery of Hydrothermal Vents in the Arctic",
    description:
      "Scientists discovered active hydrothermal vents in the Arctic Ocean, expanding our understanding of extreme life and ocean chemistry.",
    details: [
      "Found along the Gakkel Ridge, a slow-spreading mid-ocean ridge.",
      "Host unique chemosynthetic ecosystems thriving without sunlight.",
      "Challenged prior assumptions about the limits of life.",
      "Provided new insights into geological processes under ice.",
    ],
    fullDescription:
      "A landmark expedition in 2001 revealed active hydrothermal vents along the Gakkel Ridge, deep beneath the Arctic ice cap. This discovery was significant because it demonstrated that vibrant, chemosynthetic ecosystems, independent of sunlight, could thrive even in the extreme conditions of the Arctic deep sea. These vents release superheated, mineral-rich fluids, supporting unique communities of microbes, tube worms, and other invertebrates, expanding our knowledge of life's adaptability.",
  },
  {
    year: 2002,
    title: "Launch of the Argo Program",
    description:
      "A global array of profiling floats designed to measure temperature and salinity of the upper ocean, providing crucial data for climate research.",
    details: [
      "Over 3,000 active floats worldwide, drifting and diving.",
      "Revolutionized oceanographic data collection, filling critical gaps.",
      "Data is freely available, supporting global climate models.",
      "Provides real-time observations of ocean conditions.",
    ],
    fullDescription:
      "The Argo Program, initiated in 2002, deployed a global network of autonomous profiling floats that drift with ocean currents and periodically dive to depths of 2000 meters, collecting temperature and salinity data. This unprecedented, real-time dataset has transformed our understanding of ocean circulation, heat content, and salinity variations, playing a crucial role in improving climate change predictions and ocean forecasting models. The data is openly accessible, fostering international collaboration.",
  },
  {
    year: 2003,
    title: "First Successful Manned Submersible Dive to the Titanic Wreck",
    description:
      "A significant expedition revisited the Titanic wreck, providing new insights into deep-sea preservation and decay processes.",
    details: [
      "Used advanced ROVs and submersibles for closer inspection.",
      "Captured high-definition imagery and data previously unseen.",
      "Aimed to document the wreck's deteriorating state.",
      "Highlighted the challenges of preserving underwater cultural heritage.",
    ],
    fullDescription:
      "Building on earlier robotic explorations, 2003 saw one of the first successful manned submersible dives directly to the Titanic wreck site in the North Atlantic. This expedition utilized advanced submersibles to allow human observation and interaction, providing invaluable new photographic and scientific data on the wreck's integrity, the deep-sea ecosystems that have developed around it, and the processes of corrosion and decay in extreme environments. It also rekindled public interest in the ocean's depths.",
  },
  {
    year: 2004,
    title: "Indian Ocean Tsunami",
    description:
      "A devastating underwater earthquake triggered a massive tsunami, highlighting the destructive power of the ocean and the need for early warning systems.",
    details: [
      "Claimed over 230,000 lives across 14 countries.",
      "Triggered by a magnitude 9.1 earthquake off Sumatra.",
      "Led to significant advancements in tsunami detection and warning systems globally.",
      "Emphasized the interconnectedness of geological and oceanic events.",
    ],
    fullDescription:
      "On December 26, 2004, a catastrophic magnitude 9.1 earthquake off the coast of Sumatra, Indonesia, generated a massive tsunami that devastated coastal communities across the Indian Ocean, killing over 230,000 people. This event tragically underscored the immense destructive power of oceanic phenomena and galvanized international efforts to establish and improve tsunami early warning systems, particularly in vulnerable regions, drastically reducing future casualties from similar events.",
  },
  {
    year: 2005,
    title: "Deep-Sea Coral Protection Initiative",
    description:
      "Increased global efforts to identify, map, and protect vulnerable deep-sea coral ecosystems from destructive fishing practices.",
    details: [
      "Many species are thousands of years old, growing extremely slowly.",
      "Provide critical habitat for diverse marine life, including commercially important fish.",
      "Vulnerable to bottom trawling and other human impacts.",
      "International agreements began to focus on their protection.",
    ],
    fullDescription:
      "Recognizing the fragility and ecological importance of deep-sea coral ecosystems, 2005 saw a significant ramp-up in global initiatives aimed at their protection. These corals, found in cold, dark waters, can live for millennia and form complex habitats for a multitude of marine species. Efforts focused on mapping their locations and implementing measures to restrict destructive fishing gear like bottom trawls in sensitive areas, crucial for preserving these ancient and vulnerable underwater forests.",
  },
  {
    year: 2006,
    title: "First Discovery of a Giant Squid in its Natural Habitat",
    description:
      "Japanese scientists captured the first live footage of a giant squid (Architeuthis dux) in its deep-sea environment, solving a long-standing mystery.",
    details: [
      "Filmed at a depth of 900 meters in the Pacific Ocean.",
      "Provided rare, direct observations into the elusive creature's behavior.",
      "Confirmed the existence and scale of the legendary cephalopod.",
      "A triumph for deep-sea imaging technology.",
    ],
    fullDescription:
      "For centuries, the giant squid remained a creature of legend, known only from dead specimens. In 2006, a team of Japanese scientists achieved a monumental feat, capturing the first ever live footage of *Architeuthis dux* in its natural habitat at a depth of 900 meters off the Ogasawara Islands. This groundbreaking observation provided invaluable insights into the behavior, movement, and true scale of this enigmatic deep-sea colossal, transforming it from myth to a documented living animal.",
  },
  {
    year: 2007,
    title: "IPCC Fourth Assessment Report - Ocean Impact Focus",
    description:
      "The Intergovernmental Panel on Climate Change (IPCC) highlighted increasing ocean acidification and sea-level rise as major threats.",
    details: [
      "Stressed the ocean's role in absorbing CO2 and heat.",
      "Called for urgent action on climate change mitigation and adaptation.",
      "Increased scientific consensus on anthropogenic ocean changes.",
      "Influenced global policy discussions on climate and oceans.",
    ],
    fullDescription:
      "The 2007 Fourth Assessment Report by the Intergovernmental Panel on Climate Change (IPCC) marked a significant turning point, dedicating increased attention to the profound impacts of climate change on the world's oceans. It unequivocally highlighted the accelerating rates of ocean acidification, caused by increased CO2 absorption, and the escalating threat of sea-level rise due to thermal expansion and ice melt. The report served as a stark warning and a call to action for global policymakers regarding ocean health.",
  },
  {
    year: 2008,
    title: "Rise of Ocean Plastic Pollution Awareness",
    description:
      "Increased scientific focus and public awareness on the accumulating problem of plastic waste in the world's oceans, particularly microplastics.",
    details: [
      "The Great Pacific Garbage Patch gained notoriety, symbolizing the crisis.",
      "Research expanded on the impact of microplastics on marine life.",
      "Led to early campaigns for reducing single-use plastics.",
      "Public pressure mounted for better waste management.",
    ],
    fullDescription:
      "The late 2000s, especially 2008, saw a dramatic increase in scientific research and public awareness regarding the pervasive issue of ocean plastic pollution. The concept of vast 'garbage patches' like the one in the North Pacific gained traction, highlighting the immense accumulation of plastic debris. Crucially, attention also turned to microplastics – tiny plastic fragments that are ingested by marine organisms, posing significant ecological and potential human health risks. This period spurred early grassroots movements for plastic reduction.",
  },
  {
    year: 2009,
    title: "Marine Spatial Planning Initiatives Expand",
    description:
      "More countries adopted Marine Spatial Planning (MSP) to better manage human activities in marine areas and promote sustainable use of ocean resources.",
    details: [
      "Aims to reduce conflicts between various ocean uses (fishing, shipping, conservation).",
      "Promotes ecosystem-based management for long-term sustainability.",
      "Integrates conservation, economic development, and cultural values.",
      "Seen as a key tool for achieving healthy and productive oceans.",
    ],
    fullDescription:
      "Marine Spatial Planning (MSP) gained significant momentum around 2009 as an integrated, public process of analyzing and allocating the spatial and temporal distribution of human activities in marine areas to achieve ecological, economic, and social objectives. By systematically identifying areas for conservation, fishing, shipping, and energy development, MSP aims to reduce conflicts, ensure biodiversity protection, and promote the sustainable use of ocean resources, leading to healthier and more productive marine environments worldwide.",
  },
  {
    year: 2010,
    title: "Deepwater Horizon Oil Spill",
    description:
      "One of the largest marine oil spills in history occurred in the Gulf of Mexico, causing severe ecological and economic damage.",
    details: [
      "Released an estimated 4.9 million barrels of oil over 87 days.",
      "Caused widespread damage to marine life, coastal ecosystems, and local economies.",
      "Spurred new safety regulations and oversight for offshore drilling.",
      "Led to extensive long-term research on oil spill impacts.",
    ],
    fullDescription:
      "On April 20, 2010, the Deepwater Horizon oil rig exploded in the Gulf of Mexico, leading to the largest marine oil spill in history. Over 87 days, approximately 4.9 million barrels of oil gushed into the Gulf, causing catastrophic environmental damage to marine life, fisheries, and coastal habitats. The disaster triggered a massive cleanup effort, significant legal battles, and a complete re-evaluation of safety protocols and regulatory oversight in the offshore oil industry globally.",
  },
  {
    year: 2011,
    title: "Fukushima Nuclear Disaster Ocean Contamination",
    description:
      "The tsunami-induced meltdown at the Fukushima Daiichi nuclear plant released radioactive materials into the Pacific Ocean, raising concerns about marine life and seafood safety.",
    details: [
      "Released large quantities of radioactive isotopes into the ocean.",
      "Monitored extensively for long-term impacts on marine ecosystems and fisheries.",
      "Showed rapid dispersion of contaminants across the Pacific.",
      "Prompted global discussions on nuclear safety and ocean protection.",
    ],
    fullDescription:
      "Following the devastating Tohoku earthquake and tsunami in March 2011, the Fukushima Daiichi nuclear power plant experienced meltdowns, leading to significant releases of radioactive materials into the Pacific Ocean. While immediate concerns focused on local contamination, extensive international monitoring revealed the wide dispersion of radioactive isotopes across the Pacific. This event sparked intense scientific research into the environmental fate of radionuclides in marine environments and raised global questions about nuclear energy safety and its potential impacts on ocean health.",
  },
  {
    year: 2012,
    title: "James Cameron's Mariana Trench Dive",
    description:
      "Filmmaker James Cameron completed a solo dive to the Challenger Deep, the deepest part of the Mariana Trench, collecting samples and footage.",
    details: [
      "Reached a record-breaking depth of 10,908 meters in the Deepsea Challenger submersible.",
      "First solo dive to the Challenger Deep since 1960.",
      "Collected new scientific data, samples, and high-definition video.",
      "Inspired renewed public interest in deep-ocean exploration.",
    ],
    fullDescription:
      "Filmmaker and explorer James Cameron piloted his custom-built Deepsea Challenger submersible to the Challenger Deep, the deepest known point in Earth's oceans (Mariana Trench), on March 26, 2012. This solo dive, the first since the Trieste expedition in 1960, allowed for the collection of unique geological and biological samples and unprecedented high-definition footage, providing invaluable insights into life and conditions in the hadal zone and captivating audiences worldwide.",
  },
  {
    year: 2013,
    title: "Launch of 'The Ocean Cleanup' Project",
    description:
      "Boyan Slat launched his ambitious project aimed at developing technology to remove plastic from the Great Pacific Garbage Patch.",
    details: [
      "Gained significant global attention and public funding.",
      "Developed passive systems to concentrate and collect plastic.",
      "Initial deployments faced engineering challenges but showed promise.",
      "Sparked a wider conversation on innovative ocean cleanup solutions.",
    ],
    fullDescription:
      "Boyan Slat's 'The Ocean Cleanup' project gained global prominence in 2013 with its ambitious goal of ridding the world's oceans of plastic, starting with the Great Pacific Garbage Patch. The project proposed large-scale passive collection systems designed to harness ocean currents to concentrate plastic debris, making cleanup more efficient. While facing engineering hurdles and debates about effectiveness, it significantly elevated public discourse around marine plastic pollution and inspired numerous other cleanup initiatives.",
  },
  {
    year: 2014,
    title: "UN World Ocean Assessment Published",
    description:
      "The first comprehensive assessment of the state of the world's oceans, providing a baseline for future monitoring and policy decisions.",
    details: [
      "Provided a global scientific baseline for marine ecosystems and human impacts.",
      "Aimed to inform policy decisions for sustainable ocean management.",
      "Highlighted increasing pressures from pollution, climate change, and overfishing.",
      "Emphasized the urgent need for integrated ocean governance.",
    ],
    fullDescription:
      "The first United Nations World Ocean Assessment, published in 2014, represented a monumental global effort to comprehensively evaluate the state of the marine environment and the impacts of human activities. It synthesized a vast amount of scientific information, providing a crucial baseline against which future changes could be measured. The assessment highlighted escalating threats to ocean health, from pollution and overfishing to climate change and habitat destruction, serving as a critical resource for policymakers and prompting calls for more integrated ocean governance.",
  },
  {
    year: 2015,
    title: "Paris Agreement and Ocean's Role",
    description:
      "The Paris Agreement on climate change formally recognized the ocean's vital role in regulating the Earth's climate, bringing marine issues to the forefront of global policy.",
    details: [
      "Aimed to limit global warming to well below 2°C, preferably to 1.5°C.",
      "Explicitly recognized the ocean's capacity to absorb CO2 and heat, and its vulnerability.",
      "Emphasized ocean acidification mitigation as a climate priority.",
      "Integrated ocean concerns more deeply into international climate discussions.",
    ],
    fullDescription:
      "While primarily a climate agreement, the 2015 Paris Agreement notably integrated the ocean's critical role in the global climate system and its vulnerability to climate change. It acknowledged the ocean's immense capacity as a carbon and heat sink, alongside the growing threats of ocean acidification and sea-level rise. This inclusion brought marine issues to the forefront of global climate policy, prompting nations to consider ocean health more explicitly in their climate action plans and commitments to reduce greenhouse gas emissions.",
  },
  {
    year: 2016,
    title: "Great Barrier Reef Mass Coral Bleaching Events Intensify",
    description:
      "Record-breaking ocean temperatures caused widespread and severe coral bleaching across the Great Barrier Reef, highlighting the accelerating impact of climate change.",
    details: [
      "Affected two-thirds of the reef's corals, leading to significant mortality.",
      "Followed by further severe events in subsequent years (e.g., 2017, 2020).",
      "A stark visual indicator of global warming's impact on marine ecosystems.",
      "Spurred renewed calls for urgent climate action and reef protection.",
    ],
    fullDescription:
      "The years 2016 and 2017 saw unprecedented back-to-back mass coral bleaching events on the Great Barrier Reef, caused by record-breaking ocean temperatures driven by climate change. These events led to widespread coral mortality across vast sections of the iconic reef, alarming scientists and policymakers globally. The severe bleaching served as a stark visual and ecological indicator of the accelerating impacts of global warming on marine biodiversity and ecosystem health, intensifying the urgency for climate action.",
  },
  {
    year: 2017,
    title: "New Deep-Sea Discoveries in the Southern Ocean",
    description:
      "Expeditions to the Southern Ocean uncovered vast, previously unknown deep-sea ecosystems thriving in extreme conditions.",
    details: [
      "Found unique species adapted to cold, dark environments near hydrothermal vents.",
      "Included discoveries of new species of crustaceans, mollusks, and sea anemones.",
      "Emphasized the immense biodiversity of unexplored deep-sea areas globally.",
      "Showcased the continued potential for fundamental discoveries in oceanography.",
    ],
    fullDescription:
      "Expeditions to the frigid and largely unexplored Southern Ocean in 2017 yielded remarkable discoveries of new deep-sea ecosystems and species. Scientists found thriving communities around hydrothermal vents, including previously unknown species of crustaceans, octopods, and other invertebrates adapted to extreme conditions of pressure and temperature. These findings underscored the vast, undiscovered biodiversity residing in the deep ocean and highlighted the importance of protecting these vulnerable, unique environments from human impacts.",
  },
  {
    year: 2018,
    title: "Growing Focus on Sustainable Aquaculture",
    description:
      "Increased investment and research into sustainable aquaculture practices to meet global food demand while minimizing environmental impact.",
    details: [
      "Aims to reduce pressure on wild fish stocks and improve food security.",
      "Focus on closed-loop systems, alternative feeds, and reduced chemical use.",
      "Development of offshore aquaculture for reduced coastal impact.",
      "Crucial for future protein supply in a growing world population.",
    ],
    fullDescription:
      "As global demand for seafood continues to rise and wild fish stocks face increasing pressure, 2018 marked a heightened focus on advancing sustainable aquaculture. This involves developing and implementing practices that minimize environmental footprints, such as reducing pollution, preventing escapes of farmed fish, and finding sustainable feed alternatives. Innovations in recirculating aquaculture systems (RAS) and offshore farming aimed to produce seafood more efficiently and responsibly, addressing food security while safeguarding marine ecosystems.",
  },
  {
    year: 2019,
    title: "First Image of a Black Hole Released (Event Horizon Telescope)",
    description:
      "While not strictly an ocean event, this monumental scientific achievement inspired a new wave of exploration and technological innovation, much like deep-ocean exploration.",
    details: [
      "A testament to collaborative global scientific effort, akin to large ocean science projects.",
      "Showcased humanity's drive to explore the unknown, whether in space or deep oceans.",
      "Advanced imaging and data processing techniques applicable to other fields.",
      "Captivated public imagination for fundamental science.",
    ],
    fullDescription:
      "Although the first image of a black hole, captured by the Event Horizon Telescope in 2019, is an astronomical feat, its impact resonates deeply with ocean exploration. This monumental scientific achievement demonstrated the power of international collaboration, cutting-edge technology, and perseverance in unraveling the universe's greatest mysteries. Its success mirrors the spirit of deep-ocean exploration – pushing the boundaries of human knowledge, developing novel technologies, and inspiring awe for the unseen realms, whether cosmic or abyssal.",
  },
  {
    year: 2020,
    title: "Impact of COVID-19 on Ocean Conservation and Research",
    description:
      "The global pandemic brought both challenges (disrupted research, reduced enforcement) and unexpected benefits (reduced human activity, cleaner waters in some areas) to ocean environments.",
    details: [
      "Temporary reduction in shipping, tourism, and fishing pressure in some regions.",
      "Disruption of marine research expeditions and conservation projects.",
      "Highlighting the interconnectedness of human health and environmental health.",
      "Lessons learned about human impact reduction and environmental recovery.",
    ],
    fullDescription:
      "The COVID-19 pandemic of 2020 had a complex and varied impact on the world's oceans. While disruptions to research expeditions, conservation efforts, and monitoring activities posed significant challenges, the unprecedented reduction in human activity (e.g., shipping, tourism, industrial fishing) in some areas led to temporary improvements in water quality and reduced noise pollution. This period offered unique insights into the resilience of marine ecosystems when human pressures are lessened, and underscored the direct link between global human health and environmental well-being.",
  },
  {
    year: 2021,
    title:
      "Launch of the UN Decade of Ocean Science for Sustainable Development",
    description:
      "A global initiative to promote scientific research and innovative technologies to better understand and protect the ocean, aiming for 'the science we need for the ocean we want'.",
    details: [
      "Spans from 2021 to 2030, fostering international collaboration.",
      "Focuses on seven key outcomes, including a clean, healthy, and resilient ocean.",
      "Mobilizes scientists, policymakers, and society for ocean solutions.",
      "Aims to close knowledge gaps and accelerate ocean protection efforts.",
    ],
    fullDescription:
      "The United Nations Decade of Ocean Science for Sustainable Development (2021-2030) was launched with the ambitious goal of transforming ocean science to support sustainable development globally. Its core aim is to generate the knowledge and partnerships needed to create 'the ocean we want' – a healthy, productive, resilient, and understood ocean. The Decade brings together governments, research institutions, NGOs, and civil society to collaborate on solutions for ocean challenges, from climate change and pollution to food security and marine conservation.",
  },
  {
    year: 2022,
    title: "Historic UN Biodiversity Conference (COP15) Targets for Ocean",
    description:
      "Key agreements were made at COP15 in Montreal, aiming to protect 30% of global land and marine areas by 2030 ('30 by 30' target), a crucial step for ocean conservation.",
    details: [
      "Signed by 196 countries as part of the Kunming-Montreal Global Biodiversity Framework.",
      "Seeks to halt and reverse biodiversity loss globally.",
      "Significantly boosts efforts to expand marine protected areas.",
      "A landmark achievement for global conservation targets.",
    ],
    fullDescription:
      "The 2022 UN Biodiversity Conference (COP15) in Montreal concluded with the adoption of the Kunming-Montreal Global Biodiversity Framework, a landmark agreement including a transformative '30 by 30' target. This global commitment aims to effectively conserve and manage at least 30% of the world's lands, inland waters, coastal areas, and oceans by 2030. For ocean conservation, this represents a crucial step towards safeguarding biodiversity, enhancing ecosystem resilience, and addressing the impacts of climate change on marine environments.",
  },
  {
    year: 2023,
    title: "Adoption of the UN High Seas Treaty",
    description:
      "A landmark agreement on the conservation and sustainable use of marine biological diversity of areas beyond national jurisdiction, protecting vast stretches of the ocean.",
    details: [
      "Aims to establish marine protected areas in international waters (High Seas).",
      "Crucial for regulating activities like deep-sea mining and shipping.",
      "Provides a framework for environmental impact assessments in global oceans.",
      "Years of negotiations culminated in this historic legally binding instrument.",
    ],
    fullDescription:
      "After years of negotiation, the United Nations adopted the landmark High Seas Treaty in 2023 (formally the Biodiversity Beyond National Jurisdiction - BBNJ agreement). This legally binding instrument is designed to protect and sustainably manage marine biological diversity in areas beyond national jurisdiction, which cover nearly two-thirds of the world's oceans. It provides a framework for establishing marine protected areas on the high seas, conducting environmental impact assessments for activities in these areas, and sharing marine genetic resources, representing a crucial step for ocean governance and conservation.",
  },
  {
    year: 2024,
    title: "Breakthroughs in Marine Renewable Energy",
    description:
      "Increased development and deployment of innovative technologies for harnessing ocean energy (e.g., wave, tidal, ocean thermal energy conversion) for sustainable power.",
    details: [
      "Improved efficiency and reduced costs of ocean energy devices.",
      "New pilot projects demonstrating viability on a larger scale.",
      "Contributes significantly to decarbonization efforts and energy diversification.",
      "Paves the way for oceans as a major source of clean energy.",
    ],
    fullDescription:
      "2024 saw significant advancements and increased deployment in marine renewable energy technologies. Innovations in wave energy converters, tidal stream generators, and ocean thermal energy conversion (OTEC) systems reached new levels of efficiency and cost-effectiveness. Numerous pilot projects demonstrated the viability of these technologies for large-scale power generation, positioning the oceans as a crucial frontier for sustainable energy production and a key contributor to global decarbonization efforts in the face of climate change.",
  },
  {
    year: 2025,
    title: "Projected Milestones in Deep-Sea Exploration and Mapping",
    description:
      "Anticipated advancements in autonomous underwater vehicles (AUVs) and manned submersibles lead to significant progress in mapping the unexplored deep ocean.",
    details: [
      "Aims to map 100% of the seabed by 2030 (Seabed 2030 initiative).",
      "New discoveries of unique ecosystems and geological features are highly anticipated.",
      "High-resolution imaging and genetic sequencing capabilities enhanced.",
      "Opens up new avenues for understanding Earth's largest habitat.",
    ],
    fullDescription:
      "Looking ahead to 2025, the deep-sea exploration community anticipates major milestones driven by rapidly evolving technology. Advanced Autonomous Underwater Vehicles (AUVs) with enhanced mapping and sampling capabilities, alongside next-generation manned submersibles, are set to accelerate the mapping of the vast, unexplored seabed. This progress is critical for initiatives like Seabed 2030, aiming for complete ocean mapping, and is expected to uncover countless new species, geological formations, and fundamental insights into Earth's largest and least understood habitat.",
  },
];

export default function HomePage() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState<TimelineEvent | null>(null);

  // Refs for elements that need direct DOM interaction
  const timelineAppRef = useRef<HTMLDivElement>(null);
  const yearSelectRef = useRef<HTMLSelectElement>(null);
  const eventRefs = useRef<HTMLDivElement[]>([]);

  // Effect to handle initial rendering and update year indicator
  useEffect(() => {
    if (timelineData.length > 0) {
      if (yearSelectRef.current) {
        yearSelectRef.current.value = timelineData[0].year.toString();
      }
    }
  }, []);

  // Effect to handle event display and animation classes
  useEffect(() => {
    eventRefs.current.forEach((el, index) => {
      if (el) {
        if (index === currentEventIndex) {
          el.classList.add("active");
          el.style.zIndex = "15";
          el.style.pointerEvents = "auto";
        } else {
          el.classList.remove("active");
          const transitionDurationMs =
            parseFloat(getComputedStyle(el).transitionDuration) * 1000 || 0;
          setTimeout(() => {
            if (el && index !== currentEventIndex) {
              el.style.zIndex = "1";
              el.style.pointerEvents = "none";
            }
          }, transitionDurationMs + 50);
        }
      }
    });

    const currentEvent = timelineData[currentEventIndex];
    if (yearSelectRef.current) {
      yearSelectRef.current.value = currentEvent.year.toString();
    }

    const newEventElement = eventRefs.current[currentEventIndex];
    if (newEventElement) {
      const newTransitionDurationMs =
        parseFloat(getComputedStyle(newEventElement).transitionDuration) *
          1000 || 0;
      setTimeout(() => {
        setIsAnimating(false);
      }, newTransitionDurationMs);
    } else {
      setIsAnimating(false);
    }
  }, [currentEventIndex]);

  const displayEvent = (index: number) => {
    if (
      isAnimating ||
      index < 0 ||
      index >= timelineData.length ||
      index === currentEventIndex
    ) {
      return;
    }
    setIsAnimating(true);
    setCurrentEventIndex(index);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(e.target.value);
    const index = timelineData.findIndex((item) => item.year === selectedYear);
    if (index !== -1) {
      displayEvent(index);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isModalOpen || isAnimating) return;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      displayEvent(currentEventIndex - 1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      displayEvent(currentEventIndex + 1);
    } else if (e.key === "Escape" && isModalOpen) {
      setIsModalOpen(false);
      document.body.style.overflow = "";
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentEventIndex, isAnimating, isModalOpen]);

  const openModal = (event: TimelineEvent) => {
    if (isAnimating) return;
    setModalEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalEvent(null);
    document.body.style.overflow = "";
  };

  const currentYear = timelineData[currentEventIndex]?.year || "";
  const totalYears = timelineData[timelineData.length - 1]?.year || "";

  return (
    <div className="ocean-container">
      {/* Animated background elements */}
      <div className="ocean-background">
        <div className="wave-animation"></div>
        <div className="bubble-field">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`bubble bubble-${i + 1}`}></div>
          ))}
        </div>
        <div className="bioluminescent-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
        <div className="current-flow"></div>
      </div>

      <div className="timeline-app" ref={timelineAppRef}>
        <div className="timeline-line">
          <div className="line-glow"></div>
        </div>
        
        {timelineData.map((event, index) => (
          <div
            key={event.year}
            ref={(el) => {
              if (el) eventRefs.current[index] = el;
            }}
            className={`timeline-event-wrapper ${
              index === currentEventIndex ? "active" : ""
            }`}
            onClick={() => openModal(event)}
          >
            <div className="timeline-content-area">
              <div className="year-marker-container">
                <div className="year-marker">
                  <div className="marker-core"></div>
                  <div className="marker-ring"></div>
                  <div className="marker-pulse"></div>
                </div>
              </div>
              <div className="event-details" data-event-id={event.year}>
                <div className="card-glow"></div>
                <div className="year-text">{event.year}</div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="read-more-indicator">
                  <span>Dive Deeper</span>
                  <Waves className="waves-icon" size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`scroll-arrow up ${
          currentEventIndex === 0 ? "disabled" : ""
        }`}
        onClick={() => displayEvent(currentEventIndex - 1)}
        disabled={currentEventIndex === 0}
      >
        <ChevronUp size={24} />
      </button>
      
      <button
        className={`scroll-arrow down ${
          currentEventIndex === timelineData.length - 1 ? "disabled" : ""
        }`}
        onClick={() => displayEvent(currentEventIndex + 1)}
        disabled={currentEventIndex === timelineData.length - 1}
      >
        <ChevronDown size={24} />
      </button>

      <div className="year-indicator">
        <span className="current-year">{currentYear}</span>
        <span className="separator">/</span>
        <span className="total-year">{totalYears}</span>
      </div>

      <div className="year-select-container">
        <select
          className="year-select"
          onChange={handleYearChange}
          value={currentYear}
          ref={yearSelectRef}
          disabled={isAnimating}
        >
          {timelineData.map((event) => (
            <option key={event.year} value={event.year}>
              {event.year}
            </option>
          ))}
        </select>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && modalEvent && (
        <div className="modal open" onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}>
          <div className="modal-backdrop"></div>
          <div className="modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="modal-event-details">
              <div className="modal-year">{modalEvent.year}</div>
              <h3>{modalEvent.title}</h3>
              <div className="modal-description">
                <p>{modalEvent.fullDescription || modalEvent.description}</p>
              </div>
              {modalEvent.details && modalEvent.details.length > 0 && (
                <div className="modal-details">
                  <h4>Key Details</h4>
                  <ul>
                    {modalEvent.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}