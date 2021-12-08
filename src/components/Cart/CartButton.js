import { useDispatch, useSelector } from "react-redux";
import { cartButtonAction } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const cardQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(cartButtonAction.toggle());
  };

  return (
    <button className={classes.button} onClick={showModalHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cardQuantity}</span>
    </button>
  );
};

export default CartButton;
