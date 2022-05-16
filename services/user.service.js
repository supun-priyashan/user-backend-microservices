const User = require('../models/user.model');

const addUser = async (request, response) => {

  const user = new User(request.body);

  console.log(user);


  await user.save((error, user) => {
    if(error){
      response.status(500).json({ error: error.message });
      console.log(error.message)
    }
    else{
      response.status(200).
      json({
        success: true,
        user: user
      })
    }
  });
}

const getUser = async(request, response) => {
  try {
    User.findById(request.params.id, (error, data) => {
      if (error) {
        response.status(500).json({error: error.message});
      } else {
        response.status(200).json({
          success: true,
          user: data
        })
      }
    })
  } catch (e) {
    console.log(e);
  }
}
const getUsers = async (request, response) => {

  try{
    const user = await User.find();
    response.status(200).
    json({
      success: true,
      user: user
    })
  } catch (error) {
    response.status(404).json({
      success: false,
      error: error.message
    });
  }
}

//change
const updateUser = async (request, response) => {
  const user = new User(request.body);

  await User.findByIdAndUpdate(request.body._id,user,
    (error,user) => {
      if(error){
        console.log(error);
        response.status(500).json({ error: error.message });
      }
      else{
        response.status(200).
        json({
          success: true,
          user: user
        })
      }
    });
}

const deleteUser = async (request, response) => {
  await User.findByIdAndRemove(request.params.id,(error,user) => {
    if(error){
      response.status(500).json({ error: error.message });
    }
    else{
      response.status(200).
      json({
        success: true,
        user: user
      })
    }
  })
}




module.exports = {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
}
