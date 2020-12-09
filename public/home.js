import {v4 as uuidv4} from 'uuid';

v4 = require('uuid');
var user = v4();

//Populate Movies
$(function(){
    //Group 1
    $.get("/getCluster0", function(result){
        //Group 1, Movie 1
        $('#g1m1Title').html(result[0]["title"]);
        $('#g1m1Runtime').html( 'Runtime '+ result[0]["runtime"]+' mins');
        //Group 1, Movie 2
        $('#g1m2Title').html(result[1]["title"]);
        $('#g1m2Runtime').html( 'Runtime '+ result[1]["runtime"]+' mins');
        //Group 1, Movie 3
        $('#g1m3Title').html(result[2]["title"]);
        $('#g1m3Runtime').html( 'Runtime '+ result[2]["runtime"]+' mins');
    });

    //Group 2
    $.get("/getCluster1", function(result){
        //Group 2, Movie 1
        $('#g2m1Title').html(result[0]["title"]);
        $('#g2m1Runtime').html( 'Runtime '+ result[0]["runtime"]+' mins');
        //Group 2, Movie 2
        $('#g2m2Title').html(result[1]["title"]);
        $('#g2m2Runtime').html( 'Runtime '+ result[1]["runtime"]+' mins');
        //Group 2, Movie 3
        $('#g2m3Title').html(result[2]["title"]);
        $('#g2m3Runtime').html( 'Runtime '+ result[2]["runtime"]+' mins');
    });

    //Group 3
    $.get("/getCluster2", function(result){
        //Group 3, Movie 1
        $('#g3m1Title').html(result[0]["title"]);
        $('#g3m1Runtime').html( 'Runtime '+ result[0]["runtime"]+' mins');
        //Group 3, Movie 2
        $('#g3m2Title').html(result[1]["title"]);
        $('#g3m2Runtime').html( 'Runtime '+ result[1]["runtime"]+' mins');
        //Group 3, Movie 3
        $('#g3m3Title').html(result[2]["title"]);
        $('#g3m3Runtime').html( 'Runtime '+ result[2]["runtime"]+' mins');
    });

    //Group 4
    $.get("/getCluster3", function(result){
        //Group 4, Movie 1
        $('#g4m1Title').html(result[0]["title"]);
        $('#g4m1Runtime').html( 'Runtime '+ result[0]["runtime"]+' mins');
        //Group 4, Movie 2
        $('#g4m2Title').html(result[1]["title"]);
        $('#g4m2Runtime').html( 'Runtime '+ result[1]["runtime"]+' mins');
        //Group 4, Movie 3
        $('#g4m3Title').html(result[2]["title"]);
        $('#g4m3Runtime').html( 'Runtime '+ result[2]["runtime"]+' mins');
    });

    //Group 5
    $.get("/getCluster4", function(result){
        //Group 5, Movie 1
        $('#g5m1Title').html(result[0]["title"]);
        $('#g5m1Runtime').html( 'Runtime '+ result[0]["runtime"]+' mins');
        //Group 5, Movie 2
        $('#g5m2Title').html(result[1]["title"]);
        $('#g5m2Runtime').html( 'Runtime '+ result[1]["runtime"]+' mins');
        //Group 5, Movie 3
        $('#g5m3Title').html(result[2]["title"]);
        $('#g5m3Runtime').html( 'Runtime '+ result[2]["runtime"]+' mins');
    });
})

//Change Colour of Stars for Movie 1
$(function(){
    //Movie 1 star lists
    var m1_s1_elements = document.getElementsByClassName('m1star1');
    var m1_s1_elements_v2 = document.getElementsByClassName('m1star1v2');
    var m1_s2_elements = document.getElementsByClassName('m1star2');
    var m1_s2_elements_v2 = document.getElementsByClassName('m1star2v2');
    var m1_s3_elements = document.getElementsByClassName('m1star3');
    var m1_s3_elements_v2 = document.getElementsByClassName('m1star3v2');
    var m1_s4_elements = document.getElementsByClassName('m1star4');
    var m1_s4_elements_v2 = document.getElementsByClassName('m1star4v2');
    var m1_s5_elements = document.getElementsByClassName('m1star5');
    var m1_s5_elements_v2 = document.getElementsByClassName('m1star5v2');
    var length = m1_s1_elements.length;

    //Movie 1 Star 1 is clicked
    $('.m1star1').onclick(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            
        }
    })
    //Movie 1 Star 1-v2 is clicked
    $('.m1star1v2').onclick(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "inline-block";
            m1_s2_elements_v2[i].style.display = "none";
            m1_s3_elements[i].style.display = "inline-block";
            m1_s3_elements_v2[i].style.display = "none";
            m1_s4_elements[i].style.display = "inline-block";
            m1_s4_elements_v2[i].style.display = "none";
            m1_s5_elements[i].style.display = "inline-block";
            m1_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 1 Star 2 is clicked
    $('.m1star2').onclick(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "none";
            m1_s2_elements_v2[i].style.display = "inline-block";
            
        }
    })
    //Movie 1 Star 2-v2 is clicked
    $('.m1star2v2').click(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "none";
            m1_s2_elements_v2[i].style.display = "inline-block";
            m1_s3_elements[i].style.display = "inline-block";
            m1_s3_elements_v2[i].style.display = "none";
            m1_s4_elements[i].style.display = "inline-block";
            m1_s4_elements_v2[i].style.display = "none";
            m1_s5_elements[i].style.display = "inline-block";
            m1_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 1 Star 3 is clicked
    $('.m1star3').click(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "none";
            m1_s2_elements_v2[i].style.display = "inline-block";
            m1_s3_elements[i].style.display = "none";
            m1_s3_elements_v2[i].style.display = "inline-block";
        }
    })
    //Movie 1 Star 3-v2 is clicked
    $('.m1star3v2').click(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "none";
            m1_s2_elements_v2[i].style.display = "inline-block";
            m1_s3_elements[i].style.display = "none";
            m1_s3_elements_v2[i].style.display = "inline-block";
            m1_s4_elements[i].style.display = "inline-block";
            m1_s4_elements_v2[i].style.display = "none";
            m1_s5_elements[i].style.display = "inline-block";
            m1_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 1 Star 4 is clicked
    $('.m1star4').click(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "none";
            m1_s2_elements_v2[i].style.display = "inline-block";
            m1_s3_elements[i].style.display = "none";
            m1_s3_elements_v2[i].style.display = "inline-block";
            m1_s4_elements[i].style.display = "none";
            m1_s4_elements_v2[i].style.display = "inline-block";
        }
    })
    //Movie 1 Star 4-v2 is clicked
    $('.m1star4v2').click(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "none";
            m1_s2_elements_v2[i].style.display = "inline-block";
            m1_s3_elements[i].style.display = "none";
            m1_s3_elements_v2[i].style.display = "inline-block";
            m1_s4_elements[i].style.display = "none";
            m1_s4_elements_v2[i].style.display = "inline-block";
            m1_s5_elements[i].style.display = "inline-block";
            m1_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 1 Star 5 is clicked
    $('.m1star5').click(function(){
        for(var i=0; i<length; i++){
            m1_s1_elements[i].style.display = "none";
            m1_s1_elements_v2[i].style.display = "inline-block";
            m1_s2_elements[i].style.display = "none";
            m1_s2_elements_v2[i].style.display = "inline-block";
            m1_s3_elements[i].style.display = "none";
            m1_s3_elements_v2[i].style.display = "inline-block";
            m1_s4_elements[i].style.display = "none";
            m1_s4_elements_v2[i].style.display = "inline-block";
            m1_s5_elements[i].style.display = "none";
            m1_s5_elements_v2[i].style.display = "inline-block";
        }
    })

})

//Change Colour of Stars for Movie 2
$(function(){
    //Movie 2 star lists
    var m2_s1_elements = document.getElementsByClassName('m2star1');
    var m2_s1_elements_v2 = document.getElementsByClassName('m2star1v2');
    var m2_s2_elements = document.getElementsByClassName('m2star2');
    var m2_s2_elements_v2 = document.getElementsByClassName('m2star2v2');
    var m2_s3_elements = document.getElementsByClassName('m2star3');
    var m2_s3_elements_v2 = document.getElementsByClassName('m2star3v2');
    var m2_s4_elements = document.getElementsByClassName('m2star4');
    var m2_s4_elements_v2 = document.getElementsByClassName('m2star4v2');
    var m2_s5_elements = document.getElementsByClassName('m2star5');
    var m2_s5_elements_v2 = document.getElementsByClassName('m2star5v2');
    var length = m2_s1_elements.length;

    //Movie 2 Star 1 is clicked
    $('.m2star1').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            
        }
    })
    //Movie 2 Star 1-v2 is clicked
    $('.m2star1v2').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "inline-block";
            m2_s2_elements_v2[i].style.display = "none";
            m2_s3_elements[i].style.display = "inline-block";
            m2_s3_elements_v2[i].style.display = "none";
            m2_s4_elements[i].style.display = "inline-block";
            m2_s4_elements_v2[i].style.display = "none";
            m2_s5_elements[i].style.display = "inline-block";
            m2_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 2 Star 2 is clicked
    $('.m2star2').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "none";
            m2_s2_elements_v2[i].style.display = "inline-block";
            
        }
    })
    //Movie 2 Star 2-v2 is clicked
    $('.m2star2v2').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "none";
            m2_s2_elements_v2[i].style.display = "inline-block";
            m2_s3_elements[i].style.display = "inline-block";
            m2_s3_elements_v2[i].style.display = "none";
            m2_s4_elements[i].style.display = "inline-block";
            m2_s4_elements_v2[i].style.display = "none";
            m2_s5_elements[i].style.display = "inline-block";
            m2_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 2 Star 3 is clicked
    $('.m2star3').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "none";
            m2_s2_elements_v2[i].style.display = "inline-block";
            m2_s3_elements[i].style.display = "none";
            m2_s3_elements_v2[i].style.display = "inline-block";
        }
    })
    //Movie 2 Star 3-v2 is clicked
    $('.m2star3v2').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "none";
            m2_s2_elements_v2[i].style.display = "inline-block";
            m2_s3_elements[i].style.display = "none";
            m2_s3_elements_v2[i].style.display = "inline-block";
            m2_s4_elements[i].style.display = "inline-block";
            m2_s4_elements_v2[i].style.display = "none";
            m2_s5_elements[i].style.display = "inline-block";
            m2_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 2 Star 4 is clicked
    $('.m2star4').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "none";
            m2_s2_elements_v2[i].style.display = "inline-block";
            m2_s3_elements[i].style.display = "none";
            m2_s3_elements_v2[i].style.display = "inline-block";
            m2_s4_elements[i].style.display = "none";
            m2_s4_elements_v2[i].style.display = "inline-block";
        }
    })
    //Movie 2 Star 4-v2 is clicked
    $('.m2star4v2').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "none";
            m2_s2_elements_v2[i].style.display = "inline-block";
            m2_s3_elements[i].style.display = "none";
            m2_s3_elements_v2[i].style.display = "inline-block";
            m2_s4_elements[i].style.display = "none";
            m2_s4_elements_v2[i].style.display = "inline-block";
            m2_s5_elements[i].style.display = "inline-block";
            m2_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 2 Star 5 is clicked
    $('.m2star5').click(function(){
        for(var i=0; i<length; i++){
            m2_s1_elements[i].style.display = "none";
            m2_s1_elements_v2[i].style.display = "inline-block";
            m2_s2_elements[i].style.display = "none";
            m2_s2_elements_v2[i].style.display = "inline-block";
            m2_s3_elements[i].style.display = "none";
            m2_s3_elements_v2[i].style.display = "inline-block";
            m2_s4_elements[i].style.display = "none";
            m2_s4_elements_v2[i].style.display = "inline-block";
            m2_s5_elements[i].style.display = "none";
            m2_s5_elements_v2[i].style.display = "inline-block";
        }
    })

})

//Change Colour of Stars for Movie 3
$(function(){
    //Movie 3 star lists
    var m3_s1_elements = document.getElementsByClassName('m3star1');
    var m3_s1_elements_v2 = document.getElementsByClassName('m3star1v2');
    var m3_s2_elements = document.getElementsByClassName('m3star2');
    var m3_s2_elements_v2 = document.getElementsByClassName('m3star2v2');
    var m3_s3_elements = document.getElementsByClassName('m3star3');
    var m3_s3_elements_v2 = document.getElementsByClassName('m3star3v2');
    var m3_s4_elements = document.getElementsByClassName('m3star4');
    var m3_s4_elements_v2 = document.getElementsByClassName('m3star4v2');
    var m3_s5_elements = document.getElementsByClassName('m3star5');
    var m3_s5_elements_v2 = document.getElementsByClassName('m3star5v2');
    var length = m3_s1_elements.length;

    //Movie 3 Star 1 is clicked
    $('.m3star1').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            
        }
    })
    //Movie 3 Star 1-v2 is clicked
    $('.m3star1v2').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "inline-block";
            m3_s2_elements_v2[i].style.display = "none";
            m3_s3_elements[i].style.display = "inline-block";
            m3_s3_elements_v2[i].style.display = "none";
            m3_s4_elements[i].style.display = "inline-block";
            m3_s4_elements_v2[i].style.display = "none";
            m3_s5_elements[i].style.display = "inline-block";
            m3_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 3 Star 2 is clicked
    $('.m3star2').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "none";
            m3_s2_elements_v2[i].style.display = "inline-block";
            
        }
    })
    //Movie 3 Star 2-v2 is clicked
    $('.m3star2v2').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "none";
            m3_s2_elements_v2[i].style.display = "inline-block";
            m3_s3_elements[i].style.display = "inline-block";
            m3_s3_elements_v2[i].style.display = "none";
            m3_s4_elements[i].style.display = "inline-block";
            m3_s4_elements_v2[i].style.display = "none";
            m3_s5_elements[i].style.display = "inline-block";
            m3_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 3 Star 3 is clicked
    $('.m3star3').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "none";
            m3_s2_elements_v2[i].style.display = "inline-block";
            m3_s3_elements[i].style.display = "none";
            m3_s3_elements_v2[i].style.display = "inline-block";
        }
    })
    //Movie 3 Star 3-v2 is clicked
    $('.m3star3v2').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "none";
            m3_s2_elements_v2[i].style.display = "inline-block";
            m3_s3_elements[i].style.display = "none";
            m3_s3_elements_v2[i].style.display = "inline-block";
            m3_s4_elements[i].style.display = "inline-block";
            m3_s4_elements_v2[i].style.display = "none";
            m3_s5_elements[i].style.display = "inline-block";
            m3_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 3 Star 4 is clicked
    $('.m3star4').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "none";
            m3_s2_elements_v2[i].style.display = "inline-block";
            m3_s3_elements[i].style.display = "none";
            m3_s3_elements_v2[i].style.display = "inline-block";
            m3_s4_elements[i].style.display = "none";
            m3_s4_elements_v2[i].style.display = "inline-block";
        }
    })
    //Movie 3 Star 4-v2 is clicked
    $('.m3star4v2').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "none";
            m3_s2_elements_v2[i].style.display = "inline-block";
            m3_s3_elements[i].style.display = "none";
            m3_s3_elements_v2[i].style.display = "inline-block";
            m3_s4_elements[i].style.display = "none";
            m3_s4_elements_v2[i].style.display = "inline-block";
            m3_s5_elements[i].style.display = "inline-block";
            m3_s5_elements_v2[i].style.display = "none";
        }
    })
    //Movie 3 Star 5 is clicked
    $('.m3star5').click(function(){
        for(var i=0; i<length; i++){
            m3_s1_elements[i].style.display = "none";
            m3_s1_elements_v2[i].style.display = "inline-block";
            m3_s2_elements[i].style.display = "none";
            m3_s2_elements_v2[i].style.display = "inline-block";
            m3_s3_elements[i].style.display = "none";
            m3_s3_elements_v2[i].style.display = "inline-block";
            m3_s4_elements[i].style.display = "none";
            m3_s4_elements_v2[i].style.display = "inline-block";
            m3_s5_elements[i].style.display = "none";
            m3_s5_elements_v2[i].style.display = "inline-block";
        }
    })

})

//Next group buttons
$(function() {
    //Lists of stars
    var elements = document.getElementsByClassName('star');
    var elements_v2 = document.getElementsByClassName('star-v2');
    var length = elements.length;

    //Group 1 next button
    $('#g1next').click(function(){
        //Hides group 1 movies
        document.getElementsByClassName("group-1-movies")[0].style.display = "none";
        //Shows group 2 movies
        document.getElementsByClassName("group-2-movies")[0].style.display = "inline-block";
        //Updates Progress bar
        document.getElementById("progressBar").style.width = "40%";
        //Re-sets stars
        for(var i=0; i<length; i++){
            elements[i].style.display = "inline-block";
            elements_v2[i].style.display = "none";
            
        }
    })

    //Group 2 next button
    $('#g2next').click(function(){
        //Hides group 2 movies
        document.getElementsByClassName("group-2-movies")[0].style.display = "none";
        //Shows group 3 movies
        document.getElementsByClassName("group-3-movies")[0].style.display = "inline-block";
        //Updates Progress bar
        document.getElementById("progressBar").style.width = "60%";
        //Re-sets stars
        for(var i=0; i<length; i++){
            elements[i].style.display = "inline-block";
            elements_v2[i].style.display = "none";
            
        }
    })

    //Group 3 next button
    $('#g3next').click(function(){
        //Hides group 3 movies
        document.getElementsByClassName("group-3-movies")[0].style.display = "none";
        //Shows group 4 movies
        document.getElementsByClassName("group-4-movies")[0].style.display = "inline-block";
        //Updates Progress bar
        document.getElementById("progressBar").style.width = "80%";
        //Re-sets stars
        for(var i=0; i<length; i++){
            elements[i].style.display = "inline-block";
            elements_v2[i].style.display = "none";
            
        }
    })

    //Group 4 next button
    $('#g4next').click(function(){
        //Hides group 4 movies
        document.getElementsByClassName("group-4-movies")[0].style.display = "none";
        //Shows group 5 movies
        document.getElementsByClassName("group-5-movies")[0].style.display = "inline-block";
        //Updates Progress bar
        document.getElementById("progressBar").style.width = "100%";
        //Re-sets stars
        for(var i=0; i<length; i++){
            elements[i].style.display = "inline-block";
            elements_v2[i].style.display = "none";
            
        }
    })
})

