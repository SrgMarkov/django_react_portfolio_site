import './style.css';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<a href='#'>
						<strong>Sergey Markov</strong> portfolio
					</a>

					<ul className="nav-list">
						<li className="nav-list__item">
							Home
						</li>

						<li className="nav-list__item">
							Projects
						</li>
						<li className="nav-list__item">
							Contacts
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
