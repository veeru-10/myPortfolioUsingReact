import {
  Copy,
  MessagesSquare,
  Mail,
  PhoneCall,
  MapPinHouse,
  CircleCheckBig
} from "lucide-react";

import { useState } from "react";
import DarkMode from "./DarkMode";

const Contact = () => {
  const [emailEnable, setEmailEnable] = useState(false);
  const [pnhEnable, setPnhEnable] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleEmailCopy = (text) => {
    copyToClipboard(text);
    setEmailEnable(true);
    setTimeout(() => {
      setEmailEnable(false);
    }, 1000);
  };

  const handlePhoneCopy = (text) => {
    copyToClipboard(text);
    setPnhEnable(true);
    setTimeout(() => {
      setPnhEnable(false);
    }, 1000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <>
      {/* Added 'relative' here so absolute/z-index children align correctly */}
      <section  className="relative max-w-5xl mx-4 lg:mx-auto mt-20 mb-40">
        
        {/* Title Layer: Pushed down via translate-y and hidden behind via z-0 */}
        <div className="relative z-0 translate-y-3 lg:translate-y-5 text-center">
          <h1 id="contact" className="text-6xl lg:text-8xl uppercase font-black tracking-tight bg-gradient-to-b from-black to-white/90 dark:bg-gradient-to-b dark:from-white dark:via-white/50 dark:to-black bg-clip-text text-transparent leading-none">
            contact
          </h1>
        </div>

        {/* Main Card Layer: Pulled forward using z-10 and given relative positioning */}
        <div className="relative z-10 glass-2 bg-white/5 dark:bg-black/25 border border-white/50 rounded-lg p-8 shadow-xl dark:shadow-white/10 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Section */}
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="text-3xl font-bold mb-3">Get In Touch</h1>
                <p className="text-gray-700  dark:text-white/70">
                  Feel free to contact me if you have any queries, opportunities,
                  or just want to connect.
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/15 dark:bg-black/10 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="bg-white/30 dark:bg-black w-10 h-10 rounded-full backdrop-blur-lg flex items-center justify-center shadow-sm shadow-gray-900">
                    <Mail className="text-blue-800" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-800 dark:text-white/70">Email</p>
                    <p className="font-medium">
                      veeranjinivemala@gmail.com
                    </p>
                  </div>
                </div>

                {emailEnable ? (
                  <div className="text-green-700 ">
                    <CircleCheckBig />
                  </div>
                ) : (
                  <Copy
                    className="cursor-pointer hover:scale-110 transition"
                    size={18}
                    onClick={() => handleEmailCopy("veeranjinivemala@gmail.com")}
                  />
                )}
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/15 dark:bg-black/10 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="bg-white/30 dark:bg-black w-10 h-10 rounded-full backdrop-blur-lg flex items-center justify-center shadow-sm shadow-gray-900">
                    <PhoneCall className="text-sky-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-white/70">Phone</p>
                    <p className="font-medium">+91 8919086876</p>
                  </div>
                </div>

                {pnhEnable ? (
                  <div className="text-green-700">
                    <CircleCheckBig />
                  </div>
                ) : (
                  <Copy
                    className="cursor-pointer hover:scale-110 transition"
                    size={18}
                    onClick={() => handlePhoneCopy("+91 8919086876")}
                  />
                )}
              </div>

              {/* Address */}
              <div className="flex items-center justify-between gap-4 p-4 rounded-xl bg-white/15 dark:bg-black/10 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="bg-white/30 dark:bg-black w-10 h-10 rounded-full backdrop-blur-lg flex items-center justify-center shadow-sm shadow-gray-900 shrink-0">
                    <MapPinHouse className="text-orange-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-white/70">Location</p>
                    <address className="not-italic font-medium text-sm md:text-base">
                      2/7-2, Mahalakshmi Street, Balusupadu, Amaravathi, Andhra Pradesh
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/15 dark:bg-black/10 outline-none border border-white/30 focus:border-green-800 placeholder:text-black/50 dark:placeholder:text-white/50"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/15 dark:bg-black/10 border border-white/30 placeholder:text-black/50 dark:placeholder:text-white/50 outline-none focus:border-green-800"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl bg-white/15 dark:bg-black/10 border border-white/10 outline-none resize-none placeholder:text-black/50 dark:placeholder:text-white/50 focus:border-green-800"
                  />
                </div>

                <button
                  type="submit"
                  className={`flex items-center justify-center gap-2 w-full ${
                    clicked ? "bg-green-900 dark:bg-green-700 dark:text-white" : "bg-black/80 dark:bg-white/80 hover:bg-black/90 dark:hover:bg-white/90"
                  } transition-all duration-300 px-5 py-3 rounded-xl text-white dark:text-black font-medium hover:scale-101 cursor-pointer`}
                >
                  {clicked ? "Message sent Successfully" : "Send Message"}
                  <MessagesSquare size={18} />
                </button> 
              </form>
            </div>
          </div>
        </div>
        <DarkMode/>
      </section>
    </>
  );
};

export default Contact;
