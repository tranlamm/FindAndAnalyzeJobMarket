import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';

import JobList from '~/components/JobList';
import { actions } from '~/redux/reducers/jobSlice';
import { loadingState$ } from '~/redux/selectors';
import Container from 'react-bootstrap/Container';
import Loading from '~/components/Loading';
import SearchBar from '~/components/SearchBar';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [page, setPage] = useState(1);
    const isLoading = useSelector(loadingState$);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getJobsRequest(page));
    }, [page, dispatch]);

    const handlePageClick = (data) => {
        setPage(data.selected + 1);
    };

    const handleSearch = useCallback(
        (data) => {
            dispatch(actions.getSearchJobsRequest(data));
        },
        [dispatch],
    );

    return (
        <Container>
            {!isLoading && (
                <>
                    <div className={cx('search-bar')}>
                        <SearchBar onClick={handleSearch}></SearchBar>
                    </div>
                    <JobList></JobList>
                </>
            )}
            {isLoading && <Loading></Loading>}

            <ReactPaginate
                previousLabel="<<"
                nextLabel=">>"
                breakLabel="..."
                marginPagesDisplayed={3}
                pageRangeDisplayed={3}
                pageCount={50}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center flex-wrap'}
                pageClassName={cx('page-item', {
                    disabled: isLoading,
                })}
                pageLinkClassName={'page-link'}
                previousClassName={cx('page-item', {
                    disabled: isLoading,
                })}
                previousLinkClassName={'page-link'}
                nextClassName={cx('page-item', {
                    disabled: isLoading,
                })}
                nextLinkClassName={'page-link'}
                breakClassName={'disabled page-item'}
                breakLinkClassName={'disabled page-link'}
                activeClassName={'active'}
            />
        </Container>
    );
}

export default Home;
