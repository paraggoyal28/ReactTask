import React from 'react'
import Chart from "react-google-charts";
const PieChart = ({ completedTasks, incompletedTasks }) => {
    return (
        <Chart
            width={'350px'}
            height={'150px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Tasks', 'Number'],
                ['Completed Tasks', completedTasks],
                ['Incomplete Tasks', incompletedTasks],
            ]}

        />
    )
}

export default PieChart;
