var express = require('express');
var router = express.Router();


// GET all friends available on Katta
router.get('/friends', function(req, res) {
  	res.json({ friends: ['1'] });
});

// GET Details for specific friend
router.get('/friends/:id', function(req, res) {
	if (req.params.id === '1') {
		res.json(
		{ 
			name: 'Tejas Deshpande',
			photo: 'https://www.facebook.com/photo.php?fbid=10206580366883280&l=d6151f7dfb'
	 	});
	} else {
		res.status(404).send('We couldn\'t find a user with that ID');
	}
});

// POST Friends you want to hang out with.
// This returns the intersection of the set of friends that
// you want to hang out with and who want to hang out with you
router.post('/friends', function(req, res) {
	res.send('This functionality is yet to be implemented');
});

module.exports = router;
