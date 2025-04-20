import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'

function Contact() {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form , setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handelChange = ({target : {name , value}}) => {
        setForm({...form, [name]: value});
    }

    // service_i3mnnbb
    const handelSubmit = async(e) => {
        e.preventDefault();

        setLoading(true);

        try{
            emailjs.send('service_i3mnnbb', 
                'service_i3mnnbb',
                {
                    from_name: form.name,
                    to_name: 'weko',
                    from_email: form.email,
                    to_email: 'kgostudio571@gmail.com',
                    message: form.message,
                },
                'LgZ2s6eZmKn1MQeg1'
            )

            setLoading(false);
            alert('Your messgae has been sent!');

            setForm({
                name: "",
                email: "",
                message: ""
            })
        }catch(error){
            setLoading(false);
            alert('Something went wrong!');
        }

        
    }


  return (
    <section className="c-space my-20">

        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen" />
            <div className="contact-container">
                <h3 className="head-text" >Let's talk</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                    life, I’m here to help.
                </p>

                <form ref={formRef}  onSubmit={handelSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name</span>
                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handelChange}
                            required
                            className="field-input"
                            placeholder="John Doe"
                        />
                    </label>

                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handelChange}
                            required
                            className="field-input"
                            placeholder="johndoe@gmail.com"
                        />
                    </label>

                    <label className="space-y-3">
                        <span className="field-label">Your Message</span>
                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handelChange}
                            required
                            rows={5}
                            className="field-input"
                            placeholder="Hi, I wanna give you a job..."
                        />
                    </label>

                    <button className="field-btn" onSubmit={handelSubmit} type="submit" disabled={loading}>
                        {loading ? 'sending' : 'Send Message'}

                        <img 
                            src="/assets/arrow-up.png"
                            alt="arrow-up"
                            className="field-btn_arrow"
                        />
                    </button>

                </form>
            </div>
        </div>

    </section>
  )
}

export default Contact