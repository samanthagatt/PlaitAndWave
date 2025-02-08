import { Stack, Typography } from "@mui/material";
import { accentBackgroundColor, lightBackgroundColor } from "../theme";

const servicesData = [
    {
        image: "./Images/haircuts.jpg",
        title: "HAIRCUTS",
        price: 80,
        description: "reshaping, texture cut, shag razor cuts"
    },
    {
        image: "./Images/customColor.png",
        title: "CUSTOM COLOR",
        price: 280,
        description: "lived in color, dimensional, balayage, foilayage"
    },
    {
        image: "./Images/greyCoverage.png",
        title: "GREY COVERAGE",
        price: 165,
        description: "permanent color, deposit only, haircut included"
    }
];

const Service = ({ data }) => (
    <Stack alignItems="center" sx={{
        backgroundColor: lightBackgroundColor,
        padding: "0.65rem",
        width: "17.25rem"
    }}>
        <img src={data.image} style={{
            width: "100%",
            height: "auto",
            paddingBottom: "2.25rem"
        }} />
        <Typography variant="servicesTitle" sx={{
            textAlign: "center",
            paddingBottom: "1.75rem"
        }}>
            {data.title}
        </Typography>
        <Typography variant="servicesPrice" sx={{
            textAlign: "center",
            paddingBottom: "2rem"
        }}>
            ${data.price}+
        </Typography>
        <Typography variant="servicesDetails" sx={{
            textAlign: "center",
            padding: "0rem 2.5rem",
            paddingBottom: "1.75rem"
        }}>
            {data.description}
        </Typography>
    </Stack>
);

const Services = () => (
    <Stack component="section" spacing="2.5rem" alignItems="center" sx={{ 
        paddingTop: "1.75rem",
        paddingBottom: "4.5rem",
        backgroundColor: accentBackgroundColor 
    }}>
        <Typography variant="sectionTitle">SERVICES</Typography>
        <Stack direction="row" spacing="1rem">
            {servicesData.map((data, i) => <Service key={i} data={data} />)}
        </Stack>
    </Stack>
);

export default Services;
