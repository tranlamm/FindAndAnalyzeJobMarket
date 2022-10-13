import { useSelector } from 'react-redux';
import { jobsState$ } from '~/redux/selectors';

import Row from 'react-bootstrap/Row';
import JobItem from '~/components/JobItem';

function JobList() {
    const jobs = useSelector(jobsState$);

    return (
        <Row xs={1} lg={2}>
            {jobs.map((job, index) => (
                <JobItem key={index} data={job}></JobItem>
            ))}
        </Row>
    );
}

export default JobList;
