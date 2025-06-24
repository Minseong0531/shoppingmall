import { Link } from "react-router-dom";

function SpecialItem(){
    const specialItems = [
        { 
          id:'special-1',
          images:[
            '/images/0170010020123.jpg',
            '/images/0170010020123.jpg',
            '/images/0170010020123.jpg',
          ],
          name:'멀티플라이 탑 민트아일랜드',
          review:112,
          price:48000,
          discountPrice: 43000,
          colors: ['MINT', 'WHITE'],
          sizes: ['S', 'M', 'L'],
        },
        { 
          id:'special-2',
          images:[
            '/images/0180020006213.jpg',
            '/images/0180020006213.jpg',
            '/images/0180020006213.jpg',
          ],
          name:'업 다운 카프리16 화이트',
          review:961,
          price:41000,
          discountPrice: 39000,
          colors: ['MINT', 'WHITE'],
          sizes: ['S', 'M', 'L'],
        },
        {
          id:'special-3',
          images:[
            '/images/0180030009213.jpg',
            '/images/0180030009213.jpg',
            '/images/0180030009213.jpg',
          ],
          name:'하이 템포 팬츠 24.5" 체리퍼플',
          review:1827,
          price:52000,
          discountPrice: 39000,
          colors: ['MINT', 'WHITE'],
          sizes: ['S', 'M', 'L'],
        },
        {
          id:'special-4',
          images:[
            '/images/0170010020243.jpg',
            '/images/0170010020243.jpg',
            '/images/0170010020243.jpg',
          ],
          name:'플랙스 인 탑 화이트',
          review:49,
          price:39000,
          discountPrice: 39000,
          colors: ['MINT', 'WHITE'],
          sizes: ['S', 'M', 'L'],
        }
      ]
    return(
        <section className="special-wrap">
            <h2>SPECAIL ITEM</h2>
            <p>뮬라의 썸머 빅세일! 최대 50%할인 놓치지 마세요!</p>
            <div className="special-box">
                <div className="special-top">
                    <Link to="/shop">
                        <img src="/images/special_top.jpg" alt="Muse:Hanee's collection... Go Shop" />
                    </Link>
                </div>
                <div className="special-product">
                    <ul>
                        {
                            specialItems.map((item)=>(
                                <li key={item.id}>
                                    <Link to={`/product/${item.id}`} state={{product:item}}>
                                        <img src={item.images && item.images.length > 0 ? item.images[0] : 'error-img.jpg'} alt={item.name} className="special-images"/>
                                        <h3 className="special-title">{item.name}</h3>
                                        <p className="special-review">review{item.review}</p>
                                        <p className="special-price">
                                                    {item.discountPrice && (
                                                    <span className="discount"> &#8361;{item.discountPrice.toLocaleString()}원</span>
                                                )}
                                                <strong>
                                                    &#8361; {item.price ? item.price.toLocaleString() : 'Price not available'} 원
                                                </strong>
                                        </p>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpecialItem;