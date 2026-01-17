// .d.ts file is used for providing suggestions and error red line
// axios similar to fetch 
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface Todo {
    userID: number;
    title: string
}

const fetchData = async () => {
    try{
     const res: AxiosResponse<Todo> = await  axios.
     get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Todo", res.data)
    }catch(error: any) {
        console.log(error.message)
    }
}


// most important if you install a package say pack-age so for that package if you want typescript support you have to install its types also
// npm install -D @types/pack-age