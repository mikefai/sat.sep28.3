import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  // Split by $$ for display math and $ for inline math
  const renderFormattedText = (text: string) => {
    // Check if there are any math delimiters
    if (!text.includes('$')) {
      return <span>{text}</span>;
    }

    const elements: React.ReactNode[] = [];
    let currentIndex = 0;
    let keyCounter = 0;

    // Regex for $$...$$ (display math) or $...$ (inline math)
    const mathRegex = /(\$\$[\s\S]*?\$\$|\$[^\$\n]+?\$)/g;
    let match: RegExpExecArray | null;

    while ((match = mathRegex.exec(text)) !== null) {
      // Add text before the math
      if (match.index > currentIndex) {
        elements.push(
          <span key={`text-${keyCounter++}`}>
            {text.substring(currentIndex, match.index)}
          </span>
        );
      }

      const matchStr = match[0];
      const isDisplay = matchStr.startsWith('$$') && matchStr.endsWith('$$');
      const mathExpr = isDisplay ? matchStr.slice(2, -2) : matchStr.slice(1, -1);

      try {
        const html = katex.renderToString(mathExpr, {
          displayMode: isDisplay,
          throwOnError: false,
          output: 'html'
        });

        elements.push(
          <span
            key={`math-${keyCounter++}`}
            dangerouslySetInnerHTML={{ __html: html }}
            className={isDisplay ? 'block my-2 text-center' : 'inline-block px-0.5'}
          />
        );
      } catch {
        elements.push(
          <span key={`math-err-${keyCounter++}`} className="text-red-500 font-mono text-sm">
            {matchStr}
          </span>
        );
      }

      currentIndex = match.index + matchStr.length;
    }

    // Add remaining text
    if (currentIndex < text.length) {
      elements.push(
        <span key={`text-end-${keyCounter++}`}>
          {text.substring(currentIndex)}
        </span>
      );
    }

    return <>{elements}</>;
  };

  // Split text by newlines so paragraphs and bullet points render cleanly
  const paragraphs = content.split('\n');

  return (
    <div className={`leading-relaxed ${className}`}>
      {paragraphs.map((paragraph, index) => {
        if (!paragraph.trim()) {
          return <div key={index} className="h-3" />;
        }
        return (
          <div key={index} className={paragraph.startsWith('•') ? 'pl-4 my-1' : 'mb-2 last:mb-0'}>
            {renderFormattedText(paragraph)}
          </div>
        );
      })}
    </div>
  );
};
