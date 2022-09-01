import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingBottom:'300px' }}>
            <Spinner animation="border" variant="primary" />
        </div>
    );
}

export default Loading;