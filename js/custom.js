$(document).ready(function() {

    var yazilar = $(".yazilar");
    $("#gizle").click(function () {
       yazilar.hide(2000);
     });
     $("#goster").click(function () {
        yazilar.show(500);
      });
      $("#goster-gizle").click(function () {
        yazilar.toggle(500);
      });
      $("#acil-kapan").click(function () {
        yazilar.slideDown().slideUp();
      });
      $("#eleman-ekle").click(function () {
        yazilar.append("Olgunlaştıkça kibrini yener.");
        yazilar.prepend("İnsan okudukça olgunlaşır.");
      });
      $("#eleman-sil").click(function () {
        $("li:first-child").remove();
      });
      $("#sinif-ekle").click(function () {
        yazilar.addClass("ekle");
      });
      $("#sinif-kaldir").click(function () {
        yazilar.removeClass("ekle");
      });
      $("#sinif-degiş").click(function () {
        yazilar.toggleClass("ekle");
      });
    });