import Image from 'next/image'

export default function Preloader() {
	return (
		<>
			<div className="preloader">
				<div className="loading-container">
					<div className="loading" />
					<div id="loading-icon"><Image src="/assets/img/logo/preloader.png" alt="Loading" width={100} height={100} priority /></div>
				</div>
			</div>


		</>
	)
}
