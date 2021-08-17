const purchasePrice = document.querySelector("#purchase-price");
const stockQty = document.querySelector('#stock-qty')
const currPrice= document.querySelector('#current-price')
const checkBtn = document.querySelector('#check-btn')
const outputDiv = document.getElementById('output-div')
const outputImg = document.querySelector('img')
const conatinerImg = document.getElementById('container')
const imgUrlProfit = "https://res.cloudinary.com/rahulb4/image/upload/v1629155645/container-bg_n2imi5.jpg"
const imgUrlLoss ="https://res.cloudinary.com/rahulb4/image/upload/v1629157734/bgcontainer_zvypde.jpg"
const bgurlProfit = `url('${imgUrlProfit}')`
const bgurlLoss = `url('${imgUrlLoss}')`
const calculateStockReturn = () =>{
    let p = Number(purchasePrice.value) 
    let q = Number(stockQty.value)
    let c = Number(currPrice.value)
   if(p>0&&q>0){

    if(p>c){
        let loss = ((p-c)*q).toFixed(2)
        let lossPercent = (((p-c)/p)*100).toFixed(2)

       outputDiv.innerText = `Not Stonks!!! Your stocks are at loss of ₹${loss}. That is ${lossPercent}% loss`
       conatinerImg.style.setProperty('background', bgurlLoss)
       conatinerImg.style.setProperty('background-size', 'cover')
    }
    else if(c>p){
        let profit = ((c-p)*q ).toFixed(2)
        console.log(profit)
        let profitPercent = (((c-p)/p)*100).toFixed(2)
    

       outputDiv.innerText = `Stonks!!! Your stocks are at a profit of ₹${profit}. That is ${profitPercent}% gain`
       conatinerImg.style.setProperty('background', bgurlProfit)
       conatinerImg.style.setProperty('background-size', 'cover')
       outputDiv.style.setProperty('color','#fff')
    }
    else{
     outputDiv.innerText = `Neither Loss nor Profit. Your stock is sitting right were you left it`
    }
   }
   else{
       outputDiv.innerText = `Values must be atleast 1`
   }
    

}






checkBtn.addEventListener('click',calculateStockReturn)