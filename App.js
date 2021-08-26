import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Card from './components/card';
import Cards from './components/cards';





function App() {
  return (
    <div className="App">
        <Navigation />
          <h1 className="head"> Book your perfect accomodation</h1>
          <p className="paragraph">Take the hassle of securing your student home for the best year of your life we make our smile.</p>

      <div>< a href="#">
          <Card name="HOSTEL"/>
        </a>
      </div>


      <div>< a href="#">
          <Card name ="APARTMENT"/>
        </a>
      </div>


      <div>< a href="#">
          <Card name ="HOTELS"/>
        </a>
      </div>
      
      <div>
        <Cards name2 ="1 million beds"/>
      </div>

      <div>
        <Cards name2 ="Quality Apartment"/>
      </div>

      <div>
        <Cards name2 ="Best Hostels"/>
        
      </div>
    </div>

  );
}

export default App;
