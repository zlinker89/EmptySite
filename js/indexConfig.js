  $(document).ready(inicio);

  function inicio () {
    $(".button-collapse").sideNav();
    medidas(); // estableco las medidas para convertir
    verificar(); // verifico si existe informacion constante

    //eventos
    $('#defecto').click(valorPorDefecto);
    $('#FormConstantes').submit(function () {
      guardar();
      return false;
    });
  }


  function guardar () {
    /*
      creo las constantes y las almaceno en localhost
    */
    try{
      var CONSTANTES = {
        co2: $("#CO2").val(),
        ch4: $("#CH4").val(),
        n2o: $("#N2O").val(),
        pfc: $("#PFC").val(),
        hfc: $("#HFC").val(),
        sf6: $("#SF6").val(),
        papelcomun: $("#papelcomun").val(),
        papelreciclado: $("#papelreciclado").val(),
        co2biomasa: $("#CO2Biomasa").val(),
        ch4biomasa: $("#CH4Biomasa").val(),
        n2obiomasa: $("#N2OBiomasa").val(),
        gasnatural: $('#gasNatural').val(),
        gasoleo: $('#gasoleo').val(),
        gasolina98_95: $('#gasolina98_95').val(),
        gasolinatransporte: $('#gasoleoTransporte').val(),
        gasolinaurbano14: $('#gasolinaUrbano14').val(),
        gasolinaurbano142011: $('#gasolinaUrbano142011').val(),
        gasolinaurbano2011: $('#gasolinaUrbano2011').val(),
        gasolinarural14: $('#gasolinaRural14').val(),
        gasolinarural142011: $('#gasolinaRural142011').val(),
        gasolinarural2011: $('#gasolinaRural2011').val(),
        gasolinainterurbano14: $('#gasolinaInterurbano14').val(),
        gasolinainterurbano142011: $('#gasolinaInterurbano142011').val(),
        gasolinainterurbano2011: $('#gasolinaInterurbano2011').val(),
        dieselurbano21: $('#dieselUrbano21').val(),
        dieselurbanom21: $('#dieselUrbanoM21').val(),
        dieselrural21: $('#dieselRural21').val(),
        dieselruralm21: $('#dieselRuralM21').val(),
        dieselinterurbano21: $('#dieselInterurbano21').val(),
        dieselinterurbanom21: $('#dieselInterurbanoM21').val(),
        cualquieraurbano: $('#CualquieraUrbano').val(),
        cualquierarural: $('#CualquieraRural').val(),
        cualquierainterurbano: $('#CualquieraInterurbano').val(),
        rigidourbano14t: $('#rigidoUrbano14t').val(),
        rigidourbanom14t: $('#rigidoUrbanoM14t').val(),
        rigidorural14t: $('#rigidoRural14t').val(),
        rigidoruralm14t: $('#rigidoRuralM14t').val(),
        rigidointerurbano14t: $('#rigidoInterurbano14t').val(),
        rigidointerurbanom14t: $('#rigidoInterurbanoM14t').val(),
        articuladourbano34t: $('#articuladoUrbano34t').val(),
        articuladourbanom34t: $('#articuladoUrbanoM34t').val(),
        articuladorural34t: $('#articuladoRural34t').val(),
        articuladoruralm34t: $('#articuladoRuralM34t').val(),
        articuladointerurbano34t: $('#articuladoInterurbano34t').val(),
        articuladointerurbanom34t: $('#articuladoInterurbanoM34t').val(),
        cualquieraurbanogasolina: $('#CualquieraUrbanoGasolina').val(),
        cualquieraruralgasolina: $('#CualquieraRuralGasolina').val(),
        cualquierainterurbanogasolina: $('#CualquieraInterurbanoGasolina').val(),
        cualquieraurbanodiesel: $('#CualquieraUrbanoDiesel').val(),
        cualquieraruraldiesel: $('#CualquieraRuralDiesel').val(),
        cualquierainterurbanodiesel: $('#CualquieraInterurbanoDiesel').val(),
        _2tiemposurbano: $('#2tiemposUrbano').val(),
        _2tiemposrural: $('#2tiemposRural').val(),
        _2tiemposinterurbano: $('#2tiemposInterurbano').val(),
        _4tiempos250urbano: $('#4tiempos250Urbano').val(),
        _4tiempos250rural: $('#4tiempos250Rural').val(),
        _4tiempos250interurbano: $('#4tiempos250Interurbano').val(),
        _4tiempos250750urbano: $('#4tiempos250750Urbano').val(),
        _4tiempos250750rural: $('#4tiempos250750Rural').val(),
        _4tiempos250750interurbano: $('#4tiempos250750Interurbano').val(),
        _4tiempos750urbano: $('#4tiempos750Urbano').val(),
        _4tiempos750rural: $('#4tiempos750Rural').val(),
        _4tiempos750interurbano: $('#4tiempos750Interurbano').val()
      }

      if(validar()){
        guardarLocalStorage(CONSTANTES); // lo guardamos
        Materialize.toast('Datos guardados', 3000);
      }else{
        Materialize.toast('Solo numeros', 3000);
      }
    }catch(e){
      Materialize.toast('No se ha pudo guardar', 3000);
      console.log(e);
    }

    return false; // para que no se vaya a refrescar
  }

  function verificar () {
    if (verificarLocalStorage()) {
      var constantes = obtenerDatos();
      //GWP
        $("#CO2").val(constantes.co2);
        $("#CH4").val(constantes.ch4);
        $("#N2O").val(constantes.n2o);
        $("#PFC").val(constantes.pfc);
        $("#HFC").val(constantes.hfc);
        $("#SF6").val(constantes.sf6);

        //Papel
        $("#papelcomun").val(constantes.papelcomun);
        $("#papelreciclado").val(constantes.papelreciclado);

        // biomasa solida primaria
        $("#CO2Biomasa").val(constantes.co2biomasa);
        $("#CH4Biomasa").val(constantes.ch4biomasa);
        $("#N2OBiomasa").val(constantes.n2obiomasa);

        // combustibles
        $('#gasNatural').val(constantes.gasnatural);
        $('#gasoleo').val(constantes.gasoleo);

        // Transporte
        $('#gasolina98_95').val(constantes.gasolina98_95);
        $('#gasoleoTransporte').val(constantes.gasolinatransporte); // OJO ACA

        // Turismos
        // gasolina
        $('#gasolinaUrbano14').val(constantes.gasolinaurbano14);
        $('#gasolinaUrbano142011').val(constantes.gasolinaurbano142011);
        $('#gasolinaUrbano2011').val(constantes.gasolinaurbano2011);
        $('#gasolinaRural14').val(constantes.gasolinarural14);
        $('#gasolinaRural142011').val(constantes.gasolinarural142011);
        $('#gasolinaRural2011').val(constantes.gasolinarural2011);
        $('#gasolinaInterurbano14').val(constantes.gasolinainterurbano14);
        $('#gasolinaInterurbano142011').val(constantes.gasolinainterurbano142011);
        $('#gasolinaInterurbano2011').val(constantes.gasolinainterurbano2011);
        // diesel
        $('#dieselUrbano21').val(constantes.dieselurbano21);
        $('#dieselUrbanoM21').val(constantes.dieselurbanom21);
        $('#dieselRural21').val(constantes.dieselrural21);
        $('#dieselRuralM21').val(constantes.dieselruralm21);
        $('#dieselInterurbano21').val(constantes.dieselinterurbano21);
        $('#dieselInterurbanoM21').val(constantes.dieselinterurbanom21);
        // Hibrido
        $('#CualquieraUrbano').val(constantes.cualquieraurbano);
        $('#CualquieraRural').val(constantes.cualquierarural);
        $('#CualquieraInterurbano').val(constantes.cualquierainterurbano);

        // Camion, camioneta y furgoneta
        // Camion diesel 
        $('#rigidoUrbano14t').val(constantes.rigidourbano14t);
        $('#rigidoUrbanoM14t').val(constantes.rigidourbanom14t);
        $('#rigidoRural14t').val(constantes.rigidorural14t);
        $('#rigidoRuralM14t').val(constantes.rigidoruralm14t);
        $('#rigidoInterurbano14t').val(constantes.rigidointerurbano14t);
        $('#rigidoInterurbanoM14t').val(constantes.rigidointerurbanom14t);
        $('#articuladoUrbano34t').val(constantes.articuladourbano34t);
        $('#articuladoUrbanoM34t').val(constantes.articuladourbanom34t);
        $('#articuladoRural34t').val(constantes.articuladorural34t);
        $('#articuladoRuralM34t').val(constantes.articuladoruralm34t);
        $('#articuladoInterurbano34t').val(constantes.articuladointerurbano34t);
        $('#articuladoInterurbanoM34t').val(constantes.articuladointerurbanom34t);
        // lIGERO
        $('#CualquieraUrbanoGasolina').val(constantes.cualquierainterurbanogasolina);
        $('#CualquieraRuralGasolina').val(constantes.cualquieraruralgasolina);
        $('#CualquieraInterurbanoGasolina').val(constantes.cualquierainterurbanogasolina);
        $('#CualquieraUrbanoDiesel').val(constantes.cualquieraurbanodiesel);
        $('#CualquieraRuralDiesel').val(constantes.cualquieraruraldiesel);
        $('#CualquieraInterurbanoDiesel').val(constantes.cualquierainterurbanodiesel);

        // Motocicleta
        $('#2tiemposUrbano').val(constantes._2tiemposurbano);
        $('#2tiemposRural').val(constantes._2tiemposrural);
        $('#2tiemposInterurbano').val(constantes._2tiemposinterurbano);
        $('#4tiempos250Urbano').val(constantes._4tiempos250urbano);
        $('#4tiempos250Rural').val(constantes._4tiempos250rural);
        $('#4tiempos250Interurbano').val(constantes._4tiempos250interurbano);
        $('#4tiempos250750Urbano').val(constantes._4tiempos250750urbano);
        $('#4tiempos250750Rural').val(constantes._4tiempos250750rural);
        $('#4tiempos250750Interurbano').val(constantes._4tiempos250750interurbano);
        $('#4tiempos750Urbano').val(constantes._4tiempos750urbano);
        $('#4tiempos750Rural').val(constantes._4tiempos750rural);
        $('#4tiempos750Interurbano').val(constantes._4tiempos750interurbano);

    };
  }
  function medidas(){
    // conversion en unidades energeticas
    // termia
    var termia_kwh = 1.162;
    var termia_kcal = 1000;
    var termia_tep = Math.pow(10,-4);
    var termia_julios = 4186799.94;
    // kwh
    var kwh_termia = 0.86;
    var kwh_kcal = 859.85;
    var kwh_tep = 8.6 * Math.pow(10,-5);
    var kwh_julios = 3600000;
    // kcal
    var kcal_termia = Math.pow(10,-3);
    var kcal_kwh = 1.16 * Math.pow(10,-3);
    var kcal_tep = Math.pow(10,-7);
    var kcal_julios = 4186.8;
    // Tep
    var tep_termia = 10000;
    var tep_kwh = 11627.9;
    var tep_kcal = 10000000;
    var tep_julios = 41867999400;
    // julios
    var julios_termia = 2.39 * Math.pow(10,-7);
    var julios_kwh = 2.78 * Math.pow(10,-7);
    var julios_kcal = 2.39 * Math.pow(10,-4);
    var julios_tep = 2.39 * Math.pow(10,-11);
    // julio - TJ
    // KWH * KWH_julios / Julios_TJ
    var julios_TJ = Math.pow(10,12);
    // NM3 - KWH
    // NM3/ este
    var nm3_kwh = 10.7056;

    //alert((1605840 * kwh_julios / julios_TJ).toFixed(2));

  }

  function validar () {
    var bandera = true;
    $('input').each(function(){
      if(isNaN($(this).val())){
        $(this).focus();
        bandera = false;
        return false;
      }
    });
    return bandera;
  }
