$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "/documents/getAll",
        success: function(data) {
            var data = data.data;
            console.log(data);
            var state = {
                'querySet': data,
                'page': 1,
                'rows': 15,
                'window': 5,
            }
            buildTable()

            function pagination(querySet, page, rows) {
                var trimStart = (page - 1) * rows
                var trimEnd = trimStart + rows
                var trimmedData = querySet.slice(trimStart, trimEnd)
                var pages = Math.round(querySet.length / rows);
                return {
                    'querySet': trimmedData,
                    'pages': pages,
                }
            }
            // function pageButtons(pages) {
            //     var wrapper = document.getElementById('pagination-wrapper')
            //     wrapper.innerHTML = ``
            //     // console.log('Pages:', pages)
            //     var maxLeft = (state.page - Math.floor(state.window / 2))
            //     var maxRight = (state.page + Math.floor(state.window / 2))
            //     if (maxLeft < 1) {
            //         maxLeft = 1
            //         maxRight = state.window
            //     }
            //     if (maxRight > pages) {
            //         maxLeft = pages - (state.window - 1)   
            //         if (maxLeft < 1){
            //             maxLeft = 1
            //         }
            //         maxRight = pages
            //     }
            //     for (var page = maxLeft; page <= maxRight; page++) {
            //         wrapper.innerHTML += `<button value=${page} class="page btn btn-sm bg-white hover-blue">${page}</button>`
            //     }
            //     if (state.page != 1) {
            //         wrapper.innerHTML = `<button value=${1} class="page btn btn-sm bg-white hover-blue">&#171; First</button>` + wrapper.innerHTML
            //     }
            //     if (state.page != pages) {
            //         wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm bg-white hover-blue">Last &#187;</button>`
            //     }
            //     $('.page').on('click', function() {
            //         $('#tabledoc').empty()
            //         state.page = Number($(this).val())
            //         buildTable()
            //     })
            // }
            function buildTable() {
                var table = $('#tabledoc')
                var data = pagination(state.querySet, state.page, state.rows)
                var myList = data.querySet;
                // console.log(myList);
                for (var i = 1 in myList) {
                    var row = '<tr>' +
                        '<td class="f-f-Gilroy-Bold t-c-black ">' + myList[i].number + '</td>' +
                        '<td class="f-f-Gilroy-Bold t-c-black ">' + myList[i].issuedTime + '</td>' +
                        '<td><a href="#" onClick="contentLegislation(' + "'" + myList[i]._id + "'" + ')" ' +
                        'class="f-f-Gilroy-Bold f-s-16 t-c-black hover-green t-de-none text-uppercase " >' +
                        myList[i].name + '</a></td>';

                    table.append(row)
                }
                // pageButtons(data.pages)
            }

        }
    });
});

function contentLegislation(_id) {
    // console.log(_data);
    // console.log(1);
    window.location.href = '/documents/content?_id=' + _id;

}