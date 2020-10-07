import React, {useState, useEffect} from "react"

const About = () => {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://fornite-public-api.theapinework.com/prod09/upcoming/get")
        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
    }

    return (
        <div>
            <h1>
                ABOUT SECTION
            </h1>
            {items.map(item => (
                <h1>{item.name}</h1>
            ))}
        </div>
    )
}
export default About