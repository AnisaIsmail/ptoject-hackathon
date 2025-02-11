'use client'
import { useState } from "react";

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface SearchBarProps {
  products: Product[];
}

const SearchBar: React.FC<SearchBarProps> = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  // Handle input change for search query
  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    
    // Filter products based on the search query
    const result = products.filter((product) => 
      product.name.toLowerCase().includes(query.toLowerCase()) || 
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(result);
  };
  
  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchInput}
        className="p-2 w-64 border border-gray-400 rounded"
        placeholder="Search products..."
      />
      
      {searchQuery && filteredProducts.length === 0 && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-400 rounded p-2">
          <p>No products found</p>
        </div>
      )}

      {/* Display filtered products */}
      {filteredProducts.length > 0 && (
        <div className="absolute top-full left-0 mt-2 bg-white border border-gray-400 rounded p-2 max-h-40 overflow-auto">
          {filteredProducts.map((product, index) => (
            <div key={index} className="p-2">
              <h5 className="font-bold">{product.name}</h5>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
