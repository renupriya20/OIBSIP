import mongoose from 'mongoose';

const baseSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    threshold: { type: Number, default: 10 },
  },
  {
    timestamps: true,
  }
);

const sauceSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    threshold: { type: Number, default: 10 },
  },
  {
    timestamps: true,
  }
);

const cheeseSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    threshold: { type: Number, default: 10 },
  },
  {
    timestamps: true,
  }
);

const veggieSchema = new mongoose.Schema(
  {
    item: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    threshold: { type: Number, default: 10 },
  },
  {
    timestamps: true,
  }
);

const Base = mongoose.model('Base', baseSchema);
const Sauce = mongoose.model('Sauce', sauceSchema);
const Cheese = mongoose.model('Cheese', cheeseSchema);
const Veggie = mongoose.model('Veggie', veggieSchema);

export { Base, Sauce, Cheese, Veggie };
