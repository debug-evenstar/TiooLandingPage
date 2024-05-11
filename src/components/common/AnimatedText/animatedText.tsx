import { ReactNode } from "react";
import { Typewriter } from "react-simple-typewriter";

interface AnimatedTextProps {
  text?: string;
  children?: ReactNode;
  className?: string;
  type?: string;
}
export default function AnimatedText({
  text,
  className,
  type,
  children,
}: AnimatedTextProps) {
  return (
    <span className={`inline-block ${className}`}>
      {text && type == "typewriter" ? (
        <Typewriter cursorBlinking={false} deleteSpeed={170} typeSpeed={170} words={[text]} loop cursor />
      ) : (
        children
      )}
    </span>
  );
}
