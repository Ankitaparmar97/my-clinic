import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

function Example() {
    const items: CarouselItem[] = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image: "homeImage2.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            image: "homeImage.jpg"
        }
    ];

    return (
        <Carousel>
            {items.map((item: CarouselItem, i: React.Key | null | undefined) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

type CarouselItem = {
    name: string;
    description: string;
    image: string;
};

function Item({ item }: { item: CarouselItem }) {
    return (
        <Paper style={{ padding: 20, textAlign: 'center' }}>
            <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <Button variant="contained" color="primary">
                Check it out!
            </Button>
        </Paper>
    );
}

export default Example;
