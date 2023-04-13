let photoSlideShow = {
    photoList: ['photo1','photo2','photo3', 'photo4'],
    currentPhotoIndex: 0,
    nextPhoto(){
        if (this.photoList.length-1 > this.currentPhotoIndex && this.currentPhotoIndex >= 0){
            this.currentPhotoIndex++;
            console.log(this.getCurrentPhoto());
        }
        else{ 
            console.log('End of slideshow');
        }
    },
    prevPhoto(){
        if (this.photoList.length-1 >= this.currentPhotoIndex && this.currentPhotoIndex > 0){
            this.currentPhotoIndex--;
            console.log(this.getCurrentPhoto());
        }
        else{
            console.log('Begin slide show');
        }
    },
    getCurrentPhoto(){
        return (this.photoList[this.currentPhotoIndex]);
    },
}

photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.prevPhoto();photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();
