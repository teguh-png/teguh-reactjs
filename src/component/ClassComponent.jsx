import React from "react";

class ClassComponent extends React.Component {

    state = {
        nama : 'Teguh Firmansyah',
        alamat : 'Makassar',
        umur : 25
    }

    ubahNama = () => {

        this.setState({nama:'Budi',alamat :'Jakarta',umur:24})
    }

    render () {

        return(

            <div>
                    <h1>{this.props.header}</h1>
                    <h3>Nama : {this.state.nama}</h3>
                    <h3>Alamat : {this.state.alamat}</h3>
                    <h3>Umur : {this.state.umur}</h3>
                    <button onClick={this.ubahNama}>Klik untuk mengubah biodata</button>
            </div>
        )
    }
}

export default ClassComponent;