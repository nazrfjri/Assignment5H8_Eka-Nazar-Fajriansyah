import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get("https://api.currencyfreaks.com/v2.0/rates/latest", {
      params: {
        'apikey' : import.meta.env.VITE_API_KEY,
        'symbols' : 'CAD,EUR,IDR,JPY,CHF,GBP'
      }
    })
    .then(res => {
      setRates(res.data.rates);
    })
    .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="min-h-screen bg-zinc-300 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Table */}
      <Table rates={rates} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
