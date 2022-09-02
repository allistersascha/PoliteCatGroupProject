const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})



async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


