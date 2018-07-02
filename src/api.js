const APIURL = 'https://react-todo-api.herokuapp.com/api/todos/'

export async function getTodos() {
  return fetch(APIURL, {mode: 'cors'})
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   }) 
}

export async function createTodo(val){
  return fetch(APIURL, {
     mode: 'cors',
     method: 'post',
     headers: new Headers({
       'Content-Type': 'application/json',
     }),
    body: JSON.stringify({name: val})
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   })
}

export async function removeTodo(id){
  const deleteURL = APIURL + id;
   return fetch(deleteURL, {
     mode: 'cors',
     method: 'delete'
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   })
}

export async function updateTodo(todo) {
  const updateURL = APIURL + todo._id;
   return fetch(updateURL, {
     method: 'put',
     mode: 'cors',
     headers: new Headers({
       'Content-Type': 'application/json',
     }),
     body: JSON.stringify({completed: !todo.completed})
   })
    .then(resp => {
      if(!resp.ok) {
        if(resp.status >=400 && resp.status < 500) {
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later, server is not responding'};
          throw err;
        }
      }
      return resp.json();
   })
}