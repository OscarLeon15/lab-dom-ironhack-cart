// let nameOfProduc = document.querySelector(".name");
// let priceOfProduc = document.querySelector(".price").innerHTML;
// let inputOfProduc = document.querySelector(".quantity").value;
// let totalOfProduc = document.querySelector(".productTotal").innerHTML;
// let buttonDivOfProduc = document.querySelector(".redButtonDiv");
// let buttonOfProduc = document.querySelector(".btn-delete");
// let greenBtn = document.querySelector("btn-success");

// function deleteItem(e){}
// function getPriceByProduct(itemNode){}
// function updatePriceByProduct(productPrice, index){}
// function getTotalPrice() { 
//   let multyplier = parseInt(priceOfProduc)* parseInt(inputOfProduc);
//   document.querySelector(".productTotal").innerHTML = `$ ${multyplier}` ;
// }
// function createQuantityInput(){}
// function createDeleteButton(){}
// function createQuantityNode(){}
// function createItemNode(dataType, itemData){}
// function createNewItemRow(itemName, itemUnitPrice){}
// function createNewItem(){}

// window.onload = function(){
//   var calculatePriceButton = document.getElementById('calc-prices-button');
//   var createItemButton = document.getElementById('new-item-create');
//   var deleteButtons = document.getElementsByClassName('btn-delete');

//   // calculatePriceButton.onclick = getTotalPrice;
//   // createItemButton.onclick = createNewItem;

//   for(var i = 0; i<deleteButtons.length ; i++){
//     deleteButtons[i].onclick = deleteItem;
//   }
// };

window.onload = function(){
  //   // var calculatePriceButton = document.getElementById('calc-prices-button');
  //   // var createItemButton = document.getElementById('new-item-create');
  //   // calculatePriceButton.onclick = getTotalPrice;
  //   // createItemButton.onclick = createNewItem;
  
  var deleteButtons = document.getElementsByClassName('btn-delete');
  
    for(var i = 0; i<deleteButtons.length ; i++){
      deleteButtons[i].onclick = deleteItem;
    }
    function deleteItem(e){
      e.currentTarget.parentElement.parentElement.remove();
    }
          let theButton = document.getElementById('calc');
          theButton.onclick = ()=>{
            let total = 0;
            let rows = document.getElementsByClassName('row');
  
            for(let i =0; i < rows.length; i++){
              let theQuantity = Number(document.querySelector(`.row:nth-child(${i+1}) .product-quantity > input`).value);
          console.log(theQuantity)
              let thePriceOfTheProduct = document.querySelector(`.row:nth-child(${i+1}) .product-price > span`).innerHTML;
          console.log(thePriceOfTheProduct + "...yoooooooooooooooo")
              let sanitizedPrice = Number(thePriceOfTheProduct.slice(1));
              // what is slice doing?
          console.log(sanitizedPrice)
              let result = sanitizedPrice * theQuantity
          console.log(result)
              total += result;
          console.log(total + ".....")
  
              let finalResult = "$"+result.toFixed(2);
              let thePlaceToPutThePrice = document.querySelector(`.row:nth-child(${i+1}) .product-total > span`);
              thePlaceToPutThePrice.innerText = finalResult;
            }
            document.querySelector('#totes span').innerHTML = total;
          }
  
  
  let createButton = document.querySelector('.create-btn');
  createButton.onclick = ()=>{
    let newName = document.getElementById('newName').value;
    let newPrice = document.getElementById('newPrice').value
    let actualNewPrice = Number(newPrice).toFixed(2)
    let newRow = document.createElement('div');
    newRow.classList.add('row');
  
    newRow.innerHTML = `
      <div class="product-name">
        <span>
          ${newName}
        </span>
      </div>
      <div class="product-price">
        <span>$${actualNewPrice}</span>
      </div>
      <div class="product-quantity">
        <label>QTY</label>
        <input type="number">
      </div>
      <div class="product-total">
        <span>$0.00</span>
      </div>
      <div>
        <button class="btn btn-delete">Delete</button>
      </div>
    `
  
      let container = document.querySelector('.product-rows-container');
      container.appendChild(newRow);
      document.getElementById('newName').value = ""
  document.getElementById('newPrice').value = ""
      deleteButtons = document.getElementsByClassName('btn-delete');
      deleteButtons[deleteButtons.length - 1].onclick = deleteItem;
    };
  };