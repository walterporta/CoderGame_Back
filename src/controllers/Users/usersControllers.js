const { User } = require('../../db.js')

const createNewUser= async ({name, email, password, phone, image, interests})=>{
    const newUser = await User.create({name, email, password, phone, image, interests})
}