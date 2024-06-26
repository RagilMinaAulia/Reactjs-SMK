import {useState} from 'react';
import Tabel from "./Tabel";

function Menu() {
    const title= "Daftar Menu Restoran";
    const [menus, setMenu] = useState(
        [
            {
                idmenu: 1,
                idkategori: 1,
                menu: "Bakso",
                gambar: "bakso.jpg",
                harga: 12000,
            },
            {
                idmenu: 2,
                idkategori: 1,
                menu: "Bebek madura",
                gambar: "bebek.jpeg",
                harga: 15000,
            },
            {
                idmenu: 3,
                idkategori: 1,
                menu: "Ayam geprek",
                gambar: "ayam.jpg",
                harga: 11000,
            },
            {
                idmenu: 4,
                idkategori: 2,
                menu: "Es Buah",
                gambar: "es buah.jpg",
                harga: 8000,
            },
            {
                idmenu: 5,
                idkategori: 2,
                menu: "Es Cendol",
                gambar: "es cendol.jpe",
                harga: 7000,
            }
        ]
    );
    return (
      <div className="App">
          <Tabel menu= {menus} title={title}/>
          <Tabel menu= {menus.filter((data) => (data.idkategori===2))} title= "Menu Minuman"/>
      </div>
    );
  }
  
  export default Menu;