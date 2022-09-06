const deleteBtn = document.querySelectorAll('.del')
const faveGameItem = document.querySelectorAll('li.faveGameItem')


// here is where Allister's Array object from faveGameItems should go :

Array.from(faveGameItem).forEach((el)=>{
    el.addEventListener('click', createFave)
})
//and the put one idk if it needs to be different but we'll find out 
Array.from(faveGameItem).forEach((el)=>{
    el.addEventListener('refresh', getFaves)
})

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteFave)
})



// here is where Allister attempts to write the function that posts the new faveGameItem to the DOM via .ejs:

async function createFave(){
    const gameId = this.parentNode.dataset.id
    try{
        const response = await fetch('favorites/createFave', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'gameIdFromJSFile': gameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

//aaaand the put function
async function getFaves(){
    const gameId = this.parentNode.dataset.id
    try{
        const response = await fetch('favorites/createFave', 'refresh', { //i really don't know if I'm writing this part correctly?
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'gameIdFromJSFile': gameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


async function deleteFave(){
    const gameId = this.parentNode.dataset.id
    try{
        const response = await fetch('favorites/deleteFave', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'gameIdFromJSFile': gameId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


