import { ElementType } from "react";

interface RichTextProps {
  text: string | string[];
  as?: ElementType;
  className?: string;
}

export function RichText({
  text,
  as: Component = "p",
  className = "",
}: RichTextProps) {
  const lines = Array.isArray(text) ? text : [text];

  return (
    <>
      {lines.map((line, idx) => (
        <Component key={idx} className={className}>
          {typeof line === "string" &&
            line.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
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
