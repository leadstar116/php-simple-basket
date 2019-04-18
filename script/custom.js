
$(document).on('click', '#addBlue', function(){    
    $(".add-list").append(`
        <li type="blue">Blue Widget(B01)<a class="remove"><i class="fa fa-minus"></i></a></li>
    `);
    var formdata = new FormData();
    formdata.append("type", "addProduct");
    formdata.append("product", "B01");
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

$(document).on('click', '#addRed', function(){    
    $(".add-list").append(`
        <li type="red">Red Widget(R01)<a class="remove"><i class="fa fa-minus"></i></a></li>
    `);
    var formdata = new FormData();
    formdata.append("type", "addProduct");
    formdata.append("product", "R01");
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

$(document).on('click', '#addGreen', function(){    
    $(".add-list").append(`
        <li type="green">Green Widget(G01)<a class="remove"><i class="fa fa-minus"></i></a></li>
    `);
    var formdata = new FormData();
    formdata.append("type", "addProduct");
    formdata.append("product", "G01");
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

$(document).on('click', '.remove', function(){    
    var product = $(this).parent().attr('type');
    $(this).parent().remove();
    var formdata = new FormData();
    formdata.append("type", "removeProduct");
    formdata.append("product", product);
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

$(document).on('click', '#calculate', function(){    
    var formdata = new FormData();
    formdata.append("type", "getTotalCost");
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
                $("#totalCost").text(data.total_cost);
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