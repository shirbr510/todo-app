var mongoose = require('mongoose');
import mongooseConnection from './MongooseConnect'
import todoSchema from './schemas/todoSchema';

class TodoProvider {

	constructor() {
		this.todoModel = mongoose.model('todos', todoSchema);
	}

	async getAll() {
		var todos = await this.todoModel.find().exec();
		return todos;
	}

	async get(todoId) {
		var todo = await this.todoModel.findOne({ todoId: todoId }).exec();
		return todo;
	}

	add(todo) {
		var newTodo = new this.todoModel(todo);
		newTodo=this.add_id(newTodo);
		newTodo.save();
	}

	async update (todo) {
		await this.todoModel.update({ todoId: todo.todoId }, todo).exec();
	}

	async delete (todoId) {
		await this.todoModel.remove({ todoId: todoId }).exec();
	}

	add_id(obj){
		obj._id = new mongoose.Types.ObjectId();
		return obj;
	}


}

export default TodoProvider;