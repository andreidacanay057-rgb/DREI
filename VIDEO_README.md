Background video behavior

- Default behavior: the app attempts to load `public/videos/<slug>.mp4` where `<slug>` is the page title slug (lowercase, non-alphanumerics replaced with `-`).
- Destination videos: when you click "Explore" on a destination, the app will switch to a destination-specific remote video (if available).
- Fallback: if a local or destination video can't be loaded, a remote fallback video is used.

How to add your own videos

1. Place MP4 files under `public/videos/`.
   - Example: `public/videos/travel-planing.mp4` will be used because the HTML title is `travel planing`.
2. Optionally add `default.mp4` to `public/videos/` to serve as a site-wide default.

Controls

- Use the header buttons to toggle the background video on/off and mute/unmute.

Notes

- Browsers block autoplay with sound; videos autoplay muted by default. Unmuting may require a user gesture.
- If you want different videos for each destination, edit `src/App.js` and update the `destinationVideoMap` with your URLs or local `public/videos/` paths.
