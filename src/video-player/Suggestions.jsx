export default function Suggestions({title, description, handleClick, display}){
    return(
        <div 
            className='flex justify-center gap-2 mt-2 p-2 hover:bg-gray-600 hover:text-white cursor-pointer rounded-sm'
            onClick={handleClick}
        >
            <div className='max-w-1/3'>
                <video>
                    <source src={display} type="video/mp4" />
                </video>
            </div>
                    
            <div>
                <h2
                    className='text-2xl font-bold text-blue-600 hover:underline hover:text-purple-700 cursor-pointer'
                    onClick={handleClick} 
                >{title}</h2>
                        
                <p>{description}</p>
            </div>
        </div>
    )
}