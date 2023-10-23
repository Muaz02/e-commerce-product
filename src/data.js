const products = [
   {
      id:1,
      name:'Fall Limited Edition Sneakers',
      priceBeforeDis:250,
      discount:50,
      price: function() {
         return Math.floor(this.priceBeforeDis * this.discount / 100)
      },
      images: [
         "image-product-1.jpg",
         "image-product-2.jpg",
         "image-product-3.jpg",
         "image-product-4.jpg",
         ],
      thumbnail: "\image-product-1-thumbnail.jpg",
      description:`These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber 
         outer sole, they'll withstand everything the weather can offer.`,
      
   }
]

const cartData = [

]

export { products, cartData }