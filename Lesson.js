let lessons = [

  { 
    Subject: "French",
    Image: "images/French.jpg",
    Location: "Manchester",
    Price: 35.0,
    Space: 5,
    
  },
    {
      Subject: "English",
      Image: "images/english.png",
      Location: "London",
      Price: 30.0,
      Space: 5,
    },
   
    {
      Subject: "Business",
      Image: "images/business.jpg",
      Location: "Goodmayes",
      Price: 50.0,
      Space: 5,
      
    },
    {
      Subject: "Computer Science",
      Image: "images/computer-science.png",
      Location: "Bank",
      Price: 90.0,
      Space: 5,
      
    },
    {
      Subject: "History",
      Image: "images/history.jpg",
      Location: "Ilford",
      Price: 70.0,
      Space: 5,
      
    },
    {
      Subject: "Music",
      Image: "images/music.jpg",
      Location: "london",
      Price: 65.0,
      Space: 5,
      
    },
    {
      Subject: "Maths",
      Image: "images/maths.jpg",
      Location: "Leeds",
      Price: 80.0,
      Space: 5,
      
    },
    {
      Subject: "Karate",
      Image: "images/karate.jpg",
      Location: "Walthamforest",
      Price: 90.0,
      Space: 5,
      
    },
    {
      Subject: "Art",
      Image: "images/art.webp",
      Location: "Liverpool",
      Price: 150.0,
      Space: 5,
      
    },
    {
      Subject: "IT",
      Image: "images/IT.jpg",
      Location: "Central London",
      Price: 25.0,
      Space: 5,
     
    },
  ];
  //Store Data to the Local Storage
  localStorage.setItem("Lesson", JSON.stringify(lessons));

