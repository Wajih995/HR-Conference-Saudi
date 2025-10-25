import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/public/assets/css/vendor/aos.css"
import "/public/assets/css/vendor/bootstrap.min.css"
import "/public/assets/css/vendor/fontawesome.css"
import "/public/assets/css/vendor/magnific-popup.css"
import "/public/assets/css/vendor/mobile.css"
// import "/public/assets/css/vendor/owlcarousel.min.css"
import "/public/assets/css/vendor/sidebar.css"
import "/public/assets/css/vendor/slick-slider.css"
import "/public/assets/css/vendor/nice-select.css"
import "/public/assets/css/vendor/odometer.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
import { Figtree, Space_Grotesk, Dancing_Script } from "next/font/google"

const figtree = Figtree({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	variable: "--figtree",
	display: 'swap',
})
const grotesk = Space_Grotesk({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--grotesk",
	display: 'swap',
})

const dancingScript = Dancing_Script({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--dancing-script",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "HR Leadership Conference & Awards 2026",
	description: "Women Who Lead: HR Leadership Conference & Awards 2026 - Empowering women leaders and transforming workplaces across the GCC",
	openGraph: {
		title: "Women Who Lead: HR Leadership Conference & Awards 2026",
		description: "Empowering women leaders and transforming workplaces across the GCC. Join us on 20th January 2026 in Riyadh, Saudi Arabia.",
		url: "https://brxevents.com",
		siteName: "Women Who Lead Conference",
		images: [
			{
				url: "/assets/img/logo/final-logo.png",
				width: 1200,
				height: 630,
				alt: "Women Who Lead Conference Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Women Who Lead: HR Leadership Conference & Awards 2026",
		description: "Empowering women leaders and transforming workplaces across the GCC. Join us on 20th January 2026.",
		images: ["/assets/img/logo/final-logo.png"],
	},
	icons: {
		icon: "/assets/img/logo/w-master-logo.png",
		apple: "/assets/img/logo/w-master-logo.png",
		shortcut: "/assets/img/logo/w-master-logo.png",
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${figtree.variable} ${grotesk.variable} ${dancingScript.variable}`}>{children}</body>
		</html>
	)
}
