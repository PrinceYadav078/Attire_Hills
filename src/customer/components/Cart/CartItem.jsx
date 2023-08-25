import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim2.flixcart.com/image/300/300/xif0q/jean/1/8/o/30-mx-jeans-creatywitty-original-imag53mgyyguvmth-bb.jpeg?q=90"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1 text-left">
          <p className="font-semibold">Mens Slim mid rise black jeans</p>
          <p className="opacity-70">Size: L,Black</p>
          <p className="opacity-70 mt-2">Seller: Prince Yadav</p>
          <div className="flex space-x-2 items-center pt-3">
            <p className="opacity-50 line-through">₹211</p>
            <p className="font-semibold text-lg">₹199</p>
            <p className="text-green-600 font-semibold">5% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2 ">
          <IconButton  aria-label="add an alarm">
            <RemoveCircleOutlineIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">10</span>
          <IconButton  sx={{color:"RGB(145 85 253)"}} aria-label="add an alarm">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div className="flex text-sm lg:text-base mt-5 lg:mt-0">
          
          <Button sx={{color:"RGB(145 85 253)"}} variant="text">
            Remove{" "}
          </Button>
          
        </div>
      </div>

    </div>
  );
};

export default CartItem;
