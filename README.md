# Jackson Murray — Research Lab Portfolio v2

Static, GitHub Pages-friendly prototype of the Research Lab portfolio concept.

## v2 feedback changes

- Experience numbers now drive the room markers, so scene numbers and the right rail match.
- Current Navy work appears first, followed by the NASA-sponsored Mars-habitat effort and the Purdue sponsored-research studio.
- Space work is split correctly:
  - **E07:** undergraduate NASA-sponsored research using ISS operations to inform future Mars habitats.
  - **E08:** Jackson as sponsor/mentor, including XR + AI for mission control and the other student research projects. The Artemis patch is linked here.
- Navy / NASA / Purdue context appears as PNG marks in the experience rail and Inspector.
- Mission-planning hotspot is smaller so it no longer steals clicks from Maintenance.
- Reactor-control hotspot moves to the lower-right desk control-panel location; the watch-floor effort owns the whiteboard.
- Hotspot labels automatically flip/align so they stay on-screen near the top and right edges.
- Inspector preview images use `object-fit: contain` rather than cropping.
- Small mobile layouts remove the room entirely and become a project-list-first browser.
- Opening Field Notes stays in the same browser tab.
- Photography URL now points to `https://incandescent-valkyrie-5f6126.netlify.app`.
- Primary menu is centered in the top banner.
- The large top-left thesis card is removed. The proposition now lives inside the guided phone-call orientation.
- Incoming call is centered near the top and leads into a four-step UI tour.
- The call supports an optional real headshot; add `assets/professional-headshot.jpg` and it will appear automatically. It is intentionally hidden if that real photo is not present.

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages

No framework or build step is required. Put the folder contents at the repository root (or `/docs`), push, then configure **Settings → Pages → Deploy from a branch**.

## Main places to edit

- `app.js`
  - project chronology / Inspector copy
  - `artifacts` hotspot bounds
  - organization tags/logos
  - phone-call tour copy
- `styles.css`
  - scene interactions, rail, call/tour, mobile behavior
- `project.js`
  - project-page hero content
- `assets/professional-headshot.jpg`
  - optional real photo shown in the call panel

## Background-scene art pass

The scene should reflect these corrections in `assets/lab-scene.png`:

1. correct 3×3 Rubik's cube;
2. reduce the autographed baseball;
3. replace the distorted clapperboard beside Instagram with a blank photo frame;
4. keep only the watch-floor/control-room drawing on the whiteboard;
5. replace the lower-right mechanical/AI-looking contraption with a believable streamlined control-panel fragment using switches, toggles, and buttons;
6. restack the desk books in a physically plausible way.

Hotspot coordinates in `app.js` are already prepared for that composition.


## Audio
The user-provided audio is bundled in `assets/audio/`:
- `iphone-call.mp3` — incoming-call sound
- `jackson-talking.mp3` — talking-text texture during the guided call
- `dig-dis.mp3` — home-screen jazz

The home-screen track stores playback position in localStorage so returning to the portfolio resumes from the prior point rather than restarting. Music only runs on the portfolio landing page and can be disabled from the top-bar sound control.


## v6 interaction updates
- New uploaded Eureka logo is used in the top-left identity slot and as the favicon.
- The object tutorial step illuminates every interactive artifact at once.
- The incoming-call UI/ringtone attempt now starts immediately on first visit. If audible autoplay is blocked by the browser, the first user gesture retries the ringtone.
