

const API_URL = "https://url-shortener-node-express.herokuapp.com";
const pasteForm = document.querySelector('#paste-form');

// const pasteURL = form.querySelector('paste-url');

pasteForm.addEventListener('submit', async e => {
  e.preventDefault();
  let pasteURL = pasteForm.querySelector('#paste-url').value.trim();
  console.log(pasteURL);
  // (async () => {
  //   const res = await axios.post(`${API_URL}/shorten/${pasteURL}`);
  //   console.log(res);
  // })
  const res = await axios.post(`${API_URL}/shorten/${pasteURL}`);
  console.log(res);
})

// extract shortening-icon.png from backend
// const path = require("path");
// const dir = path.join(__dirname, "public");
// app.use(express.static(dir));