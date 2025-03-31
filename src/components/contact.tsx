import { useState } from "react";
import { Send, Phone, MapPin, Clock3 } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full bg-[#E4E5DF] flex flex-col md:flex-row  md:h-[650px] h-[1300px] items-center justify-center md:gap-4 gap-14 p-8">
      <div className="bg-white rounded-[30px] shadow-md w-[365px] md:w-[500px]  md:h-[580px] h-[700px] flex items-center justify-center p- text-left">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 w-full"
        >
          <div className="flex flex-col md:flex-row gap-4 w-[350px] md:w-[440px]">
            <div className="flex flex-col w-full">
              <label htmlFor="fullName" className="block text-gray-700">
                Full name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="border border-gray-300 rounded-md h-[50px] pl-2 bg-[#E5E5E5]"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phoneNumber">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-md h-[50px] pl-2 bg-[#E5E5E5]"
              />
            </div>
          </div>
          <div className="flex flex-col w-[350px] md:w-[440px]">
            <label htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-md h-[50px] pl-2 bg-[#E5E5E5]"
            />
          </div>
          <div className="flex flex-col w-[350px] md:w-[440px]">
            <label htmlFor="enquiryType">
              What is your enquiry about?<span className="text-red-500">*</span>
            </label>
            <select
              name="enquiryType"
              id="enquiryType"
              className="border border-gray-300 rounded-md h-[50px] pl-2 bg-[#E5E5E5]"
              onChange={handleChange}
            >
              <option value="">--Select One--</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Customer Care">Customer Care</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>
          <div className="flex flex-col w-[350px] md:w-[440px]">
            <label htmlFor="message">
              Additional information<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              className="border border-gray-300 rounded-md h-[140px] pl-2 bg-[#E5E5E5]"
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="bg-green-800 h-[40px] w-full max-w-[170px] rounded-[30px] text-white cursor-pointer hover:bg-green-600">
            Send Message
          </button>
        </form>
      </div>
      <div className="w-[360px] md:w-[680px] flex flex-col gap-4 p-4">
        <div className="text-3xl font-bold text-left">
          Get in touch to schedule a visit to your new house.
        </div>
        <div className="text-[15px] text-left">
          Kindly fill this form with your details about your inquiries and we
          would respond to your inquiry shortly.
        </div>
        <div className="bg-gray-300 w-full h-[0.5px]"></div>
        <div className="flex flex-col gap-4 text-left">
          <div className="flex flex-row gap-4">
            <Send className="text-green-700" />
            <div>
              <div className="font-medium text-lg">Send an email</div>
              <div className="text-sm text-green-700">
                contact@surerealty.com
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Phone className="text-green-700" />
            <div>
              <div className="font-medium text-lg">Give us a call</div>
              <div className="text-sm text-green-700">+2349073804371</div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <MapPin className="text-green-700" />
            <div>
              <div className="font-medium text-lg">Office address</div>
              <div className="text-sm text-green-700">
                11, Odo-Olowu, Ijeshatedo B/Stop, Surulere
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <Clock3 className="text-green-700" />
            <div>
              <div className="font-medium text-lg">Working hours</div>
              <div className="text-sm text-green-700">
                Mon - Sat: 10am - 4pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
