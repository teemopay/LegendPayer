import * as motion from "motion/react-client";
import { ReactNode } from "react";
interface FadeUpScaleInProps {
  children: ReactNode;
  className?: string;
}
export const FadeIn = ({ children, className = "" }: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, translateY: 40 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "bottom center" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeText = ({ children, className = "" }: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, translateY: 40 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "left" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInIcon = ({ children }: FadeUpScaleInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};
