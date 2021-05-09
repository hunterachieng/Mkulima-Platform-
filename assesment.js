class Mkulima{
    constructor(){ 
    this.farms = [];
    this.products = [];
    this.orders = [];
    this.vendor = [];
}

addVendor( id, storeName, phoneNumber){
    return this.vendor.push(id, storeName, phoneNumber);
}
addFarm (farmId, name,farmer,phone,address){
    return this.farms.push({farmId,name,farmer,phone,address});
}
removeFarm(farmId){
    let farm = this.farms.find(farm => farm.farmId === farmId);
    return delete this.farms[farm];
}
updateFarm(farmId,name,farmer,phone,address){
     
    this.farms.farmId = farmId;
    this.farms.name = name;
    this.farms.farmer = farmer;  
     this.farms.phone= phone;
     this.farms.address = address;
     var farmsUpdates = {farmId,name,farmer,phone,address};
     return farmsUpdates;
   
 }
getFarm(farmId){

    let farm = this.farms.find(farm => farm.farmId === farmId);
    return farm;
}
addProduct(productId,name,price){
    return this.products.push({productId,name,price});
 }
removeProduct(productId){
    let product = this.products.find(product => product.productId === productId);
    return delete this.products[product];
    
}
updateProduct(productId,name,price){
   this.products.name = name;
   this.products.price = price;  
    this.products.productId = productId;
    var updates = {productId,name,price};
    return updates;
}
getProduct(productId){
    let product = this.products.find(product => product.productId === productId);
    return product;
 }
printProducts(){

 for(let items of this.products){     
  
  console.log(`${items.name}: ${items.price}`);
  
 }   
}
calculateOrderCost(productId,quantity){
    let product = this.products.find(product => product.productId === productId);
    return product.price *quantity;
}
}
let mkulima = new Mkulima();
console.log(mkulima.addFarm(200,"Organic and Fresh Farm","Justus Owino","07345627246","500-Nairobi"));
console.log(mkulima.addFarm(201,"Fresh Farmers","Mary Nyambura","0729568634","4543-Nyeri"));
console.log(mkulima.removeFarm(200));
console.log(mkulima.getFarm(201));
console.log(mkulima.updateFarm(200,"Organic and Fresh Farm","Justus Owino","0734784985","500-Nairobi"));
console.log(mkulima.addProduct(400,"Mangoes",30.00));
console.log(mkulima.addProduct(401,"Apples",40.00));
console.log(mkulima.removeProduct(401))
console.log(mkulima.updateProduct(400,"Mangoes",31.00));
console.log(mkulima.getProduct(400));
mkulima.printProducts();
console.log(mkulima.calculateOrderCost(400,4));