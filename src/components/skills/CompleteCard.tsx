import Card from "./Card"
import CardTitle from "./CardTitle"
import CardDescription from "./CardDescription"

interface props {
    title : string,
    description : string
}

const CompleteCard = ( {title , description} : props) => {
    return (
        <div>
            <Card>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </Card>
        </div>
    )
}
export default CompleteCard