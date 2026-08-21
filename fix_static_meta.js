const fs = require('fs');

const filesToUpdate = {
    'app/about-us/page.tsx': { title: "About Us | Angel Tattooz", description: "Learn about Angel Tattooz, North London's premier tattoo studio." },
    'app/bookings/page.tsx': { title: "Book an Appointment | Angel Tattooz", description: "Book your tattoo consultation or appointment at Angel Tattooz." },
    'app/contact-us/page.tsx': { title: "Contact Us | Angel Tattooz", description: "Get in touch with Angel Tattooz in North London." },
    'app/gallery/page.tsx': { title: "Tattoo Gallery | Angel Tattooz", description: "View our portfolio of custom tattoos by Angel Tattooz artists." },
    'app/page.tsx': { title: "Angel Tattooz | Premier Tattoo Studio in North London", description: "Award-winning custom tattoo studio in Cockfosters, North London. Book your consultation today." },
    'app/payments/page.tsx': { title: "Payments | Angel Tattooz", description: "Information about deposits and payments at Angel Tattooz." },
    'app/services/page.tsx': { title: "Our Services | Angel Tattooz", description: "Explore the tattoo and piercing services offered at Angel Tattooz." }
};

for (const [file, meta] of Object.entries(filesToUpdate)) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        
        if (!content.includes('export const metadata')) {
            // add import if missing
            if (!content.includes('import type { Metadata } from "next"')) {
                // simple hack to put it after the first import or at top
                content = 'import type { Metadata } from "next";\n' + content;
            }
            
            const metadataExport = `\nexport const metadata: Metadata = {\n  title: "${meta.title}",\n  description: "${meta.description}",\n};\n`;
            
            // Insert before default export
            const exportIndex = content.indexOf('export default function');
            if (exportIndex !== -1) {
                content = content.slice(0, exportIndex) + metadataExport + content.slice(exportIndex);
                fs.writeFileSync(file, content);
            } else {
                const exportIndexAsync = content.indexOf('export default async function');
                if (exportIndexAsync !== -1) {
                    content = content.slice(0, exportIndexAsync) + metadataExport + content.slice(exportIndexAsync);
                    fs.writeFileSync(file, content);
                }
            }
        }
    }
}
