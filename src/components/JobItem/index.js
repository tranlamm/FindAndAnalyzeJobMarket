import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './JobItem.module.scss';

const cx = classNames.bind(styles);
function JobItem({ data }) {
    return (
        <Col className="mb-4">
            <a target="_blank" rel="noopener noreferrer" href={data.link} className={cx('wrapper')}>
                <div className={cx('wrapper-img')}>
                    <Image src={data.img} fluid className={cx('img')}></Image>
                </div>
                <div className={cx('content')}>
                    <div className={cx('name')}>
                        {data.name}
                        <Badge pill bg="success" className={cx('salary')}>
                            {data.salary}
                        </Badge>
                    </div>
                    <span className={cx('company')}>{data.company}</span>
                    <Badge pill bg="secondary" className={cx('location')}>
                        <FontAwesomeIcon icon={faLocationDot} className={cx('location-icon')}></FontAwesomeIcon>
                        <span className={cx('location-title')}>{data.location}</span>
                    </Badge>
                </div>
            </a>
        </Col>
    );
}

export default JobItem;
