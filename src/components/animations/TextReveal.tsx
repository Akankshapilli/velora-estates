import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const TextReveal = ({
  text,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) => {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.3,
      }}
      transition={{
        staggerChildren: 0.06,
        delayChildren: delay,
      }}
      className={`flex flex-wrap overflow-hidden ${className}`}
    >
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden">
          <motion.span
            variants={{
              hidden: {
                y: "100%",
                opacity: 0,
              },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block mr-2 will-change-transform"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  );
};

export default TextReveal;
