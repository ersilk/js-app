$(document).ready(function() {
    $.ajax({
        url: "https://lastsupper.al/api/v1/product"
    }).then(function(data) {
        for (var i = 0; i < data.payload.length; i++){
            var name = data.payload[i].name;
            var category = data.payload[i].category.name;
            var url = data.payload[i].picture.url;
            var price = data.payload[i].prices[0].price;
            var description = data.payload[i].description;
            var created = data.payload[i].createdAt;
            var updated = data.payload[i].updatedAt;
            
            $('.product-list').append('<img class="product_img" src="' + url + '" alt="pics"></img>' + '<p class="product_name">' + name + '</p>' + '<p class="category_name">' + category + '</p>');
            $('.product-details').append(data.content);
        }
       
    });
});