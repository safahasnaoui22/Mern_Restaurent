import React, { useState } from 'react'
import axios from 'axios'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom'
import { data } from '../restApi.json';
function Reservation() {
    const [firstName , setFirstName] = useState('')
    const [lastName , setLastName] = useState('')
    const [email , setEmail] = useState('')
    const [date , setDate] = useState('')
    const [time , setTime] = useState(0)
    const [phone , setPhone] = useState('')
    const navigate = useNavigate()

    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/api/reservtion/send",
                { firstName, lastName, email, phone, date, time },
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            toast.success(response.data.message);
            setFirstName("");
            setLastName('');
            setEmail('');
            setDate('');
            setTime('');
            setPhone('');
            navigate('/succ');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("An error occurred while processing your request.");
            }
        }
    }
    
    
  return (
   <section className='reservation' id='reservation'>
    <div className="container">
        <div className='banner'>
            <img src='/reservation.png'/>
        </div>
        <div className="banner">
            <div className="reservation_form_box">
                <h1>Make a Reservation</h1>
                <p>For Further Questions  , please call</p>
                <form>
                    <div>
                        <input
                        type='text'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />

                         <input
                        type='text'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type='date' 
                        placeholder='date'
                        value={date}
                        onChange={(e)=> setDate(e.target.value)}
                        />

<input type='time' 
                        placeholder='Time'
                        value={time}
                        onChange={(e)=> setTime(e.target.value)}
                        />
                    </div>

<div>
<input type='email' 
className='email_tag'
                        placeholder='Email'
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />

<input type='number' 
                        placeholder='Phone'
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                        />

 <button type='submit' onClick={handleReservation}>RESERVE NOW
 <span>
    <HiOutlineArrowNarrowRight/>
 </span>
 </button>                       
</div>

                </form>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Reservation