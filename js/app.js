
// memory cost  function
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

    totalPrice();

    discountTotalPrice();

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

    totalPrice();

    discountTotalPrice();

    return deliveyPrice.innerText


}

//Total Pricing function
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

// discount calculation function
function discountTotalPrice(){

    const basicTotalPrice = totalPrice()
    let discoutTotalPrice = document.getElementById('final_total')
    discoutTotalPrice.innerText = basicTotalPrice
    return discoutTotalPrice.innerText
}


// memory storage 8gb/16gb selection events

document.getElementById('memory_8gb').addEventListener('click',function(){
    
    //function calling
    const memoryPrice = memoryCost(8)

});

// 16gb memory

document.getElementById('memory_16gb').addEventListener('click',function(){

    //functon calling
    const memoryPrice = memoryCost(16)

});

// memory storage cost selection events

// 256gb default 0
document.getElementById('storage_256gb').addEventListener('click',function(){

    // storageCost() function calling
    const memoryStorageCost = storageCost(256);

});

// 512 gb price $100
document.getElementById('storage_512gb').addEventListener('click',function(){

    //StorageCost() function calling
    const memoryStorageCost = storageCost(512);

});

// 1TB price 180
document.getElementById('storage_1tb').addEventListener('click',function(){

    const memoryStorageCost = storageCost(1);


});

// Delivery Cost Events

//free delivery
document.getElementById('delivery_free').addEventListener('click',function(){

    //deliveryCost() function calling
    const freeDelivery = deliveryCost(false)
    
});

// paid delivery

document.getElementById('delivery_20').addEventListener('click',function(){

    const paidDelivery = deliveryCost(true)
    
});


// promo code discount

document.getElementById('promo__btn').addEventListener('click',function(){

    const promoCodeField = document.getElementById('promo_code_field')
    const promoCode = promoCodeField.value 
    const totalPrice = discountTotalPrice()
    const finalToal = document.getElementById('final_total')

    // checking Promo Code
    if(promoCode == 'stevekaku'){

    // 20% discount
    const discountPrice = parseInt(totalPrice) * .2;
    const discoutTotalAmount = parseInt(totalPrice) - discountPrice
    promoCodeField.value = ''
    finalToal.innerText = discoutTotalAmount 
    
    const successMsg = document.getElementById('success_msg');
    successMsg.style.display = 'block'
    const failMsg = document.getElementById('fail_msg');
    failMsg.style.display = 'none'
    
    }

    // error message
    else{    

    const failMsg = document.getElementById('fail_msg');
    failMsg.style.display = 'block'
    const successMsg = document.getElementById('success_msg');
    successMsg.style.display = 'none'
    promoCodeField.value = ''
    }
  
});


