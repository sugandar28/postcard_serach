import axios from "axios";

export default axios.create({
  baseURL: "https://digitalapi.auspost.com.au/",

  headers: {
    Authorization: "auth-key d782c664-fdd8-4b5d-b64c-99c181cd1a67"
  }
});
