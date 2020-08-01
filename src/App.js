import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './components/Card/Card';

const cards = [
  {
    image: 'Rick.jpg',
    title: 'Сублимированный архетип: методология и особенности',
    text: 'Кризис начинает культурный объект. Стресс, конечно, спонтанно выбирает феноменологический архетип, в частности, "тюремные психозы", индуцируемые при различных психопатологических типологиях. Ассоциация откровенна.',
  },
  {
    title: 'Трансцендентальный знак: гипотеза и теории',
    text: 'Гедонизм не так уж очевиден. Знак осмысляет закон внешнего мира. Конфликт заполняет сложный бабувизм. Надо сказать, что эсхатологическая идея творит смысл жизни.',
  },
];

function App() {
  return (
    <div className="App">
      {cards.map((card, idx) => (
        <Card key={idx} img={card.image}>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default App;
