var express = require("express");
var soap = require("soap");
var myService = {
  Calculator: {
    CalculatorSoap: {
      Add: function (args) {
        console.log(args);
        return {
          AddResult: args.intA + args.intB,
        };
      },
      Subtract: function (args) {
        console.log(args);
        return {
          SubtractResult: args.intA - args.intB,
        };
      },
      Multiply: function (args) {
        console.log(args);
        return new Promise((resolve) => {
          // do some work
          setTimeout(() => {
            resolve({
              MultiplyResult: args.intA * args.intB,
            });
          }, 3000);
        });
      },
      Divide: function (args) {
        console.log(args);
        return {
          DivideResult: args.intA / args.intB,
        };
      },
    },
    CalculatorSoap12: {
      Add: function (args) {
        console.log(args);
        return {
          AddResult: args.intA + args.intB,
        };
      },
      Subtract: function (args) {
        console.log(args);
        return {
          SubtractResult: args.intA - args.intB,
        };
      },
      Multiply: function (args) {
        console.log(args);
        return {
          MultiplyResult: args.intA * args.intB,
        };
      },
      Divide: function (args) {
        console.log(args);
        return {
          DivideResult: args.intA / args.intB,
        };
      },
    },
  },
};

var xml = require("fs").readFileSync("myservice.wsdl", "utf8");

//http server example
// var server = http.createServer(function(request,response) {
//     response.end('404: Not Found: ' + request.url);
// });

// server.listen(8000);
// soap.listen(server, '/wsdl', myService, xml, function(){
//   console.log('server initialized');
// });

//express server example
var app = express();
//body parser middleware are supported (optional)
// app.use(
//   bodyParser.raw({
//     type: function () {
//       return true;
//     },
//     limit: "5mb",
//   })
// );
app.listen(8001, function () {
  //Note: /wsdl route will be handled by soap module
  //and all other routes & middleware will continue to work
  soap.listen(app, "/wsdl", myService, xml, function () {
    console.log("server initialized");
  });
});
