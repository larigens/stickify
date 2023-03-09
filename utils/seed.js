const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = userData;
    const thoughts = thoughtData;

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
    // Update users with the thoughts ids
    // loop through the saved thought, for each thought we need to generate a thought reaction and insert the thought reactions.
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});