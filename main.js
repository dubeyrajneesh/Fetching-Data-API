const getposts= () =>{
    let fetchposts= fetch("https://jsonplaceholder.typicode.com/posts") ;
     let allposttitle = '' ;

     fetchposts.then((response) => {
     response.json().then((jsonData) => {

        //console.log(jsonData) ;

        for(let i=0; i<jsonData.length;i++)
        {
            let post = jsonData[i] ;
            //debugger ;
            //console.log(post.title) ;
            allposttitle = allposttitle + `<strong> post title :</strong> ${post.title} <br> <strong> Post body: </strong> ${post.body} <br><hr>` ;
        }
        document.querySelector("#allPosts").innerHTML= allposttitle ;
     }) ;

     }) ;
}