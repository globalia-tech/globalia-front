import { forwardRef, useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    useTheme,
    styled,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from './faqData';
import { ChatIcon } from "../../common/SvgIcons/ChatIcon.jsx";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    margin: theme.spacing(1, 0),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)', // Sombra más pronunciada
    borderRadius: theme.shape.borderRadius,
    '&.Mui-expanded': {
        margin: theme.spacing(2, 0), // Más espacio cuando está expandido
    },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    '&.Mui-expanded': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.primary.main,
    },
    '& .MuiTypography-root': {
        fontWeight: 600,
    },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    borderTop: `1px solid ${theme.palette.divider}`,
}));

const FAQSection = forwardRef((props, ref) => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };

    return (
        <Box
            ref={ref}
            sx={{
                my: 10, // Aumenté el margen vertical para más espacio
                px: { xs: 3, sm: 5, md: 7 }, // Aumenté el padding horizontal
                color: 'text.primary',
            }}
            {...props}
        >
            <Typography
                variant="h3"
                component="div"
                gutterBottom
                sx={{
                    mt: -18,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    justifyContent: 'center',
                    mb: 6,
                    fontWeight: 600,
                    fontSize: { xs: '1.5rem', md: '2rem' },

                    letterSpacing: '0.01em',
                }}
            >
                <ChatIcon sx={{ fontSize: '3rem', color: theme.palette.secondary.main }} /> {/* Ícono más grande y color secundario */}
                Preguntas frecuentes
            </Typography>

            <Paper elevation={3} sx={{ borderRadius: theme.shape.borderRadius, overflow: 'hidden' }}> {/* Contenedor con elevación */}
                {faqs.map((faq, index) => (
                    <StyledAccordion
                        key={index}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <StyledAccordionSummary
                            expandIcon={<ExpandMoreIcon />} // El color del icono se maneja en StyledAccordionSummary
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography variant="h6">
                                {faq.question}
                            </Typography>
                        </StyledAccordionSummary>
                        <StyledAccordionDetails>
                            {Array.isArray(faq.answer) ? (
                                <List>
                                    {faq.answer.map((item, i) => (
                                        <ListItem key={i} disablePadding>
                                            <ListItemText primary={`\u2022 ${item}`} />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <Typography>{faq.answer}</Typography>
                            )}
                        </StyledAccordionDetails>
                    </StyledAccordion>
                ))}
            </Paper>
        </Box>
    );
});

export default FAQSection;