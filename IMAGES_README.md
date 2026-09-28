Add real destination photos

To use local images like the two you already have (`src/asset/Boracay.jpg`, `src/asset/Baguio.jpg`), place additional JPG/PNG files in `src/asset/` with these exact filenames:

- `Palawan.jpg`
- `Siargao.jpg`
- `Cebu.jpg`
- `Tagaytay.jpg`

The app imports these files from `src/asset/` and will display them in the destinations grid. If you prefer different filenames, update the imports in `src/App.js` to match.

Spot thumbnails:
- Place spot images under `public/spots/<Destination>/` using the exact names listed in the app (e.g., `public/spots/Boracay/White%20Beach.jpg`).
- Filenames used by the app (per destination):
	- Boracay: `White Beach.jpg`, `Puka Shell Beach.jpg`, `Willys Rock.jpg`, `DMall.jpg`
	- Baguio: `Burnham Park.jpg`, `Mines View Park.jpg`, `Camp John Hay.jpg`, `Strawberry Farm.jpg`
	- Palawan: `El Nido Tour A.jpg`, `Honda Bay.jpg`, `Underground River.jpg`, `Nacpan Beach.jpg`
	- Siargao: `Cloud 9 Surf Break.jpg`, `Magpupungko Rock Pools.jpg`, `Sugba Lagoon.jpg`, `Naked Island.jpg`
	- Cebu: `Kawasan Falls.jpg`, `Magellans Cross.jpg`, `Oslob Whale Sharks.jpg`, `Fort San Pedro.jpg`
	- Tagaytay: `Taal Volcano View.jpg`, `Sky Ranch.jpg`, `Picnic Grove.jpg`, `Puzzle Mansion.jpg`

If a local spot image is present (in `public/spots/...`), the app will use it; otherwise it falls back to the remote Unsplash image already configured.

Notes:
- Keep images reasonably sized (e.g., 1200–2000px wide) to balance quality and bundle size.
- When building for production, large images are copied to the build output; consider optimizing images for faster load.
