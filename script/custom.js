
$(document).on('click', '#addBlue', function(){    
    $(".add-list").append(`
        <li type="blue">Blue Widget(B01)<a class="remove"><i class="fa fa-minus"></i></a></li>
    `)
});

$(document).on('click', '#addRed', function(){    
    $(".add-list").append(`
        <li type="red">Red Widget(R01)<a class="remove"><i class="fa fa-minus"></i></a></li>
    `)
});

$(document).on('click', '#addGreen', function(){    
    $(".add-list").append(`
        <li type="green">Green Widget(B01)<a class="remove"><i class="fa fa-minus"></i></a></li>
    `)
});

$(document).on('click', '.remove', function(){    
    $(this).parent().remove();
});

$(document).on('click', '#calculate', function(){    
    var redCount = 0;
    var blueCount = 0;
    var greenCount = 0;
    $(".add-list li").each(function(){
        switch($(this).attr('type')){
            case 'blue':
                blueCount++;            
                break;
            case 'red':
                redCount++;
                break;
            case 'green':
                greenCount++;
                break;
        }
    });

    var formdata = new FormData();
    formdata.append("redCount", redCount);
    formdata.append("blueCount", blueCount);
    formdata.append("greenCount", greenCount);
    $.ajax({
        url: 'ajax.php',
        type: 'POST',
        data: formdata,
        cache: false,
        dataType: 'json',
        processData: false, // Don't process the files
        contentType: false, // Set content type to false as jQuery will tell the server its a query string request
        success: function(data, textStatus, jqXHR)
        {
            if(typeof data.error === 'undefined')
            {             
                                
            }
            else
            {
                // Handle errors here
                alert('ERRORS: ' + data.error);
            }
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            // Handle errors here
            alert('ERRORS: ' + textStatus);
            // STOP LOADING SPINNER
        }
    });   
});