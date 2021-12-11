jQuery(".egg_hatching").click(function() {
    jQuery(".egg_hatching")
        .addClass("egg_jump")
        .delay(1000)
        .queue(function() {
            jQuery(this).removeClass("egg_jump").dequeue();
        });
});