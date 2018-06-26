# ffconf 2018

## Todo

- [ ] Update sale date in `/src/config.js` param `onSaleDate`
- [ ] Update API url in `/pages/index.js`
- [ ] Update list of file in `/static/sw.js`
- [ ] Activate service worker in `/pages/_document.js`
- [ ] Image for video header button (whatch now & watch soon)?

## Howto

### Convert fonts into JSON

Source: http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage

Use this repo https://github.com/electricg/localstorage-font, locally in a different folder it's fine, with this `config.json` and the related font files in the same folder:

```json
{
  "google": [
    {
      "name": "Lato",
      "formats": ["400"]
    }
  ],
  "local": [
    {
      "name": "Lollipop",
      "file": "hipopotam_studio_-_mrslollipop-regular-webfont.woff"
    }
  ]
}
```

and then run

```bash
npm install
npm start
```

### Create favicons

Use https://realfavicongenerator.net

- Favicon for iOS - Web Clip: add a solid background, color `#1e81a0`, size as default
- Favicon for Android Chrome: no background color, theme color #1e81a0
- Windows Metro: color is `#1e81a0`
- Safari Pinned Tab: turn your picture into a monochrom icon, threshold as default
- Touch Bar: theme color #ec65a5
- Favicon Generator Options:
  - path: `/static/images/favicons`
  - app name: `ffconf 2018`

Delete the generated `manifest.json`, we already have our own, just check to reference the images correctly.  
Do not use the generated `safari-pinned-tab.svg` but keep the one in the repo.
