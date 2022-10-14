import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '~/redux/reducers/jobSlice';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import classNames from 'classnames/bind';
import styles from './LocationAnalysis.module.scss';

import CustomButton from '~/components/CustomButton';
import Container from 'react-bootstrap/Container';
import Loading from '~/components/Loading';
import { analyzeState$, analyzeDataState$ } from '~/redux/selectors';

import { analyzeLocation } from '~/analyzeData';

const cx = classNames.bind(styles);

function LocationAnalysis() {
    const [crawl, setCrawl] = useState(false);
    const [chartData, setChartData] = useState({});
    const isLoading = useSelector(analyzeState$);
    const data = useSelector(analyzeDataState$);
    const dispatch = useDispatch();

    const isEmptyData = useMemo(() => {
        return Object.keys(chartData).length === 0 && chartData.constructor === Object;
    }, [chartData]);

    useEffect(() => {
        if (crawl) {
            dispatch(actions.getAllJobsRequest());
            setCrawl(false);
        }
    }, [crawl, dispatch]);

    useEffect(() => {
        setChartData(analyzeLocation(data));
    }, [data]);

    const handleCrawlData = () => {
        setCrawl(true);
    };

    return (
        <Container>
            <div className={cx('header')}>
                <h3>Please crawl the data to analyze</h3>
                <p>This might take several minutes, please wait</p>
                <CustomButton onClick={handleCrawlData}>Crawl</CustomButton>
                {isLoading && <Loading></Loading>}
            </div>

            <div className={cx('wrapper-content')}>
                <h3 className="text-center mb-4">Phân tích dựa trên khu vực tuyển dụng</h3>
                {!isEmptyData && (
                    <div className={cx('canvas-container')}>
                        <Bar
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

export default LocationAnalysis;
