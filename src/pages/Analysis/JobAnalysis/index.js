import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import classNames from 'classnames/bind';
import styles from './JobAnalysis.module.scss';

import Container from 'react-bootstrap/Container';
import { analyzeDataState$ } from '~/redux/selectors';

import { analyzeJob } from '~/analyzeData';

const cx = classNames.bind(styles);

function CareerAnalysis() {
    const [chartData, setChartData] = useState({});
    const data = useSelector(analyzeDataState$);

    const isEmptyData = useMemo(() => {
        return Object.keys(chartData).length === 0 && chartData.constructor === Object;
    }, [chartData]);

    useEffect(() => {
        setChartData(analyzeJob(data));
    }, [data]);

    return (
        <Container>
            <div className={cx('wrapper-content')}>
                {!isEmptyData && (
                    <>
                        <h3 className="text-center mb-4">Phân tích dựa trên công việc tuyển dụng</h3>
                        <div className={cx('canvas-container')}>
                            <Line
                                data={chartData}
                                options={{
                                    maintainAspectRatio: false,
                                }}
                            />
                        </div>
                    </>
                )}
            </div>
        </Container>
    );
}

export default CareerAnalysis;
