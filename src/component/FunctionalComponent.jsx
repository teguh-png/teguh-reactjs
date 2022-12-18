import { useState } from "react";
const FunctionalComponent = ({header}) => {

    const [value, setValue] = useState({nama: 'Teguh Firmansyah', alamat: 'Makassar', umur : 25});

    const ubahNama = () => {
        setValue({nama: 'Budi', alamat: 'Jakarta', umur: 23})
    }



    return (

        <div>
            <h1>{header}</h1>
            <h3>Nama : {value.nama}</h3>
            <h3>Alamat : {value.alamat}</h3>
            <h3>Umur : {value.umur}</h3>
            <button onClick={ubahNama}>Klik untuk mengubah biodata</button>
        </div>
    )
}

export default FunctionalComponent;