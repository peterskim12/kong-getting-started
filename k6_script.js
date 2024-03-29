import http from "k6/http";

export let options = {
  vus: 100,
  duration: "60s"
};

export default function() {
  var random = Math.floor(Math.random() * 100) + 1;
  var resta_params = { headers: { Host: "rest-a.com" } };
  var restb_params = { headers: { Host: "rest-b.com" } };
  var graphqla_params = { headers: { "Host": "graphql-a.com" , "Content-Type": "application/json"} };
  var query = `
 query hello {
    helloGraphql
 }`;
  http.get(`http://localhost:8000/${random}`, resta_params);
  http.get(`http://localhost:8000/${random}`, restb_params);
  http.post(`http://localhost:8000/`, JSON.stringify({query: query}), graphqla_params);
}
