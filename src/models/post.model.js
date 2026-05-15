const mongoose = require("mongoose")


const postSchema = new mongoose.Schema({
  caption: {
    type : String,
    default: ""
  },
  imgUrl: {
    type: String,
    required: [true , "imageUrl is required to create a post"]
  },
  user:{
    ref:"users",
    type: mongoose.Schema.Types.ObjectId
  }
})

const postModel = mongoose.model("posts" , postSchema)

module.exports = postModel