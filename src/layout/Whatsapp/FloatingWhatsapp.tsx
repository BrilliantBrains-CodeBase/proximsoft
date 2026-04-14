import { motion } from "framer-motion";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsapp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[9999]"
    >
      <FloatingWhatsApp
        phoneNumber="+19084287996"
        accountName="Proximsoft Support"
        chatMessage="Hi 👋 How can we help you?"
        statusMessage="Typically replies within minutes"
        allowEsc
        allowClickAway
        notification
        notificationDelay={5}
        darkMode={false}
        avatar="/proximsoft-logo-new-2.webp"
        placeholder="Type your message..."
      />
    </motion.div>
  );
};

export default FloatingWhatsapp;
