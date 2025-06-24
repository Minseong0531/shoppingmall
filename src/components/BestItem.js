import { Link } from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const category={
    ALL:[
      {
        id:'best-all-1', 
        images:[
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
        ],
        name:'위드 잇 백 블랙', 
        review:367, 
        price:39000,
        discountPrice: 37000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-all-2', 
        images:[
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
        ],
        name:'원스온 텀블러 스노위 마블', 
        review:962, 
        price:41000, 
        discountPrice: 29000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-all-3', 
        images:[
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
        ],
        name:'뮬라 매트 타월 플로웨이', 
        review:1287, 
        price:72000, 
        discountPrice:52000, 
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-all-4', 
        images:[
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
        ],
        name:'코어 파워 토 삭스', 
        review:49, 
        price:41000,
        discountPrice:37000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
    ],
    TOP:[
      {
        id:'best-top-1', 
        images:[
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
        ],
        name:'위드 잇 백 블랙', 
        review:367, 
        price:39000,
        discountPrice:31000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'], 
      },
      {
        id:'best-top-2', 
        images:[
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
        ],
        name:'원스온 텀블러 스노위 마블', 
        review:962, 
        price:41000, 
        discountPrice:29000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-top-3', 
        images:[
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
        ],
        name:'뮬라 매트 타월 플로웨이', 
        review:1287, 
        price:72000, 
        discountPrice:52000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-top-4', 
        images:[
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
        ],
        name:'코어 파워 토 삭스', 
        review:49, 
        price:41000,
        discountPrice:29000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'], 
      },
    ],
    BOTTOM:[
      {
        id:'best-bottom-1', 
        images:[
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
        ],
        name:'위드 잇 백 블랙', 
        review:367, 
        price:39000,
        discountPrice:30000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-bottom-2', 
        images:[
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
        ],
        name:'원스온 텀블러 스노위 마블', 
        review:962, 
        price:41000, 
        discountPrice:29000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'], 
      },
      {
        id:'best-bottom-3', 
        images:[
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
        ],
        name:'뮬라 매트 타월 플로웨이', 
        review:1287, 
        price:72000, 
        discountPrice:52000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'], 
      },
      {
        id:'best-bottom-4', 
        images:[
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
        ],
        name:'코어 파워 토 삭스', 
        review:49, 
        price:41000,
        discountPrice:36000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
    ],
    ETC:[
      {
        id:'best-etc-1', 
        images:[
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
          'images/0180030008933.jpg',
        ],
        name:'위드 잇 백 블랙', 
        review:367, 
        price:39000,
        discountPrice:25000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-etc-2', 
        images:[
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
          'images/0170010020353.jpg',
        ],
        name:'원스온 텀블러 스노위 마블', 
        review:962, 
        price:41000, 
        discountPrice:29000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
      {
        id:'best-etc-3', 
        images:[
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
          'images/0180030008953.jpg',
        ],
        name:'뮬라 매트 타월 플로웨이', 
        review:1287, 
        price:72000, 
        discountPrice:52000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'], 
      },
      {
        id:'best-etc-4', 
        images:[
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
          'images/0180030008943.jpg',
        ],
        name:'코어 파워 토 삭스', 
        review:49, 
        price:41000,
        discountPrice:29000,
        colors: ['BLACK'],
        sizes: ['ONE SIZE'],
      },
    ],
  }
function BestItem(){
    return(
        <section className='best-item'>
            <h2>BEST ITEM</h2>
            <p>뮬라의 베스트아이템을 만나보세요.</p>
            <Tabs>
                <TabList className='tabs'>
                    {
                        //객체 모든 속성의 키들로 배열 반환 Object.keys()
                        Object.keys(category).map((category)=>(
                            <Tab key={category} className="tab-btn">{category}</Tab>
                        ))
                    }
                </TabList>
                {
                    Object.entries(category).map(([category, items])=>(
                        <TabPanel key={category}>
                            <div className='tab-panel'>
                                {
                                    items.map((item,index)=>(
                                        <div key={item.id} className='item-box'>
                                            <Link to={`/product/${item.id}`} state={{product:item}}>
                                                <span className='best-rank'>BEST<br/>{index+1}</span>
                                                <img
                                                    src={item.images && item.images.length > 0 ? item.images[0] : 'error-img.jpg'}
                                                    alt={item.name}
                                                    className='bestitem-img'
                                                />
                                                <h3 className='item-title'>[EVENT] {item.name}</h3>
                                                <p className='item-review'>review{item.review}</p>
                                                <p className='item-price'>
                                                    { item.price && (
                                                        <span className='gray-text'>
                                                            &#8361; {item.price.toLocaleString()}원
                                                        </span>
                                                    )}
                                                    {item.discountPrice && (
                                                    <span> / &#8361;{item.discountPrice.toLocaleString()}원</span>
                                                )}
                                                </p>
                                            </Link>
                                            

                                        </div>
                                    ))
                                }
                            </div>
                        </TabPanel>
                    ))
                }
            </Tabs>
        </section>
        
    )
}

export default BestItem