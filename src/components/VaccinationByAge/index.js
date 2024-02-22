import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeInfo} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination by age</h1>
      <ResponsiveContainer width="90%" height={420}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={vaccinationByAgeInfo}
            dataKey="count"
            startAngle={0}
            endAngle={360}
            outerRadius="42%"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
