import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button.jsx";
import { LangContext } from "../context/LangContext";
import { ModeContext } from "../context/ModeContext.jsx";
import { useContext, useState, useRef } from "react";
import traduction from "../datas/dataTraduction";

const Form = () => {
  const [state, handlesubmit] = useForm("mzbwjygp");
  const { language } = useContext(LangContext);
  const { mode } = useContext(ModeContext);

  const [visible, setVisible] = useState(true);

  const input_name = useRef(null);
  const input_email = useRef(null);
  const input_phone = useRef(null);
  const input_message = useRef(null);

  const removeElement = () => {
    if (state.succeeded) {
      setVisible((prev) => !prev);
      input_name.current.value = "";
      input_email.current.value = "";
      input_phone.current.value = "";
      input_message.current.value = "";
    }
  };

  const classInputDark =
    "rounded-md text-center text-sm xl:text-2xl bg-transparent placeholder-green-50 border-2 border-slate-800 placeholder-opacity-50 w-full h-10 xl:h-16";
  const classInputLight =
    "rounded-md text-center text-sm xl:text-2xl bg-gray-600 bg-opacity-10 placeholder:text-black border-2 border-slate-400 placeholder-opacity-50 w-full h-10 xl:h-16";
  const classTextareaDark =
    "rounded-md text-center text-sm xl:text-2xl bg-transparent h-40 placeholder-green-50 border-2 border-slate-800 placeholder-opacity-50 w-full xl:h-60";
  const classTextareaLight =
    "rounded-md text-center text-sm xl:text-2xl bg-gray-600 bg-opacity-10 h-40 placeholder:text-black border-2 border-slate-400 placeholder-opacity-50 w-full xl:h-60";

  const label = "hidden";

  return (
    <form
      className="relative flex flex-col text-xl font-bold w-[90vw] lg:w-[80vw] xl:w-[70vw] 2xl:w-[60vw] gap-y-6 items-center"
      onSubmit={handlesubmit}
    >
      <label htmlFor="full-name" className={label}>
        Name / nom
      </label>
      <input
        className={mode === "light" ? classInputLight : classInputDark}
        type="text"
        title="Your name / Votre nom"
        name="name"
        ref={input_name}
        id="full-name"
        placeholder={traduction[language].formName}
        required
      ></input>
      <label htmlFor="email" className={label}>
        Your email / Votre email
      </label>
      <input
        className={mode === "light" ? classInputLight : classInputDark}
        type="email"
        title="Your email / Votre email"
        id="email"
        name="email"
        ref={input_email}
        placeholder={traduction[language].formEmail}
        required
      ></input>
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="phone" className={label}>
        Your phone / Votre téléphone
      </label>
      <input
        className={mode === "light" ? classInputLight : classInputDark}
        type="phone number"
        title="Your phone / Votre téléphone"
        name="phone"
        id="phone"
        ref={input_phone}
        placeholder={traduction[language].formPhone}
        required
      ></input>
      <ValidationError prefix="Phone" field="phone" errors={state.errors} />
      <label htmlFor="message" className={label}>
        Your message / Votre message
      </label>
      <textarea
        className={mode === "light" ? classTextareaLight : classTextareaDark}
        type="message"
        title="Your message / Votre message"
        id="message"
        ref={input_message}
        name="message"
        placeholder={traduction[language].formMessage}
        required
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {visible ? (
        <Button
          type={"submit"}
          disabled={state.submitting}
          onClick={removeElement}
        >
          {traduction[language].form_button_send}
        </Button>
      ) : (
        <Button
          type={"submit"}
          disabled={state.submitting}
          className="inline-block px-6 py-2.5 bg-red-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 ml-5 mr-5 mt-5 xl:w-80 mb-24 xl:text-xl"
        >
          {traduction[language].form_button_sent}
        </Button>
      )}
    </form>
  );
};

export default Form;
