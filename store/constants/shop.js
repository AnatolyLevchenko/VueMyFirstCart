 const _products = [{
         Id: 1,
         Price: 200,
         Title: "Mobile Phone 1",
         Description: "Product Description",
         CategoryId: 1
     },
     {
         Id: 2,
         Price: 400,
         Title: "Mobile Phone 2",
         Description: "Product Description",
         CategoryId: 1
     },
     {
         Id: 3,
         Price: 1000,
         Title: "Mobile Phone 3",
         Description: "Product Description",
         CategoryId: 1
     },
     {
         Id: 4,
         Price: 500,
         Title: "Mobile Phone 4",
         Description: "Product Description",
         CategoryId: 1
     },
     {
         Id: 5,
         Price: 500,
         Title: "Lapetop",
         Description: "Product Description",
         CategoryId: 2
     },
     {
         Id: 6,
         Price: 500,
         Title: "Modern PC",
         Description: "Product Description",
         CategoryId: 2
     },
     {
         Id: 7,
         Price: 500,
         Title: "Car 1",
         Description: "Product Description",
         CategoryId: 3
     },
     {
         Id: 8,
         Price: 500,
         Title: "Car 2",
         Description: "Product Description",
         CategoryId: 3
     }
 ]

 export default {
     getProducts(cb) {
         setTimeout(() => {
             cb(_products)
         }, 100);
     }
 }