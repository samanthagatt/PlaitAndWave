import { Stack, Typography } from "@mui/material";
import { accentBackgroundColor, lightBackgroundColor } from "../theme";

const servicesData = [
    {
        image: "",
        title: "HAIRCUTS",
        price: 80,
        description: "reshaping, texture cut, shag razor cuts"
    },
    {
        image: "",
        title: "CUSTOM COLOR",
        price: 280,
        description: "lived in color, dimensional, balayage, foilayage"
    },
    {
        image: "",
        title: "GREY COVERAGE",
        price: 165,
        description: "permanent color, deposit only, haircut included"
    }
];

const Service = ({ data }) =>
    <Stack sx={{
        backgroundColor: lightBackgroundColor,
        padding: "1rem",
        margin: "1rem"
    }}>
        {/* image */}
        <Typography>{data.title}</Typography>
        <Typography>${data.price}+</Typography>
        <Typography>{data.description}</Typography>
    </Stack>;

const Services = () =>
    <Stack component="section"  alignItems="center" sx={{ 
        paddingTop: "2rem",
        paddingBottom: "3rem",
        backgroundColor: accentBackgroundColor 
    }}>
        <Typography variant="sectionTitle">SERVICES</Typography>
        <Stack direction="row">
            {servicesData.map(data => <Service data={data} />)}
        </Stack>
    </Stack>;

export default Services;
