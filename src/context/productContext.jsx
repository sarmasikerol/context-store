/* 
    * Context API
    * Uygulamadaki birden çok bileşenin ihtiyacı olan verileri bileşenlerden bağımsız bir şekilde konumlanan merkezlerde yönetmeye yarar
     
    * Context yapısı içersinde verilerin state'ini ve verileri değiştirmeye yarayan fonksiyonlar tutulabilir

    * Context, tuttuğumuz değişkenleri bileşenlere doğrudan aktarım yapabilen merkezi state yönetim aracıdır
*/

import axios from "axios";
import { createContext, useEffect, useState } from "react";

//! Context yapısının temelini oluşturma
export const ProductContext = createContext();

//! Bir sağlayıcı bileşeni tanımla - HOC
export const ProductProvider = ({ children }) => {
  // context yapısı içerisinde tutulan state
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // api'dan verileri al state'e aktar
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // context yapısında tuttuğumuz state/method'ları uygulamaya sağla
  return (
    <ProductContext.Provider value={{ data,isLoading,error }}>
      {children}
    </ProductContext.Provider>
  );
};
