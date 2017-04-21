// $(document).on("DOMContentLoaded", function() {
//     $("li").on("click", function() {
//         console.log($(this).text());

//         $(this).text($(this).text() + "!");
//     });
// });

function onLiClick() {
    console.log($(this).text());
    $(this).text($(this).text() + "!");
}

function onPageLoad() {
    $("li").on("click", onLiClick);
}

$(onPageLoad);
