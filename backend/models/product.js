const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
    maxLength: [150, "Max length of product name is 150 characters"],
  },

  price: {
    type: Number,
    required: [true, "Please Enter Product Name"],
    maxLength: [10, "Max length of product price is 10 characters"],
    default: 0.0,
  },

  brand: {
    type: String,
    required: [true, "Please Enter Product Brand"],
    default: "Generic",
  },

  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
    enum: {
      values: [
        "Processors",
        "Graphic Cards",
        "Mother Boards",
        "RAM",
        "HDD",
        "SSD",
        "Power Supply",
        "Casings",
        "Coolers",
        "Pre-Builts",
        "Flash Drives",
        "Laptops",
        "Others",
      ],
      messege: ["Please Enter a Valid Product Category"],
    },
  },

  warranty: {
    type: String,
    required: [true, "Please Enter Product Warranty"],
    default: "0 years",
  },

  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
    default: "No description available",
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

  stock: {
    type: Number,
    required: [true, "Please Enter Stock"],
    default: 0,
  },

  feature1: [],
  feature2: [],
  feature3: [],
  feature4: [],

  isOnPcBuilder: {
    type: Boolean,
    required: true,
    default: false,
  },

  pcBuilderInfo: {
    type: Object,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
