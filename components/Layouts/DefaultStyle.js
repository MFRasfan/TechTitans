import React from 'react'
import { withRouter } from 'next/router';
import { connect } from 'react-redux'
import Link from '../common/ActiveLink'
// import * as Icon from 'react-feather';
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink



class DefaultStyle extends React.Component {

    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }

    render(){
        // let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        let { pathname } = this.props.router;
        let layOutCls = '';
        if (pathname == '/home-three'){
            layOutCls = 'p-relative';
        }
        return (
            <header id="header">
                <div id="navbar" className={`startp-nav ${layOutCls}`}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a 
                                    className="navbar-brand"
                                    onClick={() => window.location.refresh()}
                                >
                                    <img src={require("../../static/images/TT.png")} alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
    
                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item">
                                        <a 
                                            onClick={e => e.preventDefault()} 
                                            href="/" 
                                            className="nav-link"
                                        >
                                             <Link activeClassName="active" href="/">
                                            <a href="#" className="nav-link">Home</a>
                                        </Link>
                                        </a>
                                   
                                    </li>
                                    
                                    <li className="nav-item">
                                    <Link activeClassName="active" href="/about">

                                            

<a className="nav-link">About Us</a>

</Link>
                                        
                                    <ScrollLink 
                                        to="example-destination" 
                                         spy={true} 
                                         smooth={true} 
                                         duration={500} 
                                         className='some-class' 
                                         activeClass='some-active-class'
                                    >
                                 
                                 </ScrollLink>
                                        
                                        
                                    </li>
                                    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="">
                                            <a className="nav-link">Services</a>
                                        </Link>
                                       
                                    </li>

                                    
    
                                    <li className="nav-item">
                                        <Link activeClassName="active" href="/contact">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
    
                            <div className="others-option">
                                <Link href="#">
                                    <a className="btn btn-light">Support</a>
                                </Link>
                                
                            </div>
                        </nav>
                    </div> 
                </div>
    
            </header>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        products: state.addedItems
    }
}

export default withRouter(connect(mapStateToProps)(DefaultStyle))