export const todoService = {
    server: window.location.hostname,
    port: 5000,
    namespace: 'api/todos',

    get url() {
        return `http://${this.server}:${this.port}/${this.namespace}`
    },

    async get() {
        const res = await fetch(this.url);
        const jsonRes = await res.json();
        return jsonRes.todos
    },

    async add(todo) {
        const res = await fetch(this.url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Origin': this.url
            },
            body: JSON.stringify({text: todo})
        });
        const jsonRes = await res.json();

        return jsonRes.todos[0];
    },

    async delete(todo) {
        const res = await fetch(this.url, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        const jsonRes = await res.json();

        return jsonRes.todos[0];
    }
}