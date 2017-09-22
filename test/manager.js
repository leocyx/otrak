var M = module.exports = {}

var leo={id:'leo',password:'123456'}
var snoopy={id:'snoppy',passowrd:'123456'}
var usermap={
    'leo':leo,
    'snoopy':snoopy,
    }
M.login = function(id, password){
    var user=usermap[id]
    if(user.password===password){
        return user
    }
}
var user1 = M.login('leo','1234')
console.log("user1=%j",user1)
var user2 = M.login('leo','123456')
console.log("user2=%j",user2)
