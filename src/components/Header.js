import React from "react"
import Ilustration from "../img/undraw_developer_activity_bv83.svg"
import ContactForm from "./ContactForm"

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 mx-w-4xl">
      <div className="flex justify-center items-center">
        <div className="flex-1">
          <h1 className="font-bold text-6xl">¡Hello world! I'm Arturo</h1>
          <p className="text-xl">Full stack developer</p>
        </div>
        <img
          className="ilustration"
          src={Ilustration}
          alt="Developer activity"
        ></img>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  </header>
)
