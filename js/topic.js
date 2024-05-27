$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "./topics/getAll",
        success: function(data) {
            var data = data.data;
            // console.log(data);
            var html6 = '';
            var html7 = '';
            var html8 = '';
            var html9 = '';
            var html10 = '';
            var html11 = '';
            var html12 = '';
            var stt = [1, 1, 1, 1, 1, 1, 1];
            // console.log(stt);
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                if (item.grade == 6) {
                    html6 += '<a class="row t-de-none hover hover-c-grey b-bot py-2"  onclick=contentTopic(' + "'" + item._id + "'" + ') style="align-items: center;">';
                    html6 += '<div class="col-1 t-a-center">' + stt[0] + '</div>';
                    html6 += ' <div class="col-11 up">' + item.title + '</div></a>';
                    stt[0] = stt[0] + 1;

                } else if (item.grade == 7) {
                    html7 += '<a class="row t-de-none hover hover-c-grey b-bot py-2"  onclick=contentTopic(' + "'" + item._id + "'" + ') style="align-items: center;">';
                    html7 += '<div class="col-1 t-a-center">' + stt[1] + '</div>';
                    html7 += ' <div class="col-11 up">' + item.title + '</div></a>';
                    stt[1] = stt[1] + 1;
                } else if (item.grade == 8) {
                    html8 += '<a class="row t-de-none hover hover-c-grey b-bot py-2"  onclick=contentTopic(' + "'" + item._id + "'" + ') style="align-items: center;">';
                    html8 += '<div class="col-1 t-a-center">' + stt[2] + '</div>';
                    html8 += ' <div class="col-11 up">' + item.title + '</div></a>';
                    stt[2] = stt[2] + 1;
                } else if (item.grade == 9) {
                    html9 += '<a class="row t-de-none hover hover-c-grey b-bot py-2"  onclick=contentTopic(' + "'" + item._id + "'" + ') style="align-items: center;">';
                    html9 += '<div class="col-1 t-a-center">' + stt[3] + '</div>';
                    html9 += ' <div class="col-11 up">' + item.title + '</div></a>';
                    stt[3] = stt[3] + 1;
                } else if (item.grade == 10) {
                    html10 += '<a class="row t-de-none hover hover-c-grey b-bot py-2"  onclick=contentTopic(' + "'" + item._id + "'" + ') style="align-items: center;">';
                    html10 += '<div class="col-1 t-a-center">' + stt[4] + '</div>';
                    html10 += ' <div class="col-11 up">' + item.title + '</div></a>';
                    stt[4] = stt[4] + 1;
                } else if (item.grade == 11) {
                    html11 += '<a class="row t-de-none hover hover-c-grey b-bot py-2"  onclick=contentTopic(' + "'" + item._id + "'" + ') style="align-items: center;">';
                    html11 += '<div class="col-1 t-a-center">' + stt[5] + '</div>';
                    html11 += ' <div class="col-11 up">' + item.title + '</div></a>';
                    stt[5] = stt[5] + 1;
                } else if (item.grade == 12) {
                    html12 += '<a class="row t-de-none hover hover-c-grey b-bot py-2"  onclick=contentTopic(' + "'" + item._id + "'" + ') style="align-items: center;">';
                    html12 += '<div class="col-1 t-a-center">' + stt[6] + '</div>';
                    html12 += ' <div class="col-11 up">' + item.title + '</div></a>';
                    stt[6] = stt[6] + 1;
                }
            }
            document.getElementById('Class6').innerHTML = html6;
            document.getElementById('Class7').innerHTML = html7;
            document.getElementById('Class8').innerHTML = html8;
            document.getElementById('Class9').innerHTML = html9;
            document.getElementById('Class10').innerHTML = html10;
            document.getElementById('Class11').innerHTML = html11;
            document.getElementById('Class12').innerHTML = html12;
        }

    });

});

function contentTopic(_data) {
    // console.log(_data);
    window.location.href = '/topics/list?_id=' + _data;
}