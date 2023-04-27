const {Promotions}= require('../../db')
const {Op} = require('sequelize')

const postDiscountGame = async (idVideogame, dueDate, discount)=>{
    console.log(idVideogame,dueDate,discount)
    const currentDate = new Date()
    const newDueDate = new Date (dueDate)
    if(newDueDate<currentDate) throw new Error('expiration date has to be after today')
    const findVideogame = await Promotions.findOne({where:{dueDate:{
        [Op.gt]: currentDate
    }, VideogameId:idVideogame
}})
    if(findVideogame) throw new Error('This game already has a designated promotion promocion designada')
    
    const promotion = await Promotions.create({VideogameId:idVideogame, dueDate:newDueDate, discountPorcentage:discount})

    
    return promotion

}


module.exports = { postDiscountGame }
