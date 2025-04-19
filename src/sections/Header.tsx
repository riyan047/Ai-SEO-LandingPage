import LogoIcon from '../assets/logo.svg';
import MenuIcon from '../assets/icon-menu.svg';

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15 md:border-none ">
      <div className="container">
        <div className='flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto'>
          <div >
            <div className=' h-10 w-10 border border-white/15 rounded-lg inline-flex justify-center items-center'>
              <LogoIcon className='w-8 h-8h'/>
            </div>
          </div>
          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <a href="#" className='text-white/70 hover:text-white transition'>Features</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Developers</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Pricing</a>
              <a href="#" className='text-white/70 hover:text-white transition'>Changelog</a>
            </nav>
          </div>
          <div className='flex gap-4 items-center'>
            <button type='submit' className='relative px-3 py-2 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8c45ff] '>
              <div className='absolute inset-0 '>
                <div className='absolute inset-0 border rounded-lg border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]' />
                <div className='absolute inset-0 border rounded-lg border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]' />
                <div className='absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,0.7)_inset] rounded-lg' />
              </div>
              <span>
                Join waitlist
              </span>
            </button>
            <MenuIcon className='md:hidden' />
          </div>
        </div>
      </div>
    </header>
  )
};
