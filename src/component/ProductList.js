import './ProductList.css';


// 자식 컨퍼넌트(source)
function ListItem({item,onDelete}){
    // console.log(item);
    // console.log(allDate);
    function changeDate(num){
        // date 함수만들기
        const allDate = new Date(num);
        return `${allDate.getFullYear()}년 ${allDate.getMonth() + 1}월 ${allDate.getDate()}일`
    }
    // console.log(changeDate())
    return(
         <figure>
            <img src={item.image} alt={item.name} />
            <figcaption>
                <dl>
                    <dt>{item.name}</dt>
                    <dd>{item.price}</dd>
                    <dd>{item.kind}</dd>
                    <dd>{changeDate(item.date)}</dd>
                    <dd>
                        <button type='button'
                                onClick={()=>onDelete(item.id)}>delete</button>
                    </dd>
                </dl>
            </figcaption>
         </figure>
    )
}


// 부모 컨퍼넌트
export default function ProductList({items,onDelete}){
    // console.log(items);
    return(
        <ul>
            {items.map(
                (item)=>(<li key={item.id}><ListItem item={item}  onDelete={onDelete}/></li>)
                )
            }
        </ul>
    )
}

