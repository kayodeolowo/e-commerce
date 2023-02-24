import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { PropsWithChildren } from 'react';

interface IDataContext {
  data: any;
  isLoading: boolean;
}

const DataContext = createContext<IDataContext>({
  data: null,
  isLoading: false,
});



export const useDataContext = () => useContext(DataContext);

export const DataProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      setData(result.data);
      setIsLoading(false);
      //console.log(result.data, "products")
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};
