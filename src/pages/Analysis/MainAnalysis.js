import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '~/redux/reducers/jobSlice';
import classNames from 'classnames/bind';
import styles from './MainAnalysis.module.scss';

import CustomButton from '~/components/CustomButton';
import Container from 'react-bootstrap/Container';

const cx = classNames.bind(styles);

function MainAnalysis() {
    const [crawl, setCrawl] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (crawl) {
            dispatch(actions.getAllJobsRequest());
        }
    }, [crawl, dispatch]);

    const handleCrawlData = () => {
        setCrawl(true);
    };

    return (
        <Container>
            <div className={cx('header')}>
                <h3>Please crawl the data to analyze</h3>
                <p>This might take several minutes, please wait</p>
                <CustomButton>Crawl</CustomButton>
            </div>
        </Container>
    );
}

export default MainAnalysis;
