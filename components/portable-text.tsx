import Link from 'next/link';

export const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-xl md:text-2xl font-sans font-bold text-white mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg md:text-xl font-sans font-bold text-white mt-6 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-zinc-300 leading-relaxed text-sm md:text-base mb-6">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || '#';
      const isInternal = href.startsWith('/') || href.startsWith('#');
      if (isInternal) {
        return (
          <Link href={href} className="text-[#c2a278] hover:text-[#e0c59e] underline underline-offset-4 decoration-[#c2a278]/50 hover:decoration-[#c2a278] transition-colors font-medium">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#c2a278] hover:text-[#e0c59e] underline underline-offset-4 decoration-[#c2a278]/50 hover:decoration-[#c2a278] transition-colors font-medium"
        >
          {children}
        </a>
      );
    },
  },
};
