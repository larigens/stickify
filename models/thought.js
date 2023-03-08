const { Schema, model } = require('mongoose');
// Subdocument data is embedded in the top-level document.

// Reaction Schema.
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new ObjectId,
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      timestamp: {
        type: Date,
        default: Date.now
      }
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Uses a getter method to format the timestamp on query.
reactionSchema
  .virtual('formattedTimestamp').get(function () {
    return this.timestamp.toLocaleString(); // format the timestamp using the toLocaleString method.
    // returns a string representation of a date and time that is formatted according to the locale settings of the user's computer.
  });


// Schema to create Thought model.
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      timestamp: {
        type: Date,
        default: Date.now
      }
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested documents created with the `reactionSchema`.
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Creates a virtual property `reactionCount` that retrieves the length of the thought's `reactions` array field on query.
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Uses a getter method to format the timestamp on query.
thoughtSchema
  .virtual('formattedTimestamp').get(function () {
    return this.timestamp.toLocaleString(); // format the timestamp using the toLocaleString method.
    // returns a string representation of a date and time that is formatted according to the locale settings of the user's computer.
  });

// Initialize our Thought model.
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
