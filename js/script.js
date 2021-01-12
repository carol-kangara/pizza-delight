let deliveryPrice=parseInt(250);
function Order(size,crust,){
this.size=size;
this.crust=crust;
this.topping1=200;
this.topping2=250;
this.number=1;
this.numbers=[];
}
Order.prototype.myOrder=function(){
   if(this.Size==regular){
       this.sizePrice +=300;
   } else if(this.size==medium){
       this.sizePrice +=600
   }else if(this.size==large){
       this.sizePrice +=1100;
   }
   if(this.crust==crispy){
       this.crustprice +=200;  
   }
   else if(this.crust==Glutten-free){
       this.crustprice  +=250
   }
   else if(this.crust==stuffed){
       this.crustprice  +=200
   }
   else if(this.crust==sicilian-style){
    this.crustprice  +=300
   }
   else if(this.crust==chicago-style){
    this.crustprice  +=300
   }
   else if(this.crust==New-york-style){
    this.crustprice  +=250
   }
   else if(this.crust==custom-crust){
    this.crustprice  +=200
   }
   for(var i= 1; i < this.Numbers.length; i++){
    pizzaNumber += pizzaNumbers[i];
      }
}

$(document).ready(function(){
    let inputtedSize =$("#size option:selected").val();
    let inputtedCrust=$("#crust option:selected").val();
    let inputtedTopping1=$("#topping1 option:selected").val();
    let inputtedTopping2=$("#topping2 option:selected").val();
    let inputtedNumber=$("#number").val();   
    $("#orders").click(function(event){
        event.preventDefault()

        if(inputtedNumber==1 || inputtedNumber<=1 ){
        alert("your have ordered a: " + inputtedNumber + '' + inputtedSize  + ' ' + inputtedCrust + ' ' + inputtedTopping1 + ' ' + inputtedTopping2  + "pizza!");
        }
        alert("your will pay: " + sizePrice + crustprice + this.topping1 + this.topping1 + ".");
    });

    $("ul#output").append("<li>Your order is " + sizePrice + crustprice + this.topping1 + this.topping1  + "</li>")

});
$(document).ready(function(){
    $("button#deliver1").click(function(){
        $("#mc_embed_signup_deliver").show();
    })
})
function buttonClick(){
    alert ("Thankyou for shopping with us")
};