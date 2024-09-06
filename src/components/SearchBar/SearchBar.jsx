import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
     
      const onSubmit = (data) => {
        onSearch(data.search);
      };
    
      
      React.useEffect(() => {
        if (errors.search) {
          toast.error(errors.search.message);
        }
      }, [errors]);

  return (
    <>
      <header className="header">
        <Toaster /> 
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            {...register("search", { required: "This field is required" })}
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </>
  );
}