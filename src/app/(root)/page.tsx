import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Tony', lastName: 'wilson', email:'test@test.test' };

  return (
    <section className='home'>
      <div className='home-content'>
       <header className='home-header'>
          <HeaderBox 

           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transaction Easy"

          />
          <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={69}
          />
       </header>

       RECENT 
      </div> 
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance: 690} , {currentBalance: 99}]}
      />
    </section>
  )
}

export default Home
