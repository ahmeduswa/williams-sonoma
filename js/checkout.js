var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

console.log(id);

var client = contentful.createClient({
    space: '831z9qduz6ad',
    accessToken: 'NYN8eQBmrk35AocE8Py88UyWzrwvwSKLcA0p4eywcLU',
  });

  var product = document.getElementById('product');
  client.getEntry(id).then(function (entry) {
    console.log(entry);
  
    

    entry.fields.checkout.forEach(function(image){
    var img = document.createElement('img');
     img.src = image.fields.file.url;
    product.appendChild(img);
   }) 
   product.appendChild(checkoutDiv);

  }); 

  

  document.getElementById('menu-toggle').addEventListener('click',function() {
    document.getElementById("menu").classList.toggle("active");
})
