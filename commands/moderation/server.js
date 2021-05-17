module.exports = {
	name: 'server',
	description: 'Ping!',
	execute(message, args) {
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};