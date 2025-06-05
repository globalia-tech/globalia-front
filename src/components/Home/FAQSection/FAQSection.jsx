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
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    borderRadius: theme.shape.borderRadius,
    '&.Mui-expanded': {
        margin: theme.spacing(2, 0),
    },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minHeight: 56,
    '&.Mui-expanded': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
    },
    '& .MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.primary.main,
    },
    '& .MuiTypography-root': {
        fontWeight: 600,
        fontSize: { xs: '1rem', md: '1.15rem' }
    },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
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
                my: { xs: 6, md: 10 },
                px: { xs: 1, sm: 3, md: 7 },
                color: 'text.primary',
                width: '100%',
                maxWidth: '1200px',
                mx: 'auto'
            }}
            {...props}
        >
            <Typography
                variant="h3"
                component="div"
                gutterBottom
                sx={{
                    mt: { xs: -8, md: -18 },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    justifyContent: 'center',
                    mb: 6,
                    fontWeight: 600,
                    fontSize: { xs: '1.2rem', md: '2rem' },
                    letterSpacing: '0.01em',
                }}
            >
                <ChatIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: theme.palette.secondary.main }} />
                Preguntas frecuentes
            </Typography>

            <Paper elevation={3} sx={{ borderRadius: theme.shape.borderRadius, overflow: 'hidden' }}>
                {faqs.map((faq, index) => (
                    <StyledAccordion
                        key={index}
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                    >
                        <StyledAccordionSummary
                            expandIcon={<ExpandMoreIcon />}
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