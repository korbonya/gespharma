const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    expirationDate: Date,
    manufacturer: String
  },{timestamp: true});

  const Product = mongoose.model('Product', productSchema );