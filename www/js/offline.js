export const todoService = {
    todos: [{'id':'1','text':'Study Python'}],

    async get() {
        return new Promise((resolve, reject) => {
            resolve(this.todos)
        });
    },

    async add(todo) {
        return new Promise((resolve, reject) => {
            let found = this.todos.findIndex((e) => e.text === todo);

            if (found !== -1) {
                reject(`Todo is already present: ${JSON.stringify(this.todos[found])}`);
            }

            const added = {
                id: this.todos.length.toString(),
                text: todo
            }
            
            this.todos.push(added)
            resolve(added)
        });
    },

    async delete(todo) {
        let todos = this.todos;

        return new Promise((resolve, reject) => {
            const index = todos.findIndex(e => e.text === todo.text && e.id === todo.id);

            if (index === -1) {
                reject(`todo ${JSON.stringify(todo)} does not exist.`);
            }
            
            const deleted = {
                id: todos[index].id,
                text: todos[index].text
            };

            todos.splice(index, 1);
            resolve(deleted);
        });
    }
}