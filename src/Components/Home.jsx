import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import data from "./data";
import { Container, Row, Col,Form,Button } from "react-bootstrap";

const Home = () => {
  const info = [
    {
      img: "https://www.eklavyaoverseas.com/images/career.png",
      text: "CAREER GUIDES",
      count: "10",
    },
    {
      img: "https://www.eklavyaoverseas.com/images/year-of-experience.png",
      text: "YEARS OF EXPERIENCE",
      count: "13",
    },
    {
      img: "https://www.eklavyaoverseas.com/images/enrolments.png",
      text: "ENROLMENTS",
      count: "200",
    },
    {
      img: "https://www.eklavyaoverseas.com/images/testimonials.png",
      text: "CUSTOMER TESTIMONIALS",
      count: "200",
    },
  ];

  const part = [
    {
      brand:
        "https://i.pinimg.com/474x/87/ea/44/87ea4427d00d23fc542f2b2dc9eeec13.jpg",
    },
    {
      brand:
        "https://i.pinimg.com/474x/92/ae/e8/92aee8b29447a563b36b893dc095db8b.jpg",
    },
    {
      brand:
        "https://img.freepik.com/premium-vector/medical-caduceus-logo-symbol-vector-editable-name_516670-20.jpg?semt=ais_hybrid",
    },
    {
      brand:
        "https://i.pinimg.com/474x/de/62/2f/de622f04141a4707309bdfa5b6048e9b.jpg",
    },
  ];



  const blog = [
    {
      blogimg:
        "https://www.eklavyaoverseas.com/assets/images/canada-immigration-eklavya-overseas.jpg",
      bloglink: "https://www.eklavyaoverseas.com/canada-immigration/",
      bloghead: "Canada Immigration ",
      bloginfo:
        "Moving to a new country is always tuff and is a daunting process. Pondering about your International visit? Begin your International journey with Eklavya Overseas.",
    },
    {
      blogimg:
        "https://www.eklavyaoverseas.com/assets/images/pg-in-germany-eklavya-overseas.jpg",
      bloglink: "https://www.eklavyaoverseas.com/pg-in-germany/",
      bloghead: "PG in Germany ",
      bloginfo:
        "Have you completed your MBBS? Some of you must be indefinite about your All India Post Graduate Medical Entrance Examination (AIPGMEE) ",
    },
    {
      blogimg:
        "https://www.eklavyaoverseas.com/uploads/post_banner/study-dentistry-in-georgia.jpg",
      bloglink: "https://www.eklavyaoverseas.com/study-dentistry-in-georgia/",
      bloghead: " Study Dentistry in Georgia",
      bloginfo:
        "Dental Education has gained a worldwide recognition. The next generation of professionals provide dental education by providing hands-on education",
    },
    // {
    //   blogimg:
    //     "https://www.eklavyaoverseas.com/assets/images/mbbs-in-russia-for-arabic-students-eklavya-overseas.jpg",
    //     bloglink:"https://www.eklavyaoverseas.com/mbbs-in-russia-for-arabic-students/",
    //   bloghead: "MBBS in Russia for Arabic Students",
    //   bloginfo:
    //     "tudents that can speak in English hailing from Arab countries who are keen to learn and study medicine, can find an alternative route to ",
    // },
  ];
  return (
    <div>
      {/* Home page start */}
      <header>
        <div className="main" id="home">
          <div className="secmain">
            <h1 className="text-2xl text-yellow-600  font-extrabold z-auto font-serif text-center">
              Become a doctor with globally recognized universities Get
              admission into
            </h1>
            <h1 className="text-4xl text-red-500  font-extrabold z-auto font-serif text-center">
              Top Medical University in Uzbekistan
            </h1>
            <p className="z-auto text-center p-1.5 text-xl text-yellow-200">
              Study in NMC & WHO recognized medical colleges
            </p>
          </div>
        </div>
      </header>
      {/* Home page end */}

      {/* headcard start */}
      <div className="container">
        <h2 className="m-4 text-center text-green-700">
          Why Study MBBS Abroad?
        </h2>
        <h5 className="text-center m-2">
          Eklavya Overseas gives you several reasons to Study MBBS Abroad
        </h5>
        <div className="row">
          <div className="col-md-3 p-2">
            <Card style={{ width: "15rem" }} className=" headcard">
              <Card.Img
                variant="top"
                className="headimg"
                src="https://www.eklavyaoverseas.com/images/low-tuition-fees.png"
              />
              <Card.Body>
              <Card.Title>Low Tuition Fees</Card.Title>
                <Card.Text>
                  Low-cost medical education starting from INR 5 Lacs
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 p-2">
            <Card style={{ width: "15rem" }} className=" headcard">
              <Card.Img
                variant="top"
                className="headimg"
                src="https://www.eklavyaoverseas.com/images/donation.png"
              />
              <Card.Body>
              <Card.Title>There is no donation</Card.Title>

                <Card.Text>No Donation & Capitation fees</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 p-2">
            <Card style={{ width: "15rem" }} className=" headcard">
              <Card.Img
                variant="top"
                className="headimg "
                src="https://www.eklavyaoverseas.com/images/nmc.png"
              />
              <Card.Body>
              <Card.Title>NMC/WHO Approved</Card.Title>
                <Card.Text>Practice in India & across the world</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3 p-2 ">
            <Card style={{ width: "15rem" }} className=" headcard">
              <Card.Img
                variant="top"
                className="headimg "
                src="https://www.eklavyaoverseas.com/images/top-medical-universities.png"
              />
              <Card.Body>
              <Card.Title>Top Medical University</Card.Title>
                <Card.Text>Worldwide accepted the degree</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* headcard end */}

      {/* why Study start */}
      <div id="about">
      <div className="container m-4">
        <h1 className="text-center m-3 font-serif font-bold ">
          Why Study MBBS in Uzbekistan?
        </h1>
        <div className="row">
          <div className="col-md-5">
            <Image
              src="https://www.eklavyaoverseas.com/images/right-side-img.png"
              rounded
            />
          </div>
          <div className="col-md-7">
            <ul style={{ listStyleType: "disc" }}>
              <li>Get the best of quality education in Uzbekistan </li>
              <li>
                {" "}
                Direct Admissions Students will get direct admission to the
                medical university of Uzbekistan
              </li>
              <li>
                {" "}
                Low tuition fee Medical universities in Uzbekistan Offered
                low-cost education to Foreign students.
              </li>
              <li>100% Safety Uzbekistan is the safest European country.</li>
              <li>
                {" "}
                Worldwide acceptance MBBS degree in Uzbekistan is accepted
                worldwide.
              </li>
              <li>
                Top Medical College Private & Government medical colleges in
                Uzbekistan ranked high among other countries.﻿
              </li>
              <li>
                Excellent environment The Uzbekistan has diverse Foreign
                students.Environment for study
              </li>

              <li>
                {" "}
                Living & Accommodation Cost of living in Uzbekistan is low,
                around 62 USD.
              </li>
              <li>
                Affiliation and Recognition Medical universities in Uzbekistan
                are recognized by NMC & WHO.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      {/* why Study end */}

      {/* why Expert start */}
      <div className="container ">
        <h3 className="text-center m-3 font-serif font-bold text-green-700">
          Why Uzbekistan Expert?
        </h3>
        <div className="row  expertpage">
          <div className="col-md-12">
            <h5 className="text-bold text-center m-2 text-blue-900">
              Best MBBS Education Consultants in India
            </h5>
            <ul style={{ listStyleType: "disc" }}>
              <li>
                {" "}
                A one-stop solution for students specialized in MBBS overseas
                education counseling, and admission guidance.
              </li>
              <li>Complete support for the necessary documentation.</li>
              <li>
                Guaranteed Admission in top MBBS universities in Uzbekistan
                having low fees for Indian students.
              </li>
              <li>
                {" "}
                Free counseling to students and assistance such that it will
                help their career grow.{" "}
              </li>
              <li>
                Full assistance in travel agreement and visa clearance for
                students.
              </li>
              <li>
                Support for educational loans and help with the accommodation
                when a student arrives at the university.
              </li>

              <li>
                We give in-depth knowledge of study patterns and study the
                quality of the top universities in Uzbekistan to our clients.
              </li>
              <li>
                All kind of help provided right from passport application,
                filling admission form, air tickets to forex.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* why Expert end */}

      {/* services start */}
     <div className="container bg-slate-100  ">
        <h3 className="text-center m-3 font-serif font-bold text-green-700 ">
          Our Valuable Services
        </h3>
  <div class="row">
    <div class="col align-self-start">
    <Card style={{ width: '16rem' }} className=" sercard">
      <Card.Body className="text-center">
        <Card.Title ><span className="text-pink-700 font-bold">Admission</span></Card.Title><hr />
        <Card.Text>
        Get the guaranteed admission to top university.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div class="col align-self-center my-5 ">
    <Card style={{ width: '16rem' }} className=" sercard">
      <Card.Body className="text-center">
        <Card.Title ><span className="text-pink-700 font-bold">Visa Process</span></Card.Title><hr/>
        <Card.Text>
        Fill the visa applications Followed by universities Guidelines.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div class="col align-self-start">
    <Card style={{ width: '16rem' }} className=" sercard">
      <Card.Body className="text-center">
        <Card.Title ><span className="text-pink-700 font-bold">Accommodation</span></Card.Title><hr/>
        <Card.Text>
      Stay in the dormitories with a safe environment.

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
  <div class="row m-3">
    <div class="col align-self-start ">
    <Card style={{ width: '16rem' }} className=" sercard">
      <Card.Body className="text-center">
        <Card.Title ><span className="text-pink-700 font-bold">Airport Pickup</span></Card.Title><hr/>
        <Card.Text>
        Get picked up at airport By our representative.

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div class="col align-self-center my-5 ">
    <Card style={{ width: '16rem' }} className=" sercard">
      <Card.Body className="text-center">
        <Card.Title><span className="text-pink-700 font-bold">Documentation</span></Card.Title><hr/>
        <Card.Text>
        Verification of legalized documents.

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div class="col align-self-start">
    <Card style={{ width: '16rem' }} className=" sercard">
      <Card.Body className="text-center">
        <Card.Title ><span className="text-pink-700 font-bold">Free Counseling</span> </Card.Title><hr/>
        <Card.Text>
        Get free counseled by our reputed experts.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  </div>
</div> 
      {/* services end */}

      {/* Top univercity start */}
      <div className="container topuni ">
        <h1 className="text-center m-4 font-serif font-bold text-blue-800">
          Top Medical Universities
        </h1>
        <div className="row">
          {data.map((val) => {
            return (
              <div className="col-md-4 p-2 topcard">
                <Card style={{ width: "18rem" }} className="topimg">
                  <Card.Img variant="top" src={val.img} />
                  <Card.Body>
                    <Card.Title className="text-center ">
                      {val.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
      {/* Top univercity end */}

      {/* Best educ start */}
      <div className="py-6 relative bg-red-600 my-3">
        <div className="mt-5 text-gray-100 text-center">
          <h3 className="text-white mt-2 text-lg">Best Education Consultant</h3>
          <p className="text-center text-white m-2">
            Fix a meeting with us & get honest advise and guaranteed admission
            in top universities around the world!
          </p>
          <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {info.map((content) => (
              <div className="  relative min-w-[10rem] max-w-[16rem] bg-white p-3 rounded-xl">
                <div className="text-5xl w-15 h-15 rounded-full flex items-center justify-center text-center ">
                  <img src={content.img} alt="" srcset="" />
                </div>

                <h3 className="md:text-4xl text-2xl font-semibold  text-red-600 ">
                  {content.count}
                  <span className="text-red-600">+</span>
                </h3>

                <span className=" md:text-base text-xs text-black">
                  {content.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best educ end*/}

      {/* Parnters Start */}
      <div className=" m-5">
        <h3 className="text-center font-bold m-2">Our Partners</h3>
        <p className="text-center  m-2">
          We are proudly partners with these best career carfting and future
          building universities.
        </p>
        <div className=" text-center justify-center items-center flex mt-10 gap-7">
          {part.map((brandimg) => (
            <Card style={{ width: "8rem" }}>
              <Card.Img variant="top" src={brandimg.brand} />
            </Card>
          ))}
        </div>
      </div>

      {/* Parnters end */}
      {/* Blog start */}
      <div className="container ">
        <h3 className="text-center font-bold m-2"> Our Latest Blog</h3>
        <p className="text-center  m-2">
          Check out our Latest posts on Studying Abroad
        </p>
        <div className=" row justify-center items-center flex mt-10 gap-7 m-3">
          {blog.map((latestblog) => {
            return (
              <div className="col">
                <Card style={{ width: "18rem" }} className="border-none">
                  <Card.Img
                    variant="top"
                    src={latestblog.blogimg}
                    style={{ height: "25vh" }}
                  />
                  <Card.Body>
                    <a href={latestblog.bloglink} className="text-black">
                      <Card.Title>{latestblog.bloghead}</Card.Title>
                    </a>
                    <Card.Text>{latestblog.bloginfo}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Blog end */}
      {/* gallary start */}
      <Container >
        <h3 className="text-center font-bold m-2"> Recent Photo Gallery</h3>
        <p className="text-center  m-2">Explore our latest picture gallery</p>
        <div class="row m-2">
          <div class="col p-2">
          <Image
              src="https://www.eklavyaoverseas.com/images/gallery1B.jpg"
              rounded
            />
          </div>
          <div class="col  p-2">  <Image
              src="https://www.eklavyaoverseas.com/images/gallery1A.jpg"
              rounded
            /></div>
          <div class="col  p-2">  <Image
              src="https://www.eklavyaoverseas.com/images/gallery1C.jpg"
              rounded
            /></div>
          <div class="col  p-2">  <Image
              src="https://www.eklavyaoverseas.com/images/gallery1D.jpg"
              rounded
            /></div>
        </div>
        <div class="row m-2">
          <div class="col p-2">
          <Image
              src="https://www.eklavyaoverseas.com/images/gallery2A.jpg"
              rounded
            />
          </div>
          <div class="col  p-2">  <Image
              src="https://www.eklavyaoverseas.com/images/gallery2B.jpg"
              rounded
            /></div>
          <div class="col  p-2">  <Image
              src="https://www.eklavyaoverseas.com/images/gallery2C.jpg"
              rounded
            /></div>
          <div class="col  p-2">  <Image
              src="https://www.eklavyaoverseas.com/images/gallery2D.jpg"
              rounded
            /></div>
        </div>
        
      </Container>

      {/* gallary end */}


{/* Questions start */}
     <div className="container">
     <h3 className="text-center font-bold m-2"> Frequently Asked Questions</h3>
     <p className="text-center  m-2">Getting Your Queries About MBBS in Abroad Answered</p>

     <p className=" font-bold m-1">Why do Indian students opt for MBBS abroad?</p>
     <p className="m-1"><span className="font-bold">Ans.</span> There are a limited number of seats available for medical students in India. In addition, the fees charged by private medical colleges in India are much higher than that of many medical institutes in other countries.</p>

     <p className=" font-bold m-1">Ques. What are the basic eligibility criteria for MBBS abroad?</p>
     <p className="m-1"><span className="font-bold">Ans.</span> Candidates must achieve a minimum of 50% in Class 12 examinations with Physics, Chemistry, and Biology as the main subjects. SC/ST/OBC candidates need to have a minimum of 45%. Candidates must also clear NEET.</p>

     <p className=" font-bold m-1">Ques. Is NEET a necessity for studying MBBS abroad?</p>
     <p className="m-1"><span className="font-bold">Ans.</span> Yes, all medical universities around the world need applicants from India to clear the National Eligibility cum Entrance Test (NEET) and present the eligibility certificate. Some universities also have their own entrance exams in addition to NEET.</p>

     <p className=" font-bold m-1">Ques. What is the duration of MBBS courses abroad?</p>
     <p className="m-1"><span className="font-bold">Ans.</span> Most MBBS courses around the world typically last for 5 years. However, some medical institutions and universities also expect their medical students to spend an additional year as an intern in their internship programs.</p>

     <p className=" font-bold m-1">Ques. What is the standard fee structure for MBBS courses abroad?</p>
     <p className="m-1"><span className="font-bold">Ans.</span> While the tuition fees for different medical institutes vary, most medical universities charge tuition fees between $20,000 and $50,000 for a 5+1 year course. Hostel accommodation and food expenses account for separate expenses.</p>

     



     </div>
{/* Questions end */}
      {/* Footer Start */}

 <Container fluid className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Card className="mx-auto shadow" style={{ maxWidth: '900px', padding: '20px', borderRadius: '10px' }}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Course*</Form.Label>
                  <Form.Control type="text" placeholder="Enter your course" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Captcha*</Form.Label>
                  <Form.Control type="text" placeholder="9 + 2" />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile No.*</Form.Label>
                  <Form.Control type="text" placeholder="Enter mobile number" />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="dark" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>

      {/* Footer Section */}
    
<div style={{ backgroundColor: '#002147', color: '#fff', paddingTop: '20px', paddingBottom: '20px' }}>
      <Container>
        <hr/>
        <Row className="mb-4">
          <Col md={2}>
            <h6>About Us</h6>
          </Col>
          <Col md={2}>
            <h6>Our Services</h6>
          </Col>
          <Col md={2}>
            <h6>Careers</h6>
          </Col>
          <Col md={2}>
            <h6>Refund Policy</h6>
          </Col>
          <Col md={2}>
            <h6>Become a Partner</h6>
          </Col>
          <Col md={2}>
            <h6>Term & Conditions</h6>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col md={3}>
            <h6>MBBS Destination</h6>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
             <a href="https://www.eklavyaoverseas.com/mbbs-in-russia/" className="text-white"><li>Study MBBS in Russia</li></a> 
             <a href="https://www.eklavyaoverseas.com/mbbs-in-belarus/" className="text-white"> <li>Study MBBS in Belarus</li></a>
             <a href="https://www.eklavyaoverseas.com/mbbs-in-georgia/" className="text-white"> <li>Study MBBS in Georgia</li></a>
             <a href="https://www.eklavyaoverseas.com/mbbs-in-mongolia/" className="text-white"> <li>Study MBBS in Mongolia</li></a>
             <a href="https://www.eklavyaoverseas.com/mbbs-in-china/" className="text-white"><li>Study MBBS in China</li></a>
            </ul>
          </Col>
          <Col md={3}>
            <h6>Quick Links</h6>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
             <a href="https://www.eklavyaoverseas.com/mba/" className="text-white"> <li>MBA</li></a>
             <a href="https://www.eklavyaoverseas.com/mbbs/" className="text-white"> <li>MBBS</li></a>
             <a href="https://www.eklavyaoverseas.com/study-in-abroad/" className="text-white"> <li>Study Abroad</li></a>
             <a href="https://www.eklavyaoverseas.com/mbbs-in-abroad/" className="text-white"> <li>MBBS Abroad</li></a>
             <a href="https://www.eklavyaoverseas.com/mbbs-admission/" className="text-white"> <li>MBBS Admission</li></a>
            </ul>
          </Col>
          <Col md={3}>
            <h6>References</h6>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
             <a href="https://www.nmc.org.in/information-desk/for-students-to-study-in-abroad/" className="text-white"> <li>NMC</li></a>
            <a href="https://nbe.edu.in/" className="text-white">  <li>NBE</li></a>
            <a href="https://neet.nta.nic.in/" className="text-white"> <li>NEET</li></a> 
            <a href="https://www.usmle.org/" className="text-white"><li>USMLE</li></a>
            <a href="https://www.wdoms.org/" className="text-white">  <li>WDOMs</li></a>
            </ul>
          </Col>
           <Col md={3}>
             <Image
              src="https://www.eklavyaoverseas.com/images/logo-white.png"
              rounded
            />
            <ul style={{ listStyleType: 'none', padding: 3 }}>
              <li><p><span className=" font-bold">Head Office:</span> Plot No 8, block N, Second Floor, Opposite Axis Bank, Sector -18, Noida - 201301</p></li>
              <li><p><span className=" font-bold">Email:</span>contact@eklavyaoverseas.com</p></li>
              <li><p><span className=" font-bold">Support:</span> +91-9210120800</p></li>
            </ul>
          </Col>
        </Row>
         <Row>
          <Col>
          <p className="mb-2  font-bold">Follow Us:</p>
            <div className="d-flex align-items-center">
              
              <a href="https://www.instagram.com/eklavya_overseas/" className="mx-2 text-white"><ion-icon name="logo-instagram" size="large"></ion-icon></a>
              <a href="https://www.facebook.com/Eklavyaoverseas/" className="mx-2 text-white"><ion-icon name="logo-facebook" size="large"></ion-icon></a>
              <a href="https://api.whatsapp.com/send?phone=919210120800&text=Hello" className="mx-2 text-white"><ion-icon name="logo-whatsapp" size="large"></ion-icon></a>
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Feklavyaoverseas" className="mx-2 text-white"><ion-icon name="logo-twitter" size="large"></ion-icon></a>
              <a href="https://www.youtube.com/user/Eklavyaoverseas" className="mx-2 text-white"><ion-icon name="logo-youtube" size="large"></ion-icon></a>
              <a href="https://www.linkedin.com/showcase/eklavyaoverseas1/" className="mx-2 text-white"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
            </div>
          </Col>
        </Row>
        <Row >
          <Col className="text-center mt-4">
            <Button variant="danger">Online MBBS Counselling</Button>
          </Col>
        </Row>
      </Container>
    </div>



      {/* Footer end */}


</div>
  );
};

export default Home;
