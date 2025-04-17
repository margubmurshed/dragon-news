import moment from 'moment';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-12'>
            <div className='mb-5'>
                <img src={logo} alt="dragon-news-logo" />
            </div>
            <h2 className='mb-[10px] text-[#706F6F] text-xl'>Journalism Without Fear or Favour</h2>
            <p className='text-xl'>
                <span className='text-[#403F3F]'>{moment().format('dddd, ')}</span>
                <span className='text-[#706F6F]'>{moment().format('MMMM D, YYYY')}</span>
            </p>
        </div>
    );
};

export default Header;