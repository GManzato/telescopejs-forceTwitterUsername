let forceTwitterUser = function(user) {
	console.log(user)
	const name = user.services.twitter.screenName;
	user.profile.name = name;
	user.telescope.displayName = name;
	return user;
}

Telescope.callbacks.add("onCreateUser",forceTwitterUser);