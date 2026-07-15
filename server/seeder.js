import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDb from './config/db.js';

import Admin from './schemas/adminUserSchema.js';
import User from './schemas/userSchema.js';
import Pizza from './schemas/pizzaSchema.js';
import Order from './schemas/orderSchema.js';
import { Base, Sauce, Cheese, Veggie } from './schemas/inventorySchema.js';

import { users, admins } from './data/users.js';
import pizzas from './data/pizzas.js';
import { base, sauce, cheese, veggie } from './data/inventory.js';

dotenv.config();

// Connect to MongoDB
connectDb();

const importData = async () => {
  try {
    await User.insertMany(users);
    await Admin.insertMany(admins);
    await Base.insertMany(base);
    await Sauce.insertMany(sauce);
    await Cheese.insertMany(cheese);
    await Veggie.insertMany(veggie);
    await Pizza.insertMany(pizzas);

    console.log('Dummy Data Created!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Admin.deleteMany();
    await Order.deleteMany();
    await Pizza.deleteMany();
    await User.deleteMany();
    await Base.deleteMany();
    await Sauce.deleteMany();
    await Cheese.deleteMany();
    await Veggie.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
