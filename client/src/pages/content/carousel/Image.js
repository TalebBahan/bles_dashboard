import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardImg,
    Button
} from "reactstrap";
import img2 from "../../../assets/images/small/img-2.jpg";

import AddEditCarouselModal from './AddEditCarousel';


export default function Image(props) {

    
    const [editModal, setEditModal] = React.useState(false)
    return (
        <div>
            
            <AddEditCarouselModal open={editModal} setOpen={() => setEditModal(!editModal)} isAdd={false} />
            <Card>
                <CardBody>
                    <CardTitle className="h4">
                        <Button color="danger" className='float-end'>
                            <i className='mdi mdi-delete '></i>
                        </Button>
                        <Button color="primary" className='float-end me-2' onClick={()=>setEditModal(true)}>
                            <i className='mdi mdi-file-document-edit-outline '></i>
                        </Button>
                    </CardTitle>
                    <br></br>
                    <p className="h5">
                        Transformative Knowledge, Innovation, Leadership, and Career Support
                    </p>
                    <p className="card-title-desc">
                        Transformative Knowledge, Innovation, Leadership, and Career Support
                    </p>
                    <CardImg className="img-fluid" src={img2} alt="veltrix" />
                </CardBody>
            </Card>
        </div>
    )
}