import React , {useState, useEffect} from 'react'
import storeItems from '../data/items.json'
import {  StoreItemCard } from '../components/StoreItemCard'
import { useDataContext } from '../context/ProductsProvider'
import MoonLoader from 'react-spinners/MoonLoader'
import axios from 'axios'




const Store:React.FC = () => {
  const { data, isLoading, filterCategory } = useDataContext();
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = async (category: string) => {
    await filterCategory(category);
    setSelectedCategory(category);
  };


  if (isLoading) {
    return <div className='mt-[50%] mb-[20rem] md:mt-[30%] w-fit mx-auto'>
        <MoonLoader color='green'
         speedMultiplier={0.3}
         size={30}/>
    </div>;
  }

  return (
    <div>
      <div className="w-[90%] md:w-fit  mx-auto">
        <div className='mt-4'>
          <h1 className='text-center'> Shop by Categories</h1>
        </div>
      
     
      </div>
      <div className='w-fit mx-auto space-x-2 '>
        
        {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={selectedCategory === category ? 'text-black bg-[#f1a457] rounded-md px-2  hover:bg-[#e1a66b] transition ease-in duration-300 ' : ' bg-gray-300 hover:bg-gray-400 transition ease-in duration-300 rounded-md px-2 '}
            >
               {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      <div className='grid mt-8 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-x-4 transition duration-300 ease-in'>
        {data.map((item: any) => (
          <div key={item.id}>
            <StoreItemCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store