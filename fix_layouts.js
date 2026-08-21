const fs = require('fs');
const path = require('path');

const clientPages = [
    'app/bookings/page.tsx',
    'app/gallery/page.tsx',
    'app/payments/page.tsx',
    'app/services/page.tsx'
];

for (const pagePath of clientPages) {
    if (fs.existsSync(pagePath)) {
        let content = fs.readFileSync(pagePath, 'utf-8');
        
        // Extract metadata block
        const metaMatch = content.match(/export const metadata: Metadata = \{[\s\S]*?\};\n/);
        
        if (metaMatch) {
            const metaBlock = metaMatch[0];
            
            // Remove metadata and the import from page.tsx
            content = content.replace('import type { Metadata } from "next";\n', '');
            content = content.replace(metaBlock, '');
            
            // Ensure "use client" is at top
            if (content.includes('"use client"')) {
                content = content.replace(/"use client"\n?/g, '');
                content = '"use client"\n' + content;
            }
            
            fs.writeFileSync(pagePath, content);
            
            // Create layout.tsx
            const dir = path.dirname(pagePath);
            const layoutPath = path.join(dir, 'layout.tsx');
            
            const layoutContent = `import type { Metadata } from "next";

${metaBlock}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;
            fs.writeFileSync(layoutPath, layoutContent);
        }
    }
}
