import axios from "axios";

function getRandUsers() {
    return axios.get("https://randomuser.me/api/?results=100&password=upper,lower,number&nat=us");
  };

export default getRandUsers;