$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "/jobs/getAll",
        success: function(data) {
            // console.log(data)
            var data = data.data;
            // let start = 0;
            // let end = data.length;
            console.log(data);
            var html = '';
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                html += '<div class="col-lg-3 col-sm-4 t-a-center py-3  hover-scale c-white t-de-none" onclick="ContentJobs(' + "'" + item._id + "'" + ')">';
                html += '<div class="bg-card-blue py-3 px-3 hover-bg-to-grey">';
                html += '<img src="/images/jobs/' + item._id + '.png" class="m-w-100 job-image">';
                html += '<p class="f-f-Gilroy-Bold f-s-26 pt-3 job-title">' + item.name + '</p>';
                html += '</div></div>';
            }
            document.getElementById('jobs-list').innerHTML = html;
        }
    });
});

function ContentJobs(_data) {
    // console.log(_data);
    window.location.href = '/jobs/search?_id=' + _data;

}