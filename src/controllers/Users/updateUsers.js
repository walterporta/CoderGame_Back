const { Users } = require('../../db');

const updateUsers = async (sub, { name, rol, banned, deleted }) => {
  if (!sub || typeof sub !== 'string') {
    throw new Error('A valid user ID is required');
  }

  const user = await Users.findByPk(sub);
  if (!user) {
    throw new Error('No user found with the provided SUB');
  }

  if (name) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('The name is invalid');
    }
    user.name = name.trim();
  }

  if (rol) {
    if (rol !== 'admin' && rol !== 'client' && rol !== 'seller') {
      throw new Error('The role is invalid');
    }
    user.rol = rol;
  }

  if (banned !== undefined) {
    if (typeof banned !== 'boolean') {
      throw new Error('The value of banned is not valid');
    }
    user.banned = banned;
  }

  if (deleted !== undefined) {
    if (typeof deleted !== 'boolean') {
      throw new Error('The value of deleted is invalid');
    }
    user.deleted = deleted;
  }

  const updatedUser = await user.save();
  return updatedUser;
};

module.exports = { updateUsers };
