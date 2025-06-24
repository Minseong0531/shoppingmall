import {Link} from 'react-router-dom';

function MainBottom(){
    return(
        <section className='main-bottom'>
            <div className='fullBanner'>
                <Link to="/about">
                    <img src="/images/full_bnn.jpg" alt="about Mulawear woman work out for:mula" />
                </Link>
            </div>
            <div className='content-bottom'>
                <div className='bot1'>
                    <h3>New member benefit</h3>
                    <p>
                        신규회원 가입 시 다양한 혜택을 드립니다. <br/>
                        첫 가입시 3,000원 적립금 / 생일 축하 10% 할인 쿠폰 발행!
                    </p>
                </div>
                <div className='bot2'>
                    <h3>Special membership</h3>
                    <p>
                        회원등급제 시행으로 상시 할인 혜택과 등급별 쿠폰 지급! <br />
                        최대 35%할인 / 10,000원 이상 구매시 추가적립, 추가할인 가능
                    </p>
                </div>
                <div className='bot3'>
                    <h3>Best review</h3>
                    <p>
                        베스트 리뷰 당첨 시 20,000원을 적립해드립니다! <br />
                        텍스트리뷰 작성 시 1,000원 / 포토리뷰 작성시 3,000원
                    </p>
                </div>
            </div>
        </section>
    )
}
export default MainBottom