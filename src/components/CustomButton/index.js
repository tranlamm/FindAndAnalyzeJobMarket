import classNames from 'classnames/bind';
import styles from './CustomButton.module.scss';

const cx = classNames.bind(styles);

function CustomButton({ children, onClick }) {
    return (
        <div className={cx('button')} onClick={onClick}>
            {children}
        </div>
    );
}

export default CustomButton;
