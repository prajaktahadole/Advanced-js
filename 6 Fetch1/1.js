

async function getMovies(){
    
    try{
        var x = document.querySelector("#searchData").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=76b4f1d6&s=${x}`);

    let data = await res.json();
    appendProduct(data);

    }catch{
        console.log("err :", err);
    }
    // console.log("data :", data);
}



function appendProduct(data){
    container.innerHTML = null;

    if( data.Search == undefined){

        let divE = document.createElement("div");
        divE.setAttribute("class", "ERRDIV");
        
        let img1 = document.createElement("img");
        img1.src = "https://media1.giphy.com/media/l2JehQ2GitHGdVG9y/giphy.gif?cid=ecf05e47rkbe30e1pd3l5i4kh6gfawp3bqsei6iomnyxq2vh&rid=giphy.gif&ct=g";
        img1.setAttribute("class", "class2");

        let heading = document.createElement("h1");
        heading.setAttribute("class", "class3");
        heading.innerHTML = "SORRY THIS CONTENT IS NOT AVAILABLE";

        divE.append(img1, heading);

        container.append(divE);

    }
    else{
        console.log("data:", data);

        data.Search.forEach(function(el){
            console.log("el:", el);
    
            let divM = document.createElement("div");
            divM.setAttribute("id", "divM");
    
            let img = document.createElement("img");
            img.src = el.Poster;
            img.setAttribute("class", "class1");
            
            let title = document.createElement("p");
            title.innerText = el.Title;
            title.setAttribute("class", "class3");
    
            let year = document.createElement("p");
            year.innerText = el.Year;
            year.setAttribute("class", "class3");

            let rating=(Math.random()*9+1);
            let n = rating.toFixed(1);
            let rate = document.createElement("h4")
            rate.innerHTML = `Omdb rating- ${n}`;
            rate.setAttribute("class", "class3");
    
            divM.append(img, title, year, rate);

            if(n>8.5){
                let rem = document.createElement("h4")
                rem.innerHTML = "Recommended";
                rem.setAttribute("class", "class3");
                divM.append(rem);
            }
           
    
            container.append(divM);
        });
    }
    
}