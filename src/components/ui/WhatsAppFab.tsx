"use client";

import { motion } from "framer-motion";

export default function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_14px_32px_-10px_rgba(37,211,102,0.6)]"
      style={{ animation: "glow 2.4s ease-in-out infinite" }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20 3.5A10.5 10.5 0 003.6 17.8L2 22l4.3-1.6A10.5 10.5 0 1020 3.5zM12 20a8 8 0 01-4.1-1.1l-.3-.2-2.6 1 .9-2.6-.2-.3A8 8 0 1120 12a8 8 0 01-8 8zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.4-.5-.5-.9-1-1.3-1.7-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.1 4.9 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.2-.4-.3z" />
      </svg>
    </motion.a>
  );
}
