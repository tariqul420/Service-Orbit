import { ScaleLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center my-12'>
            <ScaleLoader
                height={60}
                margin={2}
                width={5}
                color='#FF9800'
            />
        </div>
    );
};

export default LoadingSpinner;