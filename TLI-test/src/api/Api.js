const Api = new Promise ((resolve, reject) => {

    fetch("https://jsonplaceholder.typicode.com/posts").
    then((result)=>{
        resolve(result.json());
    }).
    catch((error)=>{
        reject(error);
    });
    
})

export default Api;