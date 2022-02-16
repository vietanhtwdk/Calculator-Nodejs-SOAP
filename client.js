var soap = require("soap");
var url = "http://localhost:8001/wsdl/?wsdl";
// var url = "http://www.dneonline.com/calculator.asmx?wsdl";
var args = { intA: 35, intB: 5 };
soap
  .createClientAsync(url)
  .then((client) => {
    return client.AddAsync(args);
  })
  .then((result) => {
    console.log(result[0]);
  });

soap
  .createClientAsync(url)
  .then((client) => {
    return client.SubtractAsync(args);
  })
  .then((result) => {
    console.log(result[0]);
  });

soap
  .createClientAsync(url)
  .then((client) => {
    return client.MultiplyAsync(args);
  })
  .then((result) => {
    console.log(result[0]);
  });

soap.createClient(url, function (err, client) {
  client.Calculator.CalculatorSoap12.Divide(args, function (err, result) {
    console.log(result);
  });
});
