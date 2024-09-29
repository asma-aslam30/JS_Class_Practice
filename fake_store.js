 async function getProduct(){
    var data= await fetch('https://api.escuelajs.co/api/v1/products')
    var response=await data.json()
    console.log(response);

    for(i=0;i<response.length;i++){
        console.log(response[i])
    }
    var produts=document.getElementById('products')
    
    
}
getProduct()