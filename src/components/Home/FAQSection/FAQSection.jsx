import { forwardRef } from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from './faqData';
import { useTheme } from '@mui/material/styles';
import {ChatIcon} from "../../common/SvgIcons/ChatIcon.jsx";

const FAQSection = forwardRef((props, ref) => {
    const theme = useTheme();

    return (
        <Box
            ref={ref}
            sx={{
                my: 8,
                px: { xs: 2, sm: 4, md: 6 },
                color: 'text.primary'
            }}
            {...props}
        >
            <Typography
                variant="h4"
                component="div" // Usamos div para permitir flex
                gutterBottom
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    justifyContent: 'center',
                    mb: 4,
                    color: 'text.primary',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                }}
            >
                <ChatIcon sx={{ fontSize: '2.5rem' }} /> {/* Ajusta tamaño ícono */}
                Preguntas Frecuentes
            </Typography>

            {faqs.map((faq, index) => (
                <Accordion key={index} sx={{ my: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
});

export default FAQSection;