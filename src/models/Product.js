import mongoose from 'mongoose';


const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, 
{
  timestamps: true,
  versionKey: false
})

export default mongoose.model('Product', productsSchema)