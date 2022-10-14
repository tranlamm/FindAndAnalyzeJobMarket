import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import classNames from 'classnames/bind';
import styles from './CareerAnalysis.module.scss';

import Container from 'react-bootstrap/Container';
import { analyzeDataState$ } from '~/redux/selectors';

import { analyzeCareer } from '~/analyzeData';

const cx = classNames.bind(styles);

function CareerAnalysis() {
    const [chartData, setChartData] = useState({});
    const data = useSelector(analyzeDataState$);

    const isEmptyData = useMemo(() => {
        return Object.keys(chartData).length === 0 && chartData.constructor === Object;
    }, [chartData]);

    useEffect(() => {
        setChartData(analyzeCareer(data));
    }, [data]);

    return (
        <Container>
            <div className={cx('wrapper-content')}>
                <h3 className="text-center mb-4">Phân tích dựa trên ngành nghề tuyển dụng</h3>
                {!isEmptyData && (
                    <div className={cx('canvas-container')}>
                        <Pie
                            data={chartData}
                            options={{
                                maintainAspectRatio: false,
                            }}
                        />
                    </div>
                )}
            </div>
        </Container>
    );
}

export default CareerAnalysis;
