export const api = "https://kempetro-modelviewer.onrender.com";

export const requestConfig = (method, data) =>
{
    let config;
    if(method === "DELETE" || data === null){
        config = {
            method,
            headers: {},
        }
    }
    else {
        config = {
            method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            },
            redirect: 'follow'
        }  
    }

    return config;
}