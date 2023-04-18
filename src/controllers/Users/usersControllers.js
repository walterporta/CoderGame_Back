const { User } = require('../../db.js')

const createNewUser= async ({name, email, phone, image})=>{
    const newUser = await User.create({name, email, phone, image})
}

module.exports= {createNewUser}
