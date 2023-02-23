

function gratuity(billAmount, percentage) {
    return (billAmount * percentage) ;
}
console.log(gratuity(100, 0.2));


function totalWithGrat(billAmount, percentage) {
    
    return (billAmount + gratuity(billAmount, percentage)) ;
    
}
console.log(`Your total including gratuity is: ${totalWithGrat(100, 0.2)}`)