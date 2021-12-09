import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { cartButtonAction } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const showModal = useSelector((state) => state.ui.isShown);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showModal && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
