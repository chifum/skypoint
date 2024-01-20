import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Remove non-numeric characters using a regular expression
    if (name === 'mobile' && !/^[0-9]*$/.test(value)) {
        return;
      }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form data
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxVOy88J2ztZV6NY4TC4K9phlngX8_hoOszy_EU8rUDEga_Rp0kZDI7FNExrJifmZz8/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form className="border-[1px] border-[#007559] p-3 rounded" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className=" border-[#8A8A8A]/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-6">
              <label
                htmlFor="fullName"
                className="block text-sm font-normal leading-6 text-[#8A8A8A]"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full border-0 py-1.5 text-[#8A8A8A] ring-1 ring-inset ring-[#000000] placeholder:text-[#FFFFFF] focus:ring-2 focus:ring-inset focus:ring-[#000000] sm:text-sm sm:leading-6 outline-none"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="numberInput"
                className="block text-sm font-normal leading-6 text-[#8A8A8A]"
              >
                Mobile
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="mobile"
                  id="numberInput"
                  autoComplete="given-name"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]*"
                  className="block w-full border-0 py-1.5 text-[#8A8A8A] ring-1 ring-inset ring-[#000000] placeholder:text-[#FFFFFF] focus:ring-2 focus:ring-inset focus:ring-[#000000] sm:text-sm sm:leading-6 outline-none"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-normal leading-6 text-[#8A8A8A]"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full border-0 py-1.5 text-[#8A8A8A] ring-1 ring-inset ring-[#000000] placeholder:text-[#FFFFFF] focus:ring-2 focus:ring-inset focus:ring-[#000000] sm:text-sm sm:leading-6 outline-none"
                  value={formData.email}
                onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-normal leading-6 text-[#8A8A8A]"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="message"
                  rows={3}
                  cols={40}
                  className="block w-full border-0 py-1.5 text-[#8A8A8A] ring-1 ring-inset ring-[#000000] placeholder:text-[#FFFFFF] focus:ring-2 focus:ring-inset focus:ring-[#000000] sm:text-sm sm:leading-6 outline-none"
                  defaultValue={""}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-[#007559] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
// git config --global user.email "you@example.com"
// git config --global user.name "Your Name"
