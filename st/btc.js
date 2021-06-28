let price = '';
  $.get(
    "http://localhost:19002/quotes",
    function (data) {
        price = data;
        $('p').text(price)
    },
    "json",
);
