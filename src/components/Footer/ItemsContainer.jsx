import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="foots grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3   sm:px-7 px-5 ">
      <Item Links={PRODUCTS} title="СВЯЗАТЬСЯ С НАМИ" />
      <Item Links={RESOURCES } title="ПОЛЬЗОВАТЕЛЯМ" />
      <Item Links={COMPANY} title="О НАС" />
      {/* <Item Links={SUPPORT} title="SUPPORT" /> */}
    </div>
  );
};

export default ItemsContainer;
