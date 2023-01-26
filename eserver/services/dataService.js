// import db
const db= require('./db')
// USERDEATILS
userDetails={
  
    akhil:{username:'akhil',password:4000, mobilenumber:'7510949135'},
    vishnu:{username:'vishnu',password:4001, mobilenumber:'8086373858'},
    sarath:{username:'sarath',password:4002, mobilenumber:'8281637035'}
  }
  const register=(username,password,mobilenumber)=>{
    return db.User.findOne({username})//data
  .then(user=>{
    if(user){
        return {
          status: false,
          statusCode: 400,
          message: 'User already registered'
        }
      }
      else{
        const newUser=new db.User({
          
          username:username,
          password:password,
         mobilenumber:mobilenumber
        })
        newUser.save();
  
        return {
          status: true,
          statusCode: 200,
          message: 'Registeration successful'
        }
      }
  })
  }
  const login=(uname,pswd)=>{
    return db.User.findOne({uname,pswd})//data
    .then(User=>{
      if(User){
        currentUser=User.username
        
       
        return{
          status: true,
          statusCode: 200,
          message: 'Login successful',
          currentUser:currentUser,
        }
      }
      else{
        return {
          status: false,
          statusCode: 400,
          message: 'invalid userdetails'
        }
      }
    })
  }
// get all product from db
const getproducts =()=>{
    return db.product.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'no products'
                }
            }
        }
    )
}
const addtowishlist=(id,title,price,images,description)=>{
    //data added to mongodb -- create a model in db.js
    return  db.wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:'product arlready exist'
                }
                
            }
            else{
                const newproduct =new db.wishlist({id,title,price,images,description})
                newproduct.save()// to save data into mongodb
                return{
                    status:true,
                    statusCode:200,
                    message:'product added to wishlist'
                }
            }
        }
    )
}
// get wishlist
const getwishlist=()=>{
    return db.wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'your wishlist is empty'
                }
            }
        }
    )
}
deletewish=(id)=>{
    return db.wishlist.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"product deleted"
                }
               
            }
            else{
               return{
                status:false,
                statusCode:404,
                message:'product not found'
               }
            }
        }
    )

}
module.exports={
    register,
    login,
    getproducts,
    addtowishlist,
    getwishlist,
    deletewish

}