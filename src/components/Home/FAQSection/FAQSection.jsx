import { forwardRef, useState } from 'react';
import {
    Box,
    Typography,
    Collapse,
    IconButton,
    Divider,
    useTheme,
    styled,
    Paper,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqs } from './faqData';
import { ChatIcon } from "../../common/SvgIcons/ChatIcon.jsx";

const FAQContainer = styled(Paper)(({ theme }) => ({
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: theme.spacing(3),
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        borderRadius: 12,
    },
}));

const QuestionItem = styled(Box)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
        borderBottom: 'none',
    },
}));

const QuestionHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 0),
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
        borderRadius: 8,
        margin: theme.spacing(0, -1),
        padding: theme.spacing(2, 1),
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1.5, 0),
        '&:hover': {
            margin: theme.spacing(0, -0.5),
            padding: theme.spacing(1.5, 0.5),
        },
    },
}));

const QuestionNumber = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: '1rem',
    minWidth: '24px',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
        minWidth: '20px',
        marginRight: theme.spacing(1.5),
    },
}));

const QuestionText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: '1rem',
    flex: 1,
    lineHeight: 1.5,
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
        lineHeight: 1.4,
    },
}));

const ExpandIcon = styled(IconButton)(({ theme, expanded }) => ({
    color: theme.palette.primary.main,
    transition: 'transform 0.3s ease',
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
    padding: theme.spacing(0.5),
    '&:hover': {
        backgroundColor: `${theme.palette.primary.main}10`,
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.25),
        '& .MuiSvgIcon-root': {
            fontSize: '1.25rem',
        },
    },
}));

const AnswerContainer = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(3.5),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1.5),
    },
}));

const AnswerText = styled(Typography)(({ theme }) => ({
    color: '#4a5568',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.85rem',
        lineHeight: 1.5,
    },
}));

const AnswerList = styled(Box)(({ theme }) => ({
    '& > div': {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: theme.spacing(1),
        '&:last-child': {
            marginBottom: 0,
        },
    },
    '& .bullet': {
        width: 4,
        height: 4,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1.5),
        flexShrink: 0,
    },
    [theme.breakpoints.down('sm')]: {
        '& .bullet': {
            marginTop: theme.spacing(0.75),
            marginRight: theme.spacing(1),
        },
    },
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        gap: theme.spacing(1.5),
        marginBottom: theme.spacing(3),
        justifyContent: 'center',
    },
}));

const FAQSection = forwardRef((props, ref) => {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(null);

    const handleToggle = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    return (
        <Box
            ref={ref}
            sx={{
                my: { xs: 6, sm: 8, md: 10 },
                px: { xs: 2, sm: 3, md: 4, lg: 6 },
                width: '100%',
                maxWidth: '800px',
                mx: 'auto',
            }}
            {...props}
        >
            <HeaderContainer sx={{  justifyContent: 'center' }}>
                <ChatIcon 
                    sx={{ 
                        fontSize: { xs: '1.5rem', sm: '2rem' }, 
                        color: theme.palette.text.secondary,
                    }} 
                />
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 500,
                        fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                        color: theme.palette.text.primary,
                        letterSpacing: '-0.01em',
                    }}
                >
                    Preguntas frecuentes
                </Typography>
            </HeaderContainer>

            <FAQContainer elevation={0}>
                {faqs.map((faq, index) => (
                    <QuestionItem key={index}>
                        <QuestionHeader 
                            onClick={() => handleToggle(index)}
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleToggle(index);
                                }
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                              
                                <QuestionText>
                                    {faq.question}
                                </QuestionText>
                            </Box>
                            <ExpandIcon expanded={expanded === index}>
                                <ExpandMoreIcon />
                            </ExpandIcon>
                        </QuestionHeader>
                        
                        <Collapse 
                            in={expanded === index} 
                            timeout={300}
                            unmountOnExit
                        >
                            <AnswerContainer>
                                {Array.isArray(faq.answer) ? (
                                    <AnswerList>
                                        {faq.answer.map((item, i) => (
                                            <Box key={i}>
                                                <Box className="bullet" />
                                                <AnswerText>
                                                    {item}
                                                </AnswerText>
                                            </Box>
                                        ))}
                                    </AnswerList>
                                ) : (
                                    <AnswerText>
                                        {faq.answer}
                                    </AnswerText>
                                )}
                            </AnswerContainer>
                        </Collapse>
                    </QuestionItem>
                ))}
            </FAQContainer>
        </Box>
    );
});

export default FAQSection;