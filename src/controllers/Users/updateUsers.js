const { Users } = require('../../db')

const updateUsers = async (sub, { name, rol, banned }) => {
    
    if (!sub || typeof sub !== 'string') {
      throw new Error('Se requiere un ID de usuario válido');
    }
  
   
    const user = await Users.findByPk(sub);
    if (!user) {
      throw new Error('No se encontró ningún usuario con el SUB proporcionado');
    }
  
    
    if (name) {
      if (typeof name !== 'string' || name.trim() === '') {
        throw new Error('El nombre no es válido');
      }
      user.name = name.trim();
    }
    if (rol) {
      if (rol !== 'admin' && rol !== 'client' && rol !== 'seller') {
        throw new Error('El rol no es válido');
      }
      user.rol = rol;
    }
    if (banned !== undefined) {
      if (typeof banned !== 'boolean') {
        throw new Error('El valor de banned no es válido');
      }
      user.banned = banned;
    }
  
    //cpmtrolar esto !!! 
    
    const updatedUser = await user.save();
  
    
    return updatedUser;
  };
  
  module.exports = { updateUsers }