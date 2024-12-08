import { Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import "../App.css"

const totalReviews = 2;

const increment = (current, limit) => {
    return (current >= limit) ? 0 : current + 1;
};

const decrement = (current, limit) => {
    return (current <= 0) ? limit : current - 1;
};

const reviewImage = review => {
    return `./Images/review${review}.jpg`
};

const reviewSpotId = currentReview => {
    return `reviewSpot${currentReview}`
}

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const [animation, setAnimation] = useState("none");
    const [transform, setTransform] = useState("translateX(-33.33%)");
    const [isNext, setIsNext] = useState(true);

    const galleryRef = useRef(null);
    useEffect(() => {
        const gallery = galleryRef.current;
        if (gallery) {
            gallery.addEventListener("animationend", endAnimating);
        }
        return () => {
            if (gallery) {
                gallery.removeEventListener("animationend", endAnimating);
            }
        };
    });

    const startAnimating = next => {
        setIsNext(next);
        setAnimation(`slide${next ? "Left" : "Right"} 4s ease-in-out`);
    };

    const endAnimating = () => {
        setCurrentReview(isNext
            ? increment(currentReview, totalReviews)
            : decrement(currentReview, totalReviews));
        setTransform("translateX(-33.33%)");
    };


    return (
        <section style={{ position: "absolute", width: "100%", overflow: "clip" }}>
            <Stack direction="row" justifyContent="space-between" sx={{
                top: "50%",
                transform: "translateY(-50%)",
                position: "absolute",
                width: "100%",
                zIndex: 1
            }}>
                <Typography onClick={() => startAnimating(false)} sx={{
                    padding: "2rem",
                    fontSize: "5rem",
                    color: "red",
                    fontWeight: "bold"
                }}>
                    {"<"}
                </Typography>
                <Typography onClick={() => startAnimating(true)} sx={{
                    padding: "2rem",
                    fontSize: "5rem",
                    color: "red",
                    fontWeight: "bold"
                }}>
                    {">"}
                </Typography>
            </Stack>
            <Stack direction={"row"} ref={galleryRef} sx={{
                width: "300%",
                transform: transform,
                animation: animation
            }}>
                <img
                    src={reviewImage(decrement(currentReview, totalReviews))}
                    id={reviewSpotId(0)}
                    style={{ width: "100%" }}
                />
                <img
                    src={reviewImage(currentReview)}
                    id={reviewSpotId(1)}
                    style={{ width: "100%" }}
                />
                <img
                    src={reviewImage(increment(currentReview, totalReviews))}
                    id={reviewSpotId(2)}
                    style={{ width: "100%" }}
                />
            </Stack>
        </section>
    );
};

export default Reviews;
