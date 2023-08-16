import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confPassword, setConfPassword ] = useState('');
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ telephone, setTelephone ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ city, setCity ] = useState('');
    const [ province, setProvince ] = useState('');
    const [ country, setCountry ] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    

    const Register = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                username: username,
                email: email,
                password: password,
                confPassword: confPassword,
                first_name: firstName,
                last_name: lastName,
                telephone: telephone,
                address: address,
                city: city,
                province: province,
                country: country
            });
            navigate("/");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
            <div className="container">
            <div className="columns is-centered">
                <div className="column is-4-desktop">
                    
                    <form onSubmit={ Register } className='box'>
                    <p className='has-text-centered'>{msg}</p>
                        <div className="field mt-5">
                            <label className='label'>Username</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Email</label>
                            <div className="controls">
                                <input type="email" className='input' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Password</label>
                            <div className="controls">
                                <input type="password" className='input' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Confirm Password</label>
                            <div className="controls">
                                <input type="password" className='input' placeholder='********' value={confPassword} onChange={(e) => setConfPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>First Name</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Last Name</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Telephone</label>
                            <div className="controls">
                                <input type="number" className='input' placeholder='Telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Address</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>City</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='city' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Province</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='province' value={province} onChange={(e) => setProvince(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>country</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='country' value={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                        <button className='button is-success is-fullwidth'>Register</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Register