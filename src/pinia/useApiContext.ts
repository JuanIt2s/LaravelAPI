import { defineStore } from "pinia";
import axios from 'axios';
import { ref } from "vue";

export const useApiContext = defineStore('api',()=> {

    const data = ref<Object>([]);

    const api = (url:string, method:string, datos:Object|null = null) => {
        data.value = axios.request({
            url: url,
            method: method,
            data: datos
        }).then(response => {
            return response.data;
        }).catch(error => {
            return error.response;
        });

        return data.value;
        
    }
    
    return {
        api
    }
});