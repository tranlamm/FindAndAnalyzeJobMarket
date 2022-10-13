import classNames from 'classnames/bind';
import styles from './CustomButton.module.scss';

const cx = classNames.bind(styles);

function CustomButton({ children }) {
    return <div className={cx('button')}>{children}</div>;
}

export default CustomButton;
