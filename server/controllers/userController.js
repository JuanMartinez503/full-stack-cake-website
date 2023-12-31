const {User , Review} = require('../models')

const { signToken } = require('../utils/auth');

module.exports = {
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
          $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });
    
        if (!foundUser) {
          return res.status(400).json({ message: 'Cannot find a user with this id!' });
        }
    
        res.json(foundUser);
      },
      async finAll(req, res) {
        const allUsers =await User.find()
        res.json(allUsers)
      },
    async createUser(req,res){
        try {
            const user = await User.create(req.body)
            const token = signToken(user)
            res.json({user , token})
        } catch (err) {
            res.status(500).json({message:'there was a problem creating the user'})
        }

    }, 
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
    
        const correctPw = await user.isCorrectPassword(body.password);
    
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
        console.log(user);
      },
}