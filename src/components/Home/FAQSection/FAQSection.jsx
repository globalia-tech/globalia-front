import { forwardRef } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from './faqData';
import { useTheme } from '@mui/material/styles';

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
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
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