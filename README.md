## Create Data
    $ mongo
    > use catalog
    > db.createCollection('products')
    > db.products.insert({name:'Fire Table', category:'Electronics', model:'B00TSUGXKE', price:67.99, image:'', details:''})

## Enable CORS
    https://enable-cors.org/server_expressjs.html