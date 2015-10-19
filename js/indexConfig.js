  $(document).ready(inicio);

  function inicio () {
    $(".button-collapse").sideNav();
    medidas();

    //eventos
    $('#defecto').click(valorPorDefecto);
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

  function valorPorDefecto () {
    /*
    Aplicamos los valores por defecto para las constantes
    */
    //GWP
      $("#CO2").val(1);
      $("#CH4").val(25);
      $("#N2O").val(298);
      $("#PFC").val(12200);
      $("#HFC").val(14800);
      $("#SF6").val(23000);

      //Papel
      $("#papelcomun").val(3);
      $("#papelreciclado").val(1.8);

      // biomasa solida primaria
      $("#CO2Biomasa").val(100000);
      $("#CH4Biomasa").val(30);
      $("#N2OBiomasa").val(4);

      // combustibles
      $('#gasNatural').val(2.537);
      $('#gasoleo').val(3.233);

      // Transporte
      $('#gasolina98_95').val(2.38);
      $('#gasoleoTransporte').val(2.61);

      // Turismos
      $('#gasolinaUrbano14').val(192.12);
      $('#gasolinaUrbano1.4-2.011').val(232.78);
      $('#gasolinaUrbano>2.011').val(310.19);
      $('#gasolinaRural<14').val(136.90);
      $('#gasolinaRural1.4-2.011').val(159.65);
      $('#gasolinaRural>2.011').val(191.85);
      $('#gasolinaInterurbano<14').val(154.18);
      $('#gasolinaInterurbano1.4-2.011').val(170.99);
      $('#gasolinaInterurbano>2.011').val(217.95);
      $('#dieselUrbano<21').val(199.81);
      $('#dieselUrbano>21').val(246.06);
      $('#dieselRural<21').val(135.56);
      $('#dieselRural>21').val(170.51);
      $('#dieselInterurbano<21').val(157.73);
      $('#dieselInterurbano>21').val(198.71);
      $('#CualquieraUrbano').val(103.43);
      $('#CualquieraRural').val(100.13);
      $('#CualquieraInterurbano').val(127.29);


  }