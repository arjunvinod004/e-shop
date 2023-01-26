// import mongoose
const  mongoose=require('mongoose')
//connection string
mongoose.connect('mongodb://localhost:27017/ecart',()=>{
    console.log('connected mongodb');
})
// modal creation
const product=mongoose.model('product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    images:String,
    brand:String,
    stock:Number,
    rating:Number

})
// create a model for wishlist
const wishlist =mongoose.model('wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    images:String
    
    
})
const User =mongoose.model('User',
{
    username:String,
    password:String,
    mobilenumber:String
}
)
//export
module.exports={
    product,
    wishlist,
    User
}