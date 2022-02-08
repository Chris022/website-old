import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Project.css';

export default function Project({heading,data}){


    return (
        <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="project"
            >
              <h1 className="Projects-TextHead">{heading}</h1>
            </AccordionSummary>
            <AccordionDetails>
              <div className="Project-Container">
                  {
                      data.map((x)=>{
                          return (
                                <>
                                    <h1 className="Projects-TextHead2">{x.name}</h1>
                                    {x.element}
                                    <br/>
                                    <br/>
                                </>
                          );
                      })
                  }
              </div>
            </AccordionDetails>
        </Accordion>
    );
}