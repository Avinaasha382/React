function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      annualData.push({
        year: i + 1,
        interest: interestEarnedInYear, 
        valueEndOfYear: investmentValue, 
        annualInvestment: annualInvestment, 
      });
    }
  
    return annualData;
  }
  
  
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  

export default function InvestmentResults({userInfo}) {
    const userData = {...userInfo};

    const annualData = calculateInvestmentResults(userData);
    console.log(annualData);

    let prevInterest = 0;
    

    return (
        <table id = "result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year) </th>
                    <th>Total Interest </th>
                    <th>Invested Capital</th>
                </tr>
            </thead>


            <tbody>
                {annualData.map((data) => {
                    const year = data.year;
                    const investmentValue = data.valueEndOfYear;
                    const interest = data.interest;
                    const totalInterest = interest + prevInterest;
                    const investedCapital = investmentValue - totalInterest;
                    prevInterest = totalInterest;

                    return <tr>
                        <td>{year}</td>
                        <td>{formatter.format(investmentValue)}</td>
                        <td>{formatter.format(interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}