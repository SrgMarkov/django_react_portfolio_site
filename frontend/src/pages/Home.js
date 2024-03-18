import Header from '../components/header/Header'

const Home = () => {
	return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>Python, Django, Django Rest Framework, Redis, Postgre SQL</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Frotend</h2>
							<p>JavaScript, React JS</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Additionally</h2>
							<p>Git, Docker, Kubernetes, Linux</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;