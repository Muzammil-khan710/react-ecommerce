export const categoryFiltered = (products, { Analog, Chronograph, SmartWatch, Casio, Police, Fossil, Amazfit }) => {
    let selectedCategories = [];
  
    if (Analog) selectedCategories.push("Analog");
    if (Chronograph) selectedCategories.push("Chronograph");
    if (SmartWatch) selectedCategories.push("Smartwatch");
  
    let selectedBrands = [];
  
    if (Casio) selectedBrands.push("Casio");
    if (Police) selectedBrands.push("Police");
    if (Fossil) selectedBrands.push("Fossil");
    if (Amazfit) selectedBrands.push("Amazfit");
  
    if (selectedCategories.length === 0 && selectedBrands.length === 0) return products;
  
    return products.filter(item => {
      return (
        (selectedCategories.length === 0 || selectedCategories.includes(item.categoryName)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(item.brand))
      );
    });
  };
  