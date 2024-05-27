$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "./ebook/getAll",
        success: function(data) {
            var data = data.data;
            let start = 0;
            let end = data.length;
            // console.log(data);
            var html = '';
            for (var i = 0; i < 7; i++) {
                var item = data[i];
                html += '<a class="col-lg-3 col-md-3 py-4 col-sm-12 hover-scale hover-orange t-de-none" onclick="contentHandbook(' + "'" + item._id + "'" + ')" href="#">';
                // html += '<center>';
                html += '<img src="/images/documents/' + item._id + '.jpg" class="m-w-100  "  >';
                // html += '<p class="f-f-Gilroy-Bold c-blue t-hover pt-1" style="min-width: 60%;">' + item.title + '</p>'
                // html += '</center>'
                html += '</a>';
            }
            document.getElementById('ebook').innerHTML = html;
        }

    });

});

function contentHandbook(_data) {
    // console.log(_data);
    window.location.href = '/ebook/content?_id=' + _data;

}