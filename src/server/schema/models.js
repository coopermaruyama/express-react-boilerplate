import mongoose, { Schema } from 'mongoose';

/* =============================================================================
=    User
============================================================================= */
const UserSchema = new Schema({

  /**
  * username.
  */
  username: {
    type: String,
    unique: true
  }
});

export const User = mongoose.model('User', UserSchema);


/* =============================================================================
=    Todo
============================================================================= */
const TodoSchema = new Schema({

  /**
   * owner
   */
  _owner: Schema.Types.ObjectId,

  /**
   * title
   */
  title: String,

  /**
   * completed
   */
  completed: Boolean
});
export const Todo = mongoose.model('Todo', TodoSchema);
