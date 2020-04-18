import React, { Component, Fragment } from 'react';
import TeamComponent from '../../component/Team/Team';
import Data from '../../data.json';
class Team extends Component {
    render() {
        return (
            <Fragment>
                    {/* <!-- ===== Card__three ===== --> */}                        
                    <section id="team" className="team p-top-120 p-bottom-120">
                        <div className="container">
                            <h2 className="card-title text-center text-white p-bottom-60 mb-0">Trust the professionals</h2>
                            <div className="row d-flex justify-content-center">
                                {
                                    Data[0].team.map((item, key) => {
                                        return <TeamComponent key={key} img={item.imgSrc} name={item.name} designation={item.designation} />                        
                                    })
                                }
                            </div>{/*<!-- End: row -->*/}
                        </div>{/*<!-- End: container -->*/}
                    </section>
                    {/* <!-- End: section --> */}            
            </Fragment>
        )
    }
}
export default Team;