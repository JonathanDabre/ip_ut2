const btn = document.getElementById('loadFileBtn').addEventListener('click', async function(){

    let filePath = 'text.txt' 

    try {
        const response = await fetch(filePath)

        if(!response.ok){
            throw new Error('Response not ok')
        }
        
        const data = await response.text();

        document.getElementById('output').innerHTML = data

    } catch (error) {
        console.log(error)
        
    }
    


})