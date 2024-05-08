import React from "react";
import location from "../Assets/location.jpg";
import phone from "../Assets/phone.jpg";
import email from "../Assets/email.jpeg";
import ContactForm from "../components/ContactForm";

const contactData = [
  {
    id: 1,
    img: location,
    title: "Location",
    desc: "Parambil House,Ayamkudy",
    desc1: "Ayamkudy P.O",
    desc2: "Kottayam,Kerala",
    desc3: "India - 686613",
  },
  {
    id: 2,
    img: phone,
    title: "Phone",
    desc: "+91 9074484624",
  },
  {
    id: 3,
    img: email,
    title: "Email",
    desc: "aronjose63@gmail.com",
  },
];

function ContactMe() {
  return (
    <div className="relative">
      <span className="absolute -top-[80px]" id="contact"></span>
      <div className="text-black font-serif  h-[1050px] lg:h-[900px] md:h-[1000px] ">
        <div className="container m-auto sm:px-10 ">
          <h4 className="text-black font-bold md:text-3xl pl-2 sm:text-xl text-xl md:mt-10 tracking-widest">
            Contact Me
          </h4>
          <div className="flex md:justify-center">
            <p className="font-bold md:text-3xl lg:text-5xl md:m-4 sm:text-xl text-lg pl-2 ">
              Let us weave our strengths as one
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16">
            <div className="mt-10">
              {contactData.map((data, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={data.img}
                    alt=""
                    className="w-[80px] mr-4 bg-green-400 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-xl">{data.title}</h4>
                    <p>{data.desc}</p>
                    <p>{data.desc1}</p>
                    <p>{data.desc2}</p>
                    <p>{data.desc3}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
