import Spinner from 'react-bootstrap/Spinner';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('label')}>Loading...</div>
            <Spinner animation="border" role="status"></Spinner>
        </div>
    );
}

export default Loading;
