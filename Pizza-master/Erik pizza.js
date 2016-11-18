class pizza{
  //type constructor below


constructor (s,mT,vT){
  this.size = s;
  this.meatToppings = mT;
  this.veggieToppings = vT;
}
  //type instance functions below

sizecost(){
  if (this.size = "S"){
    return 7.99;
  }
  else if (this.size = "M"){
    return 9.99;
  }
   else if (this.size = "L"){
  return 12.99;
  }
   else if (this.size = "XL"){
  return 15.99;
}
}

toppingCost(top){
  if (this.top == "meat"{
  return .99*this.meatToppings.length;)
}
else if (this.top == "veggie"{
return .50*this.veggieToppings.length;)
}
}

price(){
  return (this.sizeCost()+this.meatToppingsCost("meat")+this.veggieToppingsCost("veggie");
}

addTopping(toptype,newtype){
  if (toptype == "meat"){
    thismeatToppings.push(newTop);
  else if (toptype == "veggie"){
    this.veggieToppings.push(newTop);
  }
}

  //type class functions below

static promotionalDeal(pizza,percent){
  let z=100-percent
  d=d/100
return pizza.price()*z;
}

static
