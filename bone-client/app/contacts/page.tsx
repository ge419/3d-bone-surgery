"use client";

import FeatureCard from "@/components/Features/FeatureCard";
import React from "react";

import Icon1 from "@/public/images/icon1.png";
import Icon2 from "@/public/images/icon2.png";
import Icon3 from "@/public/images/icon3.png";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-800 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Contact 3D Bone Surgery</h1>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700">
            We appreciate your interest in the Osseointegration Group. We
            provide advanced treatments for individuals of all ages, from
            diverse regions of the world, who are experiencing a range of
            disabilities. Our expertise includes complex limb reconstruction,
            failed limb salvage, amputation, as well as more common conditions
            such as arthritis and sports injuries.
          </p>
          <p className="text-lg text-gray-700 mt-4">
            Should you have any clinical questions or concerns about
            Osseointegration, you’re welcome to fill out the enquiry form below.
            Moreover, if you would like to obtain further details regarding your
            eligibility for the procedure, as well as related expenses, you can
            accomplish this by completing the medical screening and submitting
            an X-Ray for evaluation via our secure portal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Location
            </h2>
            <div className="relative overflow-hidden h-64">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.3775506338807!2d126.77814779678958!3d37.66383539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9aaa94cc8ecb%3A0x7a2b1f42463beefe!2sNational%20Cancer%20Center!5e0!3m2!1sen!2skr!4v1722787712106!5m2!1sen!2skr"
                  width="600"
                  height="450"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              NATIONAL CANCER CENTER
            </h2>
            <p className="text-gray-600 mb-2">
              323 Ilsan-ro, Goyang-si, Gyeonggi-do
              <br />
              National Cancer Center
              <br />
              10408 Republic of Korea
            </p>
            <p className="text-gray-600 mb-2">
              {/* CHANGE PHONE NUMBER */}
              <strong>Phone:</strong> +82 31 920 0114
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> ostumor@hanmail.net
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[3rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        <div>
          <FeatureCard
            title="Patient Inquiry"
            image={Icon1.src}
            info="Designed 3d titatnium implant"
            link="/contacts/patientInquiry"
          />
        </div>
        <div>
          <FeatureCard
            title="Send X-Ray"
            image={Icon2.src}
            info="more than 1000 cases"
            link="/contacts/sendForm"
          />
        </div>
        <div>
          <FeatureCard
            title="Amputation"
            image={Icon3.src}
            info="FDA approved amputation design"
            link="/about/amputation"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
