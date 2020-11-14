'use strict';




function generateImgHTML(array){
    let randomNum = Math.floor(Math.random() * Math.floor(array.length));
    //console.log(array.length);
    //console.log(randomNum);
    let result=`<img src=${array[randomNum]} alt="A lovely dog picture">`
    //console.log(result);
    return result;
}


function displayImgs(responseJson){
    
    let array = responseJson.message;
    let display = generateImgHTML(array);
    $('#show-pictures').html(display);
    $('.results').removeClass('hidden');
}



function getDogMultipleImg(breed) {
    //console.log(breed);
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then(response => response.json())
      .then(responseJson => 
        displayImgs(responseJson))
      .catch(error => {
        console.error(`$(responseJson.message)`)
      });
      
  }

function printThePic(){
    $('form').submit(event => {
        event.preventDefault();
        const breed = $('form #breed').val();
        getDogMultipleImg(breed);
    });
}

$(function(){
    console.log('App loaded! Waiting for submit!');
    printThePic();
})
