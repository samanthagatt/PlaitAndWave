import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

const reviews = [
    {
        imgSrc: "./Images/review0.jpg", 
        description: "I got my hair done with Stevie and the outcome was absolutely perfection!! I told her my hair “concerns” since I wear my hair pulled back and low maintenance. I recommend everyone to go see her for all your hair needs! The location of the salon is amazing, and the salon is clean and beautiful!",
        author: "Francesca"
    },
    {
        imgSrc: "./Images/review1.jpg", 
        description: "Cori is incredible! This is the most I have ever loved my hair color! She does an amazing job. If you are considering getting your hair done by her, do it! You won’t regret it!",
        author: "Alison"
    },
    {
        imgSrc: "./Images/review2.jpg", 
        description: "Love, love Plait + Wave, Stevie is a great hairstylist. You feel so relaxed there such a causing vibe. Love my new haircut.",
        author: "Susan"
    }
];

const reviewHeight = "31.2rem";
const animationDuration = 1;

const Review = ({ index }) => {
    const review = reviews[index];
    return <Stack justifyContent="center" key={index} sx={{ 
        minWidth: "100%",
        height: reviewHeight,
        backgroundImage: `url("${review.imgSrc}")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }}>
        <Stack spacing="2rem" padding="2rem 18rem">
            <Typography variant="reviewDescription">{review.description}</Typography>
            <Typography variant="reviewAuthor">{`| ${review.author} |`}</Typography>
        </Stack>
    </Stack>
};

const Reviews = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNav = (newIndex) => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex(newIndex);
        }
    };

    function isCurrentIndex(reviewIndex) {
        // currentIndex === reviews.length + 1 means it's currently on the first index placeholder
        if (currentIndex > reviews.length) {
            return reviewIndex === 0;
        // currentIndex === 0 means it's currently on the last index placeholder
        } else if (currentIndex <= 0) {
            return reviewIndex === reviews.length - 1;
        // currentIndex is off by one so it can accommodate the placeholder for the last page before the regular pages
        } else {
            return reviewIndex === currentIndex - 1;
        }
    };

    const onAnimationEnd = () => {
        let correctedIndex = currentIndex;
        if (currentIndex <= 0) {
            correctedIndex = reviews.length;
        } else if (currentIndex > reviews.length) {
            correctedIndex = 1;
        }
        setIsAnimating(false);
        setCurrentIndex(correctedIndex);
    };

    return (
        <Box sx={{ 
            width: "100%",
            height: reviewHeight,
            position: "relative",
            overflow: "hidden"
        }}>
            <Stack direction="row" onTransitionEnd={onAnimationEnd} sx={{ 
                transition: isAnimating ? `transform ${animationDuration}s ease` : "", 
                transform: `translateX(-${(currentIndex) * 100}%)`
            }}>
                <Review index={reviews.length - 1} />
                {reviews.map((_, index) => (
                    <Review index={index} />
                ))}
                <Review index={0} />
            </Stack>
            <Typography variant="navArrows" onClick={() => handleNav(currentIndex - 1)} sx={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translateY(-50%)",
                zIndex: 2
            }}>
                {"‹"}
            </Typography>

            <Typography variant="navArrows" onClick={() => handleNav(currentIndex + 1)} sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                zIndex: 2,
            }}>
                {"›"}
            </Typography>

        <Stack direction="row" justifyContent="center" sx={{
            position: "absolute",
            bottom: "0",
            paddingBottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)"
        }}>
            {reviews.map((_, index) => (
                <Box key={index} onClick={() => handleNav(index + 1)} sx={{
                    width: "0.75rem",
                    height: "0.75rem",
                    margin: "0 0.25rem",
                    backgroundColor: isCurrentIndex(index) ? "white" : "rgba(255, 255, 255, 0.5)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    boxShadow: "0px 0px 7px rgba(0,0,0,0.2)"
                }} />
            ))}
        </Stack>
    </Box>
  );
};

export default Reviews;
