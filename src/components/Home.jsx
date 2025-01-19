import React from 'react'
import Mininavbar from './Mininavbar'
import './Home.css'
import Footer_mini from './Footer_mini'
const Dashboard = () => {
  return (
    <div>
      <Mininavbar />
      <main>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 pb-5" style={{paddingLeft:"40px"}}>
                    <div className="main_content">
                        <h1>Less stress when sharing expenses</h1>
                        <span>with housemates.</span>
                        <div className="main_content_img"></div>
                        <p>Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family</p>
                        <a href="#">Sign up</a>
                        <div className="apps">
                            free for <i class="fa-brands fa-apple"></i> iphone, <i class="fa-brands fa-android"></i> Andriod and web
                        </div>
                    </div>
                </div>
                <div className="col-lg-7"></div>
            </div>
        </div>
      </main>
      <section id="boxes">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 box1">
                    <div className="box_content">
                        <h1>Track balances</h1>
                        <p>Keep track of shared expenses,<br /> balances, and who owes who.</p>
                        <img src="https://assets.splitwise.com/assets/home_page/fixtures/asset1-b7eef5474a87c4fa99310094be435f18d83a7e87427b0d035cf9fd5382a92e12.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 box2">
                    <div className="box_content">
                        <h1>Organize expenses</h1>
                        <p>Split expenses with any group: trips,<br /> housemates, friends, and family.</p>
                        <img src="https://assets.splitwise.com/assets/home_page/fixtures/asset2-195991789f28e51ed734fbee4b87bd1fe1d54363aab190b610c79b7e03cf665a.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 box3">
                    <div className="box_content">
                        <h1>Add expenses easily</h1>
                        <p>Quickly add expenses on the go before <br /> you forget who paid.</p>
                        <img src="https://assets.splitwise.com/assets/home_page/fixtures/asset2-195991789f28e51ed734fbee4b87bd1fe1d54363aab190b610c79b7e03cf665a.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 box4">
                    <div className="box_content">
                        <h1>Pay friends back</h1>
                        <p>Settle up with a friend and record any <br />cash or online payment.</p>
                        <img src="https://assets.splitwise.com/assets/home_page/fixtures/asset4-3abaa95d20d133c1948fa1e3d8047890c3d7e274130cfcba5c2a304f74aa1353.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="banner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="banner_content">
                        <div className="banner_content_1">
                        <h1>Get even more with PRO</h1>
                        <p>Get even more organized with receipt scanning, charts and graphs, currency conversion, and more!</p>
                        <a href="#">Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 img_content">
                    <img src="https://assets.splitwise.com/assets/home_page/fixtures/asset5-814c541b198b81fcf8ebe913f6a9731e6d3fe9840241ba3bb7274d15ce9cad95.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    <section id="yard">
        <div className="yard_title">
            <h1>The whole nine yards</h1>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-lg-4 col-md-6">
            <ul>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Add groups and friends</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Split expenses, record debts</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>
                Equal or unequal splits</span></li><li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Split by % or shares</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>
                Calculate total balances</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>
                Simplify debts</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Recurring expenses</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Offline mode</span></li>
            </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <ul>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Cloud sync</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Spending totals</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Categorize expenses</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>
                7+ languages</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>100+ currencies</span></li>
                <li><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Payment integrations</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>
                Unlimited expenses</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>Transaction import</span></li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <ul>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>Currency conversion</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>Receipt scanning</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>
                Itemization</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>Charts and graphs</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>
                Expense search</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>
                Save default splits</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>A totally ad-free experience</span></li>
                <li><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span>
                Early access to new features</span></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row"></div>
            <div className="col-lg-12 d-flex line">
                <div><img src="https://assets.splitwise.com/assets/core/core-feature.svg" alt="" /><span>Core features</span></div>
                <div><img src="https://assets.splitwise.com/assets/pro/pro-feature.svg" alt="" /><span style={{color:"#8f4ED3"}}>Pro features</span></div>
            </div>
        </div>
    </section>
    <section id="testimonial">
        <div className="testimonial_box">
            <div className="test_box">
                <p>“Fundamental” for tracking finances. As good as WhatsApp for containing awkwardness.</p>
                <div className="test_img_box">
                    <img src="https://assets.splitwise.com/assets/home_page/logos/ft-152c170779821a7cff1ab468de0412defae4b4bcd1430bdd7cfc4901c8d338fc.png" alt="" /><span>Financial Times</span>
                </div>
            </div>
            <div className="test_box">
                <p>Life hack for group trips. Amazing tool to use when traveling with friends! Makes life so easy!!</p>
                <div className="test_img_box">
                    <span>Ahah S, iOS</span>
                </div>
            </div>
            <div className="test_box">
                <p>Makes it easy to split everything from your dinner bill to rent.</p>
                <div className="test_img_box" style={{marginTop:"60px"}}>
                    <img src="https://assets.splitwise.com/assets/home_page/logos/nyt-68d17fe3b579e967803b3bfa086047106eb7c67ba2d64149f606457e2df5437c.png" alt="" /><span>NY Times</span>
                </div>
            </div>
            <div className="test_box">
                <p>So amazing to have this app manage balances and help keep money out of relationships. love it!</p>
                <div className="test_img_box">
                    <span>Haseena C, Android</span>
                </div>
            </div>
            <div className="test_box">
                <p>I never fight with roommates over bills because of this genius expense-splitting app</p>
                <div className="test_img_box">
                    <img src="https://assets.splitwise.com/assets/home_page/logos/bi-97c1894e95b2a91c0027403ebda13eb65e2c5df8a303dd36e53cd0b013a0da9f.png" alt="" /><span>Business Insider</span>
                </div>
            </div>
            <div className="test_box">
                <p>I use it everyday. I use it for trips, roommates, loans. I love splitwise.</p>
                <div className="test_img_box" style={{marginTop:"70px"}}>
                    <span>Trickseyus, iOS</span>
                </div>
            </div>
        </div>
    </section>
    <Footer_mini />
    </div>
  )
}

export default Dashboard
