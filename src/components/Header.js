import React from "react";

function Header() {
  return (
    <header className="xs:px-4 h-60 bg-blue-800 py-4 text-white md:px-20 lg:px-40 xl:px-60">
      <div className="space-x-96p-2 flex justify-between">
        <h1 className="text-2xl font-bold">Booking.com</h1>
        <nav>
          <ul className="flex">
            <li className="mx-2 p-1 hover:bg-neutral-600">
              <a href="/">Đăng chỗ nghỉ của Quý vị</a>
            </li>
            <li className="mx-2 border bg-white p-1 text-blue-400">Đăng ký</li>
            <li className="mx-2 border bg-white p-1 text-blue-400">
              Đăng nhập
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
