import Logo from '@/assets/logo.svg';
import XSocial from '@/assets/x-social.svg';
import LinkedInSocial from '@/assets/linkedin.svg';
export const Footer = () => {
  return (
    <footer className='py-5 border-t border-white/15'>
      <div className="container">
        <div className='flex flex-col lg:flex-row lg:items-center gap-8'>
          <div className='flex gap-2 items-center lg:flex-1'>
            <Logo className='w-6 h-6' />
            <div>AI Startup Landing Page</div>
          </div>
          <nav className='flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center'>
            <a href="" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Features</a>
            <a href="" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Developers</a>
            <a href="" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Company</a>
            <a href="" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Blog</a>
            <a href="" className='text-white/70 hover:text-white text-xs md:text-sm transition'>Changelog</a>
          </nav>
          <div className='flex gap-5 lg:flex-1 lg:justify-end'>
            <a href="https://x.com/Riyan50889755" target='_blank'><XSocial className='text-white/40 hover:text-white transition' /></a>
            <a href="https://www.linkedin.com/in/riyan-g/" target='_blank'><LinkedInSocial className='text-white/40 hover:text-white transition ' /></a>
          </div>
        </div>
      </div>
    </footer>
  )
};
