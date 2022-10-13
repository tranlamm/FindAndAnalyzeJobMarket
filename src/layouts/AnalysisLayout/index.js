import classNames from 'classnames/bind';
import styles from './AnalysisLayout.module.scss';

import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const cx = classNames.bind(styles);

function AnalysisLayout({ children }) {
    return (
        <div className="d-flex flex-column">
            <Header></Header>
            <Container className={cx('wrapper')}>
                <Row>
                    <Col lg={4} md={3} xs={2}>
                        <SideBar></SideBar>
                    </Col>

                    <Col lg={8} md={9} xs={10}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AnalysisLayout;
