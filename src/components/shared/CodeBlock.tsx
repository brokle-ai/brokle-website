"use client"

import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  className?: string
}

export function CodeBlock({
  code,
  language = "bash",
  title,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("rounded-lg overflow-hidden border bg-muted/50", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/30">
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
          <span className="text-xs text-muted-foreground uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm font-mono text-foreground">{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md hover:bg-muted transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>
    </div>
  )
}
