(function () {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/logo?name=' + 'Microsoft',
        headers: { 'X-Api-Key': 'zn0DLZGiNDA7Z1YSdhyL5g==G0AZmyj0xReSGJQh'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
})();