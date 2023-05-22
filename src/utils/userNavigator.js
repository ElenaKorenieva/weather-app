let locationUser = null;

function success(pos) {
  const { coords } = pos;

  locationUser = {
    lat: coords.latitude,
    lon: coords.longitude,
  };

  //localStorage.setItem('browserLocation', JSON.stringify(locationUser))
}

function errorLocation() {
  locationUser = {
    lat: null,
    lon: null,
  };
}

export const userNavigator = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, errorLocation);
  }
  return locationUser;
};
console.log(userNavigator());
