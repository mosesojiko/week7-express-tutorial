const express = require('express')
const app = express();
let friendList = require('./model/FriendList');

const port = 3000;
app.use(express.json())

app.get('/friends', (req, res) =>{
    res.send(friendList)
})
app.post('/friends', (req, res) =>{
let newFriend = {
    id : friendList.length + 1,
    name: req.body.name,
    age: req.body.age,
    phone: req.body.phone
};
friendList.push(newFriend)
res.json(friendList)
})
console.log(friendList)
app.listen(port, ()=>{
    console.log(`Server running on http://127.0.0.1:${port}`)
})
