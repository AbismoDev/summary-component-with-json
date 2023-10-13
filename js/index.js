fetch("./data.json").then(response => {return response.json()}).then(data => {
    data.map(data =>{
        let categoria = data.category
        let pontuacao = data.score
        let icon = data.icon

        let write = document.getElementById('json')

        switch(categoria){
            case 'Reaction':
                write.innerHTML += 
                `<div class="container-espec reaction">
                    <div class="espec">
                        <img src="${icon}" alt="Reaction" title="Reaction">
                        <p>${categoria}</p>
                    </div>
                    <div class="espec-num">
                        <p><strong>${pontuacao}</strong> / 100</p>
                    </div>
                </div>`
                break;
            case 'Memory':
                write.innerHTML += 
                `<div class="container-espec memory">
                    <div class="espec">
                        <img src="${icon}" alt="Reaction" title="Reaction">
                        <p>${categoria}</p>
                    </div>
                    <div class="espec-num">
                        <p><strong>${pontuacao}</strong> / 100</p>
                    </div>
                </div>`
                break;
            case 'Verbal':
                write.innerHTML += 
                `<div class="container-espec verbal">
                    <div class="espec">
                        <img src="${icon}" alt="Reaction" title="Reaction">
                        <p>${categoria}</p>
                    </div>
                    <div class="espec-num">
                        <p><strong>${pontuacao}</strong> / 100</p>
                    </div>
                </div>`
                break;
            case 'Visual':
                write.innerHTML += 
                `<div class="container-espec visual">
                    <div class="espec">
                        <img src="${icon}" alt="Reaction" title="Reaction">
                        <p>${categoria}</p>
                    </div>
                    <div class="espec-num">
                        <p><strong>${pontuacao}</strong> / 100</p>
                    </div>
                </div>`
                break;
            default:
                alert('Não deu ;-;')
                break;
        }
    })    
})