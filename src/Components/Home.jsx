import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import data from "./data";
import { Container, Row, Col, Stack } from "react-bootstrap";

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

  const services = [
    {
      servicestext: "Admission",
      desc: "Get the guaranteed admission to top university.",
    },
    {
      servicestext: "Visa Process",
      desc: "Fill the visa applications Followed by universities Guidelines.",
    },
    {
      servicestext: "Accommodation",
      desc: "Stay in the dormitories with a safe environment.",
    },
    {
      servicestext: "Airport Pickup",
      desc: "Get picked up at airport By our representative.",
    },
    {
      servicestext: " Documentation ",
      desc: "Verification of legalized documents.",
    },
    {
      servicestext: "Free Counseling",
      desc: "Get free counseled by our reputed experts.",
    },
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
                <Card.Text>Worldwide accepted the degree</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* headcard end */}

      {/* why Study start */}
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
                low-cost education to Foreign students.﻿
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
      <div className="container bg-slate-100   ">
        <h3 className="text-center m-3 font-serif font-bold text-green-700 ">
          Our Valuable Services
        </h3>
        <div className="row">
          {
        services.map((ser) => {
            return(
              <div className="col-md-4 p-2">
              <Card style={{ width: "16rem" }} className=" sercard">
             
                <Card.Body>
                  <Card.Title className="text-center" ><span className=" text-pink-600">{ser.servicestext}</span></Card.Title>
                  <Card.Text className="text-center">
                   {ser.desc}
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
            );
          })}
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
              <div className="col-md-4 p-2">
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
      <div className="bestedu">
        <h3 className="text-center text-white font-bold m-4">
          Best Education Consultant
        </h3>
        <p className="text-center text-white m-2">
          Fix a meeting with us & get honest advise and guaranteed admission in
          top universities around the world!
        </p>
        <div className=" text-center justify-center items-center flex mt-10 gap-7">
          {info.map((content) => (
            <div className="bg-white p-1 rounded md:p-4">
              <div key={content.text}>
                <div className="text-center justify-center items-center flex mt-3 ">
                  <img src={content.img} alt="" srcset="" />
                </div>
                <h3 className="md:text-4xl text-2xl font-semibold  text-red-600 ">
                  {content.count}
                  <span className="text-red-600">+</span>
                  {""}
                </h3>
                <span className=" md:text-base text-xs ">{content.text}</span>
              </div>
            </div>
          ))}
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

      {/* Footer Start */}
      <footer>
        <Container fluid>
          <Row className=" bg-blue-950 text-white p-4">
            <Col className="mx-6">
              <Stack>
                <Image
                  src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-medical-book-icon-png-image_855282.jpg"
                  alt="logo"
                  rounded
                  width={150}
                  height={150}
                />
              </Stack>
            </Col>
            <Col className=" text-center">
              <p>Want to know more about Studying MBBS Abroad?</p>
              <p>Download our Brochure now</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="city"
                className="m-2"
              />
              <input
                type=""
                name=""
                id=""
                placeholder="Mobile no."
                className="m-2"
              />
              <input
                type="email"
                name=""
                id=""
                placeholder="Email id"
                className="m-2"
              />
            </Col>
          </Row>
        </Container>
      </footer>
      {/* Footer End */}
    </div>
  );
};

export default Home;
