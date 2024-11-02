"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxHeight?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, maxHeight = "200px", ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const handleInput = () => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    };

    React.useEffect(() => {
      handleInput();
    }, []);
    return (
      <textarea
        className={cn(
          "flex w-full min-h-[40px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={(node) => {
          textareaRef.current = node;
          if (ref) {
            if (typeof ref === "function") {
              ref(node);
            } else {
              ref.current = node;
            }
          }
        }}
        style={{
          maxHeight,
          height: textareaRef.current
            ? `${textareaRef.current.scrollHeight}px`
            : "auto",
          overflowY: "auto",
        }}
        onInput={handleInput}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
