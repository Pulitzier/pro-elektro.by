import React, { Component } from 'react';
import Header from '../Header/index';
import AboutSection from '../AboutSection/index';
import ServicesSection from '../ServicesSection/index';
import ContactUsSection from "../ContactUsSection";
import ClientsSection from "../ClientsSection";
import BannerSection from "../BannerSection";
import MobileMenu from "../MobileMenu";

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      mobileView: false,
      activeMobileMenu: false,
    };
  }
  
  componentDidMount() {
    let windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
      this.setState({
        mobileView: true
      })
    }
  }
  
  toggleMobileMenu() {
    const oldStateMenu = this.state.activeMobileMenu;
    const bodyNode = document.getElementsByTagName("body");
    if (!oldStateMenu) {
      bodyNode[0].style.overflow = "hidden";
    } else {
      bodyNode[0].style.overflow = "auto";
    }
    this.setState({
      activeMobileMenu: !oldStateMenu,
    })
  }
  
  render() {
    let { activeMobileMenu } = this.state;
    return (
      <div className={"app " + (activeMobileMenu ? "opened" : "")}>
				{
					activeMobileMenu ?
						<MobileMenu /> :
						null
				}
				<div className={activeMobileMenu ? "menu-show" : ""}>
          <Header
            activeMobileMenu={activeMobileMenu}
            toggleMenu={this.toggleMobileMenu}
          />
					<BannerSection />
          <AboutSection />
          <ServicesSection />
          <ClientsSection />
          <ContactUsSection />
				</div>
      </div>
    );
  }
}

export default App;
