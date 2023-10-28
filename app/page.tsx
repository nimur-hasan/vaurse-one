import Image from 'next/image'
import '../scss/index.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='container'>

      {/* Page Header Start ➕ */}    
      <div className="d-flex justify-content-between align-items-center">
        <h1>Wallet</h1>

        <div className="d-flex gap-20">
          <div className='h1 d-flex align-items-center gap-2'>
            <span>Voscoin</span> 
            <Link className='link-text' href={'#'}>
            <div className='d-flex gap-1'>
              <img src={'/assets/icons/INFO.svg'}/> 
              <span>info</span>
            </div>
            </Link>
          </div>

          <button className='btn' type="button">
            <img src="/assets/icons/CART.svg" alt="" />
            <span>Buy Voscoin</span>
          </button>
        </div>       

      </div>
      {/* Page Header End ➖ */}

      {/* Card Section Start ➕ */}
      <div className="d-flex mt-16">
        <div className="card-active position-relative" style={{width: '430px'}}>
          <img className='position-absolute' style={{right: '0px', top: '0px'}} src="/assets/icons/CARD_ABSTRACT.svg" alt="" />
          <div className="d-flex justify-content-between">
            <small>Cash Balance</small>
            <img src="/assets/icons/CARD_ICON.svg" alt="" />
          </div>
          <div className='heading'>USD <span>0.00</span></div>
          <div>
            <small>VSC 0.00</small>
          </div>
          <button className="btn-light mt-6">
            <img src="/assets/icons/DOWN_ARROW.svg" alt="" />
            Withdraw Funds
          </button>
        </div>
      </div>
      {/* Card Section End ➖ */}

    </main>
  )
}
