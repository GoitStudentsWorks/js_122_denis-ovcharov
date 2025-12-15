import axios from "axios";

const URL = "https://paw-hut.b.goit.study";

const animalsURL = `${URL}/api/animals`;
const categoriesURL = `${URL}/api/categories`;
const ordersURL = `${URL}/api/orders`;
const feedbacksURL = `${URL}/api/feedbacks`;

export async function getAnimals({ page = 1, limit = 10, categoryId }) {
    const params = { page, limit };
    if (categoryId) {
    params.categoryId = categoryId;
    // Если категория выбрана, добавь ее в запрос, если нет, то не добавляй ее вообще.
    // Потому что, нет категории "ВСЕ" 
}
    const response = await
        axios.get(animalsURL, { params });
    return response.data;
    // При вызове передаете в аргументах первой порции карточек page, limit, а для фильтра categoryId
};

export async function getCategories() {
    const response = await
        axios.get(categoriesURL);
    return response.data;

    
};

export async function createOrder(orderData) {
    const response = await
        axios.post(ordersURL, orderData);
    return response.data;
    
};

export async function getFeedbacks(limit = 10, page = 1) {
    const response = await
        axios.get(feedbacksURL, {
            params: {
                page,
                limit,
            }
        })
    return response.data;
    // При вызове функции передаете в аргументы лимит и страничку
    
};

