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

            $('.product-list').append('<button type="button" class="btn btn-default" id="'+i+'">' + '<img class="product_img" src="' + url + '" alt="pics"></img>' + '<p class="product_name">' + name + '</p>' + '<p class="category_name">' + category + '</p>' + '</button>');
            
            
        }
        $('.btn').click(function() {
            
              $('.product-details').empty();
              $('.product-details').append('<img class="big_img" src="' + data.payload[this.id].picture.url + '" alt="pics"></img>' + '<div class="details_box"><h6>Details</h6><p><strong>Category</strong>' + data.payload[this.id].category.name + '</p><p><strong>Description</strong>' + data.payload[this.id].description + '</p><p><strong>Price</strong>' + data.payload[this.id].prices[0].price + '</p><p><strong>Created at:</strong>' + data.payload[this.id].createdAt + '</p><p><strong>Updated at:</strong>' + data.payload[this.id].updatedAt + '</p></div>');
        });
    });
});