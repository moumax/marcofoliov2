import Form from "../components/Form.jsx";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 2 }}
      className="relative flex flex-col items-center"
      id="contact"
    >
      <div className="flex flex-col">
        <Form />
      </div>
    </motion.section>
  );
};

export default Contact;
