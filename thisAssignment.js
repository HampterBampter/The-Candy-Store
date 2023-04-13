let photoSlideShow = function() {
    photoList = [1,2,3,4];
    currentPhotoIndex = [1];
    nextPhoto = function(){
        if (photoList.length > currentPhotoIndex >= 1){
            return this.currentPhotoIndex++;
        }
        if(currentPhotoIndex = photoList.length){ 
            console.log('End of slideshow');
            return currentPhotoIndex
        }
        else{

        }
    };
    prevPhoto = function(){
        if (photoList.length >= currentPhotoIndex > 1){
            return this.currentPhotoIndex--;
        }
        if (currentPhotoIndex = 1){
            console.log('Begin slide show');
        }
        else{

        }
    };
    getCurrentPhoto = function(){
        console.log(currentPhotoIndex);
    };
}

photoSlideShow.nextPhoto;
photoSlideShow.getCurrentPhoto;
