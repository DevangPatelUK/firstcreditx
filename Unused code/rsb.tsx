/*import { Section } from 'lucide-react';
import { useEffect, useState } from 'react';

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <aside className='right-sidebar'>
      <Section className='flex flex-col pb-8'>
        <div className='profile-banner' />
        <div className='profile'>
          <div className='profile-img'>
            <span className='text-5xl font-bold text-blue-500'>
              {isClient && user.firstName[0]}
            </span>
          </div>
          <div className='profile-details'>
            <h1 className='profile-name'>
              {isClient && `${user.firstName} ${user.lastName}`}
            </h1>
            <p className='profile-email'>
              {isClient && user.email}
            </p>
          </div>
        </div>
      </Section>
    </aside>
  );
};

export default RightSidebar;
*/