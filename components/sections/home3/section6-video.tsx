'use client'

export default function Section6Video() {
	return (
		<>
			<div className="video-section-area" style={{
				width: '100%',
				padding: 0,
				margin: 0,
				backgroundColor: '#000'
			}}>
				<div className="container-fluid" style={{ padding: 0 }}>
					<div className="row" style={{ margin: 0 }}>
						<div className="col-12" style={{ padding: 0 }}>
							<div className="video-wrapper" style={{
								position: 'relative',
								width: '100%',
								paddingTop: '56.25%', // 16:9 Aspect Ratio
								backgroundColor: '#000'
							}}>
								<video
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: '100%',
										objectFit: 'cover'
									}}
									autoPlay
									muted
									loop
									playsInline
								>
									<source src="/assets/img/all-images/used-images/IMG_5799.MP4" type="video/mp4" />
									Your browser does not support the video tag.
								</video>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

