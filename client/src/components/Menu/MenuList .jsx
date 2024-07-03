import SingleMenu from "./SingleMenu";
import Menu from "../../data/Menu";

const MenuList = () => {
  return (
    <div>
      {Menu.map(({ id, menu, submenu }) => (
        <SingleMenu key={id} menu={menu} submenu={submenu} />
      ))}
    </div>
  );
};

export default MenuList;
