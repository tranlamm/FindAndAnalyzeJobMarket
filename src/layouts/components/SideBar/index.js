import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <NavLink className={cx('item')}>Skill</NavLink>
                <NavLink className={cx('item')}>Location</NavLink>
                <NavLink className={cx('item')}>Type</NavLink>
            </ul>
        </div>
    );
}

export default SideBar;
