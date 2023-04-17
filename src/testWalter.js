const { User, Wallet } = require('./db').models;

(async () => {
    try {
      // Crear un registro en la tabla Wallet
      const wallet = await Wallet.create({
        balance: 1000
      });
  
      // Crear un registro en la tabla User y asociarlo a la wallet creada anteriormente
      const user = await User.create({
        username: 'johndoe',
        password: 'password',
        name: 'John',
        lastname: 'Doe',
        email: 'johndoe@example.com',
        gender: 'male',
        walletId: wallet.id
      });
  
      console.log(user.walletId); // debería mostrar el ID de la wallet creada anteriormente
      console.log(await user.getWallet()); // debería mostrar el objeto Wallet asociado al usuario
  
    } catch (error) {
      console.error('Error:', error);
    } finally {
      // Cerrar la conexión con la base de datos
      await sequelize.close();
    }
  })();