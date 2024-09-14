// Response service so that the model of Response remains same for all apis


const _ = require("lodash");
let success = (response, data, message) => {
    let successResponse = {
      status: 200,
      message: message,
    };
    let status = 200;
    if (data) {
      _.extend(successResponse, {
        data: data,
      });
    }
    response.status(status).json(successResponse);
  };

  let requestfailure = (response, err, jsonerr = null) => {
    let status = 400; 
  
    if (typeof err === "object" && err.message) {
      message = err.message;
    } else {
      message = err;
    }
  
    response.status(status).json({
      status: 400,
      systemfailure: false,
      message: message,
      jsonerr: jsonerr
    });
  };

  module.exports = {
    success: success,
    requestfailure: requestfailure,
  };
  