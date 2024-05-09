import './App.css';
import Activity5_1 from './components/Activity5_1';
import Button from './components/Button';
import LanguageSelector from './components/LanguageSelector';
import TermsOfUse from './components/TermsOfUse';
import Todo from './components/Todo';
import Activity5_2 from './components/Activity5_2';

function App() {
  let configObj = {
    href: "https://some-url.com",
  }

  let productList = [{id: Date.now(), title: "First", price: 12.09}]; 

  return (
    <div className="App">
      <TermsOfUse />
      <LanguageSelector country={"de"} />
      <Button config={configObj} isButton={false} children={"Hello"}/>
      <Todo/>
      <Activity5_1/>
      <Activity5_2 products={productList}/>
    </div>
  );
}

export default App;
