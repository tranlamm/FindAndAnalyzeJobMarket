import classNames from 'classnames/bind';
import styles from './AnalysisLayout.module.scss';

import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import SideBarCanvas from '~/components/Offcanvas';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

function AnalysisLayout({ children }) {
    return (
        <div className="d-flex flex-column">
            <Header></Header>
            <Container className={cx('wrapper')}>
                <div className={cx('more-btn')}>
                    <SideBarCanvas className="d-block d-md-none"></SideBarCanvas>
                </div>
                <Row>
                    <Col md={3} className="d-none d-md-block">
                        <SideBar></SideBar>
                    </Col>

                    <Col md={9} xs={12}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AnalysisLayout;
