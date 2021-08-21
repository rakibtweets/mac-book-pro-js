// memory cost 
function memoryCost(memorySpace){

    const itemMemory = document.getElementById('extra_memory')
    let memoryCost = parseInt(itemMemory.innerText)
    if(memorySpace == 8){

        memoryCost = 0
    }
    if(memorySpace == 16){
        memoryCost = 180
    }
    itemMemory.innerText = memoryCost

    totalPrice()
    discountTotalPrice()


    return itemMemory.innerText

}

// memory storage cost

function storageCost(storage){
    const itemStorage = document.getElementById('extra_storage')
    let storageCost = parseInt(itemStorage.innerText)
    if(storage == 256){

        storageCost = 0
    }
    if(storage == 512){
        storageCost = 100
    }
    if(storage == 1){
        storageCost = 180
    }

    itemStorage.innerText = storageCost

    totalPrice()
    discountTotalPrice()


    return itemStorage.innerText

}


// deliver Cost function

function deliveryCost(isCharging){
    const deliveyPrice = document.getElementById('delivery_cost')
    let deliverCharge = parseInt(deliveyPrice.innerText) 
    if(isCharging == false){
        
        deliverCharge = 0
    }
    if(isCharging == true){
        deliverCharge = 20
    }

    deliveyPrice.innerText = deliverCharge

    totalPrice()
    discountTotalPrice()


    return deliveyPrice.innerText


}

//Total Price function

function totalPrice(){

    const itemMemory = document.getElementById('extra_memory')
    let memoryCost = parseInt(itemMemory.innerText)
    const itemStorage = document.getElementById('extra_storage')
    let storageCost = parseInt(itemStorage.innerText)
    const deliveyPrice = document.getElementById('delivery_cost')
    let deliverCharge = parseInt(deliveyPrice.innerText) 
     
    const basePrice = 1299
    const totalPrice = memoryCost + storageCost + deliverCharge + basePrice;
    let totalPriceText = document.getElementById('total_price')
    totalPriceText.innerText = totalPrice 


    return totalPriceText.innerText  ;
}

//
function discountTotalPrice(){
    const basicTotalPrice = totalPrice()

    let discoutTotalPrice = document.getElementById('final_total')
    discoutTotalPrice.innerText = basicTotalPrice
    return discoutTotalPrice.innerText
}


// memory storage 8gb/16 gb

document.getElementById('memory_8gb').addEventListener('click',function(){
    /* const itemMemory = document.getElementById('extra_memory')
    let memoryCost = parseInt(itemMemory.innerText)
    memoryCost = 0
    itemMemory.innerText = memoryCost */
    const memoryPrice = memoryCost(8)

})

// 16gb memory

document.getElementById('memory_16gb').addEventListener('click',function(){

    const memoryPrice = memoryCost(16)

})

// memory storage cost

// 256gb default 0
document.getElementById('storage_256gb').addEventListener('click',function(){

    /* const itemStorage = document.getElementById('extra_storage')
    let storageCost = parseInt(itemStorage.innerText)
    storageCost = 0
    itemStorage.innerText = storageCost */

    const memoryStorageCost = storageCost(256);

})

// 512 gb price $100
document.getElementById('storage_512gb').addEventListener('click',function(){

    const memoryStorageCost = storageCost(512);

})

// 1 TB price 180
document.getElementById('storage_1tb').addEventListener('click',function(){

    const memoryStorageCost = storageCost(1);


})

// Delivery Cost

//free delivery
document.getElementById('delivery_free').addEventListener('click',function(){
    
   /*  const deliveyPrice = document.getElementById('delivery_cost')
    let deliverCharge = parseInt(deliveyPrice.innerText) 
    deliverCharge = 0
    deliveyPrice.innerText = deliverCharge */

    const freeDelivery = deliveryCost(false)
    
})

// paid delivery

document.getElementById('delivery_20').addEventListener('click',function(){

    const paidDelivery = deliveryCost(true)
    
})


// promo code discount

document.getElementById('promo__btn').addEventListener('click',function(){
    const promoCodeField = document.getElementById('promo_code_field')
    const promoCode = promoCodeField.value 
    const totalPrice = discountTotalPrice()

    if(promoCode == 'stevekaku'){

        var discountPrice = parseInt(totalPrice) * .2;
       
    }
    else{
        alert('Invalid Promocode')
    }
    promoCodeField.value = ''
    const discoutTotalAmount = parseInt(totalPrice) - discountPrice
    const finalToal = document.getElementById('final_total')

    finalToal.innerText = discoutTotalAmount
    
    
    
})

