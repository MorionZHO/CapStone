import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen max-w-screen text-gray-900">
      {/* Header */}
      <header className="header-center-title">
        <span className="header-title">CapStone</span>
      </header>

      {/* Hero Section */}
         {/*
      <div className="main-content py-8 md:py-10">
        <div className="max-w-screen min-w-0 place-items-center w-full p-6 sm:p-20 bg-black text-white grow gap-6 sm:gap-20 grid grid-cols-1 xl:grid-cols-2 relative justify-items-center rounded-2xl sm:rounded-[32px]">
          <div className="grid grid-flow-row grid-cols-1 gap-4 justify-between">
            <h1 className="tracking-tight text-[48px] leading-[56px] sm:text-8xl text-left font-medium text-gradient">Everything on-chain</h1>
            <p className="text-sm sm:text-xl text-left text-white/60">
              Current Market Pain Points<br/>
              Traditional financial markets suffer from settlement delays (T+1/T+2), geographical restrictions, high minimum investment thresholds, and limited trading hours. CapStone leverages blockchain technology to tokenize assets, addressing these issues while maintaining regulatory compliance.<br/>
              By transforming traditional assets into native blockchain tokens, CapStone enables fractional ownership, continuous trading, and near-instant settlement. This approach greatly expands market accessibility while preserving existing legal frameworks and custody arrangements.
            </p>
            <a target="_blank" rel="noopener noreferrer" href="https://capstone.fi/dashboard">
              <button className="inline-flex items-center gap-2 justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-accent hover:text-accent-foreground h-12 rounded-[32px] py-3 px-5 border-white font-medium text-sm sm:text-base text-white">
                Go to app
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" className="ml-2 size-4">
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"></path>
                </svg>
              </button>
            </a>
          </div>
          <div className="flex flex-col w-full sm:w-[480px] gap-4 sm:gap-8 p-4 sm:p-8 bg-white/5 rounded-xl sm:rounded-3xl border border-white/10">
            <div className="flex flex-col w-full gap-6">
              <div className="flex flex-col items-start w-full gap-4">
                <div className="flex items-center justify-between w-full">
                  <div className="relative inline-flex items-center gap-2">
                    <img alt="USDT" width={24} height={24} className="size-5 sm:size-6" src="/assets/usdt.png" />
                    <span className="font-medium text-white mt-[3px] text-sm sm:text-base">USDT</span>
                  </div>
                  <div className="relative flex items-center text-black font-medium text-base grow">
                    <input className="flex w-full rounded-xl ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent text-white text-right text-2xl sm:text-[32px] sm:leading-[40px] font-medium p-0" value="10,000" readOnly />
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center w-full h-9">
                <div className="w-full h-px bg-white/10"></div>
                <div className="absolute size-9 bg-white rounded-[18px] border border-solid border-[#ffffff33] flex items-center justify-center">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M7.00485 6.84166L10.8257 10.6625L14.6465 6.84166L15.8257 8.02083L10.8257 13.0208L5.82568 8.02083L7.00485 6.84166Z" fill="black"></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-start w-full gap-4">
                <div className="flex items-center justify-between w-full">
                  <div className="relative inline-flex items-center gap-2">
                    <img alt="AAPL" width={24} height={24} className="size-5 sm:size-6" src="/assets/aapl.png" />
                    <span className="font-medium text-white mt-[3px] text-sm sm:text-base">AAPL</span>
                  </div>
                  <div className="relative flex items-center text-black font-medium text-base grow">
                    <input className="flex w-full rounded-xl ring-offset-background file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent text-white text-right text-2xl sm:text-[32px] sm:leading-[40px] font-medium p-0" value="45.04" readOnly />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-6">
              <a href="https://capstone.fi/dashboard">
                <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:bg-accent hover:text-accent-foreground rounded-[32px] border-white gap-2.5 h-10 sm:h-auto font-medium px-5 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base text-white w-full bg-transparent">Swap</button>
              </a>
              <div className="flex items-center justify-between w-full">
                <div className="inline-flex items-center gap-1.5">
                  <span className="text-white/60 text-xs leading-[18px] sm:text-sm sm:leading-5">Estimated fee</span>
                  <button data-state="closed">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <g>
                        <path d="M9.16699 14.1667H10.8337V9.16669H9.16699V14.1667ZM10.0003 1.66669C5.39616 1.66669 1.66699 5.39585 1.66699 10C1.66699 14.6042 5.39616 18.3334 10.0003 18.3334C14.6045 18.3334 18.3337 14.6042 18.3337 10C18.3337 5.39585 14.6045 1.66669 10.0003 1.66669ZM10.0003 16.6667C6.32533 16.6667 3.33366 13.675 3.33366 10C3.33366 6.32502 6.32533 3.33335 10.0003 3.33335C13.6753 3.33335 16.667 6.32502 16.667 10C16.667 13.675 13.6753 16.6667 10.0003 16.6667ZM9.16699 7.50002H10.8337V5.83335H9.16699V7.50002Z" fill="currentColor" fillOpacity="0.8"></path>
                      </g>
                    </svg>
                  </button>
                </div>
                <span className="text-white/60 text-xs leading-[18px] sm:text-sm sm:leading-5">3 USDX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* White Network Section */}
      <div className="main-content py-8 md:py-10">
        <div className="max-w-screen min-w-0 grid place-items-center gap-8 w-full px-0 py-0 bg-transparent min-h-[200px]">
          <div style={{backgroundImage: `url('/assets/banner.png')`, backgroundSize: 'cover', backgroundPosition: 'bottom center'}} className="w-full flex-col sm:flex-row flex rounded-[30px] gap-8 sm:gap-32 items-center py-4 px-10 sm:px-20 sm:py-9 relative justify-between h-full">
            <div className="flex items-center sm:items-start gap-1 flex-col sm:gap-3">
              <span className="geist-mono-light text-black text-lg sm:text-xl">CapStone Network</span>
              <div className="font-semibold geist-mono-extralight text-black text-2xl text-center sm:text-left sm:text-4xl">High-Performance Blockchain for Real-World Assets</div>
            </div>
            {/*
            <button className="w-14 h-14 sm:w-20 sm:h-20 cursor-pointer flex items-center justify-center bg-black rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="currentColor"></circle>
                <mask id="mask0_23_61" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="24" y="24" width="32" height="32">
                  <rect x="24" y="24" width="32" height="32" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_23_61)">
                  <path d="M42.6667 48L40.8 46.0667L45.5334 41.3333H29.3334V38.6667H45.5334L40.8 33.9333L42.6667 32L50.6667 40L42.6667 48Z" fill="white"></path>
                </g>
              </svg>
            </button>
            */}
          </div>
        </div>
      </div>

      {/* Built With Section */}
      <div className="w-full overflow-x-hidden py-8 md:py-10">
        <div className="max-w-screen min-w-0 grid place-items-center gap-8 w-full px-0 py-0 bg-black">
          <div style={{backgroundImage: `url('/assets/big-bg.svg')`, backgroundSize: 'cover', backgroundPosition: 'bottom center'}} className="w-full flex flex-col items-center overflow-x-hidden gap-3 sm:gap-6 py-6 sm:py-12 relative">
            <span className="text-xl font-bold text-white/60">Built With</span>
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s] max-w-screen sm:[--gap:64px]">
              <div className="flex shrink-0 justify-around items-center [gap:var(--gap)] animate-marquee flex-row">
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'200px',height:'10px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/stonex.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'200px',height:'80px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/cb.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'300px',height:'70px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/openzeppelin.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'200px',height:'80px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/blackrock.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'320px',height:'30px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/fireblocks.svg" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'170px',height:'25px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/mexc.svg" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'250px',height:'90px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/web3auth.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'200px',height:'80px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/chainlink.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'200px',height:'80px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/nasdaq.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'200px',height:'80px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/infura.png" /></div>
                <div className="relative overflow-hidden rounded-xl flex items-center p-4" style={{width:'200px',height:'80px'}}><img alt="Partner logo" style={{objectFit:'contain'}} src="/assets/sumsub.png" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="main-content py-8 md:py-10">
        <div className="text-center mb-6">
          <h2 className="stats-title">Proven & Reliable</h2>
          <div className="stats-badge">Trusted Technology</div>
        </div>
        <div className="stats-cards">
          <div className="stats-card">
            <div className="stats-main">$150M+</div>
            <div className="stats-label">Total Value Locked</div>
            <div className="stats-desc">Assets secured by our smart contracts</div>
          </div>
          <div className="stats-card">
            <div className="stats-main">12600+</div>
            <div className="stats-label">Users</div>
            <div className="stats-desc">People who use and trust CapStone</div>
          </div>
          <div className="stats-card">
            <div className="stats-main">$100M+</div>
            <div className="stats-label">Trading Volume</div>
            <div className="stats-desc">Processed through our assets</div>
          </div>
        </div>
      </div>

      {/* Platform Innovations Section */}
      <div className="main-content py-8 md:py-10">
        <div className="text-center mb-6">
          <h2 className="stats-title">Platform Innovations</h2>
        </div>
        <div className="stats-cards">
          <div className="stats-card">
            <div className="stats-label">Institutional-grade Custody</div>
            <div className="stats-desc">Integration ensures legal ownership of assets.</div>
          </div>
          <div className="stats-card">
            <div className="stats-label">Smart Contract Compliance</div>
            <div className="stats-desc">Framework automates compliance verification.</div>
          </div>
          <div className="stats-card">
            <div className="stats-label">High-Performance Blockchain</div>
            <div className="stats-desc">Optimized for financial applications.</div>
          </div>
        </div>
      </div>

      {/* Product Highlights Section  */}
      <div className="main-content py-8 md:py-10">
        <div className="text-center mb-6">
          <h2 className="stats-title">Product Highlights</h2>
        </div>
        <div className="stats-cards">
          <div className="stats-card">
            <div className="stats-label">Tokenized Stocks</div>
            <div className="stats-desc">
              CapStone supports tokenized trading of AAPL, TSLA, MSTR, COIN, and NVDA, backed by real stocks and enabling T+0 settlement. Investors can trade these assets even outside traditional market hours.
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-label">Yield Stablecoin (USDX)</div>
            <div className="stats-desc">
              USDX is a yield-bearing stablecoin pegged to the US dollar and backed by US Treasury bills, offering users an additional 5% yield simply by holding.
            </div>
          </div>
        </div>
      </div>

      {/* Tokenomics Section (美化卡片化) */}
      <div className="main-content py-8 md:py-10">
        <div className="text-center mb-2">
          <h2 className="stats-title">Tokenomics</h2>
          <div className="stats-badge" style={{marginBottom: '2rem'}}>Value Accumulation Mechanisms</div>
        </div>
        <div className="stats-cards">
          <div className="stats-card">
            <div className="stats-label">Buyback & Burn</div>
            <div className="stats-desc">
              30% of monthly revenue is used to buy and burn WHITE tokens, reducing supply and supporting value growth.
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-label">Staking Rewards</div>
            <div className="stats-desc">
              Stake CAPS tokens to earn 8% base yield plus a share of platform revenue, increasing demand and rewards for holders.
            </div>
          </div>
        </div>
      </div>

      {/* USDX Section */}
      <div className="main-content py-8 md:py-10">
        <div className="max-w-screen min-w-0 grid place-items-center gap-8 w-full px-0 py-0 bg-transparent">
          <div className="w-full usdx-black-card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-gradient usdx-title mb-4">Earn 5% on your USDT</h2>
                <p className="text-xl text-gray-300 mb-4">Risk-free</p>
                <h3 className="text-2xl font-bold mb-4">USDX is a high yield savings account on-chain</h3>
                <p className="text-gray-300 mb-4">
                  The company behind USDT makes $20B per year. USDX is a stablecoin just like USDT, but the profits are distributed back to the users.
                </p>
                <p className="text-gray-300 mb-4">
                  USDX stands for a United States Dollar Savings account, Your USDX will automatically increase in balance everyday.
                </p>
                <p className="text-gray-300">
                  The yield is generated from short term US treasury bonds, meaning the interest is completely risk-free.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Calculate your returns</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Initial Investment</label>
                    <input type="number" className="w-full p-3 rounded-lg bg-white/20 text-white" placeholder="Enter amount" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Monthly Contribution</label>
                    <input type="number" className="w-full p-3 rounded-lg bg-white/20 text-white" placeholder="Enter amount" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Length of Time in Years</label>
                    <input type="number" className="w-full p-3 rounded-lg bg-white/20 text-white" placeholder="Enter years" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Interest Rate</label>
                    <input type="number" className="w-full p-3 rounded-lg bg-white/20 text-white" placeholder="5" />
                  </div>
                  <button className="w-full bg-white text-black py-3 rounded-lg font-bold">Calculate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="main-content py-8 md:py-10">
        <div className="text-center mb-6">
          <h2 className="stats-title">Compliance Framework. Transparency. Security.</h2>
        </div>
        <div className="stats-cards">
          <div className="stats-card">
            <div className="stats-label">Compliance Framework</div>
            <div className="stats-desc">
              <b>Technical Adaptation:</b> Compliance checks are embedded in the Caps Network blockchain and WhiteBFT consensus, with smart contracts verifying legal documents, KYC/AML info, and asset ownership proofs.<br/>
              <b>Institutional Custody:</b> Real-world assets are held by licensed custodians, with on-chain proofs binding tokens to real assets.<br/>
              <b>Zero-Knowledge Proofs:</b> Sensitive compliance data is validated via zk-SNARKs, ensuring privacy while proving regulatory adherence.<br/>
              <b>Jurisdictional Compliance:</b> Smart contracts automatically adapt to local regulations based on transaction origin and asset type.
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-label">Transparency</div>
            <div className="stats-desc">
              All compliance and custody processes are transparent and verifiable on-chain, ensuring user trust and regulatory clarity.
            </div>
          </div>
          <div className="stats-card">
            <div className="stats-label">Security</div>
            <div className="stats-desc">
              CapStone’s smart contracts and custody solutions are regularly audited and designed to meet the highest security standards in the industry.
            </div>
          </div>
        </div>
      </div>

      {/* Platform Revenue Section (新增) */}
      <div className="main-content py-8 md:py-10">
        <div className="max-w-screen min-w-0 grid place-items-center gap-8 w-full px-0 py-0 bg-transparent">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Platform Revenue</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              <b>Trading Fees (Spread Capture):</b> CapStone earns a spread of 0.1%-0.3% on tokenized asset trades, significantly lower than traditional brokers.<br/>
              <b>Asset Management Fees:</b> For institutional clients, CapStone provides customized RWA tokenization management, charging annual fees of 0.5%-2% based on asset scale.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="main-content py-8 md:py-10">
        <div className="max-w-screen min-w-0 grid place-items-center gap-8 w-full px-0 py-0 bg-transparent">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              CapStone Finance is building a bridge for the new financial system. By bridging the gap between the traditional 
              financial system and DeFi, we believe that we can unlock trillions in liquidity.
            </p>
            <p className="text-gray-600 mb-8">
              This is just the start. If you have any questions or interest in helping us achieve our mission, 
              you can reach out to contact@capstone.fi.
            </p>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                CapStone Brokers (Pty) Ltd is regulated by the Financial Sector Conduct Authority (FSCA) as a licensed 
                financial services provider (FSP) under license number 53229. CapStone Brokers is incorporated under company 
                registration number 2021/321898/07 and located at 48 Dan Pienaar Circle, Plumstead, Cape Town, Western Cape 7800, South Africa.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Copyright © CapStone. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
