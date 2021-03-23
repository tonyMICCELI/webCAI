$("#currentMod").html("<p>Test</p>");

$(".dropdown-item").click(function(){
    let mode = $(this).text();
    $(".currentMod").html(mode);
});