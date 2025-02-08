import { Stack, Typography } from "@mui/material";
import { accentBackgroundColor } from "../theme";

const portfolioData = [
    {
        layout: "even",
        imgs: [
            "./Images/portfolio0.jpg",
            "./Images/portfolio1.jpg",
            "./Images/portfolio2.jpg"
        ]
    },
    {
        layout: "double-right-heavy",
        imgs: [
            "./Images/portfolio3.jpg",
            "./Images/portfolio4.jpg"
        ]
    },
    {
        layout: "even",
        imgs: [
            "./Images/portfolio5.png",
            "./Images/portfolio6.jpg",
            "./Images/portfolio7.jpg"
        ]
    }
];

const GalleryItem = ({ data: { layout, imgs }}) => (
    (layout === "even") ? (
        <Stack direction="row" spacing="0.5rem" justifyContent="space-between">
            {imgs.map((img, i) => (
                <img key={i} src={img} />
            ))}
        </Stack>
    ) : (layout === "double-right-heavy") ? (
        <Stack direction="row" spacing="0.5rem" justifyContent="space-between">
            <img key={0} src={imgs[0]} />
            <img key={1} src={imgs[1]} />
        </Stack>
    ) : <Stack></Stack>
);

const Portfolio = () => (
    <Stack component="section" spacing="2.5rem" alignItems="center" sx={{ 
        paddingTop: "7rem",
        paddingBottom: "4.5rem",
        backgroundColor: accentBackgroundColor 
    }}>
        <Typography variant="sectionTitle">PORTFOLIO</Typography>
        <Stack backgroundColor="white" padding="0.5rem">
            {portfolioData.map((data, i) => <GalleryItem key={i} data={data} />)}
        </Stack>
    </Stack>
);

export default Portfolio;
