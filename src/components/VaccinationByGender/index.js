import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderInfo} = props

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="vaccination-by-gender-heading">Vaccination by gender</h1>
      <ResponsiveContainer width="90%" height={420}>
        <PieChart>
          <Pie
            cx="50%"
            cy="60%"
            data={vaccinationByGenderInfo}
            dataKey="count"
            startAngle={180}
            endAngle={0}
            innerRadius="23%"
            outerRadius="46%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
