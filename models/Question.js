const mongoose = require("mongoose");
const slugify = require("slugify");

const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide a valid title."],
    minlength: [10, "Please provide a title with min 10 characters"],
    unique: true,
  },

  content: {
    type: String,
    required: [true, "Please provide a content"],
    minlength: [20, "Please provide a title with min 20 characters"],
  },
  // slug for seo url
  slug: String,

  createdAt: {
    type: Date,
    default: Date.now
  },

  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User"
  },

  likeCount: {
    type: Number,
    default: 0
  },

  likes: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User"
    }
  ],

  answerCount: {
    type: Number,
    default: 0
  },

  answers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Answer"
    }
  ]
});

QuestionSchema.pre("save", function (next) {
  if (!this.isModified("title")) {
    next();
  };

  this.slug = this.makeSlug();
  next();
});

QuestionSchema.methods.makeSlug = function () {
  return slugify(this.title, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.();'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: false // convert to lower case, defaults to `false`
    
  });
};

module.exports = mongoose.model("Question", QuestionSchema);
