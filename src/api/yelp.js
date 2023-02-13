import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 
      'Bearer cNCCMA65Z_L8nFgjw5JOUtMvvsxhth_DSBjjPcMsA6E8mFaWfGT1LFcHYcHamBuqWQLf18CtG3weJYtfi_cBx2qXLNAETHNYt7PvBmuumkFVlbbSk0bYbSNpa7LjY3Yx'
  }
});