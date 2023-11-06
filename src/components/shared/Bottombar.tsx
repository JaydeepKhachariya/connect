import { bottombarLinks,} from '@/constants';
import { Link, useLocation } from 'react-router-dom'

const Bottombar = () => {

  const {pathname} = useLocation(); 

  return (
    <section className='bottom-bar' >

          {bottombarLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
                <Link
                  className={`${isActive && 'bg-primary-500 rounded-[10px]' } flex-center flex-col gap-1 p-2 transition`} key={link.label}
                  to={link.route}
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    width={22}
                    height={22}
                    className={`${isActive && "invert-white"}`}
                  />
                  {/* <p className='tiny-medium text-light-1'>{link.label}</p> */}
                </Link>
            );
          })}
    </section>
  )
}

export default Bottombar