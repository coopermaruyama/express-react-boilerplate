import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({

  /**
  * username.
  */
  username: {
    type: String,
    unique: true
  }
});

export default mongoose.model('User', UserSchema);
