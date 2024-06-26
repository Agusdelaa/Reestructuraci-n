import productModel from './models/product.model.js';

export default class Products {
    static #instance;

    constructor() { }

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new Products();
        }
        return this.#instance;
    }

    async getProducts(queryParams) {
        try {
            const { limit, page, sort, filter } = queryParams;
            return await productModel.paginate(filter, { limit, page, sort, lean: true });
        } catch (error) {
            throw error;
        }
    }

    async getProductById(id) {
        try {
            return await productModel.findById(id).lean();
        } catch (error) {
            throw error;
        }
    }

    async getProductByCode(code) {
        try {
            return await productModel.findOne({ code });
        } catch (error) {
            throw error;
        }
    }

    async createProduct(product) {
        try {
            return await productModel.create(product);
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(id, product) {
        try {
            return await productModel.findByIdAndUpdate(id, product, { new: true });
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            return await productModel.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}