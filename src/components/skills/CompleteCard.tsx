import Card from "./Card"
import CardTitle from "./CardTitle"
import CardDescription from "./CardDescription"
import ListOfItems from "../listOfItems"

interface props {
    title : string,
    description : string
}

const CompleteCard = ( {title , description} : props) => {
    return (
        <div>
            <Card>
            <CardTitle>{title}</CardTitle>
            <ListOfItems list={description.split(",")}></ListOfItems>
            {/* <CardDescription>{description}</CardDescription> */}
          </Card>
        </div>
    )
}
export default CompleteCard