"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Social from "./Social";

const Contact = ({ setActiveSection }) => {
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+1 469 947 4379",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "awslegalai@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "800 W Campbell Rd, Richardson, TX, USA",
    },
  ];

  return (
    <div className="flex flex-row w-full justify-between">
          <motion.section
              initial={{ opacity: 0 }}
              animate={{
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeIn" },
              }}
          >
              <div className="w-full sm:px-10 px-2 md:mt-[180px] flex flex-col  sm:gap-[30px] gap-[20px]">


                  <div className="w-full mb-8 xl:mb-0">
                      <ul className="flex flex-col gap-10">
                          {info.map((item, index) => {
                              return (
                                  <li
                                      key={index}
                                      className="flex items-center justify-center sm:gap-6 gap-2"
                                  >
                                      <div className="w-[40px] h-[40px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-purple-300 rounded-md flex items-center justify-center">
                                          <div className="xl:text-[28px] text-[20px] ">{item.icon}</div>
                                      </div>
                                      <div className="flex-1">
                                          <p className="text-white/60">{item.title}</p>
                                          <h3 className="text-white sm:text-xl text-md">
                                              {item.description}
                                          </h3>
                                      </div>
                                  </li>
                              );
                          })}
                      </ul>
                  </div>

                  <div className="w-full mb-8 xl:mb-0 justify-center items-start">
                      <Social
                          containerStyles="flex gap-6"
                          iconStyles="md:w-12 md:h-12 w-10 h-10 hover:scale-125 border border-purple-300 rounded-full flex justify-center items-center text-purple-300 text-base hover:bg-purple-300 hover:text-primary transition-all duration-200"
                      />
                  </div>
              </div>
          </motion.section>
          <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className='left relative w-[30%] mt-20 lg:flex hidden items-center justify-center pt-10'
          >
              <img
                  src='lawyer.png'
                  alt='Lawyer'
                  className='w-auto h-auto max-h-[600px] object-contain'
              />
              <button className='hover:scale-105 duration-150 bg-[#00000080] hover:bg-purple-300 hover:text-black absolute top-5 right-5 rounded-full p-4 text-purple-300' onClick={() => setActiveSection("chatbot")}>
                  Click to start!
              </button>
              <div className='duration-150 bg-[#00000080]  hover:text-black absolute top-[50px] right-[145px] rounded-full p-4 text-purple-300'>
              </div>
              <div className='duration-150 bg-[#00000080]  hover:text-black absolute top-[80px] right-[180px] rounded-full p-2 text-purple-300'>
              </div>
          </motion.div>
    </div>
    
  );
};

export default Contact;
