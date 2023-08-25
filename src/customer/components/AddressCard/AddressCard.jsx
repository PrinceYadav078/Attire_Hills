import React from "react";

const AddressCard = ({address}) => {
  return (
    <div className="text-left">
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">Prince Yadav</p>

        <p>
          {`Raja Ka Taal, Firozabad, Uttar Pradesh, 283203`}
        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>8077046718</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
