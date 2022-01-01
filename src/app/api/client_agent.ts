import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { store } from "../../features/test_redux/configureStore";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = "https://localhost:5001/";

const responcebody = (responce: AxiosResponse) => responce.data;

axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    if (token) config.headers!.Authorization = `Bearer ${token}`;
    return config;
})

axios.interceptors.response.use(async responce => {
    await await sleep();
    return responce
}, (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
        case 400:
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title || 'Unauthorized');
            break;
        case 500:
            toast.error(data);
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
});

const requests = {
    get: (url: string) => axios.get(url).then(responcebody),
    post: (url: string, body: {}) => axios.post(url, body).then(responcebody),
    put: (url: string, body: {}) => axios.put(url, body).then(responcebody),
    delete: (url: string) => axios.post(url).then(responcebody)
}

const Appservice = {
    services: () => requests.get('Service/Services'),
    service: (id: number) => requests.get(`Service/${id}`)
}

const Account = {
    login: (values: any) => requests.post('Auth/login', values),
    register: (values: any) => requests.post('Auth/register', values),
    currentUser: () => requests.get('Auth/currentUser'),
}

const client_agent = {
    Appservice,
    Account
}

export default client_agent;