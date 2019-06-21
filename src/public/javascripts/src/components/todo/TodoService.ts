
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};

export default class TodoService {

    static async getAll() {
        return await fetch('/todo', {
            method: 'GET'
        });
    }

    static async get(id: number) {
        return await fetch(`/todo/${id}`, {
            method: 'GET'
        });
    }

    static async remove(item) {
        return await fetch(`/todo/${item.id}`, {
            method: 'DELETE'
        });
    }

    static async add(item) {
        return await fetch(`/todo`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: DEFAULT_HEADERS
        });
    }

    static async update(item) {
        return await fetch(`/todo/${item.id}`, {
            method: 'POST',
            body: JSON.stringify(item),
            headers: DEFAULT_HEADERS
        });
    }
}