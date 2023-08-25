import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="border p-5 bg-white shadow-lg rounded-md">
            <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
            <hr />

            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black ">
                <span>Price</span>
                <span>₹5000</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-700">-₹500</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-700">Free</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span className="text-green-700">₹4500</span>
              </div>
            </div>

            <Button
              // onClick={() => navigate("/checkout?step=2")}
              variant="contained"
              type="submit"
              sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%", bgcolor:"#9155fd" }}
            >
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
