import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faMapMarkerAlt, faMobileAlt} from "@fortawesome/free-solid-svg-icons"

import profilePicture from '../../img/profile.jpg'

import '../../css/resume.css'

function Home() {
    return (
        <div className="container-fluid overcover">
            <div className="container profile-box">
                <div className="row top-prof">
                    <div className="col-md-4 position-relative scov">
                        <ul className="ps-0">
                            <li>
                                <div className="icon">
                                    <i className="d-block"><FontAwesomeIcon icon={faMapMarkerAlt} /></i>
                                </div>
                                <div className="detail">
                                    First Floor,Vincent Plaza, Toranto, Canada
                                </div>
                            </li>

                            <li>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </div>
                                <div className="detail">
                                    +123 8767 5465
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="far fa-envelope"></i>
                                </div>
                                <div className="detail">
                                    suppoet@smarteyeapps.com
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-globe-americas"></i>
                                </div>
                                <div className="detail">
                                    www.smarteyeapps.com
                                </div>
                            </li>

                        </ul>
                        <div className="styl-bb"></div>
                    </div>
                    <div className="col-md-8">
                        <div className="row profile-go">
                            <div className="col-md-4">
                                <img src={profilePicture} alt=""/>
                            </div>
                            <div className="col-md-8 datadiv">
                                <h2>Angelina Smith / Web Designer</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row more-detail">
                    <div className="col-md-5">
                        <div className="education">
                            <h3><i className="fas fa-user-graduate"></i> Education Details</h3>
                            <ul>
                                <li><b>Graphic Design</b>
                                    <p>University of California</p>
                                    <span>2014 - 2015</span>
                                </li>
                                <li><b>Multimedia Design</b>
                                    <p>University of California</p>
                                    <span>2013 - 2015</span>
                                </li>
                                <li><b>Master Digree</b>
                                    <p>CSI Institute of Technology</p>
                                    <span>2012 - 2012</span>
                                </li>
                                <li><b>Bachlore Digree</b>
                                    <p>Cambrigd University</p>
                                    <span>2010 - 2011</span>
                                </li>
                            </ul>
                        </div>
                        <div className="education">
                            <h3><i className="fas fa-briefcase"></i> Working Experiance</h3>
                            <ul>
                                <li><b>Diamond Internationals</b>
                                    <p>Lorem Ipsum is simply dummy text</p>
                                    <span>2016 - 2016</span>
                                </li>
                                <li><b>Fransis Enterpraises</b>
                                    <p>make a type specimen book. </p>
                                    <span>2016 - 2017</span>
                                </li>
                                <li><b>Smateye Technologies</b>
                                    <p>It has survived not only five</p>
                                    <span>2018 - 2019</span>
                                </li>
                                <li><b>Freelancer Designer</b>
                                    <p>ever since the 1500s, when an unknown</p>
                                    <span>2018 - 2019</span>
                                </li>
                            </ul>
                        </div>
                        <div className="education personal">
                            <h3><i className="fas fa-user"></i> Personal Detail</h3>

                            <div className="row bd-ro">
                                <div className="col-sm-5">
                                    Date of Dirth
                                    <span>:</span>
                                </div>
                                <div className="col-sm-7">
                                    09-06-1989
                                </div>
                            </div>
                            <div className="row bd-ro">
                                <div className="col-sm-5">
                                    Your Nationality
                                    <span>:</span>
                                </div>
                                <div className="col-sm-7">
                                    Indian
                                </div>
                            </div>
                            <div className="row bd-ro">
                                <div className="col-sm-5">
                                    Religion
                                    <span>:</span>
                                </div>
                                <div className="col-sm-7">
                                    Your Religion
                                </div>
                            </div>
                            <div className="row bd-ro">
                                <div className="col-sm-5">
                                    Bloog Group
                                    <span>:</span>
                                </div>
                                <div className="col-sm-7">
                                    AB-
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="education">
                            <h3><i className="far fa-object-ungroup"></i> Profesional Skills</h3>
                            <div className="profess-cover">
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        Photoshop
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '65%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        PHP
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        Web Design
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '75%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        Web Development
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '55%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="education">
                            <h3><i className="fas fa-pen-fancy"></i> Personal Skills</h3>
                            <div className="profess-cover">
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        Creativity
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        Communicatin
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        Team Work
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '85%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row prog-row">
                                    <div className="col-sm-6">
                                        Quick Learner
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="education row no-margin activity">
                            <h3><i className="far fa-object-ungroup"></i> Activites / Interests</h3>
                            <ul>
                                <li>Designing</li>
                                <li>Walking</li>
                                <li>Swimming</li>
                                <li>Reading</li>
                                <li>Traveling</li>
                                <li>Photography</li>
                                <li>Musics</li>
                                <li>Football</li>
                                <li>Cricket</li>
                            </ul>
                        </div>
                        <div className="education aars">
                            <h3><i className="fas fa-trophy"></i> Awards</h3>
                            <ul>
                                <li><b>Best Graphic Designer</b>
                                    <p>University of California</p>
                                    <span>2014 - 2015</span>
                                </li>
                                <li><b>Best Web Designer</b>
                                    <p>University of California</p>
                                    <span>2013 - 2015</span>
                                </li>
                                <li><b>Crative Designerr</b>
                                    <p>CSI Institute of Technology</p>
                                    <span>2012 - 2012</span>
                                </li>
                                <li><b>Creative Programer</b>
                                    <p>Cambrigd University</p>
                                    <span>2010 - 2011</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
