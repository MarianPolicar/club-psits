import React, { useState } from 'react';
import { Container, Card, Row, Col, ListGroup, Button } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // lightbox css file
import './About.css';

function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/431746746_378135121704950_3475133657431702952_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFnnmoDMZ-hpXZEnD0e7ocrevySUszCvMt6_JJSzMK8y67XfPWjLVU_lZ8mpHl9-6r_FQJ8SEV1aMQv-MEn9f_b&_nc_ohc=3imzspEA57gQ7kNvgH2r3xU&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYCGuyB-RFwnBlLcxPEkByFc0h7II4BpEPpHpRX8O2k4_A&oe=66E10212",
    "https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/440155202_410371838481278_4309286310993739521_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHAYfl4mo7D07w0lGpuEp0pR5RZJvjQhkRHlFkm-NCGRK3mUFszPAdTm7ngBRUXE1rricTecLbKCK2GYB5PTyY_&_nc_ohc=tuNML9-DG0oQ7kNvgGieZCj&_nc_ht=scontent.fcgy2-1.fna&_nc_gid=ABNxbRk9s6c0fJ0GxqXr7es&oh=00_AYDfoJngoFz66rjUHxnn5eE2Qyvj0mImThK5xI9YDAlWCQ&oe=66E0FE81", "https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/440291546_410372615147867_8389059481654836707_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGt_zqwT6XjFR-71NTe7Zu-3fSjrJj4lzvd9KOsmPiXO7enQLnUefTvwZI2ZRu42yc0e_U1FUYZRzH2wfcIQvBx&_nc_ohc=WdPqGZKkIMoQ7kNvgG7IuzH&_nc_ht=scontent.fdvo1-1.fna&oh=00_AYBw3meuwwxGt1ra7kwQHv0MxXjfwaaBmejo51w6H6ZqXw&oe=66E2405A",
    "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/439973411_496477529374671_8843181174375944202_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeH7J6RfR-VX6EiIp3GDKs6hS5RQGtMR2R1LlFAa0xHZHUpoawTRZC1cZgEtC3UnpLkbxy2n8l5BqOoy9ywn4ye2&_nc_ohc=W_3wO1SuoN4Q7kNvgEjYV9W&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYAeOLZUivzNHwSYobXqqx6kv1nTMEm8EtTBHjIlLW_Sig&oe=66E0DA56","https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/445436756_420634354121693_2930507022597947671_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEFEQV7oYbx-mn2z1lJ8eW2RQklONiFH1tFCSU42IUfW81DZoo-CAWspdakR5y_rSsNdHLlOaBQqKohyYNlYhEc&_nc_ohc=gqGNI_TMuM8Q7kNvgELZx9J&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYA8GoNysPILXaj2THk9q_D13GtHNSEycjOqWe-J2n2BgQ&oe=66E20B38","https://scontent.fcgy2-3.fna.fbcdn.net/v/t39.30808-6/440273388_410374545147674_486714210427363307_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG5srlxSWZF_Undr7ny6X5sKdW5YVACotsp1blhUAKi20i98Bq6WLw9eqOewWQIOTAkAWgH1PvNhFIbsImpiKBp&_nc_ohc=TApHvM3S-jcQ7kNvgECArS6&_nc_ht=scontent.fcgy2-3.fna&oh=00_AYCal088QpvFm2lIRNGnmpLrdui9CXl7tx97X80arktyeA&oe=66E1FD05","https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/439856853_410372868481175_8730754209956862335_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH3Bq0MNgwjx_HofvMWXIJkWKIiCnOTbxNYoiIKc5NvE5wB1puIBnjkgK2jsq0DqJDQITLh8ucF31UbaF5flPBu&_nc_ohc=QeuAfWy-ANoQ7kNvgFix0iG&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYBmWCY62uZwyh55bd_OumJi9XsV7Ys1PXcu0xdIt5bW2g&oe=66E2309C","https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/431758649_378134905038305_4756486122254627527_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG77smZl6rZLE9VBsskvRp7BEMrlXN5_aUEQyuVc3n9pUeKfTs_LqnH_FrA7-WxoIxpMhUVdO6XHZadlAKJiTUY&_nc_ohc=x35YAtQN1ggQ7kNvgHRiP8l&_nc_ht=scontent.fcgy2-2.fna&oh=00_AYCw6Nla38bjGXSdylHRZPxU1jopII2zALF48X5vNIuG9w&oe=66E215E3","https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/431755409_378134571705005_9181345535272437624_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG73uUyS6E7c8tbguu1iPPzS08LdGlbkXJLTwt0aVuRcomEmK2YiOwxLh2kyPV04pyB80__2pbKEseLlTdIkAMu&_nc_ohc=VcfRyLvEjn4Q7kNvgEsK962&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=AkAtata4rG0dsYjOVM2CJW8&oh=00_AYChOHXWQIsHxzSK0Izo5Enyvz3bJmJ127XF2oOOeZhSqQ&oe=66E21014","https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/440084372_410371715147957_4347153217508736317_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE0otvbMjyWF3F6Xwx5iz00sa1BhDCvHMaxrUGEMK8cxiJQMeMi4EyF3Wt7lyj1tJGQSHbATGdZYL76e8lfJLvD&_nc_ohc=-K321PGac6wQ7kNvgGM_y2N&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYA70-PfNhTDTo7V-madnnpcqlupOQ1uRGkabGSgG4iDLQ&oe=66E2206E", "https://scontent.fcgy2-3.fna.fbcdn.net/v/t39.30808-6/403765719_310414678476995_2272826354400507835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGumFyeKIZ50_o70uGtZjNimqbNHcHmWD6aps0dweZYPovy2ccFuLPX-Bz3NSaBq6na7FWQHzWhbyUNTT__ptHG&_nc_ohc=1ZQZcLws_9sQ7kNvgGE2DBs&_nc_ht=scontent.fcgy2-3.fna&_nc_gid=AYA6RkkjXoBy_DQsopgl6u4&oh=00_AYBBd18p6wTgfBJwoo389aOC5oOC44DCruF9coxwtU6bJA&oe=66E230BE", "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/399693175_310414631810333_873190127580113335_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFQLbK2X26DfFuac2QeqLHoS7zpxAWj1PBLvOnEBaPU8JsNhQQ1c26x70aYxr9YFrZiUQHlXKxQKO_6JvQtVN_d&_nc_ohc=k56T8_ANPqYQ7kNvgF_LCTQ&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=AAuylWHZ4faoIw8xe-5bwCE&oh=00_AYB_7OOTgdClbNjsVNZbTe57Db6lrb4NeEsZHWujTGxi5Q&oe=66E2205E", "https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/399690610_310357305149399_4377132435773178339_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF2eYkOiiYATw1k7kJ4Kt35Boar_QulxbsGhqv9C6XFuxNRZpIbuyuu1fx3Nw3Gpm3kg0pybuS5rS-sXVOJDhKf&_nc_ohc=noZYecajsJEQ7kNvgFdiwYj&_nc_ht=scontent.fcgy2-4.fna&_nc_gid=Aa6zTd8uG-Aak4LfmCrGPc1&oh=00_AYCSRG_VusqFYMRWqtHUaPjdK-x9zXbywjcpw7TKyzKygA&oe=66E2186D","https://scontent.fcgy2-4.fna.fbcdn.net/v/t39.30808-6/399766017_310357081816088_1822715666960902204_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGOulxwZ5T9jlqURgljfrqCxx12C5WAlfrHHXYLlYCV-gDlkH7LGpU0brjuP1Q6uwx5LiuF1wyaLrYaohTwkL98&_nc_ohc=kqm-CaP-Em4Q7kNvgGy48H0&_nc_ht=scontent.fcgy2-4.fna&oh=00_AYAN5PMyTCmOVs97Pu3jtjWxJuwwXVk7hGYUxHVIVgMLTQ&oe=66E21007","https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/401605667_310356815149448_8165351381538387815_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGTV1vG4I7-w0EJt998f6faERggfI2rj0ERGCB8jauPQVrM8TJYQlfqe0yiUqkb48C3Cx6TvEm5f_izIM8Rg1Ug&_nc_ohc=IcgtU3ZFvLgQ7kNvgH2Lugx&_nc_ht=scontent.fcgy2-2.fna&_nc_gid=A-A2s4cdTFBsNJ4UtGwedDi&oh=00_AYBNQee1Zp8wc8UoksZHKq_jK3A6XkTkXckdQfGUUdwvhw&oe=66E21FED"
    // add other photo URLs
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <Container className="about-container">
      <Card className="about-card shadow-lg">
        <Card.Body>
          <Card.Title className="about-card-title">About PSITS</Card.Title>
          <Card.Text className="about-card-text">
            The Philippine Society of Information Technology Students (PSITS) is a student-led organization that unites IT students across various universities. Our mission is to foster a collaborative learning environment that encourages the sharing of knowledge, skills, and experiences among aspiring IT professionals.
          </Card.Text>
          <Card.Text className="about-card-text">
            At PSITS, we are committed to enhancing the professional growth of our members through workshops, seminars, and community-building activities. Our goal is to prepare students for the challenges of the tech industry by providing opportunities for hands-on experience and networking.
          </Card.Text>
        {/* Video Section */}
        <Row className="video-section">
          <Col>
            <h2 className="section-title">Watch Our Promotional Video</h2>
            <div className="video-container">
              <iframe
                className="about-video"
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Ffb.watch%2FuiJ613Cmxq%2F&show_text=false"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          </Col>
        </Row>

          {/* Achievements Section */}
          <Row className="achievements-section">
            <Col>
              <h2 className="section-title">Our Achievements</h2>
              <ListGroup>
                <ListGroup.Item>Won Best Student Organization Award in 2023</ListGroup.Item>
                <ListGroup.Item>Organized the largest hackathon in the region with over 500 participants</ListGroup.Item>
                <ListGroup.Item>Launched a successful coding bootcamp series with industry experts</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          {/* Timeline Section */}
          <Row className="timeline-section">
            <Col>
              <h2 className="section-title">Our Journey</h2>
              <ul className="timeline">
                <li>
                  <span className="timeline-date">2015</span>
                  <span className="timeline-text">PSITS was founded with the mission to unite IT students nationwide.</span>
                </li>
                <li>
                  <span className="timeline-date">2018</span>
                  <span className="timeline-text">Hosted the first intercollegiate coding competition.</span>
                </li>
                <li>
                  <span className="timeline-date">2021</span>
                  <span className="timeline-text">Expanded membership to over 1,000 students across 30 universities.</span>
                </li>
                <li>
                  <span className="timeline-date">2023</span>
                  <span className="timeline-text">Launched the "Code for Change" initiative, promoting tech solutions for social good.</span>
                </li>
              </ul>
            </Col>
          </Row>

          {/* Photo Gallery Section with Lightbox */}
          <Row className="photo-gallery-section">
            <Col>
              <h2 className="section-title">Photo Gallery</h2>
              <div className="photo-gallery">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Event ${index}`}
                    className="gallery-photo"
                    onClick={() => openLightbox(index)}
                  />
                ))}
              </div>
              {
  isOpen && (
    <Lightbox
      mainSrc={photos[photoIndex]}
      nextSrc={photos[(photoIndex + 1) % photos.length]}
      prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
      onCloseRequest={() => setIsOpen(false)}
      onMovePrevRequest={() =>
        setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
      }
      onMoveNextRequest={() =>
        setPhotoIndex((photoIndex + 1) % photos.length)
      }
    />
  )
}

            </Col>
          </Row>

          {/* Call-to-Action Section */}
          <Row className="call-to-action-section">
            <Col>
              <h2 className="section-title">Get Involved</h2>
              <p className="section-text">
                Ready to join a thriving community of future IT leaders? Sign up today and start your journey with PSITS!
              </p>
              <Button variant="primary" href="https://ndkc.edu.ph/" className="cta-button">Join Now</Button>
            </Col>
          </Row>

          {/* Mission Section */}
          <Row className="info-section">
            <Col>
              <h2 className="section-title">Mission</h2>
              <p className="section-text">
                To provide a platform for IT students to learn, innovate, and collaborate, thereby fostering the development of competent and ethical IT professionals.
              </p>
            </Col>
          </Row>

          {/* Vision Section */}
          <Row className="info-section">
            <Col>
              <h2 className="section-title">Vision</h2>
              <p className="section-text">
                To be the leading organization that shapes future IT professionals by equipping them with essential skills and knowledge to thrive in a fast-evolving digital world.
              </p>
            </Col>
          </Row>

          {/* Objectives Section */}
          <Row className="info-section">
            <Col>
              <h2 className="section-title">Objectives</h2>
              <ListGroup className="objectives-list">
                <ListGroup.Item>Promote collaboration and knowledge-sharing among IT students.</ListGroup.Item>
                <ListGroup.Item>Organize events, workshops, and seminars to enhance technical skills.</ListGroup.Item>
                <ListGroup.Item>Build a network of future IT professionals and industry leaders.</ListGroup.Item>
                <ListGroup.Item>Encourage ethical practices and professional growth.</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          {/* Activities Section */}
          <Row className="info-section">
            <Col>
              <h2 className="section-title">Activities</h2>
              <p className="section-text">
                PSITS organizes a variety of events such as coding bootcamps, hackathons, tech talks, and career fairs to provide members with practical experience and industry insights.
              </p>
            </Col>
          </Row>

          {/* Membership Section */}
          <Row className="info-section">
            <Col>
              <h2 className="section-title">Membership</h2>
              <p className="section-text">
                Interested in joining PSITS? Membership is open to all IT students. Become a part of a community that supports growth, innovation, and collaboration.
              </p>
            </Col>
          </Row>

          {/* Contact Us Section */}
          <Row className="info-section">
            <Col>
              <h2 className="section-title">Contact Us</h2>
              <p className="section-text">Facebook: ndkc-psits</p>
              <p className="section-text">Follow us on social media for the latest updates and events!</p>
            </Col>
          </Row>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;
