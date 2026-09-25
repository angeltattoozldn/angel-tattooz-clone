"use client"

import { useState, useTransition } from "react"
import { submitNewsletter } from "@/app/actions/newsletter"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address.")
      return
    }

    startTransition(async () => {
      setStatus("idle")
      setErrorMessage("")
      const res = await submitNewsletter({ email })
      if (res.success) {
        setStatus("success")
        setEmail("")
      } else {
        setStatus("error")
        setErrorMessage(res.error || "Something went wrong. Please try again.")
      }
    })
  }

  if (status === "success") {
    return (
      <div className="w-full bg-[#181818]/90 border border-[#D4C59D] rounded-xl p-5 text-center text-white flex flex-col items-center gap-2 animate-in fade-in zoom-in-95 duration-300">
        <CheckCircle2 className="w-8 h-8 text-[#D4C59D]" />
        <h4 className="font-semibold text-lg text-white">You're Subscribed!</h4>
        <p className="text-zinc-300 text-sm">
          Thank you for joining. You'll be the first to know about new flash drops, guest artists, and studio updates.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        aria-label="Newsletter Subscription Form"
        className="flex w-full flex-col sm:flex-row gap-2 sm:gap-0"
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isPending}
          placeholder="Enter your email"
          aria-label="Email Address"
          className="w-full sm:w-[70%] px-4 py-3 bg-neutral-100 text-zinc-900 text-[16px] border border-neutral-300 rounded-lg sm:rounded-none sm:rounded-l-[10px] focus:outline-none focus:ring-2 focus:ring-[#D4C59D] disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={isPending}
          className="w-full sm:w-[30%] bg-[#D4C59D] text-zinc-950 font-semibold text-[14px] uppercase tracking-wide py-3 px-4 rounded-lg sm:rounded-none sm:rounded-r-[10px] hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isPending ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {status === "error" && (
        <div className="flex items-center justify-center gap-1.5 text-rose-400 text-xs sm:text-sm mt-3 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  )
}
