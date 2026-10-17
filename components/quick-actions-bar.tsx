"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Calendar } from "lucide-react";
import { businessConfig } from "@/config/business.config";

export function QuickActionsBar() {
  const whatsappUrl = `https://wa.me/${businessConfig.telephoneClean.replace("+", "")}?text=${encodeURIComponent(
    "Hi Angel Tattooz, I would like to book a consultation."
  )}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 border-t border-neutral-800 bg-neutral-950/95 px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-500"
      >
        <MessageSquare className="h-4 w-4"/>
        WhatsApp Chat
      </a>
      <Link className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-sky-500" href="/#booking">
        <Calendar className="h-4 w-4"/>
        Book Online
      </Link>
    </div>
  );
}

