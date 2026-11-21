# Wilberforce Mubiru — Print Production Portfolio

A responsive portfolio presenting Wilberforce Mubiru’s screen-printing and press-production experience, selected work, production process, and role-related profile. The site’s primary focus is screen printing, press operation, quality inspection, and production support. It also includes a section for additional design and technical projects.

## Browse the site

- **Home** — `index.html`: portfolio overview and featured work
- **Print Production** — `graphics.html`: searchable project gallery, category filters, image previews, and production process
- **About** — `about.html`: production profile, skills, and work readiness
- **Additional Skills** — `web-mobile.html`: supporting web and mobile projects
- **Contact** — `contact.html`: contact and availability details
- **Print-ready CV** — `Wilberforce_Mubiru_Print_Production_CV.html`: standalone CV with a print / save-as-PDF option

## Technology

This is a static website built with HTML, CSS, and vanilla JavaScript. Project and gallery content is provided in `assets/js/data.js`; shared page behaviour is in `assets/js/site.js`. Stylesheets, images, and other assets are stored under `assets/`.

There is no package installation or build step.

## Run locally

From the repository root, start a local web server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a browser. A local server is recommended so that page assets and links work consistently.

## Publish

The site can be served by any static web host. For GitHub Pages, configure the repository’s Pages settings to publish from the `main` branch and the repository root. No build command is required.
