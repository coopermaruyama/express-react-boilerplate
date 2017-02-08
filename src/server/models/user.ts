import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

  /**
  * username.
  */
  username: {
    type: String,
    unique: true
  }
});

export default mongoose.model('User', UserSchema);
