# Wael Elhusseni, Data Analyst Portfolio

## Folder structure
```
portfolio/
├── index.html   page structure, About, Skills, Contact text
├── styles.css   all styling
├── data.js      PROJECTS and CERTS lists (edit most content here)
├── script.js    renders cards, modal, mobile menu, dynamic year
└── assets/      optimized .webp images
```

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Publish online (free)
- **Netlify:** go to app.netlify.com/drop and drag the `portfolio` folder in.
- **GitHub Pages:** create a repo, upload these files, then Settings → Pages → deploy from `main` / root.

## Update content
- **Project screenshot:** save an image in `assets/` (e.g. `pizza.webp`, or .png/.jpg), then in `data.js` set the project's `img` and add the path to `gallery`.
- **Project links:** fill `links:{live, linkedin, file, github}` in `data.js`. Empty links show "link to be added".
- **Certificates:** add an object to `CERTS` in `data.js` with title, org, date, img, and a verification link (or "").
- **GitHub:** edit the placeholder in the Contact section of `index.html`.

## Missing items checklist
- [ ] Pizza Place dashboard screenshot (none was supplied, so a placeholder is shown)
- [ ] Links: LinkedIn post URLs, live dashboards or .pbix/.xlsx files, GitHub repos
- [ ] GitHub profile URL
- [ ] Verification links for the Microsoft and Benghanem certificates (optional)
- [ ] Confirm the IBM Credly link in `data.js` against your certificate
- [ ] DEPI certificate once the program ends in January 2027
- [ ] Optional: a Sales & Budget dashboard (Aspen/Carlota/Quad) was supplied but not requested as a project, so it is not on the site

## Content audit
No wording describes you as a student; no invented employment, statistics, expert levels, or proficiency scores; DEPI is shown as in progress; only supplied certificates appear.
