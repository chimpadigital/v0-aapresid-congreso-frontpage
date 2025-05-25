import type { ElementType } from "react";
import Link from "next/link";
import type { JSX } from "react/jsx-runtime";

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

  const processLine = (line: string, lineIndex: number) => {
    if (line.trim().startsWith("- ")) return null;

    const parts = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

    return (
      <Component key={lineIndex} className={className}>
        {parts.map((part, i) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={i} className="font-medium">
                {part.slice(2, -2)}
              </strong>
            );
          } else if (/\[[^\]]+\]\([^)]+\)/.test(part)) {
            const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
            if (linkMatch) {
              const [, linkText, url] = linkMatch;
              return (
                <a
                  key={i}
                  href={url}
                  className="text-[#64B33D] underline transition-colors hover:text-[#ED7F00]"
                  target={url.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    url.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {linkText}
                </a>
              );
            }
          }

          return part;
        })}
      </Component>
    );
  };

  const groupedContent: (JSX.Element | JSX.Element[])[] = [];
  let currentList: string[] = [];

  lines.forEach((line, index) => {
    if (line.trim().startsWith("- ")) {
      currentList.push(line.trim().substring(2));
    } else {
      if (currentList.length > 0) {
        groupedContent.push(
          <ul
            key={`list-${index}`}
            className="ml-4 list-inside list-disc space-y-2"
          >
            {currentList.map((item, i) => (
              <li key={i} className={className}>
                {item
                  .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
                  .map((part, j) => {
                    if (part.startsWith("**") && part.endsWith("**")) {
                      return (
                        <strong key={j} className="font-medium">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    } else if (/\[[^\]]+\]\([^)]+\)/.test(part)) {
                      const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                      if (linkMatch) {
                        const [, linkText, url] = linkMatch;
                        return (
                          <Link
                            key={j}
                            href={url}
                            className="text-[#64B33D] underline transition-colors hover:text-[#ED7F00]"
                            target={url.startsWith("http") ? "_blank" : "_self"}
                            rel={
                              url.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {linkText}
                          </Link>
                        );
                      }
                    }
                    return part;
                  })}
              </li>
            ))}
          </ul>,
        );
        currentList = [];
      }

      const processedLine = processLine(line, index);
      if (processedLine) groupedContent.push(processedLine);
    }
  });

  if (currentList.length > 0) {
    groupedContent.push(
      <ul key="list-final" className="ml-4 list-inside list-disc space-y-2">
        {currentList.map((item, i) => (
          <li key={i} className={className}>
            {item
              .split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
              .map((part, j) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={j} className="font-medium">
                      {part.slice(2, -2)}
                    </strong>
                  );
                } else if (/\[[^\]]+\]\([^)]+\)/.test(part)) {
                  const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
                  if (linkMatch) {
                    const [, linkText, url] = linkMatch;
                    return (
                      <Link
                        key={j}
                        href={url}
                        className="text-[#64B33D] underline transition-colors hover:text-[#ED7F00]"
                        target={url.startsWith("http") ? "_blank" : "_self"}
                        rel={
                          url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {linkText}
                      </Link>
                    );
                  }
                }
                return part;
              })}
          </li>
        ))}
      </ul>,
    );
  }

  return <>{groupedContent}</>;
}
