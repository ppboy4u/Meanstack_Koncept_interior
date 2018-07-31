var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
})
router.get('/loginpage', function(req, res, next) {
  res.render('loginpage', { title: 'Express' });
})
router.post('/login', function(req, res) {
  var email = req.body.email;
  var user_password = req.body.user_password;
  
  User.findOne({email:email, user_password: user_password}, function(err,user){
    if(err){
      console.log(err);
      return res.status(500).send('Some Error Occurred');
  
    }
    if(!user){
      return res.status(404).send('Invalid User! Go back and try again. ');
    }
    return res.render('indexl') ;
  })
  
  });
  
  router.get('/logout', (req, res) => {
    if (req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/');
    }
  });
  
  
  
  router.post('/register', function(req, res){
    var user_name = req.body.user_name;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var user_password = req.body.user_password;
    var email= req.body.email;
    var contact_no = req.body.contact_no;
    var confirm_password = req.body.confirm_Password;
  
    var newuser = new User();
    newuser.user_name=user_name;
    newuser.user_password=user_password;
    newuser.email=email;
    newuser.first_name=first_name;
    newuser.last_name=last_name;
    newuser.confirm_password=confirm_password;
    newuser.contact_no=contact_no;
    
    newuser.save(function(err, savedUser){
  
      if(err){
        console.log(err);
        return res.status(500).send();
  
      }
       console.log("new user added")
      return res.status(200).send('Signed Up. Please go back and click login button .');
  
    })
  
  
  
  })
  
  
  
  
  router.post('/contact', function(req, res){
    var myname = req.body.myname;
   
    var email= req.body.email;
    var phone = req.body.phone;
    var subject= req.body.subject;
    var message=req.body.message;
  
    var newcontact = new contact();
    newcontact.myname=myname;
    
    newcontact.email=email;
    
    newcontact.phone=phone;
    newcontact.subject=subject;
    newcontact.message=message;
    
    newcontact.save(function(err, savedcontact){
  
      if(err){
        console.log(err);
        return res.status(500).send();
  
      }
       console.log("new contact added")
      return res.status(200).send('Thanks for contacting us. We will connect to you shortly.You can now go back and continue purchasing.');
    })
  
  
  
  })
  
  
  
  router.post('/buyerform', function(req, res){
    var firstname = req.body.firstname;
    
    var email= req.body.email;
    var address= req.body.address;
    var city = req.body.city;
    var state= req.body.state;
    var zip=req.body.zip;
    var bikemodel=req.body.bikemodel;
  
    var newbuyer = new buyer();
    newbuyer.firstname=firstname;
    
    newbuyer.email=email;
    newbuyer.address=address;
    newbuyer.city=city;
    newbuyer.state=state;
    newbuyer.zip=zip;
    newbuyer.bikemodel=bikemodel;
    
    newbuyer.save(function(err, savedbuyer){
  
      if(err){
        console.log(err);
        return res.status(500).send();
  
      }
       console.log("new buyer added")
      return res.status(200).send('Holla! Your Bike has been booked . Keep your payment method ready at the time of delivery.');
    })
  
  
  
  })
  // Get Homepage
  // router.get('/', ensureAuthenticated, function(req, res){
  // 	res.render('index');
  // });
  
  // function ensureAuthenticated(req, res, next){
  // 	if(req.isAuthenticated()){
  // 		return next();
  // 	} else {
  // 	//	req.flash('error_msg','You are not logged in');
  // 		res.redirect('/users/login');
  // 	}
  // }
  
  
  module.exports = router;
  
module.exports = router;
