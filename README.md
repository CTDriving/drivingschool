# drivingschool

Static website for a Driving School.

## Files

- `index.html` – page markup
- `style.css` – styles
- `main.js` – menu, details toggles, reviews slider, map
- `files/` – images, logo, favicon, PDF

## Dependencies

Loaded from CDN, no build step:

- Leaflet 1.9.4 (map)
- Swiper 11 (reviews slider)

## Local preview

Open `index.html` in a browser, or run a local server:

```
python3 -m http.server
```

## Updating reviews

Edit the `reviews` array in `main.js`.