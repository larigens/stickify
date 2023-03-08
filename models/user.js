// Models are defined through the Schema interface.
const { Schema, model } = require('mongoose');

// Schema to create User model.
const userSchema = new Schema(
    {
        // Add individual properties and their types.
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        username: {
            type: Schema.Types.Mixed,
            required: true,
        },
        password: {
            type: Schema.Types.Mixed,
            required: true,
            minLength: 6,
            maxlength: 20,
        },
        // Use built in date method to get current date.
        createdAt: {
            type: Date,
            default: Date.now
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts',
            },
        ],
    },
    {
        // Schema option to transform Objects after querying MongoDb.
        toJSON: {
            virtuals: true, // Includes virtuals in the response, overriding the default behavior.
        },
        id: false,
    }
);

// Create a virtual property `fullName` that gets and sets the user's full name.
userSchema
    .virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    })
    .set(function (v) {
        const firstName = v.split(' ')[0];
        const lastName = v.split(' ')[1];
        this.set({ firstName, lastName });
    });

// Initializes the User model.
const User = model('user', userSchema);

module.exports = User;