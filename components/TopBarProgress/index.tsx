import { useState, useCallback } from 'react';
import LoadingBar from 'react-top-loading-bar'
import api from '@/services/api';

const ProgressBarTop = () => {

    const [progress, setProgress] = useState(0);

    const setState = useCallback((loaded, total) => {
        let progress: number = Math.round(
            (loaded * 100) / total
        );
        setProgress(progress);
    }, []);

    api.defaults.onUploadProgress = (event) => setState(event.loaded, event.total);
    api.defaults.onDownloadProgress = (event) => setState(event.loaded, event.total);

    return (
        <LoadingBar
            color='#6800C5'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
        />
    )
}

export default ProgressBarTop;