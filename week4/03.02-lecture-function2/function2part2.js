//03.02 Challenge 1
// let superHeroes = [
//     ["Batman", "Bruce Wayne"],
//     ["Spiderman", "Peter Parker"],
//     ["The Flash", "Barry Allen"]
//   ]    
//   let secretIdentiy = superHeroes.map(function (revealArray) {
//       return `${revealArray[0]} is ${revealArray[1]}`
//   })
//   console.log(secretIdentiy.join("\n"))
// Challenge 2
// 
//Week3-lecture 2function1 Challenge4
// Week5 03.06 starter code for exercise:
let slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
        }
    },
    prevPhoto: function() {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow');
        }
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    },
    playInterval = null;
    play: function() {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.playInterval = setInterval((nextPhoto) => {
                
            }, 2000);
        }
    }









