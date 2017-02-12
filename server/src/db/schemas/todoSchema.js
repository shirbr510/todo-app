import {Schema} from 'mongoose';


var todoSchema = new Schema({
    _id: Schema.Types.ObjectId,
    todoId:Schema.Types.Number,
    text:Schema.Types.String,
    isChecked:Schema.Types.Boolean,
    timestamp:Schema.Types.Date
});

export default todoSchema;