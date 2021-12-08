import { useDispatch } from "react-redux";
import { cartButtonAction } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(cartButtonAction.toggle());
  };

  return (
    <button className={classes.button} onClick={showModalHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
