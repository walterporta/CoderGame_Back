const { Users } = require('../../db.js')

const createNewUser= async ({name, email, phone, image})=>{
    const newUser = await Users.create({name, email, phone, image})
}

module.exports= {createNewUser}
