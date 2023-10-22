window.addEventListener("load", function () {
  $(".card").each(function () {
    var imgURL = $(this).find(".-img").attr("src");

    $(this)
      .find(".-background-img")
      .css("background-image", "url(" + imgURL + ")");
  });
});
