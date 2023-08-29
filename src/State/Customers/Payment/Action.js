
import api from "../../../config/apiConfig";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType";



export const createPayment = (orderId) => async (dispatch) => {
  console.log("create payment orderid ", orderId);

  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.post(
      `/api/payments/${orderId}`,
      {}
    );
    console.log("data", data);
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    // dispatch({
    //   type: CREATE_PAYMENT_SUCCESS,
    //   payload: data,
    // });
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }
};

export const updatePayment = (reqData) => {
  return async (dispatch) => {
    console.log("update payment reqData ", reqData);
    dispatch(updatePaymentRequest());
    try {
      
      const response = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
      
      console.log("updated data", response.data);
    //   dispatch(updatePaymentSuccess(response.data));
    } catch (error) {
      dispatch(updatePaymentFailure(error.message));
    }
  };
};

export const updatePaymentRequest = () => {
  return {
    type: UPDATE_PAYMENT_REQUEST,
  };
};

export const updatePaymentSuccess = (payment) => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payload: payment,
  };
};

export const updatePaymentFailure = (error) => {
  return {
    type: UPDATE_PAYMENT_FAILURE,
    payload: error,
  };
};
