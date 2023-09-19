export const categoryFiltered = (products,{Analog, Chronograph, SmartWatch, Automatic }) =>{
    let categoryFilteredProduct = []; 

    if (Analog)
    categoryFilteredProduct = [ 
        ...categoryFilteredProduct, ...products.filter((item) => item.categoryName === "Analog"),
    ];

    if (Chronograph )
    categoryFilteredProduct = [
        ...categoryFilteredProduct, ...products.filter((item) => item.categoryName === "Chronograph"),
    ];

    if (SmartWatch)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...products.filter((item) => item.categoryName === "SmartWatch"),
    ];
    if (Automatic)
    categoryFilteredProduct =[ 
        ...categoryFilteredProduct , ...products.filter((item) => item.categoryName === "Automatic"),
    ];
 
    if (categoryFilteredProduct.length === 0 ) return products;

    return categoryFilteredProduct;
};