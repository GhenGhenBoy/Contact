import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css';



function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const notify = () => toast("Thank You contacting Charme Furnitures!");

  const handleSubmit = (event) => {

    
    event.preventDefault();

    // setMessage(`Thank you for contacting us ${firstName} ${lastName}!`);
    setFirstName('');
    setLastName('');
    setSubject('');
    setMessage('')
    

    


  };

  return (
    <div class="nothing">
      <section class="nosa">
        <div class="ghenghen container">
          <h2 class="nosaheader">Contact</h2>
          <ul class="haaland">
            <li class="ajala banta"><a href="/" class="elijah">Home &nbsp;/</a></li>
            &nbsp;<li class="ajala">contact</li>
          </ul>
        </div>
      </section>


      <section className='eja'>
        <div class=" four container">
          <div class=" getme">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7928.352899393028!2d3.374595572176312!3d6.499333041108936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c61df1e0227%3A0x100b57195c262a19!2sAlagomeji-Yaba%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1677021686862!5m2!1sen!2sng" width={1000} height={500} title='frame' loading='eager' style={{border: '0'}} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
            <div class="buju row">
              <div class="equality col-lg-4">
                <div class="meg h-100">
                  <h2 class="fed">Contact Info</h2>
                  <div class="city">
                    <h3 class="jeff">Phone:</h3>
                    <div class="we">
                      <p><a href="tel:+012345678102">+012 345 678 102</a></p>
                      <p><a href="tel:+012345678203">+012 345 678 203</a></p>
                    </div>
                  </div>
                      <div class="city">
                        <h3 class="jeff">Email:</h3>
                        <div class="we">
                          <p><a href="mailto:email@here.com">email@here.com</a></p>
                          <p><a href="mailto:your@email.here">your@email.here</a></p>
                        </div>
                      </div>
                          <div class="city">
                            <h3 class="jeff">Address:</h3>
                            <div class="we">
                              <p>Address goes here,</p><p>street, Crossroad 123.</p>
                            </div>
                          </div>
                </div>
              </div>
                              <div class="equality col-lg-8">
                                <div class="bj">
                                  <h2 class="fed">Get In Touch</h2>
                                  <div>
                                    <form onSubmit={handleSubmit} class="hk">
                                      <div class="jik form-group">
                                        <div class=" buju row">
                                          <div class="equality col-md-6">
                                            <label for="firstName" class="queen">First Name</label>
                                            <input 
                                            onChange={(event) => setFirstName(event.target.value)}
                                            value={firstName}
                                             type="text" 
                                             id="firstName" 
                                             name="firstName" label="First Name" class="yeS"/>
                                          </div>
                                            <div class="equality mt-3 mt-md-0 col-md-6">
                                              <label for="lastName" class="queen">Last Name</label>
                                              <input onChange={(event) => setLastName(event.target.value)}
                                              value={lastName} 
                                              type="text" id="lastName" name="lastName" label="Last Name" class="yeS"/>
                                            </div>
                                        </div>
                                      </div>
                                              <div class="jik form-group">
                                                <label for="subject" class="queen">Subject</label>
                                                <input 
                                                 onChange={(event) =>
                                                  setSubject(event.target.value)}
                                                  value={subject}
                                                 type="text" id="subject" name="subject" label="Subject" class="yeS"/>
                                                </div>
                                                <div class="jik form-group">
                                                  <label for="message" class="queen">Message</label>
                                                  <textarea onChange={(event) => setMessage(event.target.value)}
                                                  value={message} 
                                                  rows="8" id="message" name="message" label="Message"></textarea>
                                                  </div>
                                                  <button onClick={notify} type="submit" color="white" class="btned w-100" font-size="standard">Send Message</button>
                                                  <ToastContainer />
                                    </form>
                                  </div>
                                </div>
                              </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Contact;