const express = require('express');
const connectdb = require("./config/connect")
const app= express();
const port = 4002; 


//connectdb()

//get all users 
router.get('/users', (req, res) => {
  User.find().then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ error: 'Failed to retrieve users' });
    });
});
// create a new user 
router.post('/',async(req,res) =>{
  try{
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });
  
      res.send({newUser,msg:"ajout avec succes" })
  }
  catch{
      res.send(error.msg )
  }  
}
)
//edit user by id
router.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  User.findByIdAndUpdate(id, { name, email, password }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ error: 'Failed to update user' });
    });
});




//delet user by id

router.delete("/deleteperson/:_id",async(req,res) =>{
  try{
      const deleteperson = await person.findByIdAndRemove({_id:req.params.id}).exec()
      res.status(200).send(deleteperson)
  }
  catch(error){
      res.status(404).send({msg:"person is not found"})
  }
})

//  route11
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
