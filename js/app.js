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

    return itemStorage.innerText

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

