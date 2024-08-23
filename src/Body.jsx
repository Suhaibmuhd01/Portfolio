import myImage from '/about/welcome.jpg';
const Body = () => {
  return (
    // main body content start
    <div className="sm-bab">
		<section id="welcome-hero" className="welcome-hero">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center">
						<div className="header-text">
							<h2 id="intro" >hi <span>,</span> i am <br/> Suhaib Muhammad <br /> Babangida <span>.</span></h2>
							<p style="color: rgb(185, 148, 185);"> I&apos;m a front-end developer specialize designing and developing website,
								have year of experience  in UI/UX design</p>
							<a href="assets/download/smb.txt" download>download resume</a>
						</div>
                        
                       {/* /.header-text ends */}
					</div>
				</div>
			</div>
		</section>


		<section id="about" className="about">
			<div className="section-heading text-center">
				<h2>about me</h2>
			</div>
			<div className="container">
				<div className="about-content">
					<div className="row">
						<div className="col-sm-6">
							<div className="single-about-txt">
								<h3>
									 Hello&comma; my name is Suhaib. I&apos;m an IT student with a passion for software development.
									   
								</h3>
								<p>
									I&apos;m a Professional frontend Web developer.I spent my time developing website for clients who want to bring their Web Present
									to the next level. I&apos;d love to work with you and build out the website you&apos;ve always wanted. If you are interested in
									working with me&comma; Please reach out to me through filling the contact form at the contact section or
									through the social media icons at the left side of the page.&nbsp;While i am now accepting new client to work with&comma;
									 I am also interested in joining a development team as a Font-End engineer. And you can view my resume by clicking on the
									 Top button. Thanks!.
									
								</p>
								<div className="row">
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>phone</h3>
											<p>+234-901-670-0342</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>email</h3>
											<p>suhaibmuhd04@gmail.com</p>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="single-about-add-info">
											<h3>website</h3>
											<p>&nbsp; &nbsp;www.suhaib.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 col-sm-5">
							<div className="single-about-img">
								<img src={myImage} alt="profile_image" />
								<div className="about-list-icon">
									<ul>
										<li>
											<a href="#">
												<i  className="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="#">
												<i  className="fa fa-dribbble" aria-hidden="true"></i>
											</a>
											
										</li>
										<li>
											<a href="#">
												<i  className="fa fa-twitter" aria-hidden="true"></i>
											</a>
											
										</li>
										<li>
											<a href="https://www.linkedin.com/in/suhaib-muhammad-babangida-b57674279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
												<i  className="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="">
												<i  className="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
										
										
									</ul>
								</div>
                             {/* /.about-list-icon */}

							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
		{/* about ends  */}
		
		{/* education start  */}
		<section id="education" className="education">
			<div className="section-heading text-center">
				<h2>education</h2>
			</div>
			<div className="container">
				<div className="education-horizontal-timeline">
					<div className="row">
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2022 - 2026</h2>
									<h3>Bsc <span>. </span>Information Technology</h3>
								</div>
                                {/* /.experience-time */}
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
										Federal	university Dutse
										</h4>
										<h5>Jigawa, Dutse.</h5>
										<p className="description">
									I attend Federal University Dutse (FUD) in 2022 to study Bsc. Information Technoloy.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2004 - 2008</h2>
									<h3>bachelor <span>of </span> computer science</h3>
								</div>
                                {/* /.experience-time */}
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											university of Illorin
										</h4>
										<h5>north carolina, USA</h5>
										<p className="description">
										I studied Msc. computer science from 2004-2008 at University of carolina.
										 Some people say computer science is the firt son of computing.
										</p>
									</div>
                                    {/* /.timeline-content */}
								</div>
                                {/* /.timeline */}
							</div>
						</div>
						<div className="col-sm-4">
							<div className="single-horizontal-timeline">
								<div className="experience-time">
									<h2>2007 - 2011</h2>
									<h3>Master <span>of </span> software Engineering</h3>
								</div>
                                {/* /.experience-time */}
								<div className="timeline-horizontal-border">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span className="single-timeline-horizontal spacial-horizontal-line
									"></span>
								</div>
								<div className="timeline">
									<div className="timeline-content">
										<h4 className="title">
											university of Middleton
										</h4>
										<h5>Lagos, Nigeria</h5>
										<p className="description">
											I did my masters at Middleton University Dubai&comma;&nbsp;i did my masters in&nbsp;
											Software Engineering, it&apos;s my best course.
										</p>
									</div>
                                    {/* /.timeline-content */}
								</div>
                                {/* /.timeline */}
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>
		{/* education end  lol😂 */}
        </div>

)
}

export default Body