import { useState } from 'react';
import Success from './Success';

export default function Newsletter() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();

        if(email.trim() === '') {
            setError('Bu alan boş bırakılamaz.')
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Lütfen geçerli bir e-mail formatı girin.');
            return;
        }

        setError('');
        setSuccess(true);
        return;
    }

    return(
        <div className="min-w-full min-h-screen flex justify-center items-center font-main">
            {
                success ? (
                    <Success />
                )
                : (
                    <div className="max-w-[45%] h-auto flex flex-row bg-white rounded-3xl">
                        <div className='max-w-[55%] h-auto flex flex-col justify-center pt-20'>
                            <h1 className='text-center font-extrabold text-5xl text-[#242742]'>Stay updated!</h1>
                            <p className='w-full h-auto mt-6 pl-8 text-sm text-[#242742]'>Join 60,000+ product managers receiving monthly updates on:</p>
                            <div className='flex flex-row items-center pl-8 mt-4'>
                                <img src={require('../images/icon-list.svg').default} alt='Success' />
                                <span className='pl-4 text-xs font-'>Product discovery and building what matters</span>
                            </div>
                            <div className='flex flex-row items-center pl-8 mt-2'>
                                <img src={require('../images/icon-list.svg').default} alt='Success' />
                                <span className='pl-4 text-xs font-medium'>Measuring to ensure updates are a success</span>
                            </div>
                            <div className='flex flex-row items-center pl-8 mt-2'>
                                <img src={require('../images/icon-list.svg').default} alt='Success' />
                                <span className='pl-4 text-xs font-medium'>And much more!</span>
                            </div>
                            {
                                error ? (
                                    <div className='max-w-[60&] h-auto flex flex-col items-center'>
                                        <div className='w-72 h-auto flex'>
                                            <label className='mt-6 font-bold text-xs items-start'>Email address</label>
                                        </div>
                                        <div className='max-w-[60&] h-auto flex justify-center items-center'>
                                            <input type='email' placeholder='Lütfen geçerli bir e-mail formatı girin.' className="w-72 h-12 mt-2 bg-[#ff6257] bg-opacity-15 placeholder-red-500 placeholder:text-xs placeholder:font-medium border border-red-500 default:border-red-500 rounded-md pl-[10px] text-[14px] text-[#ff6257]" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className='max-w-[60&] h-auto flex flex-col items-center'>
                                        <div className='w-72 h-auto flex'>
                                            <label className='mt-6 font-bold text-xs items-start'>Email address</label>
                                        </div>
                                        <div className='max-w-[60&] h-auto flex justify-center items-center'>
                                            <input type='email' value={email} autoComplete='off' placeholder='email@company.com' onChange={handleChange} required className='w-72 h-12  mt-2 border rounded-md pl-[10px] text-[14px]' />
                                        </div>
                                    </div>
                                )
                            }
                            <div className='max-w-[60&] h-auto flex justify-center items-center mt-4 mb-16'>
                                <button type='submit' onClick={handleClick} className='w-72 h-12 bg-[#242742] text-white text-sm rounded-lg hover:bg-[#ff6257] hover:shadow-[rgba(_255,_98,_87,_0.8)_0px_20px_20px_-7px]' disabled={!email}>
                                    Subscribe to monthly newsletter
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={require('../images/illustration-sign-up-desktop.svg').default} alt='Illustration' className='pr-4' />
                        </div>
                    </div>
                )
            }
        </div>
    )
}