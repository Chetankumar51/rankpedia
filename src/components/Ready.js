import React from 'react';
import '../style/Ready.css';

const Ready = () => {
  return (
    <div className='main-read' >
        <div className="container ready-for">
            <div className="row">


                <div className="col-md-8">
                    <div className="read-content">
                        <h2 className="read-c">Ready for an Experience of <br /> Blended Learning?</h2>
                        <p className='register mt-4' >Register to experience blended learning like never before and stay ahead.</p>
                    </div>
                </div>


                    <div className="col-md-4 btn-r">
                        <div className="btn-read">
                           <div><button className='btn-green' >Get started</button></div> 
                           <div><button className='btn-white' >Read FAQs</button></div> 
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Ready