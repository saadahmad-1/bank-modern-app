import styles from './style';

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">

    {/* Navigation Bar */}
    <div className={`${styles.padding} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  
    {/* Hero Section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    {/* Application's Other Components */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA /> 
        <Footer />        
      </div>
    </div>

  </div>

);

export default App