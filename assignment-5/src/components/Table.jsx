import React from 'react';

function Table({ rates }) {
  return (
    <div className="w-full max-w-4xl p-6 mx-auto mt-6 bg-white rounded-lg shadow-lg text-gray-800">
      <h1 className="text-2xl font-bold mb-4 text-center">Currency Exchange Rates</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-zinc-500 text-white">
            <th className="border border-gray-300 px-4 py-2">Currency</th>
            <th className="border border-gray-300 px-4 py-2">We Buy</th>
            <th className="border border-gray-300 px-4 py-2">Exchange Rate</th>
            <th className="border border-gray-300 px-4 py-2">We Sell</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rates).map(([currency, rate], index) => (
            <tr key={index} className="text-center bg-white even:bg-zinc-100 hover:bg-orange-500">
              <td className="border border-gray-300 px-4 py-2">{currency}</td>
              <td className="border border-gray-300 px-4 py-2">{(parseFloat(rate) + parseFloat(rate * 0.05)).toFixed(4)}</td>
              <td className="border border-gray-300 px-4 py-2">{parseFloat(rate).toFixed(4)}</td>
              <td className="border border-gray-300 px-4 py-2">{(parseFloat(rate) - parseFloat(rate * 0.05)).toFixed(4)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center text-gray-500">
        <p>Rates are based on 1 USD</p>
        <p>This application uses API from <a href="https://currencyfreaks.com" className="underline text-blue-500">currencyfreaks.com</a></p>
      </div>
    </div>
  );
}

export default Table;
