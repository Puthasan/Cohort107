import mongoose from 'mongoose';
import bcrypt from 'bcrypt';


const SALT_ROUNDS = 8;

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 50,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
  },
  admin: {
    type: Boolean,
    default: false
  },
  department: {
    type: String,
    enum: ['IT', 'HR', 'Marketing', 'Sales']
  },
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, retDoc) {
      // * remove the password property from the JSON document
      delete retDoc.password;  
      return retDoc;
    }
  }
});

usersSchema.index({email: 1});
usersSchema.index({username: 1});

usersSchema.pre('save', async function(next) {
  // * only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hashSync(this.password, SALT_ROUNDS);
  return next();
})


export default mongoose.model('User', usersSchema);