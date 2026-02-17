'use client'
import { useState } from 'react'
import Image from 'next/image'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function WWL26Gallery() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	// Gallery images - you can add more images here
	const galleryImages = [
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery1.jpg', alt: 'Women Who Lead Gallery Image 7' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery2.jpg', alt: 'Women Who Lead Gallery Image 7' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery3.jpg', alt: 'Women Who Lead Gallery Image 7' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery8.jpg', alt: 'Women Who Lead Gallery Image 9' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery4.jpg', alt: 'Women Who Lead Gallery Image 7' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery5.jpg', alt: 'Women Who Lead Gallery Image 7' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery9.jpg', alt: 'Women Who Lead Gallery Image 9' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery6.jpg', alt: 'Women Who Lead Gallery Image 9' },
		{ src: '/assets/img/all-images/Women-Who-Lead/LMS-127.jpg', alt: 'Women Who Lead Gallery Image 9' },
		{ src: '/assets/img/all-images/Women-Who-Lead/LMS-217.jpg', alt: 'Women Who Lead Gallery Image 10' },
		{ src: '/assets/img/all-images/Women-Who-Lead/LMS-219.jpg', alt: 'Women Who Lead Gallery Image 11' },
		{ src: '/assets/img/all-images/Women-Who-Lead/LMS-519.jpg', alt: 'Women Who Lead Gallery Image 38' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-770.jpg', alt: 'Women Who Lead Gallery Image 38' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-849.jpg', alt: 'Women Who Lead Gallery Image 23' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-1060.jpg', alt: 'Women Who Lead Gallery Image 27' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-507.jpg', alt: 'Women Who Lead Gallery Image 19' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-361.jpg', alt: 'Women Who Lead Gallery Image 15' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-393.jpg', alt: 'Women Who Lead Gallery Image 16' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-410.jpg', alt: 'Women Who Lead Gallery Image 17' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-405.jpg', alt: 'Women Who Lead Gallery Image 18' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-1063.jpg', alt: 'Women Who Lead Gallery Image 33' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery10.jpg', alt: 'Women Who Lead Gallery Image 9' },
		{ src: '/assets/img/all-images/Women-Who-Lead/LMS-456.jpg', alt: 'Women Who Lead Gallery Image 12' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-249.jpg', alt: 'Women Who Lead Gallery Image 13' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-245.jpg', alt: 'Women Who Lead Gallery Image 14' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-899.jpg', alt: 'Women Who Lead Gallery Image 25' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-916.jpg', alt: 'Women Who Lead Gallery Image 26' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-945.jpg', alt: 'Women Who Lead Gallery Image 28' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-947.jpg', alt: 'Women Who Lead Gallery Image 29' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-950.jpg', alt: 'Women Who Lead Gallery Image 30' },
		{ src: '/assets/img/all-images/WWL-Gallery/LMS-934.jpg', alt: 'Women Who Lead Gallery Image 32' },
		{ src: '/assets/img/all-images/Women-Who-Lead/Gallery7.jpg', alt: 'Women Who Lead Gallery Image 9' },

	]

	const openLightbox = (imageSrc: string) => {
		setSelectedImage(imageSrc)
	}

	const closeLightbox = () => {
		setSelectedImage(null)
	}

	return (
		<>
			<Layout headerStyle={3} footerStyle={3}>
				<div>
					{/*===== HERO AREA STARTS =======*/}
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/all-images/Women-Who-Lead/cover.jpg)', position: 'relative' }}>
						{/* Dark overlay for better text visibility */}
						<div style={{
							position: 'absolute',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: 'rgba(0, 0, 0, 0.5)',
							zIndex: 1
						}}></div>
						<div className="container" style={{ position: 'relative', zIndex: 2 }}>
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading1 text-center">
										<h1 style={{ color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Gallery</h1>
										<div className="space20" />
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}

					{/*===== GALLERY AREA STARTS =======*/}
					<div className="memory-inner-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Event Memories</h5>
										<div className="space18" />
										<h2 className="text-anime-style-3">Women Who Lead: HR Leadership Conference & Awards 2026</h2>
										<div className="space18" />
										<p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
											Relive the moments from our premier HR leadership conference. Explore our gallery of memorable events, speakers, and award ceremonies.
										</p>
									</div>
								</div>
							</div>
							<div className="space50" />

							{/* Gallery Grid */}
							<div className="row">
								{galleryImages.map((image, index) => (
									<div key={index} className="col-lg-3 col-md-6 mb-4">
										<div 
											className="gallery-item"
											style={{
												position: 'relative',
												aspectRatio: '4/3',
												overflow: 'hidden',
												borderRadius: '12px',
												cursor: 'pointer',
												boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
												transition: 'transform 0.3s ease, box-shadow 0.3s ease'
											}}
											onClick={() => openLightbox(image.src)}
											onMouseEnter={(e) => {
												e.currentTarget.style.transform = 'scale(1.05)'
												e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)'
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.transform = 'scale(1)'
												e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
											}}
										>
											<Image
												src={image.src}
												alt={image.alt}
												fill
												loading="lazy"
												style={{
													objectFit: 'cover',
													transition: 'transform 0.3s ease'
												}}
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<div style={{
												position: 'absolute',
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)',
												opacity: 0,
												transition: 'opacity 0.3s ease',
												display: 'flex',
												alignItems: 'flex-end',
												padding: '15px'
											}}
											onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
											onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
											>
												<i className="fa-solid fa-expand" style={{ color: 'white', fontSize: '20px' }}></i>
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="space50" />
						</div>
					</div>
					{/*===== GALLERY AREA ENDS =======*/}
				</div>
			</Layout>

			{/* Lightbox Modal */}
			{selectedImage && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.9)',
						zIndex: 9999,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '20px',
						cursor: 'pointer'
					}}
					onClick={closeLightbox}
				>
					<button
						onClick={closeLightbox}
						style={{
							position: 'absolute',
							top: '20px',
							right: '20px',
							background: 'rgba(255, 255, 255, 0.2)',
							border: 'none',
							borderRadius: '50%',
							width: '50px',
							height: '50px',
							color: 'white',
							fontSize: '28px',
							cursor: 'pointer',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							transition: 'background 0.3s ease'
						}}
						onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
						onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
					>
						&times;
					</button>
					<div
						style={{
							position: 'relative',
							maxWidth: '90vw',
							maxHeight: '90vh',
							width: 'auto',
							height: 'auto'
						}}
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={selectedImage}
							alt="Gallery Image"
							width={1200}
							height={800}
							quality={85}
							style={{
								width: 'auto',
								height: 'auto',
								maxWidth: '90vw',
								maxHeight: '90vh',
								objectFit: 'contain',
								borderRadius: '8px'
							}}
							sizes="(max-width: 768px) 100vw, 90vw"
						/>
					</div>
				</div>
			)}
		</>
	)
}
