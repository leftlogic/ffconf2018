# ffconf 2018

## Todo

- [ ] Activate service worker
- [ ] Better quote template, maybe not full html but just json?

## Questions

- when are tickets going on sale?
- list of pages
- fonts?
  - Mrs Lollipop https://www.myfonts.com/fonts/hipopotam/mrs-lollipop/
  - Rubik https://www.fontsquirrel.com/fonts/rubik free
  - Lato https://www.fontsquirrel.com/fonts/lato free
- need the "sold out" version of the buy tickets button image
- need the "watch videos" version of the buy tikets button image
- need the "watch soon" version of the buy tickets button image

## Howto

### Convert fonts into JSON

Source: http://crocodillon.com/blog/non-blocking-web-fonts-using-localstorage

Install npm module [font-store](https://github.com/CrocoDillon/font-store), locally it's fine:

```bash
$ mkdir fontstore && cd $_
$ npm install font-store
```

Now generate the Google Fonts link and run:

```bash
$ ./node_modules/font-store/bin/font-store "https://fonts.googleapis.com/css?family=Anonymous+Pro|Rubik:700"
```

### Create favicons

Use https://realfavicongenerator.net

- Favicon for iOS - Web Clip: add a solid background, color `#ffffff`, size as default
- Favicon for Android Chrome: no background color, theme color #1e81a0
- Windows Metro: use the original, color is `teal`
- Safari Pinned Tab: turn your picture into a monochrom icon, threshold as default
- Touch Bar: theme color #ec65a5
- Favicon Generator Options:
  - path: `/static/images/favicons`
  - app name: `ffconf 2018`

Delete the generated `manifest.json`, we already have our own, just check to reference the images correctly.
