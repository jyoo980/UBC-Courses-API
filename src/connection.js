const mongoose = require('mongoose');

const sessionList = generateSessionListFrom(2018);

const connectionMap = {};

for (const session of sessionList) {
	let connection = mongoose.createConnection(
		'mongodb+srv://read-user:' +
		process.env.MONGO_ATLAS_PW +
		'@ubc-web-api-zvc60.mongodb.net/' +
		session +
		'?retryWrites=true',
		{ useNewUrlParser: true }
	);
	connectionMap[session] = connection;
}

function generateSessionListFrom(startingYear) {
    const currentYear = new Date().getFullYear();
    const years = [];
    const sessions =[]
    for (let i = startingYear; i <= currentYear; i++) {
        if (i !== startingYear) {
            years.push(i);
            years.push(i);
        } else {
            years.push(i);
        }
    }
    for (let i = 0; i < years.length; i++) {
		sessions.push(i % 2 == 0 ? `${years[i]}W`: `${years[i]}S`);
    }
    return sessions;
}

module.exports = connectionMap;
