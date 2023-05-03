// 30860486-2bc10cd6f698c5db7e18c3090
import axios from "axios";

const API_KEY = "30860486-2bc10cd6f698c5db7e18c3090";

export const getPicturesApi = async (city = "weather") => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${city}&image_type=photo&pretty=true`
  );
  return data;
};
