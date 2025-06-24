import { Link } from "react-router-dom";

function Footer(){
    const footerMenu = [
        {
            title:"MY ACCOUNT",
            links:[
                {name:'Sign In', url: '/sign-in'},
                {name:'Register', url: '/register'},
                {name:'Mypage', url: '/nypage'},
                {name:'Order Status', url: '/order-status'},
            ]       
        },
        {
            title:"HELP&SUPPORT",
            links:[
                {name:'Ordering', url: '/ordering'},
                {name:'Shipping', url: '/shipping'},
                {name:'Returns', url: '/returns'},
                {name:'Sizing', url: '/sizing'},
            ]       
        },
        {
            title:"ABOUT US",
            links:[
                {name:'Our story', url: '/our story'},
                {name:'Offline shop', url: '/offline-shop'},
                {name:'Mypage', url: '/mypage'},
                {name:'Investors', url: '/investors'},
                {name:'Recruit', url: '/recruit'},
            ]       
        },
        {
            title:"DESIGN",
            links:[
                {name:'Fabric', url: '/fabric'},
                {name:'technology', url: '/technology'},
                {name:'Competitiveness', url: '/competitiveness'},
                {name:'Product Care', url: '/product-care'},
                {name:'Contact us', url: '/contact-us'},
            ]       
        },
    ]
    return(
        <footer id="main-footer">
            <div className="footer-top">
                <div className="global innerbox">
                    <h3>GLOBAL SITE</h3>
                    <ul>
                        <li><Link to="/jp">jp</Link></li>
                        <li><Link to="/en">en</Link></li>
                        <li><Link to="/cn">cn</Link></li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <ul>
                        {
                            footerMenu.map((menu,index)=>(
                                <li key={menu.index}>
                                    <span>{menu.title}</span>
                                    <ul className="sub">
                                        {
                                            menu.links.map((submenu,subindex)=>(
                                                <li key={subindex}><Link to={submenu.url}>{submenu.name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="innerbox">
                    <address>
                        <p>통신판매업고번호 : 2015-인천부평-0396 호 사업자등록번호 : 122-86-33843 전자우편 : jplove486@hanmail.net</p>
                        <p>주식회사 뮬라 대표: 조현수 쇼핑몰관리자: 김소현 사업장소재지: 인천광역시 부평구 장제로 336 스타일난다 빌딩 3층</p>
                        <p>(C)2010 MULAWEAR</p>
                    </address>
                    
                    <ul>
                        <li><Link to="/privacy-policy">개인정보처리방침</Link></li>
                        <li><Link to="/privacy-policy">이용안내 </Link></li>
                        <li><Link to="/privacy-policy">이용약관</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;