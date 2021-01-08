
//Populates the movies
$(function(){
    $.get("/getRecommendations", function(result){
        console.log(result);
        var random = Math.floor(Math.random() * (6));
        //prints JSON into hello p placeholder
        //$('#hello').html(JSON.stringify(result));
        
        //Prints databse query to relevant placeholder
        //Movie 1 Data
        $('#m1Title').html(result[random]["title"] + ' - id: ' +result[0]['id']);
        $('#m1Runtime').html( 'Runtime '+ result[random]["runtime"]+' mins');
        if(result[random]["budget"] == 0){
            $('#m1Budget').html('Budget: Unknown');
        }else{
            $('#m1Budget').html('Budget: ' + result[1]["budget"]);
        }
        if(result[random]["revenue"] == 0){
            $('#m1Revenue').html('Revenue: Unknown');
        }else{
            $('#m1Revenue').html('Revenue: ' + result[random]["revenue"]);
        }
        $('#m1AvgVote').html( 'Average Rating: ' + result[random]["vote_average"] + '/10');
        $('#m1VoteCount').html('Number of Ratings: ' + result[random]["vote_count"]);
        $('#m1Description').html(result[random]["description"]);
        $('#m1Image').attr("href", result[random]["imageURL"]);

        //Movie 2 Data
        $('#m2Title').html(result[random+1]["title"] + ' - id: ' +result[1]['id']);
        $('#m2Runtime').html( 'Runtime '+ result[random+1]["runtime"]+' mins');
        if(result[random+1]["budget"] == 0){
            $('#m2Budget').html('Budget: Unknown');
        }else{
            $('#m2Budget').html('Budget: ' + result[random+1]["budget"])
        }
        if(result[random+1]["revenue"] == 0){
            $('#m2Revenue').html('Revenue: Unknown');
        }else{
            $('#m2Revenue').html('Revenue: ' + result[random+1]["revenue"]);
        }
        $('#m2AvgVote').html( 'Average Rating: ' + result[random+1]["vote_average"] + '/10');
        $('#m2VoteCount').html('Number of Ratings: ' + result[random+1]["vote_count"]);
        $('#m2Description').html(result[1]["description"]);
        $('#m2Image').attr("href", result[1]["imageURL"]);

        //Movie 3 Data
        $('#m3Title').html(result[random+2]["title"] + ' - id: ' +result[random+2]['id']);
        $('#m3Runtime').html( 'Runtime '+ result[random+2]["runtime"]+' mins');
        if(result[random+2]["budget"] == 0){
            $('#m3Budget').html('Budget: Unknown');
        }else{
            $('#m3Budget').html('Budget: ' + result[random+2]["budget"])
        }
        if(result[random+2]["revenue"] == 0){
            $('#m3Revenue').html('Revenue: Unknown');
        }else{
            $('#m3Revenue').html('Revenue: ' + result[random+2]["revenue"]);
        }
        $('#m3AvgVote').html( 'Average Rating: ' + result[random+2]["vote_average"] + '/10');
        $('#m3VoteCount').html('Number of Ratings: ' + result[random+2]["vote_count"]);
        $('#m3Description').html(result[random+2]["description"]);
        $('#m3Image').attr("href", result[random+2]["imageURL"]);




        //Incase you want to put the results in a table
        // var obj = result;
        // for(var i=0; i<obj.length; i++){
        //     var tr="<tr>";
        //     var td1="<td>"+obj[i]["id"]+"</td>";
        //     var td2="<td>"+obj[i]["title"]+"</td></tr>";
        // }
        // $("#place-here").append(tr+td1+td2);

    });
})

// $(function() {
//     $.get("/getRecommendations", function(result){
//         console.log(result);
//     })
    
// })

//Buttons to see explanations for movies
$(function(){
    //Once Movie 1 button is clicked
    $('#m1btn').click(function(){
        //Shows the m1Explanation div
        $('#m1Explanation').toggle(500);
        //Changes the text of the button everytime it is clicked
        $(this).text($(this).text() == 'See Explanation' ? 'Hide Explanation' : 'See Explanation');
    });

    //Once Movie 2 button is clicked
    $('#m2btn').click(function(){
        //Shows the m1Explanation div
        $('#m2Explanation').toggle(500);
        //Changes the text of the button everytime it is clicked
        $(this).text($(this).text() == 'See Explanation' ? 'Hide Explanation' : 'See Explanation');
    });

    //Once Movie 3 button is clicked
    $('#m3btn').click(function(){
        //Shows the m1Explanation div
        $('#m3Explanation').toggle(500);
        //Changes the text of the button everytime it is clicked
        $(this).text($(this).text() == 'See Explanation' ? 'Hide Explanation' : 'See Explanation');
    });
})