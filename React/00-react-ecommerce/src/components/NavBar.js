import Categories from "./CategoriesNav";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <>
      <header className="header_comm">
        <div className="left_right">
          <a className="name_comm" href="/#">./Lika_Shop</a>
        </div>

        <Categories />

          <div className="right_nav">
              <span className="login_nav">Login</span>
              <CartWidget/>
          </div>
      </header>
    </>
  )
}

export default Navbar;