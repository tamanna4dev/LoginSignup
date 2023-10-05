// router.post('/signUp', (req, res) => {
//     console.log('sent by client - ', req.body);
//     const { name, email, password, dob } = req.body;
//     if (!name || !email || !password || !dob){
//         return res.status(422).json({ error: "Please add all the field" });
//         }
//         User.findOne({ email: email })
//         .then(async (savedUser) => {
//          if (savedUser) {
//             return res.status(422).json({ error :"Invaild Credentials"});
//          }
//          const ures = new User ({
//             name,
//             email,
//             password,
//             dob
         
//          })
        
//         }
//         )
// })