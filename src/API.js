import axios from "axios";

//const BASEURL = "/api/search/"
//const BASEURL = "/api/search/"
const BASEURL = "https://v2.jokeapi.dev/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: async function (query, res) {
    res = axios.get(BASEURL + query);
    return res.then(console.log("requested on API page.")).catch((err) => {
      // console.log(query);
      // console.log(res);
      alert(
        "There is a bug in the Redux State. Try changing the Category in the dropdown!"
      );
      throw err;
    });
  },
  searchall: function (query) {
    return axios
      .get(BASEURL + query)
      .then(({ data }) => data)
      .catch((err) => {
        throw err;
      });
  },
};
