APIs and resources to extend the app

1. Wikipedia REST API (no key)
   - Summary endpoint: https://en.wikipedia.org/api/rest_v1/#/ (we use `/page/summary/{title}`)
   - Good for: short place descriptions and links to canonical articles.

2. OpenTripMap
   - Docs: https://opentripmap.io/
   - Good for: POIs, geolocation, photos. Free tier requires API key.

3. Google Places API
   - Docs: https://developers.google.com/places
   - Good for: rich place data, photos, reviews. Requires billing/API key.

4. Foursquare Places
   - Docs: https://developer.foursquare.com/reference/place-search
   - Good for: venue search and recommendations. Requires API key.

5. Mapbox / OpenStreetMap Nominatim
   - Nominatim (geocoding): https://nominatim.org/release-docs/latest/api/Overview/
   - Mapbox (maps, geocoding): https://docs.mapbox.com/api/

Deployment hints

- Vercel: drag & drop or connect your GitHub repo, supports `create-react-app` builds.
  https://vercel.com/docs
- Netlify: connect repo and set build command `npm run build`, publish `build/` folder.
  https://docs.netlify.com/
- GitHub Pages: use `gh-pages` package to deploy the `build/` directory.
  https://pages.github.com/

If you want, I can wire any of the above (OpenTripMap, Google Places, Foursquare) into the app — tell me which APIs you prefer and I'll implement an example integration (note: some require API keys which you'll need to provide in environment variables).