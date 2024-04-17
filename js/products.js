var client = contentful.createClient({
    space: '831z9qduz6ad',
    accessToken: 'NYN8eQBmrk35AocE8Py88UyWzrwvwSKLcA0p4eywcLU',
  });

  var featuredDiv = document.getElementById('products');
    client.getEntries({ content_type: 'wsProducts' }).then(function (entries) {
        entries.items.forEach(function (entry) {
            console.log(entry);
            var productDiv = document.createElement('div');
            

            console.log(entry.fields.mainImage.fields.file.url);
            var mainImage = document.createElement('img');
            mainImage.classList.add('main-image');
            
            if (entry.fields.mainImage) {
                var linkToProduct = document.createElement('a');
                linkToProduct.href = "checkout.html?id="+entry.sys.id;
                mainImage.src = entry.fields.mainImage.fields.file.url;
                linkToProduct.append(mainImage);
                productDiv.append(linkToProduct);
            }
            var name = document.createElement('h3');
            name.innerHTML = entry.fields.name;
            // adding class name > name.classList.add('')
            productDiv.append(name);
            var price = document.createElement('p');
            price.innerHTML = "$ " + entry.fields.price.toFixed(2);
            productDiv.append(price);



  
            featuredDiv.append(productDiv);

      
    
        });

  
});