
function main(){
    let contador = 0
    console.log('\nInício\n')

    while (contador < 10){
       if (eh_volta_par(contador)){
        console.log(`Hello ${contador+1}*`)
       }else{
        console.log(`Hello ${contador+1}`)
       }
       contador += 1
    }
    console.log('\nfim')
    
    function eh_volta_par(contador){
        return (contador+1) % 2 === 0
    }
}

main()