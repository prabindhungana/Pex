function AutomaticImageSlider() {
    var wrapper = document.getElementsByClassName("imagewrapper");
    var allImages = wrapper[0].getElementsByTagName("img");
    var imageWidth = allImages[0].offsetWidth;
    var allImagesLength = allImages.length;
    var margin = [];
    var temp = imageWidth;
    var index = 0;
    var side = 1;
    var interval;

    function setIndex(){
      for (var i = 0; i < allImagesLength; i++){
        temp = temp - imageWidth;
        margin[i] = temp;
      }
    }
    setIndex();

    var button1 = document.createElement("BUTTON");
    button1.setAttribute('class', 'button1');
    button1.innerHTML = '<';
    var button2 = document.createElement("BUTTON");
    button2.setAttribute('class', 'button2');
    button2.innerHTML = '>'  

    var carouselContainer = document.getElementsByClassName("carousel-container");

    carouselContainer[0].appendChild(button1);
    carouselContainer[0].appendChild(button2);
    
    button1.onclick = function(){
        changeImage(1)
    };
    button2.onclick = function(){
        changeImage(2)
    };


  function imgSlider(){
    
    interval = setInterval(slideImage, 3000);
    
    function slideImage(){
        index = index + side;
        if (index >= allImagesLength-1 || index < 1){

          side*=-1;
          if (index > allImagesLength-1){
            index = index + side;
          }
        } 

        wrapper[0].style.transition = "1s ease";
        wrapper[0].style.marginLeft = margin[index] + "px";
        
    }
  }
  imgSlider();


    function changeImage(buttonvalue) {
        clearInterval(interval);
        if(buttonvalue === 2){
          if(index<2)
            index++;
        } 
        else if(buttonvalue === 1) {
          if(index>0)
            index--;
          }
         
        wrapper[0].style.transition = "1s ease";
        wrapper[0].style.marginLeft = margin[index] + "px";
        imgSlider();
        
    }

}

new AutomaticImageSlider();