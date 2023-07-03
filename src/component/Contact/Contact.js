import React, {useContext, useRef} from "react";
import {WindowContext} from "../../context/WindowContext";
import emailjs from '@emailjs/browser'

import MainContainer from "../Container/MainContainer";
import TitleMove from "../TitleMove/TitleMove";

const Contact = () => {

  const {windowSize} = useContext(WindowContext)
  const form = useRef()
  const subject = useRef()
  const your_email = useRef()
  const message = useRef()


  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_h4hpya9', 'template_d0fre0v', form.current, 'KjU3IEVR8u0ADd7Tw')
    .then((result) => {
        alert('Email sent, i will contact you shortly ! =D');
          subject.current.value = ''
          your_email.current.value = ''
          message.current.value = ''
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <MainContainer width={"100%"} height={"800px"} id={"contact"}>

{ windowSize.width < 940 ? 
      null
      : 
      <TitleMove containerHeight={700} title={"CONTACT"} />

      }
      
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-offset="100"
        class="mt-12 w-8/12"
      >
        <div class="py-8 lg:py-16 px-4 mx-auto w-full">
          <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Me
          </h2>
          <form ref={form} action="#" onSubmit={sendEmail} className="space-y-8 w-12/12">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
              ref={your_email}
                type="email"
                name="user_name"
                id="user_name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                ref={subject}
                type="text"
                id="from_name"
                name="from_name"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="How can i help you"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
              ref={message}
                id="message"
                name="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="What's on your mind"
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-semibold text-center text-black rounded-lg bg-[#fd0] bg-opacity-80 sm:w-fit hover:bg-opacity-100 focus:ring-4 focus:outline-none"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </MainContainer>
  );
};

export default Contact;
