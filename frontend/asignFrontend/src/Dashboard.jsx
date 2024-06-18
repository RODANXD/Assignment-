import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import { FcSalesPerformance, FcBearish, FcBusinessman, FcInTransit } from "react-icons/fc";

export const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/insights');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='flex flex-col gap-20'>
            <div className='flex flex-row justify-evenly'>
                <div className="sales flex items-center gap-3 w-64 bg-slate-800 p-2 px-6 rounded-md">
                    <FcSalesPerformance className='size-10' />
                    <div className="info flex flex-col items-center">
                        <span>Total Sales</span>
                        <span>$24677</span>
                    </div>
                </div>
                <div className="sales flex items-center gap-3 w-64 bg-slate-800 p-2 px-6 rounded-md">
                    <FcBearish className='size-10' />
                    <div className="info flex flex-col items-center">
                        <span>Total Expenses</span>
                        <span>$5327</span>
                    </div>
                </div>
                <div className="sales flex items-center gap-3 w-64 bg-slate-800 p-2 px-6 rounded-md">
                    <FcBusinessman className='size-10' />
                    <div className="info flex flex-col items-center">
                        <span>Total User</span>
                        <span>12439</span>
                    </div>
                </div>
                <div className="sales flex items-center gap-3 w-64 bg-slate-800 p-2 px-6 rounded-md">
                    <FcInTransit className='size-10' />
                    <div className="info flex flex-col items-center">
                        <span>Total Order</span>
                        <span>68764</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-evenly'>
                <div style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#2d3748', padding: '20px' }}>
                    <Plot
                        data={[
                            {
                                x: data.map(item => item.likelihood),
                                y: data.map(item => item.intensity),
                                type: 'bar',
                                marker: { color: '#f7797d' },
                                text: data.map(item => item.title), // Hover text
                                hoverinfo: 'x+y+text' // Display x, y, and text on hover
                            },
                        ]}
                        layout={{
                            width: 500,
                            height: 500,
                            title: 'Intensity by Insight',
                            paper_bgcolor: 'rgba(0,0,0,0)',
                            plot_bgcolor: 'rgba(0,0,0,0)',
                            font: { color: '#fff' },
                            xaxis: { title: 'Likelihood' },
                            yaxis: { title: 'Intensity' },
                            margin: { l: 40, r: 10, b: 40, t: 40 },
                            hovermode: 'closest',
                        }}
                        config={{ displayModeBar: false }}
                    />
                </div>
                <div style={{ borderRadius: '10px', overflow: 'hidden', backgroundColor: '#2d3748', padding: '20px' }}>
                    <Plot
                        data={[
                            {
                                labels: data.map(item => item.topic),
                                values: data.map(item => item.intensity),
                                type: 'pie',
                                textinfo: 'label+percent',
                                insidetextorientation: 'radial',
                                marker: {
                                    colors: ['#f7797d', '#fbd1a2', '#a0c4ff', '#ca82ff', '#8eecf5']
                                }
                            },
                        ]}
                        layout={{
                            width: 500,
                            height: 500,
                            title: 'Topic Distribution by Intensity',
                            paper_bgcolor: 'rgba(0,0,0,0)',
                            font: { color: '#fff' },
                            margin: { l: 40, r: 10, b: 40, t: 40 }
                        }}
                        config={{ displayModeBar: false }}
                    />
                </div>
            </div>
        </div>
    );
};
