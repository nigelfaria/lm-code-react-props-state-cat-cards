import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import Card from './components/card';
import { useState } from 'react';
import catData from './data/cat-data';
import Dog from './data/dog';
import dogData from './data/dog-data';

function App(): JSX.Element {

	const [dogs, setDogs] = useState<Array<Dog>>(dogData);
	const dogCount = dogs.length;

	const [cats, setCats] = useState<Array<Cat>>(catData);
	const catCount = cats.length;
	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount = {dogCount} />

			<main>
				<div className='cards__wrapper'>
					{cats.map((cat, index) => <Card
						key = {cat.id}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						catIndex={index}
					/>)}
				</div>
				<hr/>
				<hr/>
				<div className='cards__wrapper'>
					{dogs.map((dog, index) => <Card
						key = {dog.id}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
					/>)}
				</div>

			</main>

			<Footer />
		</>
	);
}

export default App;
