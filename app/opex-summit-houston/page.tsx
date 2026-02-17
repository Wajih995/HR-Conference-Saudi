import Layout from "@/components/layout/Layout"

const REGISTER_URL = "https://opex-project-management.com/conference/"

export default function OpexSummitHoustonPage() {
	return (
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
										Houston EPC Summit October 2026
									</h1>
									<div className="space16" />
									<p style={{ color: "rgba(255,255,255,0.92)", margin: 0, fontSize: "18px" }}>
										October 2026 · Houston, USA
									</p>
									<div className="space24" />
									<div className="btn-area1">
										<a
											className="vl-btn1"
											href={REGISTER_URL}
											target="_blank"
											rel="noopener noreferrer"
											style={{ display: "inline-block" }}
										>
											Register now
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
								content: "";
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
									<h5>Future Conference</h5>
									<div className="space16" />
									<h2 className="text-anime-style-3">Built for EPC leaders delivering complex projects</h2>
									<div className="space16" />
									<p>
										Experience the forefront of project management at the Global EPC Project Management Summit in
										Houston, USA, October 2026. Connect with industry leaders, enhance your skills, and explore the
										latest innovations in EPC, including the execution of mega projects. Join top professionals for
										insightful sessions and valuable networking opportunities.
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
										<h3 className="opex-card-title">2) What You'll Learn</h3>
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
											<strong>Dates:</strong> October 2026
											<br />
											<strong>Venue:</strong> Houston, USA
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
											<a
												className="vl-btn3 btn2"
												href={REGISTER_URL}
												target="_blank"
												rel="noopener noreferrer"
											>
												Register now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
