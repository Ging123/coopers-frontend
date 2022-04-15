const production = true;

const env = {
  api_url:production ? "https://coopers-api.herokuapp.com":"http://localhost:8000"
}

export default env;