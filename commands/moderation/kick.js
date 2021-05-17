module.exports = {
	name: 'kick',
	description: 'Ping!',
	execute(message) {


		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}
		// Grab the "first" mentioned user from the message
		// This will return a `User` object, just like `message.author`
		const taggedUser = message.mentions.users.first();

		message.channel.send(`You wanted to kick: ${taggedUser.username}`);

	},
};