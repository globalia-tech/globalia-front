import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, FormHelperText, Box } from '@mui/material';

const ContactFormField = ({ 
    type = 'text', 
    name, 
    label, 
    placeholder, 
    value, 
    onChange, 
    error, 
    required = false, 
    multiline = false, 
    rows = 1,
    options = [],
    ...props 
}) => {
    const handleChange = (event) => {
        onChange(name, event.target.value);
    };

    // Agregar asterisco para campos requeridos
    const displayLabel = required ? `${label} *` : label;

    if (type === 'select') {
        return (
            <FormControl 
                fullWidth 
                error={!!error} 
                required={required}
                variant="outlined"
                sx={{
                    '& .MuiInputLabel-root': {
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 500,
                        color: '#333',
                        transform: 'translate(14px, -9px) scale(0.75)',
                        '&.Mui-focused': {
                            color: 'primary.main',
                        },
                        '&.MuiInputLabel-shrink': {
                            transform: 'translate(14px, -9px) scale(0.75)',
                        }
                    },
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: '#fff',
                        minHeight: 44,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        '& fieldset': {
                            borderWidth: '2px',
                            borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                            borderColor: 'primary.main',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                        }
                    },
                    '& .MuiSelect-select': {
                        paddingTop: '14px',
                        paddingBottom: '14px',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        '&.MuiSelect-select:focus': {
                            backgroundColor: 'transparent',
                        }
                    }
                }}
            >
                <InputLabel 
                    id={`${name}-label`}
                    shrink={true}
                >
                    {displayLabel}
                </InputLabel>
                <Select
                    labelId={`${name}-label`}
                    value={value || ''}
                    onChange={handleChange}
                    label={displayLabel}
                    displayEmpty
                    renderValue={(selected) => {
                        if (!selected || selected === '') {
                            return <span style={{ color: '#999', fontStyle: 'italic' }}>{placeholder}</span>;
                        }
                        // Buscar el label del valor seleccionado
                        const selectedOption = options.find(option => option.value === selected);
                        return selectedOption ? selectedOption.label : selected;
                    }}
                    {...props}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value} sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, minHeight: 44 }}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        );
    }

    return (
        <TextField
            fullWidth
            name={name}
            label={displayLabel}
            placeholder={placeholder}
            value={value || ''}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            required={required}
            multiline={multiline}
            rows={multiline ? rows : undefined}
            type={type}
            variant="outlined"
            InputLabelProps={{
                shrink: true,
                sx: {
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 500,
                    color: '#333',
                    '&.Mui-focused': {
                        color: 'primary.main',
                    }
                }
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    backgroundColor: '#fff',
                    minHeight: 44,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    '& fieldset': {
                        borderWidth: '2px',
                        borderColor: '#e0e0e0',
                    },
                    '&:hover fieldset': {
                        borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                    }
                },
                '& .MuiInputBase-input': {
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    padding: '14px',
                    '&::placeholder': {
                        color: '#999',
                        opacity: 0.8,
                    }
                }
            }}
            {...props}
        />
    );
};

export default ContactFormField;