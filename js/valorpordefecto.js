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
      // gasolina
      $('#gasolinaUrbano14').val(192.12);
      $('#gasolinaUrbano142011').val(232.78);
      $('#gasolinaUrbano2011').val(310.19);
      $('#gasolinaRural14').val(136.90);
      $('#gasolinaRural142011').val(159.65);
      $('#gasolinaRural2011').val(191.85);
      $('#gasolinaInterurbano14').val(154.18);
      $('#gasolinaInterurbano142011').val(170.99);
      $('#gasolinaInterurbano2011').val(217.95);
      // diesel
      $('#dieselUrbano21').val(199.81);
      $('#dieselUrbanoM21').val(246.06);
      $('#dieselRural21').val(135.56);
      $('#dieselRuralM21').val(170.51);
      $('#dieselInterurbano21').val(157.73);
      $('#dieselInterurbanoM21').val(198.71);
      // Hibrido
      $('#CualquieraUrbano').val(103.43);
      $('#CualquieraRural').val(100.13);
      $('#CualquieraInterurbano').val(127.29);

      // Camion, camioneta y furgoneta
      // Camion diesel 
      $('#rigidoUrbano14t').val(539.70);
      $('#rigidoUrbanoM14t').val(1103.49);
      $('#rigidoRural14t').val(394.98);
      $('#rigidoRuralM14t').val(717.04);
      $('#rigidoInterurbano14t').val(490.73);
      $('#rigidoInterurbanoM14t').val(663.01);
      $('#articuladoUrbano34t').val(1011.06);
      $('#articuladoUrbanoM34t').val(1506.13);
      $('#articuladoRural34t').val(646.96);
      $('#articuladoRuralM34t').val(947.43);
      $('#articuladoInterurbano34t').val(579.96);
      $('#articuladoInterurbanoM34t').val(791.44);
      // lIGERO
      $('#CualquieraUrbanoGasolina').val(365.27);
      $('#CualquieraRuralGasolina').val(207.32);
      $('#CualquieraInterurbanoGasolina').val(220.36);
      $('#CualquieraUrbanoDiesel').val(287.14);
      $('#CualquieraRuralDiesel').val(194.74);
      $('#CualquieraInterurbanoDiesel').val(282.47);

      // Motocicleta
      $('#2tiemposUrbano').val(105.22);
      $('#2tiemposRural').val(82.78);
      $('#2tiemposInterurbano').val(124.73);
      $('#4tiempos250Urbano').val(83.03);
      $('#4tiempos250Rural').val(77.86);
      $('#4tiempos250Interurbano').val(108.35);
      $('#4tiempos250750Urbano').val(134.71);
      $('#4tiempos250750Rural').val(104.23);
      $('#4tiempos250750Interurbano').val(134.99);
      $('#4tiempos750Urbano').val(169.37);
      $('#4tiempos750Rural').val(122.91);
      $('#4tiempos750Interurbano').val(146.40);

  }