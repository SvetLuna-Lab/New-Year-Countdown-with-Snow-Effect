# New Year Countdown – Let it snow!

Small static website that shows the number of days left until New Year and uses
a snow effect on the page (based on `snowstorm.js` or a similar library).

The project is inspired by a training task: deploy a simple New Year countdown
and make it prettier by adding falling snowflakes.

---

## Features

- Countdown to New Year in **days**.
- Minimal, responsive layout (pure HTML + CSS).
- Falling snowflakes effect enabled via a small JavaScript library (`snowstorm.js`).
- Can be deployed to any static hosting (including GitHub Pages).

---

## Project structure

```text
index.html          # main page
css/
  styles.css        # basic styling
js/
  main.js           # countdown logic
  snowstorm.js      # third-party snow effect script (not included here)
Note: due to licensing considerations the actual snowstorm.js file is not
stored in this repository. You can download it from the original source or
replace it with any other snow effect library.


How to run locally
Clone the repository:

bash

git clone https://github.com/<your-username>/new-year-countdown-with-snow.git
cd new-year-countdown-with-snow


Download snowstorm.js (or another snow effect library) and save it to:

text

js/snowstorm.js


Open index.html in your browser (double-click or via a simple HTTP server):

bash

# optional: using Python's simple HTTP server
python -m http.server 8000
# then open http://localhost:8000 in your browser
You should see:

a number showing days left until New Year,

falling snowflakes in the background.


Deployment
You can deploy this static website to any hosting, for example:

GitHub Pages

Netlify

Vercel

a simple Nginx/Apache on a VPS

Make sure that the /js/snowstorm.js file is accessible and correctly
referenced in index.html.


Technologies
HTML

CSS

JavaScript

snow effect library (snowstorm.js or similar)
