
  let images_arr = {
    0 : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9895/1109895-h-6c85a6c31c3c",
    1 : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/950/1090950-h-1cbf7a805d55", 
    2 : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/1223/1000101223/1000101223-h",
    3 : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4939/1094939-h-cc9f80956931",
    4 : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5001/705001-h",
    5 : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/4502/1000034502/1000034502-h",
    6 : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/old_images/MOVIE/4295/1000194295/1000194295-h",
  };

    //reference of that image

    let slideshow_img = document.getElementById('slideshow_images')

   let i = 0
    x = setInterval(function (){

        if(i === 6){
            i = 0
        }
  
       slideshow_img.src = images_arr[i]
       i = i +1
   }, 2000)



   var movies = [
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
        name: "TANHAJI",
        rating: "8.9",
        date: "24 feb 2018",
           
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6536/846536-v",
        name: "Baghi",
        rating: "5.7",
        date: "17 march 2016",   
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/6828/556828-v",
        name: "Super 30",
        rating: "9.5",
        date: "20 August 2019",   
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/896/580896-v",
        name: "Chichore",
        rating: "9.0",
        date: "2 July 2018",   
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6699/1026699-v-cb786ee970de",
        name: "Angrezi Medium",
        rating: "7.5",
        date: "17 september 2014",    
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1347/1091347-v-1ddd8b64ce22",
        name: "Encanto",
        rating: "8.1",
        date: "8 march 2020",  
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1529/571529-v",
        name: "Mission Mangle",
        rating: "6.5",
        date: "5 December 2011",    
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/3085/723085-v",
        name: "Dil Bichara",
        rating: "7.0",
        date: "7 October 2020",
    },
    {
        imageUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2038/1102038-v-1bac28aa23cb",
        name: "The big bull",
        rating: "8.2",
        date: "12 jan 2016",  
    },
  
];

  localStorage.setItem("movies" , JSON.stringify(movies))
  

  var MovieData = JSON.parse(localStorage.getItem("")) || [];
 
     var MovieData = JSON.parse(localStorage.getItem("cartitems"))||[];

     movies.map(function(item){
      var div1 = document.createElement("div");
      div1.setAttribute("class" , "div1")
      
      var image = document.createElement("img");  
      image.setAttribute("src", item.imageUrl);
      image.setAttribute("class" , "image1")

      var Name = document.createElement("p"); 
      Name.textContent = item.name;
      Name.setAttribute("class", "Name")

      var div2 = document.createElement("div");
      div2.setAttribute("class" , "div2")

      var rat = document.createElement("p");
      rat.textContent = `${item.rating} ★`;

      var Date = document.createElement("p");
      Date.textContent = item.date;

      div2.append(rat, Date);

      div1.append(image , Name, div2);
      document.querySelector("#Container-movies").append(div1)
   
  })

  function handlePriceSort() {
    var selected = document.querySelector("#Sort").value;
    //console.log(selected);
    if (selected == "high") {
      //descending
      MovieData.sort(function (a, b) {
        return Number(b.rating) - Number(a.rating);
      });
    }
    if (selected == "low") {
      //ascending
      MovieData.sort(function (a, b) {
        return Number(a.rating) - Number(b.rating);
      });
    }

    console.log(MovieData );
    movies(MovieData );
  }









