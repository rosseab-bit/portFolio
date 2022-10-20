import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';

const MyContact = () => {
    const redirectUrls = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
        return null;
    }
    const mailContact = (mailto) => {
        window.location.replace(mailto);
        return null;
    }
    return (
        <>
            <div style={{
                'display': 'flex',
                'flex-direction': 'column',
                'justify-content': 'space-around',
                'align-items': 'center',
                'color': 'white',
                'margin-top':'10%',
            }}>
                
                    <IconButton
                        onClick={() => redirectUrls('https://www.linkedin.com/in/roseabdev/')}
                        color="primary"
                        component="label"
                    >
                        <LinkedInIcon sx={{ fontSize: 60, color:'#0077B5' }} />
                    </IconButton>
                    <p>LinkedIn</p>
                    <IconButton
                        onClick={() => mailContact('mailto:r.j.abrahambenitez@gmail.com')}
                        color="primary"
                        component="label"
                    >
                        <MailOutlineIcon sx={{ fontSize: 60, color:'#EA4335' }} />
                    </IconButton>
                    <p>Gmail: r.j.abrahambenitez@gmail.com</p>
                    <IconButton
                        onClick={() => redirectUrls('https://wa.me/5491133476418')}
                        color="primary"
                        component="label"
                    >
                       <WhatsAppIcon sx={{ fontSize: 60, color:'#25D366' }} />
                    </IconButton>
                    <p>Whatsapp: 1133476418</p>
            </div>
        </>
    );
}
export default MyContact;