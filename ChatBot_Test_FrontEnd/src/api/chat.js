import api from '@/libs/api'

export const helloWorld = async() => {
    const { data } = await api.get('/')
    return data
}

export const sendMessage = async(message) => {
    const { data } = await api.post('/',  {
        text: message
    }) 
    return data
}