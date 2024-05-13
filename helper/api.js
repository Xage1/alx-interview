const express = require('express');
const router = express.Router();

router.post('/login', passport.authenticate('local', {
	successRedirect: '/dashboard',
	failureRedirect: '/login',
	failureFlash: true
}));

router.get('repositories', (req, res) => {
	const accessToken = req.user.accessToken;
	const repositories = getUserRepositories(accessToken);
	res.json(repositories);
});

module.exports = router;
