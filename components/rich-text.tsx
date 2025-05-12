import { ElementType } from "react";

interface RichTextProps {
  text: string | string[];
  as?: ElementType;
  className?: string;
}

export function RichText({
  text,
  as: Component = "p", // por defecto <p>
  className = "",
}: RichTextProps) {
  const lines = Array.isArray(text) ? text : [text];

  return (
    <>
      {lines.map((line, idx) => (
        <Component
          key={idx}
          className={`${className}`}
        >
          {line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={i} className="font-medium">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </Component>
      ))}
    </>
  );
}
