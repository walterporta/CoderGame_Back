const {findGameName} = require('./findGameName')

const pagination = async(name, genre, platforms, promotion, sub, page=1)=>{
    let allGames = []
    
    try {
        allGames= await findGameName(name, genre, platforms, promotion, sub)
    } catch (error) {
        return error.error
    }
    let paginationObj ={}
    let i = 1
    let count = 0
    allGames.forEach(element =>{  
            if(count === 0){
                paginationObj[i]= [element]
                count++
            }else if(count !== 10){
                paginationObj[i].push(element)
              count++
            } else{ 
                count = 0
                i++
            }
        });
        let pages = Object.keys(paginationObj)
return {Videogames: paginationObj[page], pages: pages.length}

}

module.exports = {pagination}