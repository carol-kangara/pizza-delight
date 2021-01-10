//bussiness logic
function Order(size,crust,topping,number){
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.number=number;
}
//user interface
$(document).ready(function(){
    switch (size) {
        case size = "regular":
            if (crust === "cripsy") {
                totalPrice = (300 * number);
            } else if (crust === "Glutten-free") {
                totalPrice = (250 * number);
            } else if (crust === "stuffed") {
                totalPrice = (300 * number);
            } else if (crust === "sicilian style") {
                totalPrice = (250 * number);
            } else if (crust === "Chicago-style deep dish") {
                totalPrice = (250 * number);
            } else if (crust === "New york style") {
                totalPrice = (350 * number);
            }
            else {
                totalPrice = (350 * number);
            }
            break;
        case size = "medium":
            if (crust === "cripsy") {
                totalPrice = (600 * number);
            } else if (crust === "Glutten-free") {
                totalPrice = (5500 * number);
            } else if (crust === "stuffed") {
                totalPrice = (600 * number);
            } else if (crust === "sicilian style") {
                totalPrice = (550 * number);
            } else if (crust === "Chicago-style deep dish") {
                totalPrice = (550 * number);
            } else if (crust === "New york style") {
                totalPrice = (650 * number);
            }
            else {
                totalPrice = (750 * number);
            }
            break;
        case size = "large":
            if (crust === "cripsy") {
                totalPrice = (1100 * number);
            } else if (crust === "Glutten-free") {
                totalPrice = (1000 * number);
            } else if (crust === "stuffed") {
                totalPrice = (1100 * number);
            } else if (crust === "sicilian style") {
                totalPrice = (1000 * number);
            } else if (crust === "Chicago-style deep dish") {
                totalPrice = (1000 * number);
            } else if (crust === "New york style") {
                totalPrice = (1150 * number);
            }
            else {
                totalPrice = (1200 * number);
            }
            break;
    }
    switch (topping) {
        case topping = "spicy salami":
            bill= totalPrice + 100;
            break;
        case topping = "Caramelised onion":
            bill = totalPrice + 120;
            break;
        case topping = "zucchini":
            bill = totalPrice + 100;
            break;
        case topping = "BBQ chicken":
            bill = totalPrice + 120;
            break;
        case topping = "BBQ Beef":
            bill = totalPrice + 100;
            break;
        case topping = "shredded chicken":
            bill = totalPrice + 120;
            break;
        case topping = "red onins":
            bill = totalPrice + 100;
            break;
        case topping = "smoked paprika":
            bill = totalPrice + 120;
            break;
        case topping = "spinach":
            bill = totalPrice + 120;
            break;
        case topping = "capsicum":
            bill = totalPrice + 150;
            break;        
        case topping = "sliced jalapenos":
            bill = totalPrice + 150;
            break;
        case topping = "hot sauce":
            bill = totalPrice + 120;
            break;
        case topping = "beef mince":
            bill = totalPrice + 120;
            break;
    }
        
});