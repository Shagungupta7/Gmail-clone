import { Close, DeleteOutline } from "@mui/icons-material";
import { Dialog, Box, Typography, styled, InputBase, TextField, Button } from "@mui/material";
import { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const dialogStyle = {
    height: '90%',
    width: '80%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: '10px 10px 0 0',
}

const Header = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    background: '#f2f6fc',
    '& > p': {
        fontSize: 14,
        fontWeight: 500,
    }
});

const RecipientsWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    '& > div': {
        fontSize: 14,
        borderBottom: '2px solid #f5f5f5',
        marginTop: 10,
    }
})

const Footer = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 15px',
    textAlign: 'center',
})

const SendButton = styled(Button)({
    background: '#0b57db',
    color: '#fff',
    fontWeight: 500,
    borderRadius: 25,
    textTransform: 'none',
    width: 100,
})

const ComposeMail = ({ openDialog, setOpenDialog }) => {
    const [data, setData] = useState({
        to: '',
        Subject: '',
        Body: ''
    });

    const sentEmailService = useApi(API_URLS.saveSentEmail);

    console.log('sentEmailService: ',sentEmailService);

    const config = {
        Host: "smtp.elasticemail.com",
        Username: process.env.REACT_APP_USERNAME,
        Password: process.env.REACT_APP_PASSWORD,
        Port: 2525
    }

    const closeComposeMail = () => {
        setOpenDialog(false);
    }

    const sendMail = async (e) => {
        e.preventDefault();

        if (window.Email) {
            console.log('Sending email with the following data:', data);
            window.Email.send({
                ...config,
                To: data.to,
                From: "shagungupta0307@gmail.com",
                Subject: data.Subject,
                Body: data.Body
            }).then(
                message => {
                    console.log('Email sent successfully:', message);
                    alert('Email sent successfully');
                }
            ).catch(
                error => {
                    console.error('Failed to send email:', error);
                    alert('Failed to send email: ' + error.message);
                }
            );
        } else {
            alert("Email service is not available.");
            console.error("Email service is not available.");
        }

        const payload = {
            to: data.to,
            from: 'shagungupta0307@gmail.com',
            Subject: data.Subject,
            body: data.Body,
            date: new Date(),
            image: '',
            name: 'Shagun',
            starred: false,
            type: 'sent',
        }

        console.log('Payload to API:', payload);

        await sentEmailService.call(payload);

        if(!sentEmailService.error){
            setOpenDialog(false);
            setData({});
        }else{
            console.error('Error sending email:', sentEmailService.error);
            alert('Error sending email: ' + sentEmailService.error);
        }

        setOpenDialog(false);
    }

    const onValueChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <Dialog
            open={openDialog}
            PaperProps={{ sx: dialogStyle }}>
            <Header>
                <Typography>New Message</Typography>
                <Close fontSize="small" onClick={closeComposeMail} />
            </Header>
            <RecipientsWrapper>
                <InputBase
                    placeholder="Recipients"
                    name="to"
                    onChange={onValueChange}
                    value={data.to}
                />
                <InputBase
                    placeholder="Subject"
                    name="Subject"
                    onChange={onValueChange}
                    value={data.Subject}
                />
            </RecipientsWrapper>
            <TextField
                multiline
                rows={18}
                sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
                name="Body"
                onChange={onValueChange}
                value={data.Body}
            />
            <Footer>
                <SendButton onClick={sendMail}>Send</SendButton>
                <DeleteOutline onClick={closeComposeMail} />
            </Footer>
        </Dialog>
    )
}

export default ComposeMail;
