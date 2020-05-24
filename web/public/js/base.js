$(document).ready(() => {
    $("#editContainer").hide();
    refreshTable();
});

function formSubmit(){
    $.ajax({
        url: 'http://localhost:3000/person/create',
        dataType: 'text',
        type: 'POST',
        contentType: 'application/x-www-form-urlencoded',
        data: {"nombre": $("#fname").val(), "apellido":$("#lname").val(), "edad": $("#age").val()},
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        success:  refreshTable()
    });
};


async function refreshTable(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/person/findAll',
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
             data.forEach(person => {
                $('#table').append('<tr class="onClick" id='+person._id+'><th id=nombre>' + person.nombre + '</th><th id=apellido>'+ person.apellido + '</th><th id=edad>'+person.edad+'</th><th>editar</th></tr>');
                $('#idEdit').attr('disabled', 'disabled')
            });
            onClick();
        }
    });
};

function onClick(){
    $('.onClick').click((event)=>{
        $('#editContainer').fadeToggle()
        $('.center').hide()
        $('#idEdit').val($(event.target).parent().attr('id'));
        $('#fnameEdit').val($(event.target).parent().children('#nombre').text())
        $('#lnameEdit').val($(event.target).parent().children('#apellido').text())
        $('#ageEdit').val($(event.target).parent().children('#edad').text())
    });
}

function formEdit(){
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/person/update/'+$('#idEdit').val(),
        dataType: 'text',
        type: 'PUT',
        contentType: 'application/x-www-form-urlencoded',
        data: {"nombre": $('#fnameEdit').val(), "apellido":$('#lnameEdit').val(), "edad": $('#ageEdit').val()},
            error: function (jqXhr, textStatus, errorThrown) {
                console.log(errorThrown);
            },
        success:  refreshTable()
    });
}

function deletePerson(){
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/person/delete/'+$('#idEdit').val(),
        crossDomain: true,
        success: (persona) =>{
            alert('Persona eliminada con exito');
            refreshTable();
        },error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
};