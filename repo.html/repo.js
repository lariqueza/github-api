const github_data = {
    "token":  "8fdd3a73d008e2053edca6315e7bd29d319400c8",
    "username": "lariqueza"
}

const fetch = require("node-fetch");

const body = {
    "query":
    query { 
        user(login: ${github_data["username"]}) { 
          issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC}){
            nodes{
              title,
              body,
              closedAt
            }
          }
        }
      }
}

const baseUrl = "ttps://api.github.com/graphql";

const headers = {
    "content-Type": "application/json",
    Authentication: "bearer "+gitgub_data["token"] 
}

fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
})
then(response => {console.log(JSON.stringify(response))})
.catch(err => console.log(JSON.stringify(err)));
