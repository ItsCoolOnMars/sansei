module.exports = {
	name: 'avatar',
	description: 'Ping!',
	execute(message) {


		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}
		// Grab the "first" mentioned user from the message
		// This will return a `User` object, just like `message.author`
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		});


		message.channel.send(avatarList);

	},
};