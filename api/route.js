const express = require('express');
const friendList = require('../model/FriendList');

const router = express.Router();

router.post('/friends', (req, res)=>{
    const body = req.body;
    friendList.push(body)
    res.json(friendList)
})

module.exports = router;