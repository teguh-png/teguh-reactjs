import React from "react";
import * as Validator from 'validatorjs';

const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label> {label}: </label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{color: 'red', marginLeft:'-20px'}}>
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

class Validation extends React.Component {

    state = {
        nama: '',
        email: '',
        password: '',
        confirmPassword: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {nama, email, password, confirmPassword} = this.state;

        let data = { nama, email, password, confirmPassword };
          
          let rules = {
            nama: 'required|string',
            email: 'required|email',
            password: 'min:8|required',
            confirmPassword: 'required|same:password'
          };

          let message = {
            'required.nama': 'Kolom nama wajib di isi',
            'string.nama': 'Nama harus berupa huruf',
            'required.email': 'Kolom email wajib diisi',
            'email.email': 'Email tidak valid',
            'required.password': 'Password wajib di isi',
            'min.password': 'Kata sandi harus minimal 8 karakter',
            'required.confirmPassword': 'Kolom konfirmasi kata sandi wajib diisi',
            'same.confirmPassword': 'Konfirmasi kata sandi harus sama dengan kata sandi'
          };

          let validation = new Validator(data, rules, message);

          if (validation.fails()) {
            this.setState({errors: validation.errors.all()});
          } else {
            alert(`
            Nama: ${this.state.nama}
            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
            this.setState({nama: '', email: '', password: '', confirmPassword: '', errors: []});
          }

          validation.passes();
          this.setState({
            errors: [
                ...validation.errors.get('nama'),
                ...validation.errors.get('email'),
                ...validation.errors.get('password'),
                ...validation.errors.get('confirmPassword')
            ]
          })
        }
    render () {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px',
            display: 'grid',
        placeItems: 'center'
        }
        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h4>Login Page</h4>
                <form >
                    <Input type="text" name="nama" label="Nama" onChange={value => this.setState({nama: value})} />
                    <Input type="email" name="email" label="Email" onChange={value => this.setState({email: value})} />
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})} />
                    <Input type="password" name="confirmPassword" label="ConfirmPassword" onChange={value => this.setState({confirmPassword: value})} />
                </form>
                <br />
                <button type="submit" onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}

export default Validation;