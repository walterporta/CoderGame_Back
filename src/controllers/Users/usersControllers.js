const { Users } = require('../../db.js')

const createNewUser= async ({name, password, username})=>{
    const newUser = await Users.create({name, password, username})
}

module.exports= {createNewUser}
