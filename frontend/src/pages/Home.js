import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>
								Python, Django framework, Django Rest Framework,
								Nginx, Linux, SQL, Redis
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>JavaScript, HTML, CSS, NPM, ReactJS</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Tools</h2>
							<p>Git, Docker, Kubernetes</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;