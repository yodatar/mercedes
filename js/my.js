/**
 * Created with IntelliJ IDEA.
 * User: pipo
 * Date: 27.1.2014
 * Time: 16:24
 * To change this template use File | Settings | File Templates.
 */
$('#date').datetimepicker({
    format: 'dd.MM.yyyy hh:mm',
    language: 'en',
    pickTime: false,
    delay: { show: 1000, hide: 1000 }
});

$('#submit')
    .popover({
    placement : 'bottom',
    title : '<div style="text-align:center; font-size:14px;">Odpovieme</div>',
    html: 'true',
    content : '<form id="contact2" class="form-inline">' +
        'Zanechajte svoj e-mail, my sa čo najskôr ozveme naspäť' +
        '<input type="email" class="form-control inputs" id="email" value="pali.michalek@gmail.com" size="24" required="true">' +
        '<textarea id="message" class="form-control inputs" placeholder="prípadná poznámka, tel.číslo, ..." rows="2" cols="26"></textarea>' +
        '<div id="submit2" class="btn btn-default btn-primary inputs" role="button" onclick="sendRequest()">Potvrď</div>' +
        '</form >'
});

function sendRequest(){
    var email = document.getElementById('email').value;
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var date = document.getElementById('datePicker').value;
    var message = document.getElementById('message').value;

    var request = $.ajax({
        type: 'POST',
        url: 'ajax.php',
        data: { from: from, to: to, email: email, date: date, message: message}
    });

    request.done(function(msg) {
        resetForm();
        $("#submit2").html( msg );
    });
    request.fail(function(jqXHR, textStatus ) {
        alert(textStatus);
    });

}

function resetForm(){
    $('#from').value = "";
    $('#to').value = "";
    $('#email').value = "";
    $('#message').value = "";
    $('#date').popover('hide');
}