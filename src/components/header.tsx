interface HeaderProps {
	catCount: number,
	dogCount: number,
}
const Header: React.FC<HeaderProps> = (props) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {props.catCount} Cats in this Cat-Dog App
		</h2>
		<h2 className='header__title'>
			There are currently {props.dogCount} Dogs in this Cat-Dog App
		</h2>
	</header>
);

export default Header;
