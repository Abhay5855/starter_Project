
import { CardContent, Card } from "@mui/material";

const CardContainer = ({vehicles, filteredResults}) => {

  return (
    <div>
        {
            filteredResults?.map((item) => (
                
                <Card key={item?.name}>
            <CardContent>
              
                {item.name}
                
            </CardContent>
        </Card>

            ))
        }
         

      
    </div>
  )
}

export default CardContainer;
