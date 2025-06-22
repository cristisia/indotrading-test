import React from "react";
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import data from '../data/item.json'
import '../styles/homePageCarousel.css'

export default function HomePage () {
    const images = [
        {
            src: '/homepage-discount/modern-furniture-just-in-four.png',
            alt: 'Modern Furniture Just In FOUR'
        },
        {
            src: '/homepage-discount/single-bed-sale-30-off.png',
            alt: 'Single Bed Sale 30% Off'
        },
        {
            src: '/homepage-discount/buy-membership.png',
            alt: 'Buy Membership'
        }
    ];
    
    return (
        <div>
            <div className="homepage-discount">
                <Carousel fade interval={5000} controls={false} indicators={false} pause={false} wrap={true}>
                    {images.map((image, index) => (
                        <Carousel.Item key={index}>
                            <div className="image-wrapper">
                                <img src={image.src} alt={image.alt} className="animated-image" />
                            </div>
                        </Carousel.Item>
                        ))
                    }
                </Carousel>
            </div>

            <div className="homepage-products mt-5">
                <Container className="mt-4">
                    {data.map((entry, index) => (
                        <div key={index} style={{
                                border: '2px solid #ddd',
                                borderRadius: '10px',
                                padding: '30px',
                                marginBottom: '40px',
                                backgroundColor: '#fff',
                                boxShadow: '0px 3px 8px 0px rgba(0, 0, 0, 0.3)'
                            }}>
                            <Row key={index}>
                                {/* Produk */}
                                {entry.products.map((product) => (
                                    <Col key={product.id} md={3}>
                                        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Card onClick={() => {}} 
                                                style={{ transform: 'scale(0.95)', transition: 'transform 0.3s ease-in-out', cursor: 'pointer' }}
                                                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1)')}
                                                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(0.95)')}>
                                                <div style={{ overflow: "hidden", borderBottom: "2px solid #ccc" }}>
                                                    <Card.Img variant="top" src={product.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                                </div>
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>{product.description}</Card.Text>
                                                    <Card.Text style={{ fontSize: "0.9rem", fontWeight: "bold" }}>{product.price}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </a>
                                    </Col>
                                    ))
                                }

                                {/* Kategori */}
                                <Col md={3}>
                                    <div style={{ height: "100%", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                                        <Card style={{ position: 'relative', height: '100%', color: 'white', overflow: 'hidden' }}>
                                            <Card.Img src={entry.categoryImage} alt={entry.category}
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                                opacity: 0.7,
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                zIndex: 1
                                            }}/>
                                            <Card.ImgOverlay
                                            style={{
                                                zIndex: 2,
                                                position: 'relative',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: '100%',
                                                textAlign: 'center'
                                            }}>
                                                <div style={{ padding: '10px 20px', borderRadius: '8px' }}>
                                                    <Card.Title style={{ margin: 0, fontSize: '1.5rem', color: "black" }}>{entry.category}</Card.Title>
                                                </div>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        ))
                    }
                </Container>
            </div>
        </div>
    )
}