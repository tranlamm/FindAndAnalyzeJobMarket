import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Welcome.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import routes from '~/configs/routes';

const cx = classNames.bind(styles);

function Welcome() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item interval={20000}>
                <img
                    className={cx('img')}
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--F7w_snYb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vda3askm2sbfjl717q9q.png"
                    alt="Slide 1"
                />
                <Carousel.Caption className={cx('main')}>
                    <h1 className={cx('content-text')}>Welcome</h1>
                    <h1 className={cx('content-text')}>Welcome</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className={cx('img')}
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--F7w_snYb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vda3askm2sbfjl717q9q.png"
                    alt="Slide 2"
                />
                <Carousel.Caption>
                    <h3 className="mb-4">
                        Hello, my name is <span className={cx('strong')}>Tran Lam</span>
                    </h3>
                    <p>
                        I'm currently a <span className={cx('strong')}>computer engineering</span> student at Ha Noi
                        university of science and technology{' '}
                    </p>
                    <p className="mb-5">
                        I have been learning <span className={cx('strong')}>web development</span> for 2 months and this
                        is my first project
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className={cx('img')}
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--F7w_snYb--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vda3askm2sbfjl717q9q.png"
                    alt="Slide 3"
                />
                <Carousel.Caption>
                    <h3 className="mb-4">This is my demo job-website</h3>
                    <p>
                        This website crawl data from another web to find, statistic and analyze about labor market in
                        VietNam
                    </p>
                    <p>
                        Reference website:{' '}
                        <a target="_blank" rel="noopener noreferrer" href="https://topdev.vn/">
                            https://topdev.vn
                        </a>
                        ,{' '}
                        <a target="_blank" rel="noopener noreferrer" href="https://topdev.vn/">
                            https://www.topcv.vn
                        </a>
                        ,{' '}
                        <a target="_blank" rel="noopener noreferrer" href="https://topdev.vn/">
                            https://www.careerlink.vn
                        </a>
                    </p>
                    <Button variant="success" size="lg" as={NavLink} to={routes.home} className={cx('btn')}>
                        Get Started
                    </Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Welcome;
