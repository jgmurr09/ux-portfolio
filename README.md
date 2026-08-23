# Jackson Murray — Research Lab Portfolio 
- All projects are present but standing by to update the contents inside. 

## Run locally

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## GitHub Pages

No framework or build step is required. Put the folder contents at the repository root (or `/docs`), push, then configure **Settings → Pages → Deploy from a branch**.


## Audio
The user-provided audio is bundled in `assets/audio/`:
- `iphone-call.mp3` — incoming-call sound
- `jackson-talking.mp3` — talking-text texture during the guided call
- `dig-dis.mp3` — home-screen jazz

The home-screen track stores playback position in localStorage so returning to the portfolio resumes from the prior point rather than restarting. Music only runs on the portfolio landing page and can be disabled from the top-bar sound control.
