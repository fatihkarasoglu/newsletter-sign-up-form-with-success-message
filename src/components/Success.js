export default function Success() {

    const handleClick = (e) => {
        e.preventDefault()
        window.location.assign('/');
    }

    return(
        <div className='w-[25%] h-auto flex flex-col justify-center bg-white rounded-3xl font-main'>
            <div className='h-20 flex items-center pl-10 pt-10'>
                <img src={require('../images/icon-list.svg').default} alt='Checkmark' className='w-12 h-12'/>
            </div>
            <h1 className='text-5xl font-black pl-10 pt-10 text-[#242742]'> Thanks for Subscribing! </h1>
            <p className='pl-9 pt-6 text-sm pr-8'>
                A confirmation email has been sent to <span className='font-semibold'>ash@loremcompany.com.</span> Please open it and click the button inside to confirm your subscription.
            </p>
            <div className='flex justify-center items-center mt-8 mb-10'>
                <button type='button' onClick={handleClick} className='w-72 h-12 bg-[#242742] text-white text-sm rounded-lg hover:bg-[#ff6257] hover:shadow-[rgba(_255,_98,_87,_0.8)_0px_20px_20px_-7px]'>Dismiss message</button>
            </div>
        </div>
    )
}