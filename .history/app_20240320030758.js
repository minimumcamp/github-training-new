$('#addTodo').click(function () {
    const inputTodo = $("input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");

    $("input").val("");
});

$(document).on("change", "input[type=checkbox]", function () {
    if ($(this).is(":checked")) {
        $(this).closest("li").css("text-decoration", "line-through");
        $(this).closest("li").css("color", "#ccc");
    } else {
        $(this).closest("li").css("text-decoration", "none");
        $(this).closest("li").css("color", "#000");
    }
});
