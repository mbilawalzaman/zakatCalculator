import React from "react";

const ZakatDetails = () => {
  return (
    <div>
      <h1 className="font-bold py-10 mb-10">Zikaat Nisaab Details</h1>

      <div className="text-left mb-10">
        <p>
          Zakat, one of the five pillars of Islam, is obligatory on all Muslims
          who meet the Nisab values. Nisab is the minimum amount of net capital
          that a Muslim must possess in order to be eligible to pay Zakat, which
          is prescribed as the equivalent of 87.48 grams (7.5 tola) of gold and
          612.36 grams (52.5 tola) of silver, respectively. If you wish to
          calculate your Zakat amount with ease, please use the Zakat Calculator
          below.
        </p>
        <p>
          If a person's wealth exceeds the nisaab amount and they have held it
          for one lunar year, they are required to give 2.5% of their wealth as
          zikaat.
        </p>
      </div>

      <div>
        <h2 className="text-white text-left font-bold underline underline-offset-1">
          Zakat on Pure Gold and Gold Jewellery
        </h2>
        <p className="text-left">
          Zakat should be calculated at 2.5% of the market value as on the date
          of valuation (Lunar date). Most Ulema favour the Market Value
          prevailing as on the date of Calculation and not the purchase price.
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-white text-left font-bold underline underline-offset-1">
          Zakat on Silver
        </h2>
        <p className="text-left">
          Zakat is to be paid on Silver in Pure form or Jewellery, Utensils,
          Decorative items and all household items including crockery, cutlery
          made of silver at 2.5% of the prevailing market rates.
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-white text-left font-bold underline underline-offset-1">
          Zakat on Cash and Bank Balances
        </h2>
        <p className="text-left">
          Zakat should be paid at 2.5% on all cash balance and bank balances in
          your savings, current or FD accounts. The amount technically should be
          in the bank for one year. Usually it happens that the balance keeps on
          changing as per personal requirements. You may make your best
          judgement and the best way is to pay on remaining amount on the day of
          calculation.
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-white text-left font-bold underline underline-offset-1">
          Zakat on Loans Given, Funds, etc
        </h2>
        <p className="text-left">
          Zakat is payable by you on loans you have given to your friends and
          relatives. It should be treated as Cash in Hand. You may deduct Loans
          Payable by you to arrive at the nett present value of your wealth.
          However, if you are in doubt, on the return of your money, then you
          may not calculate it as your wealth. But you can add it to your wealth
          retrospectively, if and when your receive your money. Zakat is payable
          on all Govt Bonds, Public Sector Bond, Cash value of Takaful policies,
          your paid-up portion of BC/Committee (Bachat/voluntary contribution)
          which is not yet received, Govt Bills receivables, etc. Pls remember
          you need to be aware of what the sharia says about Insurance and other
          types of investments. It is outside of the scope of this Zakath
          Calculator.
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-white text-left font-bold underline underline-offset-1">
          Zakat on Landed Property
        </h2>
        <p className="text-left">
          Zakat is not payable on personal residential House even if you have
          more than one and meant for residential purpose only. Also Zakat is
          not applicable on the value of Property given on rent irrespective of
          how many. However Zakat is payable on the rental income itself which
          is remain till the date of Zakat. However if your intention of holding
          properties is to sell at a future date for a profit or as an
          investment, then Zakat is payable on the Market Value of the property
          on Zakat date. Your paid-up portion of BC/Committee (Bachat/voluntary
          contribution) which is not yet received.
        </p>
      </div>
      <div className="pt-4">
        <h2 className="text-white text-left font-bold underline underline-offset-1">
          Disclaimer
        </h2>
        <p className="text-left">
          This Zakah Calculator is uploaded for the benefit of our customers in
          order to calculate their Zakah for the year. However, it is suggested
          that the Zakah calculation shall be further presented to a Sharia
          Scholar for his review/feedback.
        </p>
      </div>
      <div className="max-w-md mx-auto p-4 mt-20">
        <h2 className="text-xl font-semibold mb-4 ">
          Updated Zakat Nisaab Details
        </h2>
        <table className="w-full border border-black text-black mt-10">
          <thead>
            <tr className="bg-slate-100 border border-black">
              <th className="py-2 px-4 border-r border border-black">Asset</th>
              <th className="py-2 px-4">Nisab Value (in Pakistani Rupees)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-100 border border-black">
              <td className="py-2 px-4 border border-black">Gold</td>
              <td className="py-2 px-4">Rs. 1,473,000</td>
            </tr>
            <tr className="bg-slate-100 border border-black">
              <td className="py-2 px-4 border-r border border-black">Silver</td>
              <td className="py-2 px-4">Rs. 114,713</td>
            </tr>
          </tbody>
        </table>
        <div className="text-left mt-5">
          <h2 className="text-red-600">Note:</h2>
          <p>
            Current Nisab Value (2024), Please make sure to double check the
            values as per current date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZakatDetails;
