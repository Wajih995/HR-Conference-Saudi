"use client"
import { useState } from "react"
import Image from "next/image"
import Layout from "@/components/layout/Layout"

const PDF_URL =
	"/assets/img/all-images/used-images/OPEX%20Riyadh%20EPC%20Project%20Management%20Summit%20Feb%202026%20BRX.pdf"

const galleryImages = [
	{ src: "/assets/img/all-images/Opex-first/Gallery1.JPG", alt: "OPEX Riyadh Summit banner" },
	{ src: "/assets/img/all-images/Opex-first/Gallery2.JPG", alt: "Delegates networking at OPEX Summit" },
	{ src: "/assets/img/all-images/Opex-first/Gallery3.jpeg", alt: "Panel discussion at OPEX Summit" },
	{ src: "/assets/img/all-images/Opex-first/Gallery4.JPG", alt: "Keynote session at OPEX Summit" },
	{ src: "/assets/img/all-images/Opex-first/Gallery5.JPG", alt: "Leaders engaging at the summit" },
	{ src: "/assets/img/all-images/Opex-first/Gallery6.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery7.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery8.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery9.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery10.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery11.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery12.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery13.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery14.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery15.JPG", alt: "Summit audience view" },
	{ src: "/assets/img/all-images/Opex-first/Gallery16.JPG", alt: "Summit audience view" },
]

export default function OpexSummitPage() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	const openLightbox = (imageSrc: string) => {
		setSelectedImage(imageSrc)
	}

	const closeLightbox = () => {
		setSelectedImage(null)
	}

	return (
		<>
			<Layout headerStyle={3} footerStyle={1}>
				<div>
					<div
						className="inner-page-header"
						style={{
							backgroundImage: "url(/assets/img/all-images/used-images/opex-banner.PNG)",
							backgroundPosition: "center",
							backgroundSize: "cover",
							position: "relative",
						}}
					>
						<div
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								backgroundColor: "rgba(0, 0, 0, 0.55)",
								zIndex: 1,
							}}
						/>
						<div className="container" style={{ position: "relative", zIndex: 2 }}>
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading1 text-center">
										<h1 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
											OPEX Riyadh EPC Project Management Summit 2026
										</h1>
										<div className="space16" />
										<p style={{ color: "rgba(255,255,255,0.92)", margin: 0, fontSize: "18px" }}>
											09–10 Feb 2026 · Hilton Riyadh Financial District · Riyadh, Saudi Arabia
										</p>
										<div className="space24" />
										<div className="btn-area1">
											<a
												className="vl-btn1"
												href={PDF_URL}
												download="OPEX-Summit-Manual.pdf"
												style={{ display: "inline-block" }}
											>
												Download Manual
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="sp2">
						<div className="container">
							<style>{`
							.opex-card {
								background: linear-gradient(180deg, #ffffff 0%, #fbfbfd 100%);
								border: 1px solid rgba(201, 165, 69, 0.35);
								border-radius: 14px;
								padding: 26px 24px;
								box-shadow: 0 10px 24px rgba(14, 6, 46, 0.08);
								transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
								position: relative;
								overflow: hidden;
							}
							.opex-card::before {
								content: '';
								position: absolute;
								left: 0;
								top: 0;
								height: 4px;
								width: 100%;
								background: linear-gradient(90deg, #C9A545 0%, rgba(201, 165, 69, 0.2) 70%, transparent 100%);
							}
							.opex-card:hover {
								transform: translateY(-4px);
								box-shadow: 0 16px 36px rgba(14, 6, 46, 0.14);
								border-color: rgba(201, 165, 69, 0.65);
							}
							.opex-card-title {
								font-size: 22px;
								line-height: 1.25;
								margin: 0 0 10px 0;
								color: #0e062e;
								font-weight: 700;
							}
							.opex-card-text {
								margin: 0;
								color: rgba(14, 6, 46, 0.78);
								line-height: 1.7;
								font-size: 15px;
							}
						`}</style>

							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="heading2 text-center space-margin60">
										<div className="space16" />
										<h2 className="text-anime-style-3">Built for EPC leaders delivering complex projects</h2>
										<div className="space16" />
										<p>
											This summit brings together EPC, EPCM, NOCs and IOCs to share practical lessons, case studies,
											and strategies for executing mega and multi‑discipline projects—faster, safer, and with stronger
											risk control.
										</p>
									</div>
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-lg-6 col-md-6 d-flex mb-4">
									<div className="choose-widget-boxarea h-100 w-100 opex-card">
										<div className="content-area">
											<h3 className="opex-card-title">1) Summit Focus</h3>
											<p className="opex-card-text">
												Hands-on approaches to EPC project excellence—integrating best practices, emerging tools, and
												leadership tactics that improve delivery performance across the project lifecycle.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 d-flex mb-4">
									<div className="choose-widget-boxarea h-100 w-100 opex-card">
										<div className="content-area">
											<h3 className="opex-card-title">2) What You’ll Learn</h3>
											<p className="opex-card-text">
												Digitalization and integrated execution models, risk identification and mitigation, safety
												leadership, sustainability integration (ESG), and stronger communication and collaboration in
												large engineering teams.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 d-flex mb-4">
									<div className="choose-widget-boxarea h-100 w-100 opex-card">
										<div className="content-area">
											<h3 className="opex-card-title">3) Program Highlights</h3>
											<p className="opex-card-text">
												Case studies and panels covering cross‑border delivery, supply chain digital journeys, AI‑enabled
												risk management, crisis response planning, production facility strategy, and legal risk in global
												EPC contracting.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 d-flex mb-4">
									<div className="choose-widget-boxarea h-100 w-100 opex-card">
										<div className="content-area">
											<h3 className="opex-card-title">4) Venue & Dates</h3>
											<p className="opex-card-text">
												<strong>Dates:</strong> 09–10 Feb 2026
												<br />
												<strong>Venue:</strong> Hilton Riyadh Financial District, Unit 3369, 3606 Northern Ring Rd, Al
												Ghadir, Riyadh 13311, Saudi Arabia
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-lg-10 m-auto">
									<div className="cta1-main-boxarea" style={{ marginTop: "20px" }}>
										<div className="timer-btn-area" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
											<div className="btn-area1" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
												<a className="vl-btn3 btn2" href={PDF_URL} download="OPEX-Summit-Manual.pdf">
													Download Manual (PDF)
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* GALLERY SECTION */}
					<div className="memory-inner-section-area sp2">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Event Memories</h5>
										<div className="space18" />
										<h2 className="text-anime-style-3">OPEX Riyadh EPC Project Management Summit 2026</h2>
										<div className="space18" />
										<p style={{ color: "#666", fontSize: "16px", lineHeight: "1.6" }}>
											Relive the moments from our Riyadh EPC Project Management Summit. Explore highlights from keynote
											sessions, panel discussions, and networking experiences with global EPC leaders.
										</p>
									</div>
								</div>
							</div>

							<div className="space50" />

							<div className="row">
								{galleryImages.map((image, index) => (
									<div key={index} className="col-lg-3 col-md-6 mb-4">
										<div
											className="gallery-item"
											style={{
												position: "relative",
												aspectRatio: "4 / 3",
												overflow: "hidden",
												borderRadius: "12px",
												cursor: "pointer",
												boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
												transition: "transform 0.3s ease, box-shadow 0.3s ease",
											}}
											onClick={() => openLightbox(image.src)}
											onMouseEnter={(e) => {
												e.currentTarget.style.transform = "scale(1.05)"
												e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)"
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.transform = "scale(1)"
												e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)"
											}}
										>
											<Image
												src={image.src}
												alt={image.alt}
												fill
												loading="lazy"
												style={{
													objectFit: "cover",
													transition: "transform 0.3s ease",
												}}
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											/>
											<div
												style={{
													position: "absolute",
													top: 0,
													left: 0,
													right: 0,
													bottom: 0,
													background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)",
													opacity: 0,
													transition: "opacity 0.3s ease",
													display: "flex",
													alignItems: "flex-end",
													padding: "15px",
												}}
												onMouseEnter={(e) => {
													e.currentTarget.style.opacity = "1"
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.opacity = "0"
												}}
											>
												<i className="fa-solid fa-expand" style={{ color: "white", fontSize: "20px" }} />
											</div>
										</div>
									</div>
								))}
							</div>

							<div className="space50" />
						</div>
					</div>
				</div>
			</Layout>

			{selectedImage && (
				<div
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						zIndex: 9999,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						padding: "20px",
						cursor: "pointer",
					}}
					onClick={closeLightbox}
				>
					<button
						onClick={closeLightbox}
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
							background: "rgba(255, 255, 255, 0.2)",
							border: "none",
							borderRadius: "50%",
							width: "50px",
							height: "50px",
							color: "white",
							fontSize: "28px",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							transition: "background 0.3s ease",
						}}
						onMouseEnter={(e) => {
							e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)"
						}}
						onMouseLeave={(e) => {
							e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"
						}}
					>
						&times;
					</button>
					<div
						style={{
							position: "relative",
							maxWidth: "90vw",
							maxHeight: "90vh",
							width: "auto",
							height: "auto",
						}}
						onClick={(e) => {
							e.stopPropagation()
						}}
					>
						<Image
							src={selectedImage}
							alt="OPEX Summit gallery image"
							width={1200}
							height={800}
							quality={85}
							style={{
								width: "auto",
								height: "auto",
								maxWidth: "90vw",
								maxHeight: "90vh",
								objectFit: "contain",
								borderRadius: "8px",
							}}
							sizes="(max-width: 768px) 100vw, 90vw"
						/>
					</div>
				</div>
			)}
		</>
	)
}

