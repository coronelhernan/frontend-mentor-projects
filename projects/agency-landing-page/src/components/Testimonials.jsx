import { CardProfile } from './CardProfile';
import data from '../data/profiles.json'

export function Testimonials() {
  return (
    <section className="text-center w-full py-18">
      <h1 className="text-xl font-heading font-bold text-gray-500">
        CLIENT TESTIMONIALS
      </h1> 

        {/* List of profiles*/}
        <li className='flex flex-col w-full p-6 gap-4'>
          {data.profiles.map(user => {
            return(
              <CardProfile 
                key={user.name}
                imageProfile={user.avatar}
                description={user.description}
                name={user.name}
                role={user.role}
              /> 
            )
          })}
        </li>      
    </section>
  );
}
