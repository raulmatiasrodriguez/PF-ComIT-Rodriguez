$(function () {
    $('.button-checkbox').each(function () {

        // Settings
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Handlers
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });
        $checkbox.on('change', function () {
            updateDisplay();
        });

        // Actions
        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set the button's state
            $button.data('state', (isChecked) ? "on" : "off");

            // Set the button's icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update the button's color
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            }
            else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Initialization
        function init() {

            updateDisplay();

            // Inject the icon if applicable
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' + settings[$button.data('state')].icon + '"></i> ');
            }
        }
        init();
    });
});

$(function (){
    $("#mverde").click(function(){
        $(".jumbotron").css("color", "chartreuse");
        $(".subtitulo").css("background-color", "darkgreen");
        $(".piepagina").css("background", "darkgreen");
    });
});

$(function(){
    $("#enviar").click(function(){
        $("#frm").on("submit", function(e){
            e.preventDefault();//evita que la pagina se vuelva a cargar por el submit
            var frm = $(this).serialize();//serialize — Genera una representación apta para el almacenamiento de un valor
            //El método ajax () se utiliza para realizar una solicitud AJAX (HTTP asíncrono).
            $.ajax({
                method:"POST",
                url:"php/nuevosproductos.php",
                data: frm
            }).done ( function (info){
                $("#mensaje").addClass("mostrar");//le damos el estilo de esa clase
                $("#mensaje").html(info);//vamos a mostrar la respuesta del servidor
            });

        });
    });
});

$(function(){
    $("#pagoefectivo").click(function() {
        $tipopago = 0 ;//es efectivo.
        $("#pagoefectivo").css({"background-color": "darkorange","color": "white"}); 
        $("#pagotj").css({"background-color": "inherit","color": "inherit"}); 
    });
});

$(function(){
    $("#pagotj").click(function(){
        $tipopago = 1 ;//es tarjeta.
        $("#pagotj").css({"background-color": "darkorange","color": "white"});
        $("#pagoefectivo").css({"background-color": "inherit","color": "inherit"}); 
    });
});

$(function (){
    $checkpizzas = "false";
    $checkemp = "false";
    $checkhamb = "false";
    $checkminutas = "false";
    $checkpromos = "false";
    //Verificar los Checkboxs tildados.
    $("#pizzas").change(function() {
        $checkpizzas = $( this );
        $checkpizzas = $checkpizzas.prop( "checked" );
    });
        
    $("#empanadas").change(function() {
        $checkemp = $( this );
        $checkemp = $checkemp.prop( "checked" );
    });
        
    $("#hamburguesas").change(function() {
        $checkhamb = $( this );
        $checkhamb = $checkhamb.prop( "checked" );
    });
        
    $("#minutas").change(function() {
        $checkminutas = $( this );
        $checkminutas = $checkminutas.prop( "checked" );
    });
        
    $("#promos").change(function() {
         $checkpromos = $( this );
         $checkpromos = $checkpromos.prop( "checked" );
    });     
});

$(function(){
    $("#datosEnviados").click(function() {
    //Armo mis datos para enviar    
    $d = document.getElementById('dire').value
    var parametros = {
        "check_pizzas" : $checkpizzas,
        "check_empanadas" : $checkemp,
        "check_hamburguesas" : $checkhamb,
        "check_minutas" : $checkminutas,
        "check_promos" : $checkpromos,
        "pagoen" : $tipopago,
        "dir": $d,
        };
     //Todos los métodos jQuery AJAX usan el método ajax ().En este caso utilice el metodo jQuery AJAX POST 
     $.post("php/productoselegidos.php",parametros).done ( function (info){
                $("#datosparaenviar").addClass("mostrar");//le damos el estilo de esa clase
                $("#datosparaenviar").html(info);//vamos a mostrar la respuesta del servidor
    });


function limpiar() {
    setTimeout('document.frm.reset()',2000);
    return false;}


      //,'$checkempanadas','$checkhamb','$checkminutas','$checkpromos',$tipopago}");
      //  $( "#datosparaenviar" ).html(
      //          ".Eligio Pizzas( \"checked\" ): <b>" + $checkpizzas + "</b><br>" +
      //          ".Eligio Empanadas( \"checked\" ): <b>" + $checkemp + "</b><br>" +
      //          ".Eligio Hamburguesas( \":checked\" ): <b>" + $checkhamb + "</b><br>" +
      //          ".Eligio Minutas( \"checked\" ): <b>" + $checkminutas  + "</b><br>" +
      //          ".Eligio Promo( \"checked\" ): <b>" + $checkpromos + "</b><br>" +
      //          ".Opcion de Pago: <b>" + $tipopago + "</b><br>" +
      //          ".Direccion: <b>" + $d + "</b>" );
   // }).change();
});
   
});





