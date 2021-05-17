module.exports = {
	name: 'user-info',
	description: 'Ping!',
	execute(message) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};