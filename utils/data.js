const userData = [
    {
        username: 'larigens',
        email: 'larigens@gmail.com',
        // thoughts: ["640a58b6adfc7126a813f7c1", "640a58b6adfc7126a813f7c2"],
        // friends: ["61b6c468f27f350a154ebdf6", "61b6c468f27f350a154ebdh8"],
        _id: '640a58b6adfc7126a813f7c4'
    },
    {
        username: 'hpotter',
        email: 'hpotter@hogwarts.edu',
        // thoughts: ["61b6c468f27f350a154ebde6"],
        // friends: ["61b6c468f27f350a154ebdf6", "61b6c468f27f350a154ebdg7", "61b6c468f27f350a154ebdh8"],
        _id: '61b6c468f27f350a154ebde5'
    },
    {
        username: 'hgranger',
        email: 'hgranger@hogwarts.edu',
        // thoughts: ["61b6c468f27f350a154ebdf4", "61b6c468f27f350a154ebdf5"],
        // friends: ["61b6c468f27f350a154ebde5", "61b6c468f27f350a154ebdg7", "61b6c468f27f350a154ebdi9"],
        _id: '61b6c468f27f350a154ebdf6'
    },
    {
        username: 'rweasley',
        email: 'rweasley@hogwarts.edu',
        // thoughts: ["61b6c468f27f350a154ebdg8", "61b6c468f27f350a154ebdg9"],
        // friends: ["61b6c468f27f350a154ebde5", "61b6c468f27f350a154ebdi9"],
        _id: '61b6c468f27f350a154ebdg7'
    },
    {
        username: 'sblack',
        email: 'sblack@outlook.com',
        // thoughts: ["61b6c468f27f350a154ebdh9"],
        // friends: ["61b6c468f27f350a154ebde5", "61b6c468f27f350a154ebdi9"],
        _id: '61b6c468f27f350a154ebdh8'
    },
    {
        username: 'dobby',
        email: 'dobby@yahoo.com',
        // thoughts: ["61b6c468f27f350a154ebdi4"],
        // friends: ["61b6c468f27f350a154ebde5", "61b6c468f27f350a154ebdh8"],
        _id: '61b6c468f27f350a154ebdi9'
    }
]

const thoughtData = [
    {
        _id: '640a58b6adfc7126a813f7c1',
        thoughtText: "Here's a cool thought...",
        username: "larigens",
        createdAt: "3/9/2023, 5:22:51 PM",
        reactions: [
            {
                reactionBody: "Agree!",
                username: "hgranger"
            },
            {
                reactionBody: "So cool!",
                username: "sblack"
            }
        ]
    },
    {
        _id: '640a58b6adfc7126a813f7c2',
        thoughtText: "I'm excited for the weekend!",
        username: "larigens",
        createdAt: "3/9/2023, 5:30:51 PM",
        reactions: [
            {
                reactionBody: "Me too!",
                username: "dobby"
            },
            {
                reactionBody: "Can't wait!",
                username: "hpotter"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebde6',
        thoughtText: "I almost learned a new trick today!",
        username: "hpotter",
        createdAt: "3/9/2023, 3:22:05 PM",
        reactions: [
            {
                reactionBody: "Call me!",
                username: "rweasley"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdf4',
        thoughtText: "Studying...",
        username: "hgranger",
        createdAt: "3/8/2023, 7:22:51 PM",
        reactions: [
            {
                reactionBody: "You're so smart!",
                username: "rweasley"
            },
            {
                reactionBody: "Share your knowledge with the world Granger!",
                username: "sblack"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdf5',
        thoughtText: "It's leviosa, not leviosar!",
        username: "hgranger",
        createdAt: "3/9/2023, 5:22:51 PM",
        reactions: [
            {
                reactionBody: "Agree!",
                username: "dobby"
            },
            {
                reactionBody: "So true!",
                username: "sblack"
            },
            {
                reactionBody: "HAHAHAHAHAHAH",
                username: "hpotter"
            },
            {
                reactionBody: "ok.......I got it",
                username: "rweasley"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdg8',
        thoughtText: "Percy Wouldn't Recognize A Joke If It Danced Naked In Front Of Him Wearing Dobby's Tea Cozy.",
        username: "rweasley",
        createdAt: "3/9/2023, 1:12:10 PM",
        reactions: [
            {
                reactionBody: "HAHAHAHAHAHAH!",
                username: "hpotter"
            },
            {
                reactionBody: "HAHAHAHAHAHA that's hilarious!",
                username: "sblack"
            },
            {
                reactionBody: "That is not cool!",
                username: "hgranger"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdg9',
        thoughtText: "Who's down to play some Wizard chess?",
        username: "rweasley",
        createdAt: "3/9/2023, 6:22:11 PM",
        reactions: [
            {
                reactionBody: "I'm down!",
                username: "hpotter"
            },
            {
                reactionBody: "Can I watch?",
                username: "dobby"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdh9',
        thoughtText: "What's Life Without A Little Risk?",
        username: "sblack",
        createdAt: "3/7/2023, 10:22:11 AM",
        reactions: [
            {
                reactionBody: "Can't wait for our next adventure!",
                username: "hpotter"
            },
            {
                reactionBody: "Deep!",
                username: "hgranger"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdi4',
        thoughtText: "Dobby is freeeee",
        username: "dobby",
        createdAt: "3/9/2023, 2:22:11 PM",
        reactions: [
            {
                reactionBody: "We've all known this for a while",
                username: "rweasley"
            },
            {
                reactionBody: "Dobby has no Master!!",
                username: "hpotter"
            }
        ]
    },
]

module.exports = { userData, thoughtData };
