import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import routes from '~/configs/routes';
import classNames from 'classnames/bind';
import styles from './Offcanvas.module.scss';

const cx = classNames.bind(styles);

function SideBarCanvas({ className }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={className}>
            <Button variant="outline-dark" onClick={handleShow}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className={cx('title')}>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <div className={cx('wrapper')}>
                    <NavLink to={routes.locationAnalysis} className={cx('link')} onClick={handleClose}>
                        <span className={cx('item')}>Khu vực</span>
                    </NavLink>
                    <NavLink to={routes.careerAnalysis} className={cx('link')} onClick={handleClose}>
                        <span className={cx('item')}>Ngành nghề</span>
                    </NavLink>
                    <NavLink to={routes.jobAnalysis} className={cx('link')} onClick={handleClose}>
                        <span className={cx('item')}>Công việc</span>
                    </NavLink>
                    <NavLink to={routes.itAnalysis} className={cx('link')} onClick={handleClose}>
                        <span className={cx('item')}>IT</span>
                    </NavLink>
                </div>
            </Offcanvas>
        </div>
    );
}

export default SideBarCanvas;
