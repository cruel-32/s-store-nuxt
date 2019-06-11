const userModel = require('../../model/users');

const getUsers = async (req, res, next) =>{
    console.log('getUsers req.query : ', req.query);
    const data = await userModel.find();
    console.log('getUsers data : ', data);
    userModel.find().then(users=>{
        res.json(users)
    }).catch(e=>{
        res.json([
            {name:'csh'},
            {name:'sej'},
            {name:'koongsil'},
        ]);
    })
}

const createUser = (req, res, next)=>{
    userModel.create({
        email : query.email,
        name : query.name,
        auth : 5,
        confirm : 'N',
        level : 1,
        joinDate : new Date(),
        deleted : 'N',
        _page_ : '',
    })
}

module.exports = {
    getUsers,
    createUser
};