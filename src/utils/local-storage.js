const ACCESS_TOKEN = 'ACCESS_TOKEN'
const PRODUCT_ID = 'PRODUCT_ID'

export const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN)


export const setSelectedProduct = (productId) => localStorage.setItem(PRODUCT_ID, productId)

export const getSelectedProduct = () => localStorage.getItem(PRODUCT_ID)