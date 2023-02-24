function gratuity(billAmount, percentage) {
    return (billAmount * percentage) ;
}
console.log(gratuity(100, 0.2));


function totalWithGrat(billAmount, gratuityFunction) {
    
    return (billAmount + gratuityFunction) ;
    
}
console.log(`Your total including gratuity is: ${totalWithGrat(100, gratuity(100,0.2))}`)