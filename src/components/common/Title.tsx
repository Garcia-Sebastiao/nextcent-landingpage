import { motion } from "framer-motion";
import { fadeAnimation } from "@/utils/animations";

export default function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      initial={fadeAnimation.initial || null}
      whileInView={fadeAnimation.animate || null}
      transition={fadeAnimation.transition || null}
      className={`text-4xl text-fontPrimary font-interSemiBold text-center ${className}`}
    >
      {children}
    </motion.h2>
  );
}
