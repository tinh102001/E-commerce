import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PaypalButton({ total, tranSuccess }) {

  const currency = "USD";

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "ARCvCgZSSaABWu1nmL0bCPB5qdZM6e16vVM_MsT9qiQ3OdiXhaVWdvO6ennE7ay6G3DI7mi6LIwH1MES",
      }}
    >
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: "1200",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();
          console.log(details)
          const payment = {
            paymentID: details.id,
            address: details.purchase_units[0].shipping,
          };
          tranSuccess(payment);
        }}
      />
    </PayPalScriptProvider>
  );
}

