function Order(size,crust,topping1,topping2,number,delivery){
this.size=size;
this.crust=crust;
this.topping1=topping1;
this.topping2=topping2;
this.number=number;
this.delivery=delivery;
}
// function Final (crustPrice,toppingsPrice , deliveryPrice ) {;
//     this.crustPrice=crustPrice;
//     this.toppingsPrice=toppingsPrice;
//     this.deliveryPrice=deliveryPrice;
//     this.number=number;
    
   
// };
$(document).ready(function(){
    let deliveryPrice=parseInt(250);
    let toppingPrice=parseInt(200);
    let inputtedSize =$("#size option:selected").val();
    let inputtedCrust=$("#crust option:selected").val();
    let inputtedTopping1=$("#topping1 option:selected").val();
    let inputtedTopping2=$("#topping2 option:selected").val();
    let inputtedNumber=$("#number").val();
    let newOrder = new Order( inputtedSize ,inputtedCrust,inputtedTopping1,inputtedTopping2,inputtedNumber);
     
    $("#orders").click(function(){
        if(inputtedNumber=1){
        alert("your have ordered a: " + inputtedSize  + ' ' + inputtedCrust + ' ' + inputtedTopping + ' ' +inputtedNumber + "pizza!");
        alert("The total cost is" +sizePrice.Order+ '' +crustPrice.Order + ''+ deliveryPrice  + ''+ toppingPrice + ".");
        }
    })

    

});