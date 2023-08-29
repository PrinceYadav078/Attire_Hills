import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Customers/Order/Action";

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const dispatch = useDispatch();

  const { order } = useSelector((store) => store);

  console.log("orderId ", order.order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-md border ">
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative justify-between pt-5 ">
          <div className="col-span-2 space-y-5">
            {order.order?.orderItems.map((item)=><CartItem item={item}/>)}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({order.order?.totalItem} item)</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-₹{order.order?.discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">₹{order.order?.totalDiscountedPrice}</span>
                </div>
              </div>

              <Button
                // onClick={() => navigate("/checkout?step=2")}
                variant="contained"
                type="submit"
                sx={{
                  padding: ".8rem 2rem",
                  marginTop: "2rem",
                  width: "100%",
                  bgcolor: "#9155fd",
                }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
