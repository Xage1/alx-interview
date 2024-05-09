const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
	(username, password, done) => {
		if (username === 'user' && password === 'password') {
			return done(null, { id: 1, username: 'user' });
		} else {
			return done(null, false, { message: 'Incorrect username or password' });
		}
	}
));

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	const user = { id: 1, username: 'user' };
	done(null, user);
});
