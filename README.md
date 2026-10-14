# Zip code information

A React page that looks up an Indian postal code. A running copy is at https://zipcode-information-app.netlify.app/

The form is a text field and a Find button. Find requests Zippopotam with the India path `/in/` plus whatever was typed. While that request is in flight, a preloader is shown.

A response shows three lines: the country, and the state and place name of the first place in the list. A failed request clears any previous result and shows “An error occurred while fetching data. Please try again.” Clear Content wipes the field, the result, and that message.

## Run

```bash
npm install
npm start
```

The dev server opens http://localhost:3000.
