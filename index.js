const API_URL = "https://url-shortener-node-express.herokuapp.com";
const content = document.querySelector('.content');
const pasteForm = document.querySelector('.fullURL');
const verifyForm = document.querySelector('.verifyURL');

pasteForm.addEventListener('submit', async e => {
  // store text input
  e.preventDefault();
  let pasteURL = pasteForm.querySelector('#paste-url').value.trim();
  
  // POST method to API endpoint
  const res = await axios.post(`${API_URL}/shorten/${pasteURL}`);
  const code = content.querySelector('.code');
  code.innerText = res.data;
  if(code.style.display === "none") code.style.display = "block";
})

verifyForm.addEventListener('submit', async e => {
  // store text input
  e.preventDefault();
  let verifyURL = verifyForm.querySelector('input').value.trim();

  // GET method to API endpoint
  const res = await axios.get(`${API_URL}/${verifyURL}`);
  const link = verifyForm.querySelector('a');
  link.innerText = res.data;
  link.setAttribute('href', res.data);
  if(link.style.display === "none") link.style.display = "block";
})