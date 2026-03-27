function fetchdata(callback){
    
    
    setTimeout(() =>{
        let data="fetched data";
        callback(data,null);
    }),5000;
}
    function handledata(data,error){
        if(error){
            console.error("error");
        }
        else{

            console.log("start");
            console.log(data);
        }
    }
    fetchdata(handledata);