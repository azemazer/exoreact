const laliste = [<li>item1</li>, <li>item2</li>, <li>item3</li>];
const [item1, item2, item3] = laliste;
const lul = <ul>{item1}{item2}{item3}</ul>

function List() {
    return lul
}

export default List