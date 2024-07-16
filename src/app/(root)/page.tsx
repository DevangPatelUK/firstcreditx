import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { FirstName: 'Tony' };

  return (
    <section className='home'>
      <div className='home-content'>
       <header className='home-header'>
          <HeaderBox 

           type="Greeting"
           title="Welcome"
           user={loggedIn?.FirstName || 'Guest'}
           subtext="Access and manage your account and transaction Easy"

          />
          <TotalBalanceBox
           accounts={[]}
           totalBanks={1}
           totalCurrentBalance={69}
          />
       </header>
      </div>
    </section>
  )
}

export default Home
