import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CardHeader from 'reactstrap/lib/CardHeader';

const CardEvent = ({
  className,
  descEvent,
  nameEvent,
  pictureEvent,
  dateEvent
}) => {
  return (
      <div className={`${className} px-2 card-event`}>
          <Card className="p-0">
            <CardHeader className="p-0">
            <img src={pictureEvent} alt="Logo" className="w-100"/>
            </CardHeader>
            <CardBody>
              <div>
                  <div style={{color:"#697281", fontWeight:"500"}}>{dateEvent}</div>
                  <div className="pb-3 text-value">{nameEvent}</div>
                  <div className="text-justify font-text overflow-auto" style={{height:'180px'}}>{descEvent}</div>
              </div>
            </CardBody>
          </Card>
      </div>
  );
};

export default CardEvent;
