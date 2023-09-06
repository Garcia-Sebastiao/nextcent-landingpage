import { motion } from "framer-motion";
export default function Text({
  children,
  className,
  initial,
  animate,
  transition,
}: {
  children: React.ReactNode;
  className?: string;
  initial?: Object;
  animate?: Object;
  transition?: Object;
}) {
  return (
    <motion.p
      initial={initial}
      whileInView={animate}
      transition={transition}
      className={`text-fontSecondary ${className}`}
    >
      {children}
    </motion.p>
  );
}
