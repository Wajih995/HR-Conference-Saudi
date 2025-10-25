'use client'
import { useState, useEffect } from 'react'
import Layout from "@/components/layout/Layout"
import PackagePasswordModal from "@/components/layout/PackagePasswordModal"
import SponsorshipModal from "@/components/layout/SponsorshipModal"
import Link from "next/link"

export default function Packages() {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [showModal, setShowModal] = useState(true)
	const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false)
	const [selectedPackage, setSelectedPackage] = useState<string>('')

	useEffect(() => {
		// Always show modal on page load
		setShowModal(true)
		setIsAuthenticated(false)
	}, [])

	const handleSuccess = () => {
		setIsAuthenticated(true)
		setShowModal(false)
		// Removed sessionStorage to require password on every visit
	}

	const handleClose = () => {
		setShowModal(false)
		// Redirect to home if user closes without entering password
		window.location.href = '/'
	}

	const handleContactClick = (packageName: string) => {
		setSelectedPackage(packageName)
		setIsSponsorModalOpen(true)
	}

	if (!isAuthenticated) {
		return (
			<PackagePasswordModal 
				isOpen={showModal} 
				onClose={handleClose}
				onSuccess={handleSuccess}
			/>
		)
	}

	return (
		<>
			<Layout headerStyle={3} footerStyle={3}>
				<div>
					{/*===== HERO AREA STARTS =======*/}
					<div className="inner-page-header" style={{ backgroundImage: 'url(/assets/img/all-images/used-images/1.jpg)' }}>
						<div className="container">
							<div className="row">
								<div className="col-lg-4 m-auto">
									<div className="heading1 text-center">
										<h1>Sponsorship Packages</h1>
										<div className="space20" />
										<Link href="/">Home <i className="fa-solid fa-angle-right" /> <span>Packages</span></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== HERO AREA ENDS =======*/}

					{/*===== PRICING AREA STARTS =======*/}
					<div className="pricing-lan-section-area sp1">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 m-auto">
									<div className="heading2 text-center space-margin60">
										<h5>Sponsorship Opportunities</h5>
										<div className="space18" />
										<h2 className="text-anime-style-3">Partner With Us</h2>
									</div>
								</div>
							</div>

							{/* Platinum Package */}
							<div className="row">
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Platinum Exhibitor</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Complimentary Booth 6x3m Raw Space</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />4 Delegate Passes</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />10 Guaranteed Direct Meetings</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Post Event Data with Contact Details</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Media Wall, LED Screen, Website Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Social Media & Event Wide Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Full Page Brochure Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Travel Passport Activity</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on all Delegate Badges</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Large Logo on Tent Card</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Free 4 Passes for Gala Dinner</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Platinum Partner')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* Gold Package */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Gold Exhibitor</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Complimentary Booth 3x3m Raw Space</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />3 Delegate Passes</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />5 Guaranteed Direct Meetings</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Post Event Data (50%)</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Media Wall, LED Screen, Website Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Social Media & Event Wide Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Half Page Brochure Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Travel Passport Activity</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on all Delegate Badges</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Medium Logo on Tent Card</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Free 3 Passes for Gala Dinner</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Gold Partner')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* Silver Package */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Silver Packages</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Complimentary Booth 3x2m Raw Space</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />2 Delegate Passes</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />3 Guaranteed Direct Meetings</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />LED Screen, Website, Social Media</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Event Wide On-site Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Half Page Brochure Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Travel Passport Activity</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on all Delegate Badges</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Small Logo on Tent Card</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Free 2 Passes for Gala Dinner</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Silver Partner')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>
							</div>

							<div className="space50" />

							{/* Second Row */}
							<div className="row">
								{/* Giveaway Bags */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Networking Bright + Accessories Sponsorship</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Official Title Recognition</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Brand Visibility on Gift Bags</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Include Branded Items</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Exclusive Brand Mention</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Website & Social Media Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Brochure</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-site Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Networking Access</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Free 2 Passes for Gala Dinner</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Networking Bright + Accessories Sponsorship')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* Speaker Package */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Speaker Package</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />1 Complimentary VIP Seating Ticket</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Banners at Front Desk</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Verbal Recognition at Podium</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Event Marketing Materials</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Website & Social Media</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Company Brochures Distribution</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Event Photos & Videos</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Speaker Package')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* Tech Sponsor */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Tech Sponsor</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Official Tech Engagement Partner</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />15-minute Interactive Session</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Website & Social Media Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Brochure</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-site Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Lead Generation Opportunity</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Dedicated Booth / Demo Space</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Thought Leadership Opportunity</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Tech Sponsor')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>
							</div>

							<div className="space50" />

							{/* Third Row */}
							<div className="row">
								{/* Co-Sponsors */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Co-Sponsors</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Official Co-sponsor Recognition</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />1 Delegate Pass</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Website & Social Media Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Brochure</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-site Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />1 Free Pass for Gala Dinner</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Co-Sponsors')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* F&B Chocolate/Sweets */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>F&B Chocolate/Sweets</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Product Placement & Sampling</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Branded Sweet Corners</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Website & Marketing</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Recognition in Event Agenda</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Inclusion in Delegate Giveaways</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Interactive Booth Display</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-site Engagement</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('F&B Chocolate/Sweets')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* Training Partner */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Training Partner</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Branding as Training Partner</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />CPD Certification</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />2 Delegate Passes</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Website & Social Media Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Brochure</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />15 Mins Branded Session</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Small Logo on Tent Card</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Free 2 Passes for Gala Dinner</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Training Partner')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>
							</div>

							<div className="space50" />

							{/* Fourth Row */}
							<div className="row">
								{/* Insurance Partner */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Insurance Partner</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Official Insurance Partner</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Exhibition Booth Space</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Speaking / Session Opportunity</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Targeted Audience Access</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Website & Social Media Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Brochure</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-site Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />VIP Networking Invitations</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Insurance Partner')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* Gala Dinner Sponsor */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Gala Dinner Sponsor</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Branding as Gala Dinner Partner</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Website & Social Media Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Logo on Brochure</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-site Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Large Logo on Tent Card</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Gala Dinner Sponsor')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>

								{/* Entertainment Sponsor */}
								<div className="col-lg-4 col-md-6 d-flex">
									<div className="pricing-boxarea w-100 d-flex flex-column">
										<h5>Entertainment Sponsor</h5>
										<div className="space20" />
										<div className="space8" />
										<ul style={{flexGrow: 1}}>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Official Entertainment Sponsor</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Stage Visibility & Logo Placement</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-Stage Mentions</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Segment Co-Branding</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />Digital & Media Exposure</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />VIP Networking Access</li>
											<li><img src="/assets/img/icons/check2.svg" alt="" />On-site Branding Opportunities</li>
										</ul>
										<div className="space28" />
										<div className="btn-area1">
											<button onClick={() => handleContactClick('Entertainment Sponsor')} className="vl-btn1" style={{border: 'none', cursor: 'pointer'}}>Contact Us</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/*===== PRICING AREA ENDS =======*/}

				</div>
			</Layout>
			
			<SponsorshipModal 
				isOpen={isSponsorModalOpen} 
				onClose={() => setIsSponsorModalOpen(false)}
				preSelectedPackage={selectedPackage}
			/>
		</>
	)
}

