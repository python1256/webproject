const { UserInputError } = require("apollo-server-express");
//const { get }   = require("axios").default;
const { post } = require("request");
const { promisify } = require("util");
require("dotenv").config();
const postAsync = promisify(post);
async function getShortLivedAccessToken() {
    // sending the request.
    let { body, statusCode } = await postAsync({
      url: `https://api.instagram.com/oauth/access_token `,
      formData: {
        client_id: process.env.INSTAGRAM_APP_ID,
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        redirect_uri: "https://paru12.herokuapp.com/",
        code: process.env.AUTHORIZATION_CODE,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "multipart/form-data",
        host: "api.instagram.com",
      },
    });
  
    // getting the response.
    let response = JSON.parse(body);
  
    // checking the status code for error.
    if (statusCode !== 200) {
      let error_message = response.error_message;
      // if error exists, sending the error.
      return new UserInputError(error_message);
    }
  
    // if no error exists, returning the response.
    return response;
  }
  module.exports = {
    getShortLivedAccessToken,
  };