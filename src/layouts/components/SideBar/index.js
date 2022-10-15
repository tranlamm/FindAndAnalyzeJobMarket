import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import { NavLink } from 'react-router-dom';
import routes from '~/configs/routes';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <h4>Filters</h4>
                <NavLink className={cx('item')} to={routes.locationAnalysis}>
                    <span className={cx('item-text')}>Khu vực</span>
                </NavLink>
                <NavLink className={cx('item')} to={routes.careerAnalysis}>
                    <span className={cx('item-text')}>Ngành nghề</span>
                </NavLink>
                <NavLink className={cx('item')} to={routes.jobAnalysis}>
                    <span className={cx('item-text')}>Công việc</span>
                </NavLink>
                <NavLink className={cx('item')} to={routes.itAnalysis}>
                    <span className={cx('item-text')}>IT</span>
                </NavLink>
            </ul>
        </div>
    );
}

export default SideBar;
