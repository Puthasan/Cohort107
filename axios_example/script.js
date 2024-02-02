axios.get('https://reqres.in/api/users?page=2'), 
console.log('Request Sent');
.then(res => handleData(res.data.data))
.catch(e => console.log(e))


//* POST aka CREATE
axios.post