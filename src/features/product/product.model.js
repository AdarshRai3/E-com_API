import UserModel from '../user/user.model.js';
import { ApplicationError } from '../../error-handler/applicationError.js';
export default class ProductModel {
  constructor(
    name,
    desc,
    quantity,
    price,
    imageUrl,
    category,
    sizes,
    id
  ) {
    this._id = id;
    this.name = name;
    this.desc = desc;
    this.quantity = quantity;
    this.imageUrl = imageUrl;
    this.category = category;
    this.price = price;
    this.sizes = sizes;
  }

  static rateProduct(userID, productID, rating){
    // 1. Validate user and product
    const user = UserModel.getAll().find(
      (u) => u.id == userID
    );
    if(!user){
      // user-defined error.
      throw new ApplicationError("User not found", 404); 
    }

    // Validate Product
    const product = products.find(
      (p) => p.id == productID);
      if(!product){
        throw new ApplicationError("Product not found", 400); 
      }

      // 2. Check if there are any ratings and if not then add ratings array.
      if(!product.ratings){
        product.ratings = [];
        product.ratings.push({
          userID:userID, 
          rating: rating
        });
      }
      else{
        // 3. Check if user rating is already available.
        const existingRatingIndex = product.rating.findIndex(
          (r) => r.userID == userID
        );
        if(existingRatingIndex >= 0){
          product.ratings[existingRatingIndex] = {
            userID:userID, 
            rating: rating,
          };
        }
        else{
          // 4. if no exisitng rating, then add new rating.
          product.ratings.push({
            userID:userID, 
            rating: rating
          });
        }
      }
  }
}

