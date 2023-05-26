const orderBy = (games, order, ascDesc) =>{
    if(order==="name"){
        if (ascDesc === "asc") {
         games= games.videogames.datavalues.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });
        }
        else {
        games= games.videogames.datavalues.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA > nameB) {
              return -1;
            }
            if (nameA < nameB) {
              return 1;
            }
            return 0;
          });
        }
      }
      if(order==="released"){
        if(ascDesc==="asc"){
          games.sort((a,b)=>{
            const dateA = new Date(a.released);
            const dateB = new Date(b.released);
            return dateA - dateB;
          })
        } else{
          games.sort((a,b)=>{
            const dateA = new Date(a.released);
            const dateB = new Date(b.released);
            return dateB + dateA;
          })
        }
      }
    //   console.log(games[0])
    return games
}


module.exports = {orderBy}