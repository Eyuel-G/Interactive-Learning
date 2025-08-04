export default function PauseOption({videoRef, requestFullScreen, navigate}){

    function handleResume(){
        videoRef.current.play();
        requestFullScreen(containerRef.current);
    }

    function openTextEditor(){
        navigate('/textEditor');
    }


    return (
        <div className='absolute inset-0 bg-black/50 flex justify-center items-center'>
            <button
                className='bg-green-500 hover:bg-green-900 rounded p-3 m-4 cursor-pointer'
                onClick={handleResume}  
            >Resume Video</button>
            <button
                className='bg-orange-500 hover:bg-orange-900 rounded p-3 m-4 cursor-pointer'
                onClick={openTextEditor}
            >Open TextEditor</button>

        </div>
    )
}