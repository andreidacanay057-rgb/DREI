import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import BoracayImage from "./asset/Boracay.jpg";
import BaguioImage from "./asset/Baguio.jpg";
import palawanImage from "./asset/palawan.jpg";
import SiargaoImage from "./asset/Siargao.jpg";
import CebuImage from "./asset/Cebu.jpg";
import TagaytayImage from "./asset/Tagaytay.jpg";
import BoholImage from "./asset/Bohol.jpg";
import ViganImage from "./asset/vigan.jpg";
import SiquijorImage from "./asset/Siquijor.jpg";
import DavaoImage from "./asset/Davao.jpg";
import BatanesImage from "./asset/Batanes.jpg";
import CamiguinImage from "./asset/Camiguin.jpg";
import SamalImage from "./asset/Samal.jpg";
import ZambalesImage from "./asset/Zambales.jpg";
import IlocosNorteImage from "./asset/Ilocos Norte.jpg";
import ApoReefImage from "./asset/Apo Reef.jpg";
import SorsogonImage from "./asset/Sorsogon.jpg";
import SurigaoImage from "./asset/Surigao.jpg";
import LeyteImage from "./asset/Leyte.jpg";
import PangasinanImage from "./asset/Pangasinan.jpg";
const PuertoPrincesaImage = "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80";

const destinations = [
  {
    title: "Boracay",
    description: "White-sand beaches, sunsets, and island-hopping adventures in one trip.",
    image: BoracayImage,
    flightCostUSD: 1150,
    avgDailyCostPHP: 3200,
  },
  {
    title: "Baguio",
    description: "Cool weather, pine gardens, and cozy cafés for a relaxing escape.",
    image: BaguioImage,
    flightCostUSD: 1050,
    avgDailyCostPHP: 2800,
  },
  {
    title: "Palawan",
    description: "Crystal-clear waters, limestone cliffs, and unforgettable diving spots.",
    image: palawanImage,
    flightCostUSD: 1200,
    avgDailyCostPHP: 3400,
  },
  {
    title: "Siargao",
    description: "Surf breaks, island vibes, and scenic lagoons for your next getaway.",
    image: SiargaoImage,
    flightCostUSD: 1250,
    avgDailyCostPHP: 3000,
  },
  {
    title: "Cebu",
    description: "Historic landmarks, beaches, and exciting local food adventures.",
    image: CebuImage,
    flightCostUSD: 1100,
    avgDailyCostPHP: 3100,
  },
  {
    title: "Tagaytay",
    description: "Cool mountain air, scenic viewpoints, and perfect weekend dining spots.",
    image: TagaytayImage,
    flightCostUSD: 1080,
    avgDailyCostPHP: 2700,
  },
  {
    title: "Bohol",
    description: "Chocolate Hills, island beaches, and rich cultural heritage all in one trip.",
    image: BoholImage,
    flightCostUSD: 1180,
    avgDailyCostPHP: 3300,
  },
  {
    title: "Vigan",
    description: "Historic cobblestone streets, ancestral houses, and classic Ilocano charm.",
    image: ViganImage,
    flightCostUSD: 980,
    avgDailyCostPHP: 2600,
  },
  {
    title: "Siquijor",
    description: "Mystic beaches, waterfalls, and laid-back island scenes for a peaceful getaway.",
    image: SiquijorImage,
    flightCostUSD: 1120,
    avgDailyCostPHP: 2900,
  },
  {
    title: "Davao",
    description: "Mountain views, delicious food, and natural wonders near a vibrant city.",
    image: DavaoImage,
    flightCostUSD: 1090,
    avgDailyCostPHP: 2950,
  },
  {
    title: "Puerto Princesa",
    description: "Underground river tours, island hopping, and breathtaking nature trails.",
    image: PuertoPrincesaImage,
    flightCostUSD: 1270,
    avgDailyCostPHP: 3500,
  },
  {
    title: "Batanes",
    description: "Rolling hills, sea cliffs, and one of the most scenic destinations in the Philippines.",
    image: BatanesImage,
    flightCostUSD: 1450,
    avgDailyCostPHP: 3900,
  },
  {
    title: "Camiguin",
    description: "Volcanic landscapes, hot springs, and relaxing island beaches.",
    image: CamiguinImage,
    flightCostUSD: 1160,
    avgDailyCostPHP: 3000,
  },
  {
    title: "Samal",
    description: "White beaches, dive spots, and resort getaways near Davao.",
    image: SamalImage,
    flightCostUSD: 1050,
    avgDailyCostPHP: 2850,
  },
  {
    title: "Zambales",
    description: "Beach escapes, mountain views, and laid-back weekend adventures.",
    image: ZambalesImage,
    flightCostUSD: 930,
    avgDailyCostPHP: 2450,
  },
  {
    title: "Ilocos Norte",
    description: "Windmills, heritage sites, and scenic coastal drives.",
    image: IlocosNorteImage,
    flightCostUSD: 1000,
    avgDailyCostPHP: 2700,
  },
  {
    title: "Apo Reef",
    description: "A world-class diving destination with vibrant marine life.",
    image: ApoReefImage,
    flightCostUSD: 1300,
    avgDailyCostPHP: 3450,
  },
  {
    title: "Sorsogon",
    description: "Surf beaches, whale shark encounters, and natural island charm.",
    image: SorsogonImage,
    flightCostUSD: 1150,
    avgDailyCostPHP: 3100,
  },
  {
    title: "Surigao",
    description: "Island hopping, crystal waters, and excellent coastal adventures.",
    image: SurigaoImage,
    flightCostUSD: 1190,
    avgDailyCostPHP: 3150,
  },
  {
    title: "Leyte",
    description: "Historic markers, waterfalls, and accessible island escapes.",
    image: LeyteImage,
    flightCostUSD: 1040,
    avgDailyCostPHP: 2800,
  },
  {
    title: "Pangasinan",
    description: "Sandy beaches, seafood, and family-friendly coastal destinations.",
    image: PangasinanImage,
    flightCostUSD: 920,
    avgDailyCostPHP: 2500,
  },
];

const highlights = [
  "Flexible for any budget",
  "Local guides and travel support",
  "Easy to plan yout trip online",
];

const popularSpots = [
  {
    title: "Chocolate Hills",
    location: "Bohol",
    image: BoholImage,
    description: "Rolling green hills with a dramatic countryside backdrop.",
  },
  {
    title: "Vigan",
    location: "Ilocos Sur",
    image: ViganImage,
    description: "Historic Spanish-era streets and classic Filipino heritage.",
  },
  {
    title: "Siquijor",
    location: "Central Visayas",
    image: SiquijorImage,
    description: "Mystic beaches, waterfalls, and serene island vibes.",
  },
];

function App() {
  const [tripData, setTripData] = useState({
    days: 4,
    travelers: 2,
    budget: 1800,
    destination: "Boracay",
  });

  const [estimate, setEstimate] = useState(null);
  const [videoSrc, setVideoSrc] = useState(null);
  const [triedFallback, setTriedFallback] = useState(false);
  const fallbackVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
  const videoRef = useRef(null);

  const [wikiLoading, setWikiLoading] = useState(false);
  const [wikiSummary, setWikiSummary] = useState(null);
  const [wikiUrl, setWikiUrl] = useState(null);
  const [showWikiModal, setShowWikiModal] = useState(false);

  const usdRate = 56;

  useEffect(() => {
    const title = (document && document.title) || "";
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
    setVideoSrc(`${publicUrl}/videos/${slug || "default"}.mp4`);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTripData((prev) => ({
      ...prev,
      [name]: name === "destination" ? value : Number(value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const plannerPlace = destinations.find((d) => d.title === tripData.destination);
    const daily = plannerPlace?.avgDailyCostPHP ?? 140;
    const flightUSD = plannerPlace?.flightCostUSD ?? 180;
    const flightPHP = Math.round(flightUSD * usdRate);
    const stayCost = tripData.days * daily;
    const transportCost = tripData.travelers * 95;
    const activityCost = tripData.days * 80;
    const total = stayCost + transportCost + activityCost + flightPHP;
    const remaining = tripData.budget - total;

    setEstimate({
      total,
      remaining,
      status: remaining >= 0 ? "You are within budget." : "You need a little more budget.",
      stayCost,
      transportCost,
      activityCost,
      flightPHP,
      flightUSD,
    });
  };

  const fetchWikiFor = async (place) => {
    if (!place) return;
    setWikiLoading(true);
    setWikiSummary(null);
    setWikiUrl(null);
    setShowWikiModal(true);

    try {
      const title = encodeURIComponent(place.replace(/\s+/g, "_"));
      const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
      if (!res.ok) throw new Error("no wiki");
      const data = await res.json();
      setWikiSummary(data.extract || "No summary available.");
      setWikiUrl(data.content_urls?.desktop?.page || `https://en.wikipedia.org/wiki/${title}`);
    } catch (err) {
      setWikiSummary("No Wikipedia summary found for this place.");
    } finally {
      setWikiLoading(false);
    }
  };

  return (
    <div className="tourist-app">
      {videoSrc && (
        <video
          ref={videoRef}
          key={videoSrc}
          className="bg-video"
          autoPlay
          muted
          loop
          playsInline
          src={videoSrc}
          onError={(event) => {
            if (!triedFallback) {
              setTriedFallback(true);
              setVideoSrc(fallbackVideo);
            } else {
              event.currentTarget.style.display = "none";
            }
          }}
        />
      )}

      <Header />

      <WikiModal
        open={showWikiModal}
        loading={wikiLoading}
        summary={wikiSummary}
        url={wikiUrl}
        onClose={() => setShowWikiModal(false)}
      />

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="badge-pill">Curated island escapes</span>
            <p className="eyebrow">Travel made simple</p>
            <h1>Discover the Philippines in comfort and style.</h1>
           

            <div className="hero-meta">
              <div className="meta-pill">
                <strong>230+</strong>
                <span>handpicked packages</span>
              </div>
              <div className="meta-pill">
                <strong>4.9/5</strong>
                <span>traveler rating</span>
              </div>
              <div className="meta-pill">
                <strong>24/7</strong>
                <span>trip support</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#planner" className="button primary">
                Plan your trip
              </a>
              <a href="#destinations" className="button secondary">
                Explore places
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-label">Why travelers love us</div>
            <h3>Everything taken care of.</h3>
            <ul>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="destinations" className="section">
          <div className="section-heading">
            <p className="eyebrow">Top destinations</p>
            <h2>Pick a place that fits your vibe.</h2>
          </div>

          <div className="card-grid">
            {destinations.map((place) => (
              <article className="destination-card" key={place.title}>
                <img src={place.image} alt={place.title} />
                <div className="card-body">
                  <h3>{place.title}</h3>
                  <p>{place.description}</p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button type="button" onClick={() => fetchWikiFor(place.title)}>
                      Explore
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="spots-section">
          <div className="section-heading">
            <p className="eyebrow">Must-visit spots</p>
            <h2>More beautiful places to add to your itinerary.</h2>
          </div>

          <div className="spot-list">
            {popularSpots.map((spot, index) => (
              <article
                className="spot-card"
                key={spot.title}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <img src={spot.image} alt={spot.title} />
                <h3>{spot.title}</h3>
                <p style={{ padding: "0 1rem 1rem", color: "var(--muted)" }}>{spot.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="planner" className="section planner-section">
          <div className="planner-copy">
            <p className="eyebrow">Trip planner</p>
            <h2>Estimate your budget in seconds.</h2>
            <p>
              Choose your trip length, travelers, and budget to see how your getaway stacks up.
            </p>
          </div>

          <form className="planner-form" onSubmit={handleSubmit}>
            <label>
              Destination
              <select name="destination" value={tripData.destination} onChange={handleChange}>
                {destinations.map((d) => (
                  <option key={d.title} value={d.title}>{d.title}</option>
                ))}
              </select>
            </label>

            <label>
              Days
              <input
                type="number"
                name="days"
                min="1"
                value={tripData.days}
                onChange={handleChange}
              />
            </label>

            <label>
              Travelers
              <input
                type="number"
                name="travelers"
                min="1"
                value={tripData.travelers}
                onChange={handleChange}
              />
            </label>

            <label>
              Budget (PHP)
              <input
                type="number"
                name="budget"
                min="100"
                value={tripData.budget}
                onChange={handleChange}
              />
            </label>

            <div className="planner-estimate">
              <p style={{ margin: 0, fontWeight: 700 }}>
                Preview estimate for {tripData.destination}
              </p>
              <PlannerEstimate tripData={tripData} />
            </div>

            <button type="submit">Calculate estimate</button>
          </form>

          {estimate && (
            <div className="estimate-box">
              <h3>Estimated trip cost: ₱{estimate.total.toLocaleString()}</h3>
              <p>{estimate.status}</p>
              <p>
                {estimate.remaining >= 0
                  ? `You still have ₱${estimate.remaining.toLocaleString()} left.`
                  : `You need ₱${Math.abs(estimate.remaining).toLocaleString()} more.`}
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

function WikiModal({ open, loading, summary, url, onClose }) {
  if (!open) return null;

  return (
    <div className="wiki-modal" role="dialog" aria-modal="true">
      <div className="wiki-modal-panel">
        <button className="wiki-close" onClick={onClose}>✕</button>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="wiki-content">
              <p>{summary}</p>
            </div>
            <div style={{ marginTop: 12 }}>
              <a href={url} target="_blank" rel="noreferrer">Open on Wikipedia</a>
              <span style={{ marginLeft: 12 }}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(url)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Maps
                </a>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PlannerEstimate({ tripData }) {
  const place = destinations.find((d) => d.title === tripData.destination);
  const daily = place?.avgDailyCostPHP ?? 140;
  const flightUSD = place?.flightCostUSD ?? 180;
  const flightPHP = Math.round(flightUSD * 56);
  const stay = tripData.days * daily;
  const transport = tripData.travelers * 95;
  const activity = tripData.days * 80;
  const total = stay + transport + activity + flightPHP;
  const remaining = tripData.budget - total;

  return (
    <div style={{ marginTop: 8, color: "var(--muted)" }}>
      <div>Flight: ${flightUSD.toLocaleString()} (~₱{flightPHP.toLocaleString()})</div>
      <div>Local daily: ₱{daily.toLocaleString()} x {tripData.days} = ₱{stay.toLocaleString()}</div>
      <div>Transport: ₱{transport.toLocaleString()}</div>
      <div>Activity: ₱{activity.toLocaleString()}</div>
      <div style={{ marginTop: 6, fontWeight: 700 }}>
        Estimated total: ₱{total.toLocaleString()}
      </div>
      <div style={{ color: remaining >= 0 ? "var(--accent)" : "#ff6b6b" }}>
        {remaining >= 0
          ? `Within budget: ₱${remaining.toLocaleString()} left`
          : `Over budget: ₱${Math.abs(remaining).toLocaleString()} needed`}
      </div>
    </div>
  );
}

export default App;