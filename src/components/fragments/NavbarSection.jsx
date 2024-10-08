import React, { useState, useEffect } from "react";
import ButtonNav from "../elements/button/ButtonNav";
import { useSelector } from "react-redux";

function NavbarSection() {
  const [totalQuantity, setTotalQuanity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuanity(total);
  }, [carts]);

  return (
    <nav className="fixed left-2 lg:right-0 lg:left-0 right-2   bg-clip-padding backdrop-filter whitespace-nowrap backdrop-blur-xl bg-opacity-50 lg:bg-transparent bg-black lg:top-0 top-0 py-2 border  border-zinc-100/10 lg:relative z-50 my-2 rounded-[1.5rem] ">
      <div className="flex lg:justify-end gap-0 lg:gap-2 justify-evenly   ">
        <ButtonNav linkPage="/" classname="active-class">
          Home
        </ButtonNav>
        <ButtonNav linkPage="/about" classname="active-class">
          About Us
        </ButtonNav>
        <ButtonNav linkPage="/product" classname="active-class">
          Product
        </ButtonNav>
        <ButtonNav linkPage="/cart" classname="active-class">
          Cart ({totalQuantity})
        </ButtonNav>
      </div>
    </nav>
  );
}

export default NavbarSection;

// 1. useState, state untuk menyimpan jumlah total nilai item dalam keranjang (cart)
// 2. untuk mengakses state global dari Redux store. Dalam hal ini,
//    store.cart.items mengacu pada array items yang ada di dalam slice cart.
//    carts akan berisi daftar item dalam keranjang.
// 3. useEffect digunakan di sini untuk memantau perubahan pada carts.
//    Setiap kali carts berubah, efek ini akan dijalankan:
//    total diinisialisasi dengan 0.
//    Loop forEach digunakan untuk menjumlahkan quantity dari setiap item dalam carts.
//    Setelah semua item dijumlahkan, setTotalQuanity(total) dipanggil untuk memperbarui state totalQuantity dengan total yang baru dihitung.

//Ringkasan
// 1. NavbarSection memantau isi keranjang belanja (carts) menggunakan useSelector.
//    Ketika carts berubah, useEffect dijalankan untuk menghitung total kuantitas item
//    dalam keranjang.
// 2. totalQuantity kemudian digunakan untuk memperbarui teks pada tombol "Cart"
//    di navbar.
// 3. Dengan begitu, navbar selalu menampilkan jumlah item
//    yang up-to-date di keranjang belanja pengguna.
