var tr = document.getElementsByClassName('tr-exercise');
var index = 0;
var page = document.getElementById('numberPage');


function NextExercise() {
    if (index < 8) {
        index = index + 1;
    } else {
        index = 8;
    }
    Load_tr();
}

function PrevExercise() {
    if (index > 0) {
        index = index - 1;
    } else {
        index = 0;
    }
    Load_tr();
}
$(document).ready(function() {
    Load_tr();
});

function Load_tr() {
    page.value = parseInt(index + 1) + "/9";

    for (var i = 0; i < tr.length; i++) {
        // if (index == 0) {
        if ((i >= index * 10) && (i < (index * 10 + 10))) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        // }
    }
    if (index == 0) {
        $('#btnPrev').prop("disabled", true);
        $('#btnNext').prop("disabled", false);
    } else if (index == 8) {
        $('#btnPrev').prop("disabled", false);
        $('#btnNext').prop("disabled", true);
    } else {
        $('#btnPrev').prop("disabled", false);
        $('#btnNext').prop("disabled", false);
    }
    // console.log(index);
}

$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "/smart/getAll",
        success: function(data) {
            var data = data.data;
            // console.log(data);
            var html = '';
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += ' <tr class="tr-exercise ">';
                html += ' <td class="col-table-cont">' + parseInt(i + 1) + '. ' + item.answer + '</td>';
                html += ' <td class="t-a-center">';
                html += '  <input type="radio" onclick="CheckRadio()" class="sizeRadio ' + item.type + '"  name="scores' + i + '" value="1">';
                html += ' <label for="1"></label></td>';
                html += ' <td class="t-a-center">';
                html += '  <input type="radio" onclick="CheckRadio()" class="sizeRadio ' + item.type + '"  name="scores' + i + '" value="2">';
                html += ' <label for="2"></label></td>';
                html += ' <td class="t-a-center">';
                html += '  <input type="radio" onclick="CheckRadio()" class="sizeRadio ' + item.type + '"  name="scores' + i + '" value="3">';
                html += ' <label for="3"></label></td>';
                html += ' <td class="t-a-center">';
                html += '  <input type="radio" onclick="CheckRadio()" class="sizeRadio ' + item.type + '"  name="scores' + i + '" value="4">';
                html += ' <label for="4"></label></td>';
                html += ' <td class="t-a-center">';
                html += '  <input type="radio" onclick="CheckRadio()" class="sizeRadio ' + item.type + '"  name="scores' + i + '" value="5">';
                html += ' <label for="5"></label></td>';
                html += ' </tr>';
            }
            document.getElementById('list').innerHTML = html;
            load_tr();

            function load_tr() {
                for (var i = 0; i < tr.length; i++) {
                    // if (index == 0) {
                    if ((i >= index * 10) && (i < (index * 10 + 10))) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                    // }
                }
                if (index == 0) {
                    $('#btnPrev').prop("disabled", true);
                    $('#btnNext').prop("disabled", false);
                } else if (index == 8) {
                    $('#btnPrev').prop("disabled", false);
                    $('#btnNext').prop("disabled", true);
                } else {
                    $('#btnPrev').prop("disabled", false);
                    $('#btnNext').prop("disabled", false);
                }
            }

        }

    });

});