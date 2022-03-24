
$(document).ready(() => {
    $("form").submit(function () {
        if ($('input:checkbox').filter(':checked').length < 1) {
            alert("Check at least one checkbox!");
            return false;
        }
    });
});