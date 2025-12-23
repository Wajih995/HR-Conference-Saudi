'use client'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 4,
	spaceBetween: 30,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop: true,

	// Navigation
	navigation: {
		nextEl: '.h1n',
		prevEl: '.h1p',
	},

	// Pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		575: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
		1350: {
			slidesPerView: 4,
			spaceBetween: 30,
		},
	}
}
export default function BrandSlider() {
	return (
		<>
			<style dangerouslySetInnerHTML={{__html: `
				.brand-slider-area .brand-box {
					height: 150px !important;
					display: flex !important;
					align-items: center !important;
					justify-content: center !important;
					padding: 20px !important;
					background: var(--ztc-text-text-1) !important;
					border-radius: 8px !important;
				}
				.brand-slider-area .brand-box img {
					max-width: 90% !important;
					max-height: 90% !important;
					width: auto !important;
					height: auto !important;
					object-fit: contain !important;
				}
			`}} />
			<Swiper {...swiperOptions} className="brand-slider-area owl-carousel">
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/Dorat-Najd-Resort-Logo.png.png" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/wings-way-logo.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/lets-media-solution-logo.png" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/cpd-logo.png" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/s-logo1.png" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/s-logo2.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/s-logo3.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/s-logo4.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide className="brand-box">
					<img src="/assets/img/all-images/used-images/s-logo5.jpg" alt="" />
				</SwiperSlide>
				

			</Swiper>
		</>
	)
}
