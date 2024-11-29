if (window.innerWidth >= 900) {
    $("#flipbook").turn({
        autoCenter: true,
    });
} else {
    $("#flipbook").turn({
        autoCenter: true,
        display: 'single'
    });
}

$("#catalogo").on("wheel", function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY > 0) {
        $("#flipbook").turn("next");
    } else {
        $("#flipbook").turn("previous");
    }
});

$(document).keydown(function (e) {
    var previous = 37,
        next = 39;

    switch (e.keyCode) {
        case previous:
            $("#flipbook").turn("previous");
            break;
        case next:
            $("#flipbook").turn("next");
            break;
    }
});
