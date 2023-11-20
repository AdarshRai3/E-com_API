import { ObjectId } from 'mongodb';
import { getDB } from '../../config/mongodb.js';
import { ApplicationError } from '../../error-handler/applicationError.js';

class ProductRepository {
  constructor() {
    this.collection = 'products';
  }

  async add(newProduct) {
    try {
      // 1. Get the db.
      const db = getDB();
      const collection = db.collection(this.collection);
      await collection.insertOne(newProduct);
      return newProduct;
    } catch (err) {
      console.log(err);
      throw new ApplicationError('Something went wrong with database', 500);
    }
  }

  async getAll() {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const products = await collection.find().toArray();
      return products;
    } catch (err) {
      console.log(err);
      throw new ApplicationError('Something went wrong with database', 500);
    }
  }

  async get(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.findOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.log(err);
      throw new ApplicationError('Something went wrong with database', 500);
    }
  }

  async filter(minPrice, maxPrice, category) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      let filterExpression = {};

      if (minPrice) {
        filterExpression.price = { $gte: parseFloat(minPrice) };
      }

      if (maxPrice) {
        filterExpression.price = { ...filterExpression.price, $lte: parseFloat(maxPrice) };
      }

      if (category) {
        filterExpression.category = category;
      }

      return await collection.find(filterExpression).toArray();
    } catch (err) {
      console.log(err);
      throw new ApplicationError('Something went wrong with database', 500);
    }
  }

  async update(id, updatedProductData) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      
      // Check if product exists
      const product = await collection.findOne({ _id: new ObjectId(id) });
      if (!product) {
        return null;
      }
  
      // Update product
      const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedProductData });
  
      // Check if a document was actually updated
      if (result.matchedCount === 0) {
        console.log(`No document matches the provided id: ${id}`);
        return null;
      }
  
      // Return updated document
      return await collection.findOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.log(err);
      throw new ApplicationError('Something went wrong with database', 500);
    }
  }
  

  async delete(id) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      await collection.deleteOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.log(err);
      throw new ApplicationError('Something went wrong with database', 500);
    }
  }
}

export default ProductRepository;
