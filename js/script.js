//change tabs
$(".tab-btn").click((e) => {
    // change btn
    $(".tab-btn").removeClass("tab-btn-active");
    $(`button[name=${e.target.name}]`).addClass("tab-btn-active");

    //change page
    $(".book-page").removeClass("display-block");
    $(".book-page").addClass("display-none");
    $(`#${e.target.name}`).removeClass("display-none");
    $(`#${e.target.name}`).addClass("display-block")
})