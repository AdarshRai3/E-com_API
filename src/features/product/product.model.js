export default class ProductModel {
   constructor(
      id,
      name,
      desc,
      imageUrl,
      category,
      prices,
      sizes
   ){
      this.id = id
      this.name = name
      this.desc = desc
      this.imageUrl = imageUrl
      this.category = category
      this.prices = prices
      this.sizes= sizes  
   }
   
   static getAll(){
       return products;
   }

   static add(product){
       products.id = products.length+1;
       products.push(product);
       return products;
   }

}

var products=[
    new ProductModel(
        1,
        'Product1',
        'Description1',
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.croma.com%2Fapple-iphone-14-128gb-blue-%2Fp%2F261934&psig=AOvVaw2Ub9XH0-Gi7MhkKEO8KY66&ust=1700240834512000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCID59OmAyYIDFQAAAAAdAAAAABAE',
        'Mobile',
        1000000,
        ['S','M','L','XL']
    )
]