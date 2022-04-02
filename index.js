
const btnMenu = document.querySelector('#botao-responsivo')
const opcaoMenu = document.querySelector('header nav div#cabecalho')

btnMenu.addEventListener('click', () => {
    
    //opcaoMenu.classList.toggle('active')
    //btnMenu.classList.toggle('active')
    
    if (opcaoMenu.classList.toggle('active')) {
       
        opcaoMenu.style.height = '100vh'; 
        //btnMenu.classList.add('remove-icon')
        btnMenu.classList.toggle('active')
        
    }else {
        opcaoMenu.style.height = '0' 
            //btnMenu.classList.add('remove-icon')
            
        
        
        

    }
    //opcaoMenu.classList.toggle('active')
    
    
}) 

opcaoMenu.addEventListener('click', () => {
    opcaoMenu.style.height = '0'
})
