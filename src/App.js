import './App.css';
import Button from './components/Button';
import LanguageSelector from './components/LanguageSelector';
import ProductList from './components/ProductList';
import TermsOfUse from './components/TermsOfUse';
import Todo from './components/Todo';

function App() {
  let configObj = {
    href: "https://some-url.com",
  }

  const productsList = [
    {id: 'p1', title: 'A Book', price: 59.99},
    {id: 'p2', title: 'A Carpet', price: 129.49},
    {id: 'p3', title: 'Another Book', price: 39.99},
  ];

  return (
    <div className="App">
      <TermsOfUse />
      <LanguageSelector country={"de"} />
      <Button config={configObj} isButton={false} children={"Hello"}/>
      <ProductList products={productsList}/>
      <Todo/>
    </div>
  );
}

export default App;
