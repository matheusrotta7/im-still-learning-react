import Item from "../../components/Item";
import List from "../../components/List";

export default function componentWithChildren() {

    return (
        <>
            <List>
                <Item content="Item #42"/>
                <Item content="Item #43"/>
                <Item content="Item #44"/>
                <Item content="Item #1"/>
                <Item content="Item #2"/>
                <Item content="Item #3"/>
            </List>
        </>
    )
}