
$('input[type="radio"]').change(function(){
    let busstar_dd = $('#busstar_dd:checked').length;
    let busstar_360 = $('#busstar_360:checked').length;
    let fusion_plus = $('#fusion_plus:checked').length;
    $(".busstar_dd").html(busstar_dd);
    $(".busstar_360").html(busstar_360);
    $(".fusion_plus").html(fusion_plus);
  });