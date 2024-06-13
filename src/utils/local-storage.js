const ACCESS_TOKEN = 'ACCESS_TOKEN'
const PRODUCT_NAME = 'PRODUCT_NAME'
const ANOTHER_TOKEN = 'ANOTHER_TOKEN'

export const setAccessToken = (token) => localStorage.setItem(ACCESS_TOKEN, token);
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);
export const removeAccessToken = () => localStorage.removeItem(ACCESS_TOKEN)


export const setSelectedProduct = (productName) => localStorage.setItem(PRODUCT_NAME, productName)
export const getSelectedProduct = () => localStorage.getItem(PRODUCT_NAME)

export const setAnotherToken = (token) => localStorage.setItem(ANOTHER_TOKEN, token);
export const getAnotherToken = () => localStorage.getItem(ANOTHER_TOKEN)
export const removeAnotherToken = () => localStorage.removeItem(ANOTHER_TOKEN)

