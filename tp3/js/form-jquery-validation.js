$(document).ready(function () {
    console.log("DOM ready!");
    $("button").click(function (event) {
        event.preventDefault();
        if ($("#Inputnom").val() == ""
            || $("#Inputprenom").val() == ""
            || $("#Inputdatedenaissance").val() == ""
            || $("#InputAdresse").val() == ""
            || $("#InputEmail").val() == "") {
            alert("veuillez remplir tous les champs")
        } else {
            $('#myModal').modal("show");
            $(".modal-body").html('<img src="map.jpg"/>');
           
        }
    });
});
