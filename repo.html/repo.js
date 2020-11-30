//GET github url

fetch("https://github.com/lariqueza?tab=repositories")
    .then(res => {
      console.log("RESPONSE, WAITING TO PARSE...", res)
      return res.json()
      console.log(data.repository) 
    })
    .then(data => {
        console.log("DATA PARSED...", data)
    })
    .catch(e => {
        console.log("OH NO! ERROR!", e)
    })

//GET git hub api

    const github_data = {
        "token":  "8fdd3a73d008e2053edca6315e7bd29d319400c8",
        "username": "lariqueza"
    }
    
    const body = {
        "query":
        query [{ 
            user(login: ${github_data["username"]}) { 
              issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC}){
                nodes{
                  title,
                  body,
                  closedAt
                }
              }
            }
          }]
    }

// rendering in html

var repo = document.getElementById('repositories');
data.forEach(fucntion(repository) {
    output += ``
    <ul>
    <li>ID: ${repository.id}</li>
    </ul>
})
