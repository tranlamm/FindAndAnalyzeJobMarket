import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '~/redux/reducers/jobSlice';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

import classNames from 'classnames/bind';
import styles from './ItAnalysis.module.scss';

import CustomButton from '~/components/CustomButton';
import Container from 'react-bootstrap/Container';
import Loading from '~/components/Loading';
import { itLoadingState$, itDataState$ } from '~/redux/selectors';

import { analyzeIt } from '~/analyzeData';

const cx = classNames.bind(styles);

function ItAnalysis() {
    const [crawl, setCrawl] = useState(false);
    const [chartData, setChartData] = useState({});
    const isLoading = useSelector(itLoadingState$);
    const data = useSelector(itDataState$);
    const dispatch = useDispatch();

    const isEmptyData = useMemo(() => {
        return Object.keys(chartData).length === 0 && chartData.constructor === Object;
    }, [chartData]);

    useEffect(() => {
        if (crawl) {
            setCrawl(false);
            dispatch(actions.getAllItRequest());
        }
    }, [crawl, dispatch]);

    useEffect(() => {
        setChartData(analyzeIt(data));
    }, [data]);

    const handleCrawlData = () => {
        setCrawl(true);
    };

    return (
        <Container>
            <div className={cx('header')}>
                <h3>Please crawl the data to analyze</h3>
                <p>This might take several minutes, please wait</p>
                {!isLoading && <CustomButton onClick={handleCrawlData}>Crawl</CustomButton>}
                {isLoading && <Loading></Loading>}
            </div>

            <div className={cx('wrapper-content')}>
                {!isEmptyData && (
                    <>
                        <h3 className="text-center mb-4">Analysis IT market based on skills</h3>
                        <div className={cx('canvas-container')}>
                            <Bar
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

export default ItAnalysis;
