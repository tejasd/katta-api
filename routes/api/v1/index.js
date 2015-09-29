// All the routes on this page assume the
// existence of an authenticated user in the form
// of a cookie

var express = require('express');
var router = express.Router();

var databaseUrl = "mongodb://localhost:27017/katta"; // "username:password@example.com/mydb"
var collections = ["katta"]

var mongojs = require('mongojs');
var db = mongojs(databaseUrl, collections);
var Set = require("collections/set");



// Everything after this point assumes you have a cookie
// with the required user info

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
	var friendsIWantToHangWith = new Set(req.body.showMeAsFreeTo);
	db.katta.findOne({_id: req.cookie.userId}, function(err, docs) {
		var friendsWhoWantToHangWithMe = new Set(docs.friendsWhoWantToHangWithMe);
		var result = friendsIWantToHangWith.intersection(friendsWhoWantToHangWithMe).toArray();
		res.send({
			availableFriends: result
		})
	})
});

module.exports = router;
