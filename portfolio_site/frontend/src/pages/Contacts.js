const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Izhevsk, Russia</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<p>
							<a href="https://t.me/srgmarkov">@SrgMarkov</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">WhatsApp</h2>
						<p>
							<a href="https://wa.me/79097150881">+7 (909) 715-08-81</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:srg.markov85@gmail.com">
							srg.markov85@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;