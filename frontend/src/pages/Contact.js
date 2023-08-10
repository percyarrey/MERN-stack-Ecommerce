import React from 'react'

import { FaEnvelope, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
function Contact() {
  return (
    <div>
<section className="mb-4">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form method="POST">

                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">Your name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="">Your email</label>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label htmlFor="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div className="mt-1">
                <a className="btn btn-primary">Send</a>
            </div>
            <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li>
                  <FaMapMarkerAlt size={26}/>
                    <p>South West, Buea Cameroon</p>
                </li>

                <li><FaPhoneAlt size={26}/>
                    <p>+ 237 674751518</p>
                </li>

                <li><FaEnvelope size={26}/>
                    <p>tanyitikuarrey@gmail.com</p>
                </li>
            </ul>
        </div>

    </div>

</section>
    </div>
  )
}

export default Contact