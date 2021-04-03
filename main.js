var reasons = [
    "Hemanta Kumar Bal",
     "Sobha Rani Bal",
    "Pujith Kumar Bal",
    "Samikshaa Bal",
    "Parbati Bal"
    ];
    
    var images = [
    "https://i.pinimg.com/originals/9f/d8/76/9fd876a80fce4e05e2293a54e4504ab1.png",
    "https://cdn4.iconfinder.com/data/icons/family-cartoon/512/g10485-512.png",
      "https://cdn0.iconfinder.com/data/icons/recommendations/128/Recommendation_IconsLayer_16-512.png",
     "https://cdn1.iconfinder.com/data/icons/kids-cartoon/50/84-512.png",
     "https://i.pinimg.com/originals/e1/8f/4a/e18f4a4c8e716afeb5a1bbf598db00be.png"
    ];
    
    var i = 0;
    function nextslide() { document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src= images[i];
    i++;
    }
    
    