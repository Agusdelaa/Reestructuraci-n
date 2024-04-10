import messageModel from './models/message.model.js';

export default class Messages {
    static #instance;

    constructor() { }

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Messages();
        }
        return this.#instance;
    }

    async addMessage(user, message) {
        try {
            return await messageModel.create({ user, message });
        } catch (error) {
            throw error;
        }
    }

    async getMessages() {
        try {
            return await messageModel.find();
        } catch (error) {
            throw error;
        }
    }
}