import React, { useCallback, useState, useEffect } from 'react';
import './chart.scss';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { useCurrentPng } from 'recharts-to-png';
import { Button } from '@material-ui/core';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { saveAs } from 'file-saver';

export const Chart: React.FC = () => {
  const [mediana, setMediana] = useState('');
  const {
    data: { statistic },
  } = useTypedSelector((state) => state);
  let data = [
    {
      value: statistic?.column1s,
      Vacancy: statistic?.column1Count,
    },
    {
      value: statistic?.column2s,
      Vacancy: statistic?.column2Count,
    },
    {
      value: statistic?.column3s,
      Vacancy: statistic?.column3Count,
    },
    {
      value: statistic?.column4s,
      Vacancy: statistic?.column4Count,
    },
    {
      value: statistic?.column5s,
      Vacancy: statistic?.column5Count,
    },
    {
      value: statistic?.column6s,
      Vacancy: statistic?.column6Count,
    },
  ];

  useEffect(() => {
    if (typeof statistic?.mediana === 'number' && statistic.mediana !== null) {
      let a = '';
      if (statistic.mediana > statistic.column1l && statistic?.mediana < statistic.column1r) {
        a = statistic.column1s;
        // setMediana(statistic.column1s);
      }
      if (statistic.mediana > statistic.column1r && statistic.mediana < statistic.column2l) {
        data.splice(1, 0, { value: statistic.mediana.toString(), Vacancy: 0 });
        a = statistic.mediana.toString();
        // setMediana(statistic.mediana.toString());
      }
      if (statistic.mediana > statistic.column2l && statistic?.mediana < statistic.column2r) {
        a = statistic.column2s;
        // setMediana(statistic.column2s);
      }
      if (statistic.mediana > statistic.column2r && statistic?.mediana < statistic.column3l) {
        a = statistic.mediana.toString();
        // data.splice(2, 0, { value: statistic?.mediana.toString(), Vacancy: 0 });
      }
      if (statistic.mediana > statistic.column3l && statistic.mediana < statistic.column3r) {
        a = statistic.column3s;
        // setMediana(statistic.column3s);
      }
      if (statistic.mediana > statistic.column3r && statistic.mediana < statistic.column4l) {
        a = statistic.mediana.toString();
        // data.splice(3, 0, { value: statistic.mediana.toString(), Vacancy: 0 });
      }
      if (statistic.mediana > statistic.column4l && statistic.mediana < statistic.column4r) {
        a = statistic.column4s;
        // setMediana(statistic.column4s);
      }
      if (statistic.mediana > statistic.column4r && statistic.mediana < statistic.column5l) {
        a = statistic.mediana.toString();
        // data.splice(4, 0, { value: statistic.mediana.toString(), Vacancy: 0 });
      }
      if (statistic.mediana > statistic.column5l && statistic.mediana < statistic.column5r) {
        a = statistic.column5s;
        // setMediana(statistic.column5s);
      }
      if (statistic.mediana > statistic.column5r && statistic.mediana < statistic.column6l) {
        a = statistic.mediana.toString();
        // data.splice(5, 0, { value: statistic.mediana.toString(), Vacancy: 0 });
      }
      if (statistic.mediana > statistic.column6l && statistic.mediana < statistic.column6r) {
        a = statistic.column6s;
        // setMediana(statistic.column6s);
      }
      setMediana(a);
    }
  }, [statistic]);

  const [getPng, { ref, isLoading }] = useCurrentPng();
  const handleDownload = useCallback(async () => {
    const png = await getPng();
    if (png) {
      saveAs(png, 'myChart.png');
    }
  }, [getPng]);

  if (statistic !== null) {
    return (
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            ref={ref}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="value" scale="band" />
            <YAxis label={{ value: 'Кол-во вакансий', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Vacancy" barSize={40} fill="#413ea0" />
            <ReferenceLine x={mediana} stroke="red" label={`Медиана = ${statistic.mediana} т.р.`} />
          </ComposedChart>
        </ResponsiveContainer>
        <Button
          variant="contained"
          color="primary"
          style={{ height: '30px', width: '200px' }}
          onClick={handleDownload}>
          {isLoading ? 'Downloading...' : 'Download Chart PNG'}
        </Button>
      </div>
    );
  } else return null;
};
