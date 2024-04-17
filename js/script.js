var client = contentful.createClient({
    space: '831z9qduz6ad',
    accessToken: 'NYN8eQBmrk35AocE8Py88UyWzrwvwSKLcA0p4eywcLU',
  });

  var featuredDiv = document.getElementById('featured');
    client.getEntries({ content_type: 'eCommerce' }).then(function (entries) {
        entries.items.forEach(function (entry) {
            console.log(entry);
            var productDiv = document.createElement('div');
            

            console.log(entry.fields.mainImage.fields.file.url);
            var mainImage = document.createElement('img');
            mainImage.classList.add('main-image');
            if (entry.fields.mainImage) {
                var linkToProduct = document.createElement('a');
                linkToProduct.href = "products.html"
                mainImage.src = entry.fields.mainImage.fields.file.url;
                linkToProduct.append(mainImage);
                productDiv.append(linkToProduct);
            }
            
            var name = document.createElement('h3');
            name.innerHTML = entry.fields.name;
            // adding class name > name.classList.add('')
            productDiv.append(name);


  
            featuredDiv.append(productDiv);

      
    
        });

        document.getElementById('menu-toggle').addEventListener('click',function() {
            document.getElementById("menu").classList.toggle("active"); });
});

