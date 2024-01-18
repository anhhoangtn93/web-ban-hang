const Header = () => {
  return (
    <header>
      <div className="wrap-header flex w-full h-auto flex-col items-center py-5 bg-[#2579f2] text-white">
        <div className="wrap-top-header flex h-auto flex-col items-center max-w-[1240px] w-full px-5">
          <div className="top-header flex h-auto flex-row justify-between items-center w-full">
            <a href="#" className="logo p-2">logo</a>
            <div className="search-box">
              <input type="text" />
            </div>
            <div className="user-login">login</div>
            <div className="cart">cart</div>
          </div>

          <div className="main-menu flex h-auto flex-row justify-between items-center w-full mt-5">
            <a className="block" href="#">
              m1
            </a>
            <a className="block" href="#">
              m2
            </a>
            <a className="block" href="#">
              m3
            </a>
            <a className="block" href="#">
              m4
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
