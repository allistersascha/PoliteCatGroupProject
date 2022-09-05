const deleteBtn = document.querySelectorAll('.del')
const faveGameItem = document.querySelectorAll('li.faveGameItem')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteFave)
})



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


