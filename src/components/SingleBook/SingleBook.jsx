import React from "react";
import { Link } from "react-router-dom";

const SingleBook = ({ book }) => {
  const { image, subtitle, title, isbn13, price } = book;

  
  // console.log(book);
  return (
    <Link to ={`../book/${isbn13}`} > 
    
    
 <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2">
      <img
        className="object-cover w-full h-56 md:h-64 xl:h-80"
        src={image}
        alt="book cover"
      />

      <div className="bg-black px-4 py-4  bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200 rounded shadow-lg hover:shadow-2xl flex flex-col ">
        <p className="text-2xl font-semibold">{title}</p>
        <br />
        <p>{subtitle.substring(0, 45)}....</p>
        <br />
        <p className="mt-auto font-semibold">Price:{price}</p>
      </div>
    </div>

    
    </Link>
   
  );
};

export default SingleBook;
