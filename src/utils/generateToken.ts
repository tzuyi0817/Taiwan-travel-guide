import axios from 'axios';

const ajax = axios.create({
  baseURL: import.meta.env.VITE_TOKEN_URL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export default async function generateToken() {
  const token = localStorage.getItem('guide_token');

  if (token) return;
  const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env;
  const postData = {
    grant_type: 'client_credentials',
    client_id: VITE_CLIENT_ID,
    client_secret: VITE_CLIENT_SECRET,
  };
  const { data } = await ajax.post('/token', postData);

  localStorage.setItem('guide_token', data.access_token);
}
