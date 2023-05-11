// const API_KEY = "74d40863ecad5e";

export const getUserLocation = () => {
  return fetch("https://ipinfo.io/json?token=74d40863ecad5e")
    .then((response) => response.json())
    .then((jsonResponse) => jsonResponse.city)
    .catch((error) => console.log(error));
};
