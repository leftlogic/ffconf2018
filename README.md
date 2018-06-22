# ffconf 2018

## Todo

- [x] Add border to quote image
- [x] Remove Rubik from font file
- [x] Image for sold out header button
- [x] Add white border to the favicons
- [ ] Optimize images
- [ ] Text for "on sale text"
- [ ] Test on iOS
- [ ] Test on MS Edge
- [ ] Test on Firefox
- [ ] Test on mobile
- [ ] Activate service worker
- [ ] Image for video header button (whatch now & watch soon)?
- [ ] Do better data parsing for sessions
- [ ] Better quote template, maybe not full html but just json?
- [ ] Try to fix next-sass module

## Sponsors

platinum (2 available), Gold (4 in total including American Express, Google, Financial Times confirmed) Day sponsors 2 including brandwatch), micro (JS Bin)

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
