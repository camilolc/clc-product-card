import  { useEffect, useRef, useState } from "react";
import { InitialValues, Product, onChangeArgs } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    // setCounter((prev) => Math.max(prev + value, 0));
    let newValue = Math.max(counter + value, 0);

    console.log({newValue})
    // if(newValue - 1  == initialValues?.maxCount ) return;
    if(initialValues?.maxCount) newValue = Math.min(newValue, initialValues.maxCount)
    setCounter(newValue);
    onChange && onChange({ count: newValue, product });
  };

  const reset =()=>{
    setCounter(initialValues?.count || value);
  }
  
  //Mount the component taking the initial value
  useEffect(() => {
    if(!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(()=>{
    isMounted.current = true;
  },[])
  

  return {
    counter,
    isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    
    increaseBy,
    reset
  };
};
