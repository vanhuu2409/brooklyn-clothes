import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_cl9jev4";
const REGISTER_TEMPLATE_ID = "template_gcnj2du";
const ORDER_TEMPLATE_ID = "template_d3c79tt";
const PUBLIC_KEY = "cKPYc4sHfHDeD81hy";

export const sendRegisterEmail = (data) => {
  emailjs.send(
    SERVICE_ID,
    REGISTER_TEMPLATE_ID,
    { email: data.email, username: data.username },
    { publicKey: PUBLIC_KEY }
  );
};

export const sendOrderEmail = (data) => {
  emailjs.send(
    SERVICE_ID,
    ORDER_TEMPLATE_ID,
    {
      email: data.email,
      address: data.address,
      username: data.username,
      orderItems: data.orderItems,
      quantity: data.quantity,
      total: data.total,
    },
    { publicKey: PUBLIC_KEY }
  );
};
