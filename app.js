const BASE_SCENE = { width: 1536, height: 1024 };

const SITE_CONFIG = {
  photographyUrl: "https://incandescent-valkyrie-5f6126.netlify.app",
  introStorageKey: "jm-lab-intro-seen-v7",
  professionalHeadshot: "assets/professional-headshot.jpg",
  soundEnabledKey: "jm-lab-sound-enabled-v7",
  musicProgressKey: "jm-lab-home-music-progress",
  homeMusicFile: "assets/audio/dig-dis.mp3",
  callSoundFile: "assets/audio/iphone-call.mp3",
  talkingSoundFile: "assets/audio/jackson-talking.mp3"
};

const artifacts = [
  { id: "P01", title: "Future Mars Habitat Research", experience: "E07", x: 95, y: 250, w: 320, h: 225, asset: "P01_ISS_Operations_Research.png" },
  { id: "P02", title: "XR Mission Control + AI", experience: "E08", x: 200, y: 25, w: 200, h: 215, asset: "P02_Deep_Space_Mission_Design.png" },
  { id: "P03", title: "Watch Floor Experience", experience: "E06", x: 420, y: 55, w: 535, h: 310, asset: "P03_Watch_Floor_Experience.png" },
  { id: "P04", title: "Nuclear Reactor Control Room", experience: "E06", x: 1060, y: 655, w: 265, h: 205, asset: "P04_Reactor_Control_Room.png" },
  { id: "P05", title: "Cockpit Experience", experience: "E05", x: 975, y: 25, w: 295, h: 360, asset: "P05_Cockpit_Experience.png" },
  { id: "P06", title: "Maintenance Documentation", experience: "E04", x: 65, y: 685, w: 410, h: 280, asset: "P06_Maintenance_Documentation.png" },
  { id: "P07", title: "Welcome to 2048", experience: "E03", x: 1295, y: 195, w: 180, h: 305, asset: "P07_Welcome_to_2048.png" },
  { id: "P08", title: "AI Process Optimization", experience: "E02", x: 325, y: 495, w: 125, h: 155, asset: "P08_AI_Process_Optimization.png" },
  { id: "P09", title: "Sustainable AI", experience: "E08", x: 1355, y: 640, w: 181, h: 260, asset: "P09_Sustainable_AI.png" },
  { id: "P10", title: "Autonomous Vehicle Trust", experience: "E08", x: 385, y: 375, w: 190, h: 115, asset: "P10_Autonomous_Vehicle_Trust.png" },
  { id: "P11", title: "Mission Planning", experience: "E01", x: 455, y: 690, w: 555, h: 265, asset: "P11_Mission_Planning.png" },
  { id: "P12", title: "AI Misinformation", experience: "E08", x: 1395, y: 500, w: 115, h: 125, asset: "P12_AI_Misinformation.png" }
];

const experiences = [
  {
    id: "E01", number: "01", organization: "U.S. Navy", orgLogo: "assets/orgs/navy.png", kicker: "Design Strategist · Current Practice", year: "2026",
    title: "Supporting Mission Planning",
    challenge: "Designing decision support around complex planning work where information, timing, and operator judgment have to stay aligned.",
    role: "Design Strategist", domain: "Mission Systems", collaboration: "Multidisciplinary team", timeframe: "Placeholder",
    methods: ["Field Research", "Systems Mapping", "Prototyping", "Decision Support"],
    artifactIds: ["P11"], preview: "P11_Mission_Planning.png"
  },
  {
    id: "E02", number: "02", organization: "U.S. Navy", orgLogo: "assets/orgs/navy.png", kicker: "Design Strategist · Current Practice", year: "2026",
    title: "AI Process Optimization",
    challenge: "Finding where software and AI can reduce friction inside a high-consequence organizational process without flattening the human system around it.",
    role: "Design Strategist", domain: "Process + AI", collaboration: "Cross-functional", timeframe: "Placeholder",
    methods: ["Workflow Research", "System Modeling", "AI Concepting", "Service Design"],
    artifactIds: ["P08"], preview: "P08_AI_Process_Optimization.png"
  },
  {
    id: "E03", number: "03", organization: "U.S. Navy", orgLogo: "assets/orgs/navy.png", kicker: "Design Strategist · Futures", year: "2026",
    title: "Welcome to 2048",
    challenge: "Using futures methods to make distant changes in mobility, culture, sports, and entertainment concrete enough to shape decisions today.",
    role: "Sprint Lead", domain: "Futures", collaboration: "Design + technical teams", timeframe: "Placeholder",
    methods: ["Futures", "Scenario Design", "Facilitation", "Artifact Prototyping"],
    artifactIds: ["P07"], preview: "P07_Welcome_to_2048.png"
  },
  {
    id: "E04", number: "04", organization: "U.S. Navy", orgLogo: "assets/orgs/navy.png", kicker: "Design Strategist · Current Practice", year: "2025–2026",
    title: "Reducing Maintenance Delays",
    challenge: "Reframing a maintenance experience across documentation, physical work, software, and process instead of treating each touchpoint as a separate problem.",
    role: "Design Strategist", domain: "Maintenance", collaboration: "Operators + engineers", timeframe: "Placeholder",
    methods: ["Contextual Inquiry", "Process Mapping", "Prototyping", "Service Design"],
    artifactIds: ["P06"], preview: "P06_Maintenance_Documentation.png"
  },
  {
    id: "E05", number: "05", organization: "U.S. Navy", orgLogo: "assets/orgs/navy.png", kicker: "Design Strategist · Human Systems", year: "2025",
    title: "Enhancing the Cockpit Experience",
    challenge: "Improving an operator experience inside a tightly coupled technical system where attention, controls, and system state all compete for limited bandwidth.",
    role: "Design Strategist", domain: "Aviation", collaboration: "Engineering + operators", timeframe: "Placeholder",
    methods: ["Human Factors", "Interface Research", "Concept Testing", "Systems Design"],
    artifactIds: ["P05"], preview: "P05_Cockpit_Experience.png"
  },
  {
    id: "E06", number: "06", organization: "U.S. Navy", orgLogo: "assets/orgs/navy.png", kicker: "Design Strategist · Control Environments", year: "2024–2025",
    title: "Designing Future Control Rooms",
    challenge: "Exploring how watch floors and control rooms can better support shared awareness, handoffs, and high-tempo coordination across physical controls and team environments.",
    role: "Design Strategist", domain: "Control Rooms", collaboration: "Operators + technical SMEs", timeframe: "Placeholder",
    methods: ["Observation", "Interviewing", "Environment Mapping", "Experience Concepting"],
    artifactIds: ["P03", "P04"], preview: "P03_Watch_Floor_Experience.png"
  },
  {
    id: "E07", number: "07", organization: "NASA", orgLogo: "assets/orgs/nasa.png", kicker: "Undergraduate Researcher · NASA-Sponsored", year: "2021–2023",
    title: "Imagining Futuristic Mars Habitats",
    challenge: "Studying ISS operations, astronauts, and flight-control work to inform human-centered concepts for future long-duration Mars habitats.",
    role: "Undergraduate Researcher / Designer", domain: "Space Habitats", collaboration: "NASA-sponsored student research", timeframe: "Multi-year research",
    methods: ["Expert Interviews", "Systems Research", "XR Prototyping", "Mission Design"],
    artifactIds: ["P01"], preview: "P01_ISS_Operations_Research.png"
  },
  {
    id: "E08", number: "08", organization: "Purdue", orgLogo: "assets/orgs/purdue.png", kicker: "Sponsor + Mentor · Student Research", year: "2025–2026",
    title: "Sponsored Research Studio",
    challenge: "Framing emerging-technology questions for student teams — including XR + AI for mission control — and mentoring their path from ambiguity toward testable interventions.",
    role: "Sponsor / Mentor", domain: "Emerging Technology", collaboration: "Purdue student research teams", timeframe: "Academic projects",
    methods: ["Research Framing", "Mentorship", "Critique", "Concept Development"],
    artifactIds: ["P02", "P09", "P10", "P12"], preview: "P02_Deep_Space_Mission_Design.png"
  }
];

const tourSteps = [
  {
    target: "#labStage",
    html: "<strong>Hey — Jackson here.</strong> It's great to meet you. I solve problems in complex systems, creating solutions that work in the moments people need them most. You’re sitting at my desk; the objects around you map to real work, research, and experiments."
  },
  {
    target: ".experience-rail",
    html: "If you want to check out my projects, use <strong>My Experiences</strong> on the right. I’ve kept the work chronological and tagged the context by sponsor so you can orient yourself quickly."
  },
  {
    targets: ".hotspot",
    mode: "hotspots",
    html: "If you want to explore spatially, <strong>hover an object</strong>. Every highlighted artifact is interactive; hover for the scan and project number, then click to open the same project in the sidebar."
  },
];

const dom = {
  body: document.body,
  stage: document.getElementById("labStage"),
  sceneImage: document.getElementById("sceneImage"),
  hotspotLayer: document.getElementById("hotspotLayer"),
  experienceList: document.getElementById("experienceList"),
  railCount: document.getElementById("railCount"),
  indexView: document.getElementById("indexView"),
  inspectorView: document.getElementById("inspectorView"),
  inspectorContent: document.getElementById("inspectorContent"),
  backToIndex: document.getElementById("backToIndex"),
  helper: document.getElementById("interactionHelper"),
  cameraLink: document.getElementById("cameraLink"),
  incomingCall: document.getElementById("incomingCall"),
  callPanel: document.getElementById("callPanel"),
  answerCall: document.getElementById("answerCall"),
  skipCall: document.getElementById("skipCall"),
  tourNext: document.getElementById("tourNext"),
  closeIntro: document.getElementById("closeIntro"),
  replayIntro: document.getElementById("replayIntro"),
  callTranscript: document.getElementById("callTranscript"),
  callTimer: document.getElementById("callTimer"),
  tourProgress: document.getElementById("tourProgress"),
  callPhoto: document.getElementById("callPhoto"),
  callPhotoShell: document.getElementById("callPhotoShell"),
  soundToggle: document.getElementById("soundToggle"),
  welcomeGate: document.getElementById("welcomeGate"),
  enterLab: document.getElementById("enterLab")
};

let selectedExperience = null;
let hoverExperience = null;
let callTimerInterval = null;
let callSeconds = 0;
let tourIndex = 0;
let activeTourTarget = null;
const audioState = {
  musicStarted: false,
  allowMusicAfterCall: false,
  ringtoneAudio: null,
  musicAudio: null,
  talkingAudio: null,
  soundEnabled: localStorage.getItem(SITE_CONFIG.soundEnabledKey) !== "0",
  unlockBound: false,
  musicProgressTimer: null,
  typingToken: 0,
  ringNeedsUnlock: false
};

function experienceById(id) { return experiences.find(e => e.id === id); }
function artifactById(id) { return artifacts.find(a => a.id === id); }

function updateSoundToggleUI() {
  if (!dom.soundToggle) return;
  dom.soundToggle.classList.toggle("is-muted", !audioState.soundEnabled);
  dom.soundToggle.setAttribute("aria-pressed", String(audioState.soundEnabled));
  dom.soundToggle.textContent = audioState.soundEnabled ? "SOUND ON" : "SOUND OFF";
}

function persistSoundPreference() {
  localStorage.setItem(SITE_CONFIG.soundEnabledKey, audioState.soundEnabled ? "1" : "0");
}

function saveMusicProgress() {
  if (audioState.musicAudio && Number.isFinite(audioState.musicAudio.currentTime)) {
    localStorage.setItem(SITE_CONFIG.musicProgressKey, String(audioState.musicAudio.currentTime || 0));
  }
}

function restoreMusicProgress() {
  const saved = Number(localStorage.getItem(SITE_CONFIG.musicProgressKey) || 0);
  return Number.isFinite(saved) && saved > 0 ? saved : 0;
}

function rampVolume(audio, target, duration = 700, pauseWhenDone = false) {
  if (!audio) return Promise.resolve();
  const startVolume = Number.isFinite(audio.volume) ? audio.volume : 1;
  const startTime = performance.now();

  return new Promise(resolve => {
    const step = now => {
      const progress = Math.min(1, (now - startTime) / Math.max(duration, 1));
      audio.volume = startVolume + (target - startVolume) * progress;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        audio.volume = target;
        if (pauseWhenDone) audio.pause();
        resolve();
      }
    };
    requestAnimationFrame(step);
  });
}

function bindAudioUnlock() {
  if (audioState.unlockBound) return;
  audioState.unlockBound = true;

  const unlock = () => {
    if (!audioState.soundEnabled) return;
    if (document.body.classList.contains("is-call-ringing")) {
      startComputerRing();
    } else if (!audioState.musicStarted && dom.incomingCall?.hidden && dom.callPanel?.hidden) {
      startBackgroundMusic();
    }
  };

  ["click", "pointerdown", "keydown", "touchstart"].forEach(evt => {
    window.addEventListener(evt, unlock, { passive: true });
  });
}

function prepareAudioMedia() {
  audioState.ringtoneAudio = new Audio(SITE_CONFIG.callSoundFile);
  audioState.ringtoneAudio.preload = "auto";
  audioState.ringtoneAudio.loop = true;
  audioState.ringtoneAudio.volume = 0.34;
  audioState.ringtoneAudio.load();

  audioState.musicAudio = new Audio(SITE_CONFIG.homeMusicFile);
  audioState.musicAudio.preload = "auto";
  audioState.musicAudio.loop = false;
  audioState.musicAudio.volume = 0;

  audioState.talkingAudio = new Audio(SITE_CONFIG.talkingSoundFile);
  audioState.talkingAudio.preload = "auto";
  audioState.talkingAudio.loop = true;
  audioState.talkingAudio.volume = 0.10;

  audioState.musicAudio.addEventListener("loadedmetadata", () => {
    const restored = restoreMusicProgress();
    const duration = audioState.musicAudio.duration || 0;
    if (restored > 0 && (!duration || restored < duration - 1)) {
      audioState.musicAudio.currentTime = restored;
    }
  });

  audioState.musicAudio.addEventListener("timeupdate", () => {
    if (audioState.musicProgressTimer) return;
    audioState.musicProgressTimer = window.setTimeout(() => {
      saveMusicProgress();
      audioState.musicProgressTimer = null;
    }, 1000);
  });

  audioState.musicAudio.addEventListener("ended", () => {
    localStorage.setItem(SITE_CONFIG.musicProgressKey, "0");
    audioState.musicStarted = false;
  });
}

function toggleSound(forceValue) {
  audioState.soundEnabled = typeof forceValue === "boolean" ? forceValue : !audioState.soundEnabled;
  persistSoundPreference();
  updateSoundToggleUI();

  if (!audioState.soundEnabled) {
    stopComputerRing(true);
    stopTalkingNoise(true);
    stopBackgroundMusic();
    return;
  }

  if (document.body.classList.contains("is-call-ringing")) {
    startComputerRing();
  } else if (dom.incomingCall?.hidden && dom.callPanel?.hidden) {
    startBackgroundMusic();
  }
}

function startComputerRing() {
  if (!audioState.soundEnabled || !audioState.ringtoneAudio) return;
  if (!audioState.ringtoneAudio.paused) return;
  audioState.ringtoneAudio.currentTime = 0;
  audioState.ringtoneAudio.volume = 0.34;
  const attempt = audioState.ringtoneAudio.play();
  if (attempt && typeof attempt.catch === "function") {
    attempt.then(() => {
      audioState.ringNeedsUnlock = false;
    }).catch(() => {
      // Browsers may block audible autoplay until the first user gesture.
      // The global unlock listener retries immediately on that gesture.
      audioState.ringNeedsUnlock = true;
    });
  }
}

function stopComputerRing(immediate = false) {
  if (!audioState.ringtoneAudio) return;
  if (immediate) {
    audioState.ringtoneAudio.pause();
    audioState.ringtoneAudio.currentTime = 0;
    audioState.ringNeedsUnlock = false;
    return;
  }
  rampVolume(audioState.ringtoneAudio, 0, 900, true).then(() => {
    audioState.ringtoneAudio.currentTime = 0;
    audioState.ringtoneAudio.volume = 0.34;
  });
}

function startTalkingNoise() {
  if (!audioState.soundEnabled || !audioState.talkingAudio) return;
  audioState.talkingAudio.currentTime = 0;
  audioState.talkingAudio.volume = 0.10;
  audioState.talkingAudio.play().catch(() => {});
}

function stopTalkingNoise(immediate = false, fadeMs = 320) {
  if (!audioState.talkingAudio) return;
  if (immediate) {
    audioState.talkingAudio.pause();
    audioState.talkingAudio.currentTime = 0;
    return;
  }
  rampVolume(audioState.talkingAudio, 0, fadeMs, true).then(() => {
    audioState.talkingAudio.currentTime = 0;
    audioState.talkingAudio.volume = 0.10;
  });
}

function stopBackgroundMusic() {
  if (!audioState.musicAudio) return;
  saveMusicProgress();
  audioState.musicAudio.pause();
  audioState.musicStarted = false;
}

function startBackgroundMusic({ fadeMs = 6500, delayMs = 0 } = {}) {
  if (!audioState.soundEnabled || !audioState.musicAudio || audioState.musicStarted) return;

  window.setTimeout(() => {
    if (!audioState.soundEnabled || audioState.musicStarted) return;

    const restored = restoreMusicProgress();
    const duration = audioState.musicAudio.duration || 0;
    if (restored > 0 && (!duration || restored < duration - 1)) {
      audioState.musicAudio.currentTime = restored;
    }

    audioState.musicAudio.volume = 0.005;
    const playPromise = audioState.musicAudio.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(() => {
        audioState.musicStarted = true;
        rampVolume(audioState.musicAudio, 0.18, fadeMs);
      }).catch(() => {});
    }
  }, delayMs);
}

function typeTourMessage(html) {
  const token = ++audioState.typingToken;
  const scratch = document.createElement("div");
  scratch.innerHTML = html;
  const plainText = scratch.textContent || "";
  dom.callTranscript.innerHTML = '<p class="call-line is-typing"></p>';
  const line = dom.callTranscript.querySelector(".call-line");
  startTalkingNoise();

  let index = 0;
  const typeNext = () => {
    if (token !== audioState.typingToken || !line) return;
    line.textContent = plainText.slice(0, index + 1);
    const char = plainText[index] || "";
    index += 1;

    if (index >= plainText.length) {
      stopTalkingNoise();
      window.setTimeout(() => {
        if (token === audioState.typingToken && line) line.innerHTML = html;
      }, 100);
      return;
    }

    const delay = /[.!?]/.test(char) ? 85 : /[,;:]/.test(char) ? 45 : 15;
    window.setTimeout(typeNext, delay);
  };

  typeNext();
}

function setTouringState(isTouring) {
  dom.body.classList.toggle("is-touring", isTouring);
}

function createHotspots() {
  dom.hotspotLayer.innerHTML = "";
  artifacts.forEach((artifact, index) => {
    const exp = experienceById(artifact.experience);
    const button = document.createElement("button");
    button.className = "hotspot";
    button.type = "button";
    button.dataset.artifact = artifact.id;
    button.dataset.experience = artifact.experience;
    button.setAttribute("aria-label", `Experience ${exp.number}: ${artifact.title}`);
    button.style.setProperty("--delay", `${250 + index * 105}ms`);
    button.innerHTML = `
      <span class="hotspot__frame" aria-hidden="true"></span>
      <span class="hotspot__marker" aria-hidden="true">${exp.number}</span>
      <span class="hotspot__label" aria-hidden="true">${exp.number} / ${artifact.title}</span>
    `;
    button.addEventListener("mouseenter", () => setHover(artifact.experience));
    button.addEventListener("mouseleave", clearHover);
    button.addEventListener("focus", () => setHover(artifact.experience));
    button.addEventListener("blur", clearHover);
    button.addEventListener("click", () => selectExperience(artifact.experience));
    dom.hotspotLayer.appendChild(button);
  });
  positionScene();
}

function createExperienceList() {
  dom.railCount.textContent = String(experiences.length).padStart(2, "0");
  dom.experienceList.innerHTML = "";
  experiences.forEach(exp => {
    const button = document.createElement("button");
    button.className = "experience-item";
    button.type = "button";
    button.dataset.experience = exp.id;
    button.innerHTML = `
      <span class="experience-item__badge"><img src="${exp.orgLogo}" alt="${exp.organization}" /></span>
      <span class="experience-item__meta">
        <span class="experience-item__kicker">${exp.number} · ${exp.kicker}</span>
        <span class="experience-item__title">${exp.title}</span>
        <span class="experience-item__footer"><span>${exp.organization}</span><span>${exp.year}</span></span>
      </span>
    `;
    button.addEventListener("mouseenter", () => setHover(exp.id));
    button.addEventListener("mouseleave", clearHover);
    button.addEventListener("focus", () => setHover(exp.id));
    button.addEventListener("blur", clearHover);
    button.addEventListener("click", () => selectExperience(exp.id));
    dom.experienceList.appendChild(button);
  });
}

function positionScene() {
  if (!dom.stage || !dom.sceneImage) return;
  if (window.innerWidth <= 820) return;

  const rect = dom.stage.getBoundingClientRect();
  const scale = Math.max(rect.width / BASE_SCENE.width, rect.height / BASE_SCENE.height);
  const renderedWidth = BASE_SCENE.width * scale;
  const renderedHeight = BASE_SCENE.height * scale;
  const offsetX = (rect.width - renderedWidth) / 2;
  const offsetY = (rect.height - renderedHeight) / 2;

  Object.assign(dom.sceneImage.style, {
    width: `${renderedWidth}px`, height: `${renderedHeight}px`, left: `${offsetX}px`, top: `${offsetY}px`
  });

  document.querySelectorAll(".hotspot").forEach(node => {
    const artifact = artifactById(node.dataset.artifact);
    Object.assign(node.style, {
      left: `${offsetX + artifact.x * scale}px`,
      top: `${offsetY + artifact.y * scale}px`,
      width: `${artifact.w * scale}px`,
      height: `${artifact.h * scale}px`
    });
  });

  const camera = { x: 1095, y: 365, w: 170, h: 285 };
  Object.assign(dom.cameraLink.style, {
    left: `${offsetX + camera.x * scale}px`, top: `${offsetY + camera.y * scale}px`,
    width: `${camera.w * scale}px`, height: `${camera.h * scale}px`
  });

  requestAnimationFrame(clampHotspotLabels);
}

function clampHotspotLabels() {
  const stageRect = dom.stage.getBoundingClientRect();
  document.querySelectorAll(".hotspot").forEach(node => {
    node.classList.remove("label-below", "label-align-left", "label-align-right");
    const rect = node.getBoundingClientRect();
    if (rect.top - stageRect.top < 72) node.classList.add("label-below");
    if (rect.left - stageRect.left < 145) node.classList.add("label-align-left");
    if (stageRect.right - rect.right < 145) node.classList.add("label-align-right");
  });
}

function setHover(experienceId) {
  hoverExperience = experienceId;
  syncLinkedStates();
}
function clearHover() {
  hoverExperience = null;
  syncLinkedStates();
}

function syncLinkedStates() {
  document.querySelectorAll(".experience-item").forEach(node => {
    node.classList.toggle("is-linked", node.dataset.experience === hoverExperience);
    node.classList.toggle("is-selected", node.dataset.experience === selectedExperience);
  });
  document.querySelectorAll(".hotspot").forEach(node => {
    node.classList.toggle("is-linked", node.dataset.experience === hoverExperience);
    node.classList.toggle("is-selected", node.dataset.experience === selectedExperience);
  });
}

function selectExperience(experienceId) {
  const exp = experienceById(experienceId);
  if (!exp) return;
  selectedExperience = experienceId;
  dom.helper.classList.add("is-hidden");
  syncLinkedStates();
  renderInspector(exp);
  dom.indexView.classList.remove("is-active");
  dom.inspectorView.classList.add("is-active");
  dom.inspectorView.setAttribute("aria-hidden", "false");
  if (window.innerWidth <= 820) dom.inspectorView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderInspector(exp) {
  const related = exp.artifactIds.map(artifactById).filter(Boolean);
  const artifactLabel = related.length === 1 ? related[0].title : `${related.length} linked artifacts`;
  dom.inspectorContent.innerHTML = `
    <div class="inspector__hero">
      <div class="inspector__org"><img src="${exp.orgLogo}" alt="" /><span>${exp.organization}</span></div>
      <div class="inspector__id">EXPERIENCE ${exp.number} / ${artifactLabel}</div>
      <h2 class="inspector__title">${exp.title}</h2>
      <p class="inspector__challenge">${exp.challenge}</p>
      <div class="inspector__visual">
        <img src="assets/artifacts/${exp.preview}" alt="Scene artifact representing ${exp.title}" />
      </div>
    </div>
    <div class="inspector__body">
      <div class="inspector__facts">
        <div class="fact"><small>ROLE</small><strong>${exp.role}</strong></div>
        <div class="fact"><small>YEAR</small><strong>${exp.year}</strong></div>
        <div class="fact"><small>DOMAIN</small><strong>${exp.domain}</strong></div>
        <div class="fact"><small>COLLABORATION</small><strong>${exp.collaboration}</strong></div>
      </div>
      <p class="inspector__note">Placeholder preview content. Project-specific classification, disclosure boundaries, evidence, and outcomes will be explained inside the project story where they belong.</p>
      <div class="chip-row">${exp.methods.map(method => `<span class="chip">${method}</span>`).join("")}</div>
      <a class="primary-cta" href="project.html?id=${exp.id}">
        <span>OPEN FIELD NOTES</span><span aria-hidden="true">→</span>
      </a>
    </div>
  `;
}

function returnToIndex() {
  dom.inspectorView.classList.remove("is-active");
  dom.inspectorView.setAttribute("aria-hidden", "true");
  dom.indexView.classList.add("is-active");
  selectedExperience = null;
  syncLinkedStates();
}

function bootSequence() {
  dom.body.classList.add("is-booting");
  window.setTimeout(() => dom.body.classList.remove("is-booting"), 2350);
}

function showIncomingCall(force = false) {
  if (!force && localStorage.getItem(SITE_CONFIG.introStorageKey)) return;
  clearTourTarget();
  setTouringState(false);
  stopBackgroundMusic();
  dom.callPanel.hidden = true;
  dom.incomingCall.hidden = false;
  dom.body.classList.add("is-call-ringing");
  startComputerRing();
}

function beginWelcomeSequence() {
  if (!dom.welcomeGate || !dom.enterLab) return showIncomingCall(false);
  dom.enterLab.disabled = true;
  dom.welcomeGate.classList.add("is-entering");

  // Start the media inside the user's click gesture, but keep it silent while
  // the welcome animation completes. This preserves the audio grant in Safari.
  if (audioState.soundEnabled && audioState.ringtoneAudio) {
    audioState.ringtoneAudio.currentTime = 0;
    audioState.ringtoneAudio.volume = 0;
    const unlockAttempt = audioState.ringtoneAudio.play();
    if (unlockAttempt && typeof unlockAttempt.catch === "function") {
      unlockAttempt.catch(() => { audioState.ringNeedsUnlock = true; });
    }
  }

  window.setTimeout(() => {
    dom.welcomeGate.hidden = true;
    showIncomingCall(false);
    if (audioState.soundEnabled && audioState.ringtoneAudio && !audioState.ringtoneAudio.paused) {
      rampVolume(audioState.ringtoneAudio, 0.34, 700);
    }
  }, 5000);
}

function answerCall() {
  stopComputerRing(false);
  dom.body.classList.remove("is-call-ringing");
  dom.incomingCall.hidden = true;
  dom.callPanel.hidden = false;
  audioState.allowMusicAfterCall = true;
  localStorage.setItem(SITE_CONFIG.introStorageKey, "1");
  startCallTimer();
  tourIndex = 0;
  showTourStep();
}

function showTourStep() {
  const step = tourSteps[tourIndex];
  if (!step) return endCall();
  clearTourTarget();
  setTouringState(true);
  dom.body.classList.toggle("tour-hotspots", step.mode === "hotspots");
  dom.tourProgress.textContent = `${tourIndex + 1} / ${tourSteps.length}`;
  dom.tourNext.textContent = tourIndex === tourSteps.length - 1 ? "START EXPLORING" : "NEXT";
  typeTourMessage(step.html);

  if (step.targets) {
    document.querySelectorAll(step.targets).forEach(node => node.classList.add("tour-focus"));
    activeTourTarget = null;
  } else {
    activeTourTarget = document.querySelector(step.target);
    if (activeTourTarget) activeTourTarget.classList.add("tour-focus");
  }
}

function advanceTour() {
  if (tourIndex >= tourSteps.length - 1) return endCall();
  tourIndex += 1;
  showTourStep();
}

function clearTourTarget() {
  audioState.typingToken += 1;
  if (activeTourTarget) activeTourTarget.classList.remove("tour-focus");
  document.querySelectorAll(".tour-focus").forEach(node => node.classList.remove("tour-focus"));
  dom.body.classList.remove("tour-hotspots");
  activeTourTarget = null;
}

function startCallTimer() {
  clearInterval(callTimerInterval);
  callSeconds = 0;
  dom.callTimer.textContent = "00:00";
  callTimerInterval = setInterval(() => {
    callSeconds += 1;
    const mm = String(Math.floor(callSeconds / 60)).padStart(2, "0");
    const ss = String(callSeconds % 60).padStart(2, "0");
    dom.callTimer.textContent = `${mm}:${ss}`;
  }, 1000);
}

function endCall() {
  clearInterval(callTimerInterval);
  stopComputerRing(false);
  audioState.typingToken += 1;
  stopTalkingNoise(false, 900);
  clearTourTarget();
  setTouringState(false);
  dom.callPanel.hidden = true;
  dom.incomingCall.hidden = true;
  dom.body.classList.remove("is-call-ringing");

  // Let the call sound settle as the jazz fades up underneath it.
  if (audioState.allowMusicAfterCall) {
    startBackgroundMusic({ fadeMs: 7200, delayMs: 260 });
  }
}

function skipCall() {
  audioState.allowMusicAfterCall = false;
  audioState.typingToken += 1;
  stopTalkingNoise(true);
  stopComputerRing(true);
  localStorage.setItem(SITE_CONFIG.introStorageKey, "1");
  endCall();
}

function prepareProfessionalHeadshot() {
  if (!dom.callPhoto || !dom.callPhotoShell) return;
  dom.callPhoto.addEventListener("load", () => { dom.callPhotoShell.hidden = false; }, { once: true });
  dom.callPhoto.addEventListener("error", () => { dom.callPhotoShell.hidden = true; }, { once: true });
  dom.callPhoto.src = SITE_CONFIG.professionalHeadshot;
}

function init() {
  if (!dom.stage) return;
  createHotspots();
  createExperienceList();
  prepareProfessionalHeadshot();
  prepareAudioMedia();
  bindAudioUnlock();
  updateSoundToggleUI();
  dom.cameraLink.href = SITE_CONFIG.photographyUrl;
  dom.backToIndex.addEventListener("click", returnToIndex);
  dom.answerCall.addEventListener("click", answerCall);
  dom.skipCall.addEventListener("click", skipCall);
  dom.tourNext.addEventListener("click", advanceTour);
  dom.closeIntro.addEventListener("click", endCall);
  dom.replayIntro.addEventListener("click", () => showIncomingCall(true));
  if (dom.enterLab) dom.enterLab.addEventListener("click", beginWelcomeSequence);
  if (dom.soundToggle) dom.soundToggle.addEventListener("click", () => toggleSound());
  window.addEventListener("resize", positionScene);
  window.addEventListener("beforeunload", saveMusicProgress);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) saveMusicProgress();
  });
  window.addEventListener("keydown", event => {
    if (event.key === "Escape" && !dom.callPanel.hidden) return endCall();
    if (event.key === "Escape" && dom.inspectorView.classList.contains("is-active")) returnToIndex();
  });
  const introAlreadySeen = Boolean(localStorage.getItem(SITE_CONFIG.introStorageKey));
  if (!introAlreadySeen && dom.welcomeGate) dom.welcomeGate.hidden = false;
  else if (!introAlreadySeen) showIncomingCall(false);

  bootSequence();

  if (introAlreadySeen) {
    window.setTimeout(() => {
      if (audioState.soundEnabled) startBackgroundMusic({ fadeMs: 5000 });
    }, 250);
  }
}

init();
