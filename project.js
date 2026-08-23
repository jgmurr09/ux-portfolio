const projectData = {
  E01: { title: "Supporting Mission Planning", challenge: "Designing decision support around complex planning work where information, timing, and operator judgment have to stay aligned.", facts: ["DESIGN STRATEGIST", "U.S. NAVY", "MISSION SYSTEMS", "2026"] },
  E02: { title: "AI Process Optimization", challenge: "Finding where software and AI can reduce friction inside a high-consequence organizational process without flattening the human system around it.", facts: ["DESIGN STRATEGIST", "U.S. NAVY", "PROCESS + AI", "2026"] },
  E03: { title: "Welcome to 2048", challenge: "Using futures methods to make distant changes concrete enough to shape decisions today.", facts: ["SPRINT LEAD", "U.S. NAVY", "FUTURES", "2026"] },
  E04: { title: "Reducing Maintenance Friction", challenge: "Reframing a maintenance experience across documentation, physical work, software, and process.", facts: ["DESIGN STRATEGIST", "U.S. NAVY", "MAINTENANCE", "2025–2026"] },
  E05: { title: "Cockpit Experience", challenge: "Improving an operator experience inside a tightly coupled technical system.", facts: ["DESIGN STRATEGIST", "U.S. NAVY", "AVIATION", "2025"] },
  E06: { title: "Future Control Rooms", challenge: "Exploring how control environments can better support shared awareness, handoffs, and high-tempo coordination across physical controls and team environments.", facts: ["DESIGN STRATEGIST", "U.S. NAVY", "CONTROL ENVIRONMENTS", "2024–2025"] },
  E07: { title: "Designing Future Mars Habitats", challenge: "Studying ISS operations, astronauts, and flight-control work to inform human-centered concepts for future long-duration Mars habitats.", facts: ["UNDERGRAD RESEARCHER / DESIGNER", "NASA-SPONSORED", "SPACE HABITATS", "2021–2023"] },
  E08: { title: "Sponsored Research Studio", challenge: "Framing emerging-technology questions for student teams — including XR + AI for mission control — and mentoring their path from ambiguity toward testable interventions.", facts: ["SPONSOR / MENTOR", "PURDUE", "EMERGING TECHNOLOGY", "2025–2026"] }
};

const params = new URLSearchParams(location.search);
const id = params.get("id") || "E01";
const data = projectData[id] || projectData.E01;
document.title = `${data.title} — Jackson's Portfolio`;
document.getElementById("projectId").textContent = `${id} / FIELD NOTES`;
document.getElementById("projectTitle").textContent = data.title;
document.getElementById("projectChallenge").textContent = data.challenge;
document.getElementById("projectFacts").innerHTML = data.facts.map(f => `<span>${f}</span>`).join("");
