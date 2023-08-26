import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import React from "react";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const OrderCard = () => {
  const navigate = useNavigate();
//   console.log("items ", item,order,order.orderStatus);
  return (
    <Box className="p-5 shadow-lg hover:shadow-2xl border ">
      <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div
            onClick={() => navigate(`/account/order/${5}`)}
            className="flex cursor-pointer"
          >
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim2.flixcart.com/image/300/300/xif0q/jean/1/8/o/30-mx-jeans-creatywitty-original-imag53mgyyguvmth-bb.jpeg?q=90"
              alt=""
            />
            <div className="ml-5 text-left">
              <p className="mb-2">Mens Slim Mid rise Black jeans</p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Size: L</span>
              </p>
              <p className="opacity-50 text-xs font-semibold space-x-5">
                <span>Color: Black</span>
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹2000</p>
        </Grid>
        <Grid item xs={4}>
          <p className="space-y-2 font-semibold">
            {true && 
             <>
             <FiberManualRecordIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 p-0 mr-2 text-sm"
                />
                <span>Delivered On Mar 03</span>

            </>}

              { false &&<>
               
                <AdjustIcon
                sx={{ width: "15px", height: "15px" }}
                className="text-green-600 p-0 mr-2 text-sm"
              />
              <span>Expected Delivery On Mar 03</span>
              </>}
            
          </p>
          <p className="text-xs">Your Item Has Been Delivered</p>
          {/* {item.orderStatus === "DELIVERED" && (
            <div
            //   onClick={() => navigate(`/account/rate/{id}`)}
              className="flex items-center text-blue-600 cursor-pointer"
            >
              <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </div>
          )} */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
